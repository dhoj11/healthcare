import Calendar from "./Calendar";
import TimeTable from "./TimeTable";
import { useEffect, useState } from "react";
import { getTAppoint, getTestAppointment } from "./TimeTable/data/data";
import SearchPatient from "./SearchPatient";
import Info from "./Info";
import styles from "./index.module.css";
import moment from "moment";
/*
  Title : Appointment
  Description : 캘린더, 환자검색, 예약정보, 타임테이블 총 네개의 컴포넌트로 구성

  Date : 2021-07-01
  Author : 조운호
*/
function Appointment(props) {
  const [startDate, setStartDate] = useState(new Date()); //현재 선택된 날짜
  const [selectPatientId,setSelectPatientId] = useState(""); //선택한 환자 아이디
  
  const changeDate = (date) => {
    setStartDate(date);
  } 
  const selectedPatientId = (id) => {
    setSelectPatientId(id);
  }
  

  return(
    <div className={styles.contain}>
      <div>
        <Calendar startDate={startDate} changeDate={changeDate}></Calendar>
        <SearchPatient selectedPatientId={selectedPatientId}></SearchPatient>
        <Info selectPatientId={selectPatientId}></Info>
      </div>
      <TimeTable startDate={startDate} changeDate={changeDate}></TimeTable>
    </div>
  );
}
export default Appointment;