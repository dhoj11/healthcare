import React from "react";
import { useEffect, useState } from "react";
import Barcode from "./Barcode";
import style from "./State.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode, faVial, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { changeTestListState, getPateint } from "../../../apis/test";
import { useSelector } from "react-redux";
import { sendMqttMessage } from "../../../apis/message";


function State(props){

  const [barcodeModalOpen, setBarcodeModalOpen] = useState(false);
  const [testList, setTestList] = useState();

  const hospital_code = useSelector(state => state.authReducer.hospital_code);

  const closeBarcodeModal = () => {
    setBarcodeModalOpen(false);
  }
  const printBarcode = () => {
    if(props.testList){
      setBarcodeModalOpen(true);
    }
  }

  useEffect(()=>{
    setTestList(props.testList);
  },[props.testList])

  useEffect(()=>{
    setTestList(props.testList);
  },[props.testList])

  /**
   * 선택한 검사의 검사진행상태를 변경한다.
   */
  const handleChangeSate = async (state) => {
    if(testList){
      try{
        await changeTestListState(testList.test_list_id, testList.reception_id, state)
        props.changeState(testList, state);

        // 예약 페이지 검사 타임 테이블
        await sendMqttMessage({
          topic : "/"+ hospital_code,
          content : "rerender/Appointment_TimeTable_Test"
        })

        // 접수 페이지 예약 테이블
        await sendMqttMessage({
          topic : "/"+ hospital_code,
          content : "rerender/Administration_Appointment"
        })

        // 접수페이지 검사 테이블
        await sendMqttMessage({
          topic : "/"+ hospital_code,
          content : "rerender/Administration_TestList"
        })

        await sendMqttMessage({
          topic : "/"+ hospital_code,
          content : "rerender/Test"
        })

        // 검사완료 alert 보내기
        if(state === "완료"){
          const patient = await getPateint(testList.patient_id);

          await sendMqttMessage({
            topic : "/"+ hospital_code,
            content : "alert/Administration/test/" + patient.data.patient_name + " 환자 검사 완료"
          })

          await sendMqttMessage({
            topic : "/"+ hospital_code,
            content : "rerender/Administration_Appointment"
          })
       }
        
        
      }catch(error){
        console.log(error);
      }
    }
  }

  return(
    <div className={style.state}>
     <div>
        <span className={style.barcode} onClick={printBarcode}>
        <FontAwesomeIcon icon={faBarcode} className={style.Icon}/>바코드 출력</span>
      </div>
      <div>
        <span className={style.ing} onClick={()=>{handleChangeSate("진행")}}>
        <FontAwesomeIcon icon={faVial} className={style.Icon}/>검사진행</span>
        <span className={style.complete} onClick={()=>{handleChangeSate("완료")}}>
        <FontAwesomeIcon icon={faCheckCircle} className={style.Icon}/>검사완료</span>
        <Barcode isOpen={barcodeModalOpen} close={closeBarcodeModal} testList={props.testList}/>
      </div>
    </div>
  );
}

export default React.memo(State);