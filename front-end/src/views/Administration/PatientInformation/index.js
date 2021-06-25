import styles from "./PatientInformation.module.css";
import PatientInformationCard from "./PatientInformationCard";
import AppointmentModal from "./AppointmentWithTreatmentModal";
import ReceptionModal from "./ReceptionOfTreatmentModal";
import PatientInformationTab from "./PatientInformationTab";
import { useState } from "react";

function PatientInformation(props) {

  const{selectedPatient, selectedPatientId, visitReception} = props;
  console.log(selectedPatient);

  const [receptionModalOpen, setReceptionModalOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

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

  return (
    <>
      {props.selectedPatientId !== undefined ? 
      (<div className={styles.patient_information}>
      <div>
        <PatientInformationCard patient={selectedPatient}/>
      </div>
      <div className={styles.patient_information_tab}>
        <PatientInformationTab selectedPatientId={selectedPatientId}/>
      </div>
      <div className={styles.button_area}>
        <div>
          <button type="button" className="btn btn-outline-secondary mr-2" onClick={openReceptionModal}>진료접수</button>
          <ReceptionModal patient={selectedPatient} isOpen={receptionModalOpen} close={closeReceptionModal} visitReception={visitReception}/>
        </div>
        <div>
          <button type="button" className="btn btn-outline-secondary mr-3" onClick={openAppointmentModal}>진료예약</button>
          <AppointmentModal patientId={selectedPatientId} isOpen={appointmentModalOpen} close={closeAppointmentModal}/>
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