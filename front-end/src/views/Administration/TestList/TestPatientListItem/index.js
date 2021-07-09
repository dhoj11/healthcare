import moment from "moment";
import { useState, useEffect } from "react";
import styles from "./TestPatientListItem.module.css";

function TestPatientListItem(props) {

  const {index, testPatient, showAppointmentTestList, showTreatmentTestList} = props;
  const [state, setState] = useState("대기");
  const [receptionTime, setReceptionTime] = useState("");
  useEffect(() => {
    const time = moment().format("HH:mm");
    setReceptionTime(time);
  },[]);

  return (
    <>
    {testPatient.appointment_id !== null ? 
      (<div key={index} onClick={()=> showAppointmentTestList(testPatient.appointment_id,  testPatient.patient_id, testPatient.patient_name)} className={`border-bottom d-flex ${styles.patient_row}`}>
          <span className={styles.test_patient_item}>
          {index+1}
        </span>
        <span className={styles.test_patient_item}>
          {receptionTime}
        </span>
        <span className={styles.test_patient_item}>
          {testPatient.patient_name}
        </span>
        <span className={styles.test_patient_item}>
          {testPatient.staff_name}
        </span>
        {
          { 
            대기 : <span style={{color: "#74b816"}}className={styles.test_patient_item}>{state}</span>,
            진행중 : <span style={{color: "#f03e3e"}}className={styles.test_patient_item}>{state}</span>,
            완료 : <span style={{color: "#1c7ed6"}}className={styles.test_patient_item}>{state}</span>
          }[state]
        }
      </div>) 
    : 
      (<div key={index} onClick={()=> showTreatmentTestList(testPatient.patient_id)} className={`border-bottom d-flex ${styles.patient_row}`}>
          <span className={styles.test_patient_item}>
          {index+1}
        </span>
        <span className={styles.test_patient_item}>
          {receptionTime}
        </span>
        <span className={styles.test_patient_item}>
          {testPatient.patient_name}
        </span>
        <span className={styles.test_patient_item}>
          {testPatient.staff_name}
        </span>
        {
          { 
            대기 : <span style={{color: "#74b816"}}className={styles.test_patient_item}>{state}</span>,
            진행중 : <span style={{color: "#f03e3e"}}className={styles.test_patient_item}>{state}</span>,
            완료 : <span style={{color: "#1c7ed6"}}className={styles.test_patient_item}>{state}</span>
          }[state]
        }
      </div>)}
    </>
  );
}

export default TestPatientListItem;