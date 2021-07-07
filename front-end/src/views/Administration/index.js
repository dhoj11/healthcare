import styles from "./index.module.css";
import Appointment from "./Appointment";
import PatientInformation from "./PatientInformation";
import Reception from "./Reception";
import TestList from "./TestList";
import SearchPatient from "./SearchPatient";
import { useState, useEffect } from "react";

function Administration(props) {

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

  const [isFinished, setIsFinished] = useState();
  const finished = (appointment_id) => {
    setIsFinished(appointment_id);
  };

  const [sameDayAppointment, setSameDayAppointment] = useState(false);
  const dayAppointment = (flag) => {
    setSameDayAppointment(flag);
  }

  return (
    <div className={styles.first_content}>
      <div>
        <div className={styles.second_content}>
          <div className={styles.appointment_component}><Appointment sameDayAppointment={sameDayAppointment} selectedPatient={selectedPatient} receptionPatient={receptionPatient} appointmentTest={appointmentTest} isFinished={isFinished}/></div>
          <div className={styles.reception_component}><Reception selectedPatient={selectedPatient} receptionAppointmentId={receptionAppointmentId} visitReception={reception} finished={finished}/></div>
        </div>
        <div className={styles.testlist_component}>
          <TestList testAppointmentId={testAppointmentId}/>
        </div>
      </div>
      <div>
        <div className={styles.search_patient_component}><SearchPatient selectedPatient={selectedPatient}/></div>
        <div className={styles.patient_information_component}><PatientInformation dayAppointment={dayAppointment} selectedPatientId={globalPatientId} visitReception={visitReception}/></div>
        
      </div>
    </div>
    
  );
}

export default Administration;