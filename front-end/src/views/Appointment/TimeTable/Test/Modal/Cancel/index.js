import { useEffect, useState } from "react";
import { Accordion, Button, Card, Collapse } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getTestCodeList,cancelAppointment, testListWait } from "../../../../../../apis/appointment";
import { sendMqttMessage } from "../../../../../../apis/message";
import styles from "./index.module.css";
import TestList from "./TestList";

/*
  Title : Appointment_TimeTable_Test_Modal_Cacel
  Description : 1. 검사 예약 취소를 할 수 있는 모달창(예약되어 있는 셀 클릭시)
                2. 예약되어 있는 검사항목(TestList) 보여줌

  Date : 2021-07-10
  Author : 조운호
*/
function Cancel(props) {
  const {clickedAppointment, CancelModalClose} = props;
  const [testCodeList,setTestCodeList] = useState([]);
  const hospital_code = useSelector(state => state.authReducer.hospital_code);
  //예약번호로 예약되어있는 TestCode 리스트 가져오기
  useEffect(() => {
    (async function() {
      try{
        const response = await getTestCodeList(clickedAppointment.appointment_id);
        setTestCodeList(response.data);
      } catch(error){
        throw error;
      }
    })();
  },[])

  /*
    예약취소
      1. 예약 state 취소
      2. testlist state 대기 
      3. Mqtt 메세지 보내기
  */
  const cancelTestAppointment= () => {
    (async function() {
      try{
        await cancelAppointment(clickedAppointment.appointment_id);
        await testListWait(clickedAppointment.appointment_id);
        CancelModalClose(); 
        await sendMqttMessage({
          topic:"/"+hospital_code,
          content:"rerender/Appointment_TimeTable_Test"
        })
        await sendMqttMessage({
          topic:"/"+hospital_code,
          content:"rerender/Administration_Appointment"
        })
        await sendMqttMessage({
          topic : "/"+hospital_code,
          content : "rerender/Adiministration_TestList"
        })
      } catch(error){
        throw error;
      }
    })();
  }
  return(
    <div className={styles.info}>
      <div className={styles.title}>예약 정보</div>
      <div className ={styles.row}>
        <span>날짜</span> <span>{clickedAppointment.appointment_date}</span>
      </div>
      <div className ={styles.row}>
        <span>시간</span> <span>{(clickedAppointment.appointment_time).substr(0,5)}</span>
      </div>
      <div className ={styles.row}>
        <span>예약 환자</span> <span>{clickedAppointment.patient_name}({clickedAppointment.patient_gender})</span>
      </div>
      <div className ={styles.row}>검사항목</div>
      <div>
        <div className={`d-flex ${styles.tr}`}>
          <div>검사코드</div>
          <div>검사명</div>
          <div>처방코드</div>
          <div>상세검사명</div>
        </div>
        {testCodeList.map((testCode,index) => {
          return(
            <TestList key={index} testCode={testCode}></TestList>
          )
        })}
        
      </div>
      <div className={styles.btn_contain}>
        <button className={styles.prev_btn} onClick={CancelModalClose}>이전</button>
        <button className={styles.cancel_btn} onClick={cancelTestAppointment}>예약 취소</button>
      </div>
    </div>
  );
}
export default Cancel;