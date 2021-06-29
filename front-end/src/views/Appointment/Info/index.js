import { useEffect, useState } from "react";
import { getAppointList } from "../TimeTable/data/data";
import AppointInfo from "./AppointInfo";
import styles from "./index.module.css";
function Info(props) {
  const appointList = getAppointList();
  let appointItem=appointList.filter((data) => data.patient_id === props.selectPatientId);
  return(
    <div className={styles.AppointInfo_contain}>
      {
        !props.selectPatientId ? 
        <div className={styles.default}>
        <img className={styles.patient_icon} src="/resources/svg/emoji-smile.svg" height="100px"/>
        <div>환자를 선택해주세요!</div>
        </div>
        :
        <div>
          <AppointInfo appointItem={appointItem}></AppointInfo>
        </div>
      }
    
    </div>
  );
}
export default Info;