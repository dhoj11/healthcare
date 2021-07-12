import { useState } from "react";
import SearchPatient from "../../../../SearchPatient/index";
import TestList from "./TestList";
import styles from "./index.module.css";

function Appoint(props) {
  const [selectPatientId,setSelectPatientId] = useState("");
  const selectedPatientId = (id) => {
    setSelectPatientId(id);
  }
  return(
    <>
    <div className="d-flex ml-5">
      <div>
        <SearchPatient selectedPatientId={selectedPatientId}></SearchPatient>
      </div>
      <div className={styles.testList}>
        <TestList selectPatientId={selectPatientId}></TestList>
      </div>
    </div>
    <div className={styles.btn_contain}>
        <button className={styles.prev_btn}>이전</button>
        <button className={styles.appoint_btn}>예약</button>
      </div>
    </>
  );
}
export default Appoint;