import styles from "./PatientInformation.module.css";
import PatientInformationCard from "./PatientInformationCard";
import AppointmentModal from "./AppointmentWithTreatmentModal";
import ReceptionModal from "./ReceptionOfTreatmentModal";
import PatientInformationTab from "./PatientInformationTab";
import { useState, useEffect } from "react";
import {getPatient} from "../../../apis/administration";

function PatientInformation(props) {

  const{dayAppointment,selectedPatientId, visitReception} = props;
  const [patient, setPatient] = useState();

  const [receptionModalOpen, setReceptionModalOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [receptionRerenderer, setreceptionRerenderer] = useState("");
  const [appointmentRerenderer, setAppointemntRerenderer] = useState("");

  const openReceptionModal = () => {
    setReceptionModalOpen(true);
  };

  const closeReceptionModal = () => {
    setReceptionModalOpen(false);
  };

  const openAppointmentModal = () => {
    setAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setAppointmentModalOpen(false);
  };

  useEffect(() => {
    if(selectedPatientId !== undefined) {
      //비동기 통신
      const work = async () => {
        try {
          const response = await getPatient(selectedPatientId);
          setPatient(response.data);
        } catch (error) {
          console.log(error.message);
          //history.push("./error"); 에러 컴포넌트로 이동
        }
      };
      work();
    }
  },[selectedPatientId]);

  useEffect(() => {
    
    if(selectedPatientId !== undefined) {
      //비동기 통신
      const work = async () => {
        try {
          const response = await getPatient(selectedPatientId);
          setPatient(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error.message);
          //history.push("./error"); 에러 컴포넌트로 이동
        }
      };
      work();
    }
  },[receptionRerenderer]);

  useEffect(() => {
    
    if(selectedPatientId !== undefined) {
      //비동기 통신
      const work = async () => {
        try {
          const response = await getPatient(selectedPatientId);
          setPatient(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error.message);
          //history.push("./error"); 에러 컴포넌트로 이동
        }
      };
      work();
    }
  },[appointmentRerenderer]);

  return (
    <>
      {patient !== undefined ? 
      (<div className={styles.patient_information}>
      <div>
        <PatientInformationCard patient={patient}/>
      </div>
      <div className={styles.patient_information_tab}>
        <PatientInformationTab patient={patient}/>
      </div>
      <div className={styles.button_area}>
        <div>
          <button type="button" className="btn btn-outline-secondary mr-2" onClick={openReceptionModal}>진료접수</button>
          <ReceptionModal setRerenderer={setreceptionRerenderer} patient={patient} isOpen={receptionModalOpen} close={closeReceptionModal} visitReception={visitReception}/>
        </div>
        <div>
          <button type="button" className="btn btn-outline-secondary mr-3" onClick={openAppointmentModal}>진료예약</button>
          <AppointmentModal setRerenderer={setAppointemntRerenderer} dayAppointment={dayAppointment} patient={patient} isOpen={appointmentModalOpen} close={closeAppointmentModal}/>
        </div>
      </div>
    </div>)
    :
    (<div className={`${styles.patient_information}`}>
      <div className={styles.patient_information_content}>
      <div className={`${styles.patient_information_null}`}>
      <div className={styles.first_card_row}>
        <div className={styles.patient_icon_area}>
          <img className={styles.patient_icon} src="/resources/svg/emoji-smile.svg" />
        </div>
        <div className={styles.patient_alert}>
         <span className={styles.patient_alert_letter}>환자를 선택해주세요!</span>
        </div>
      </div> 
      </div>
      </div>
    </div>)}
    </>
    
  );
}

export default PatientInformation;