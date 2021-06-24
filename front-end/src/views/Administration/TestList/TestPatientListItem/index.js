import moment from "moment";
import { useState } from "react";
import styles from "./TestPatientListItem.module.css";

function TestPatientListItem(props) {

  const {index, testPatient, showTestList} = props;
  const [state, setState] = useState("대기");

  return (
    <div key={index} onClick={()=> showTestList(testPatient.patientId)} className={`border-bottom d-flex ${styles.patient_row}`}>
        <span className={styles.test_patient_item}>
        {index+1}
      </span>
      <span className={styles.test_patient_item}>
        {moment().format("HH:mm")}
      </span>
      <span className={styles.test_patient_item}>
        {testPatient.name}
      </span>
      <span className={styles.test_patient_item}>
        {testPatient.doctor}
      </span>
      {
        { 
           대기 : <span style={{color: "green"}}className={styles.test_patient_item}>{state}</span>,
           진행중 : <span style={{color: "red"}}className={styles.test_patient_item}>{state}</span>,
           완료 : <span style={{color: "blue"}}className={styles.test_patient_item}>{state}</span>
        }[state]
      }
    </div>
  );
}

export default TestPatientListItem;