import styles from "./index.module.css";
import Appointment from "./Appointment";
import PatientInformation from "./PatientInformation";
import Reception from "./Reception";
import TestList from "./TestList";
import SearchPatient from "./SearchPatient";

function Administration(props) {
  return (
    <div className={styles.first_content}>
      <div>
        <div className={styles.second_content}>
          <div className={styles.appointment_component}><Appointment /></div>
          <div className={styles.reception_component}><Reception /></div>
        </div>
        <div className={styles.testlist_component}>
          <TestList />
        </div>
      </div>
      <div>
        <div className={styles.search_patient_component}><SearchPatient /></div>
        <div className="patient-information-component"><PatientInformation /></div>
        
      </div>
    </div>
    
  );
}

export default Administration;