import styles from "./Appointment.module.css";
import {useEffect, useState } from "react";
import ListItem from "./ListItem";
import { getAppointmentList, getAppointmentListByState } from "../../../apis/administration";
import React from "react";
import { useSelector } from "react-redux";
function Appointment(props) {

  const {mqttMessage, sameDayAppointment, selectedPatient, receptionPatient, appointmentTest, isCanceled} = props;
  const [appointmentList, setAppointmentList] = useState([]);
  const [state, setState] = useState("");
  const [patientName, setPatientName] = useState("");
  const [searchedList, setSearchedList] = useState([]);

  useEffect(() => {
    //비동기 통신
    const work = async () => {
      try {
        const response = await getAppointmentList();
        setAppointmentList(response.data);
        setSearchedList(response.data);
        setState("전체");
      } catch (error) {
        //history.push("./error"); 에러 컴포넌트로 이동
      }
    };
    work();  
  },[sameDayAppointment]);

  useEffect(() => {
    if(mqttMessage !== "") {
      if(mqttMessage.message[0] === "rerender" && mqttMessage.message[1] === "Administration_Appointment") {
        if(state === "전체") {
          getAllList();
        }else {
          listWithState(state);
        }
      }
  }
  },[mqttMessage])

  const getLength = () => {  //예약 리스트의 건 수를 반환
    return appointmentList.length;
  };

  const getAllList = async() => {
    try {
        const response = await getAppointmentList();
        setAppointmentList(response.data);
        setState("전체");
        setPatientName("");
      } catch (error) {
      }
  };

  const listWithState = async(appointmentState) => {
    try{
      const response = await getAppointmentListByState(appointmentState);
      setAppointmentList(response.data);
      setState(appointmentState);
      setPatientName("");
    }catch(error) {
    }
  }

  const selectPatient = (patientId) => { //예약 리스트의 환자 클릭 시 해당 환자의 patientId로 환자 리스트에서 환자를 찾고 부모 컴포넌트의 상태를 바꿔줌 
    selectedPatient(patientId);
  }

  const handleChange = (event) => {
    console.log(event.target.value);
    setPatientName(event.target.value);
  }

  const search = () => {
    setAppointmentList(searchedList.filter(appointment => appointment.patient_name === patientName));
    setState("전체");
  }

  return (
    <>
      <div className={styles.appointment}>
        <div className="mb-1 ml-2 d-flex">
          <img className="mr-2" src="/resources/svg/person-check.svg"></img><span className="mr-2">예약</span>
          <div className={state === "전체" ? `${styles.appointment_state_selected}` : `${styles.appointment_state}`} onClick={getAllList} >전체 </div><div>|</div>
          <div className={state === "예약" ? `${styles.appointment_state_selected}` : `${styles.appointment_state}`} onClick={()=> listWithState("예약")}>예약</div><div>|</div>
          <div className={state === "내원" ? `${styles.appointment_state_selected}` : `${styles.appointment_state}`} onClick={()=> listWithState("내원")}>내원</div><div>|</div>
          <div className={state === "완료" ? `${styles.appointment_state_selected}` : `${styles.appointment_state}`} onClick={()=> listWithState("완료")}>완료</div><div>|</div>
          <div className={state === "취소" ? `${styles.appointment_state_selected}` : `${styles.appointment_state}`} onClick={()=> listWithState("취소")}>취소</div><div>|</div>
          <div className={styles.length} >총 {getLength()} 건</div>
          <div className={styles.patient_name_wrapper}>
            <input className={styles.patient_name} placeholder="name" type="text" value={patientName} onChange={handleChange}/>
            <button type="button" className={styles.patient_name_button} onClick={search}>검색</button>
          </div>
        </div>
        <div className="d-flex bg-light">
          <span className={`border ${styles.appointment_border}`}>
            순서
          </span>
          <span className={`border ${styles.appointment_border}`}>
            예약시간
          </span>
          <span className={`border ${styles.appointment_border}`}>
            이름
          </span>
          <span className={`border ${styles.appointment_border}`}>
            예약내용
          </span>
          <span className={`border ${styles.appointment_border}`}>
            담당의
          </span>
          <span className={`border ${styles.appointment_border}`}>
            상태
          </span>
        </div>
        <div className={styles.appointment_content}>
          {appointmentList.map((appointment, index)=>(
            <ListItem key={index} index={index} appointment={appointment} selectPatient={selectPatient} receptionPatient={receptionPatient} appointmentTest={appointmentTest} isCanceled={isCanceled}/>
          ))}
        </div>
      </div>
 </>
  );
}

export default React.memo(Appointment);