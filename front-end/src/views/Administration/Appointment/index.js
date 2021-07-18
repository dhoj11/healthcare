import { getPatientList} from "../data";
import styles from "./Appointment.module.css";
import { useCallback, useEffect, useState } from "react";
import ListItem from "./ListItem";
import { getAppointmentList, getAppointmentListByState } from "../../../apis/administration";
import React from "react";
import { useSelector } from "react-redux";
function Appointment(props) {

  const {mqttMessage, sameDayAppointment, selectedPatient, receptionPatient, appointmentTest, isFinished} = props;
  const [appointmentList, setAppointmentList] = useState([]);
  const [state, setState] = useState("");
  const client = useSelector((state) => state.mqttReducer.client);


  /*
    # 예약 or 취소 시 Mqtt 메세지 도착
      1. 현재 보고 있는 state(전체,예약,내원,완료,취소) 에 따라 appointmentList 다름
      2. state(전체) => getAllList() 호출
      3. state(예약,내원,완료,취소) => listWithState() 호출
    by 운호
  */ 
  // const MqttBroker = () => {
  //   if(client!==""){
  //     client.onMessageArrived = (msg) => {
  //       console.log("예약 메시지 수신");
  //       let message = JSON.parse(msg.payloadString);
  //       message = message.content.split('/');
  //       if(message[0] === "rerender" && message[1] === "Administration_Appointment"){
  //         if(state ==="전체"){
  //           getAllList();
  //         } else{
  //           listWithState(state);
  //         }
  //       }
  //     }
  //   }
  // }
  // //useEffect에 작성시 MqttBroker() 사라지고 onMessageArrived 인식 X (미해결) by 운호
  // MqttBroker();
  // useEffect(() => {
  //   if(client !== "") MqttBroker();
  // },[client])

  useEffect(() => {
    //비동기 통신
    const work = async () => {
      try {
        const response = await getAppointmentList();
        setAppointmentList(response.data);
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
      } catch (error) {
      }
  };

  const listWithState = async(appointmentState) => {
    try{
      const response = await getAppointmentListByState(appointmentState);
      setAppointmentList(response.data);
      setState(appointmentState);
    }catch(error) {
    }
  }

  const selectPatient = (patientId) => { //예약 리스트의 환자 클릭 시 해당 환자의 patientId로 환자 리스트에서 환자를 찾고 부모 컴포넌트의 상태를 바꿔줌 
    selectedPatient(patientId);
  }

  return (
    <>
      <div className={styles.appointment}>
        <div className="mb-1 ml-2 d-flex">
          <img className="mr-3" src="/resources/svg/person-check.svg"></img><span className="mr-3">예약</span>
          <div className={styles.appointment_state} onClick={getAllList} >전체 &nbsp;| </div>
          <div className={styles.appointment_state} onClick={()=> listWithState("예약")}>예약 &nbsp;| </div>
          <div className={styles.appointment_state} onClick={()=> listWithState("내원")}>내원 &nbsp;| </div>
          <div className={styles.appointment_state} onClick={()=> listWithState("완료")}>완료 &nbsp;| </div>
          <div className={styles.appointment_state} onClick={()=> listWithState("취소")}>취소 </div>
          <div className={styles.length} >{state} : 총 {getLength()} 건</div>
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
            <>
            <ListItem key={index} index={index} appointment={appointment} selectPatient={selectPatient} receptionPatient={receptionPatient} appointmentTest={appointmentTest} isFinished={isFinished}/>
            </>
          ))}
        </div>
      </div>
 </>
  );
}

export default React.memo(Appointment);