import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Save.module.css";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createSetEditBlockActoin } from "../../../../../redux/treatment-reducer";
import { getPatientName, getPrevDoctorName, insertTestList, saveTreatment, updateAppointmentAndReceptionState } from "../../../../../apis/treatment";
import { sendMqttMessage } from "../../../../../apis/message";

/**
 * 진료페이지의 각 입력내용은 redux 스토어의 상태 변수로 관리된다.
 */

function Save(props){

  const treatment = useSelector(state => state.treatmentReducer.treatment);

  const curRecord = useSelector(state => state.treatmentReducer.curRecord);
  const curComment = useSelector(state => state.treatmentReducer.curComment);
  const curDiagnoses = useSelector(state => state.treatmentReducer.curDiagnoses);
  const curPrescriptions = useSelector(state => state.treatmentReducer.curPrescriptions);
  const curTests = useSelector(state => state.treatmentReducer.curTests);
  const editBlock = useSelector(state => state.treatmentReducer.editBlock);

  const hospital_code = useSelector(state => state.authReducer.hospital_code);

  const dispatch = useDispatch();
  const [staffName, setStaffName] = useState("");

  const save = async () => {

    dispatch(createSetEditBlockActoin(true));  
    try{
      const treatmentObj = { treatment_id : treatment
                            ,treatment_record : curRecord
                            ,treatment_comment : curComment
                            ,treatment_diagnoses: curDiagnoses
                            ,treatment_prescriptions : curPrescriptions
                            ,treatment_tests : curTests }

      const testListObj = { treatment_id : treatment, treatment_tests : curTests };
  
      await insertTestList(testListObj);
      await updateAppointmentAndReceptionState(treatment);

      // MQTT 메세지 

      // 접수 페이지 접수 테이블
      await sendMqttMessage({
        topic : "/"+ hospital_code,
        content : "rerender/Administration_Reception"
      })

      // 예약 페이지 진료 타임 테이블
      await sendMqttMessage({
        topic : "/"+ hospital_code,
        content : "rerender/Appointment_TimeTable_Treatment"
      })

      // 접수 페이지 예약 테이블
      await sendMqttMessage({
        topic : "/"+ hospital_code,
        content : "rerender/Administration_Appointment"
      })

      // 검사 있을 시, 접수 페이지 검사 테이블
      if(curTests.length > 0){
        await sendMqttMessage({
          topic : "/"+ hospital_code,
          content : "rerender/Administration_TestList"
        })
      }

      //진료완료 alert 보내기
      const patientName = await getPatientName(treatment);
      await sendMqttMessage({
        topic : "/"+ hospital_code,
        content : "alert/Administration/treatment/" + patientName.data + " 환자 진료 완료"
      })

      await saveTreatment(treatmentObj);

    }catch(error){
      console.log(error);
    }
  }
  const getDoctorName = useCallback(async() => {
    try{
      const response = await getPrevDoctorName(treatment);
      setStaffName(response.data);
    }catch(error){
      console.log(error);
    }
  },[treatment]);

  useEffect( ()=>{
    if(treatment!=="") getDoctorName();
  },[treatment])

  return(
    <>
      { treatment!="" && !editBlock ?
      <div className={style.save} onClick={save}>
        <FontAwesomeIcon icon={faSave} className={style.addIcon}/> 저장
      </div>
      :
      treatment != "" ?
      <div>이전 진료의 : {staffName} </div>
      : null
      }
    </>
  );
}

export default React.memo(Save);