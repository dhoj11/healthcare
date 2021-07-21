import styles from "./index.module.css";
import Appointment from "./Appointment";
import PatientInformation from "./PatientInformation";
import Reception from "./Reception";
import TestList from "./TestList";
import SearchPatient from "./SearchPatient";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.min.css';

function Administration(props) {

  // console.log(client);

  const [globalPatientId, setGlobalPatientId] = useState();   //환자의 전역 상태 선언
  const selectedPatient = (patientId) => {    //전역 상태인 환자의 정보를 바꾸는 함수, 자식 컴포넌트에서 부모 컴포넌트의 상태(globalPatient)를 바꿔줌
    setGlobalPatientId(patientId);
  }

  const [receptionAppointmentId, setReceptionAppointmentId] = useState();   //예약 => 접수 : appointment_id를 보내주도록 다시 수정
  const receptionPatient = (appointmentId) => {
    setReceptionAppointmentId(appointmentId);
  } 

  const [testAppointmentId, seTestAppointmentId] = useState();
  const appointmentTest = (appointmentId) => {
    seTestAppointmentId(appointmentId);
  } 

  const [reception, setReception] = useState();
  const visitReception = (visitReception) => {
    setReception(visitReception);
    console.log(reception);
  };

  const [isCanceled, setIsCanceled] = useState();
  const canceled = (appointment_id) => {
    setIsCanceled(appointment_id);
  };

  const [sameDayAppointment, setSameDayAppointment] = useState(false);
  const dayAppointment = (flag) => {
    setSameDayAppointment(flag);
  }

  const client = useSelector((state) => state.mqttReducer.client);
  const [mqttMessage, setMqttMessage] = useState("");

  const MqttBroker = () => {
    console.log("mqtt broker 실행");
    client.onMessageArrived = (msg) => {
      console.log("접수 메시지 수신");
      let message = JSON.parse(msg.payloadString);
      message = message.content.split('/');
      setMqttMessage({message, date: new Date()});
    }
  };
useEffect(()=>{
  if(client!=="") MqttBroker();
},[client])

useEffect(()=>{
  if(mqttMessage !== "" && mqttMessage.message[0] === "alert" && mqttMessage.message[1] === "Administration") {
    //toast 메시지
    if(mqttMessage.message[2] === "treatment") {
      store.addNotification({
        title: mqttMessage.message[3],
        message: " ",
        type: "info",                         // 'default', 'success', 'info', 'warning'
        container: 'bottom-right',                // where to position the notifications
        animationIn: ["animate__animated", "animate__bounceIn"],     // animate.css classes that's applied
        animationOut: ["animate__animated", "animate__bounceOut"],   // animate.css classes that's applied
        dismiss: {
          duration: 0,
          click: true
        }
      })
    } else if(mqttMessage.message[2] === "test") {
      store.addNotification({
        title: mqttMessage.message[3],
        message: " ",
        type: "warning",                         // 'default', 'success', 'info', 'warning'
        container: 'bottom-right',                // where to position the notifications
        animationIn: ["animate__animated", "animate__bounceIn"],     // animate.css classes that's applied
        animationOut: ["animate__animated", "animate__bounceOut"],   // animate.css classes that's applied
        dismiss: {
          duration: 0,
          click: true
        }
      })
    }
  }
},[mqttMessage])

  return (
    <div className={styles.first_content}>
      <div>
        <div className={styles.second_content}>
          <div className={styles.appointment_component}><Appointment mqttMessage={mqttMessage} sameDayAppointment={sameDayAppointment} selectedPatient={selectedPatient} receptionPatient={receptionPatient} appointmentTest={appointmentTest} isCanceled={isCanceled}/></div>
          <div className={styles.reception_component}><Reception mqttMessage={mqttMessage} selectedPatient={selectedPatient} receptionAppointmentId={receptionAppointmentId} visitReception={reception} canceled={canceled}/></div>
        </div>
        <div className={styles.testlist_component}>
          <TestList mqttMessage={mqttMessage} dayAppointment={dayAppointment} testAppointmentId={testAppointmentId} selectedPatient={selectedPatient}/>
        </div>
      </div>
      <div>
        <div className={styles.search_patient_component}><SearchPatient mqttMessage={mqttMessage} selectedPatient={selectedPatient}/></div>
        <div className={styles.patient_information_component}><PatientInformation mqttMessage={mqttMessage} dayAppointment={dayAppointment} selectedPatientId={globalPatientId} visitReception={visitReception}/></div>
      </div>
    </div>
    
  );
}

export default Administration;