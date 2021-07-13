import moment from "moment";
import { useState, useEffect } from "react";
import styles from "./TestPatientListItem.module.css";
import React from "react";

function TestPatientListItem(props) {

  const {index, testPatient, showAppointmentTestList} = props;

  return (
    <>
      <div key={index} onClick={()=> showAppointmentTestList(testPatient.reception_id,  testPatient.patient_id, testPatient.patient_name)} className={`border-bottom d-flex ${styles.patient_row}`}>
          <span className={styles.test_patient_item}>
          {index+1}
        </span>
        <span className={styles.test_patient_item}>
          {testPatient.reception_time}
        </span>
        <span className={styles.test_patient_item}>
          {testPatient.patient_name}
        </span>
        <span className={styles.test_patient_item}>
          {testPatient.staff_name}
        </span>
        {
          { 
            대기 : <span style={{color: "#74b816"}}className={styles.test_patient_item}>{testPatient.reception_state}</span>,
            예약 : <span style={{color: "#495057"}}className={styles.test_patient_item}>{testPatient.reception_state}</span>,
            진행 : <span style={{color: "#f03e3e"}}className={styles.test_patient_item}>{testPatient.reception_state}</span>,
            완료 : <span style={{color: "#1c7ed6"}}className={styles.test_patient_item}>{testPatient.reception_state}</span>
          }[testPatient.reception_state]
        }
      </div>
    </>
  );
}

export default React.memo(TestPatientListItem);