import styles from "./ListItem.module.css";
import {useEffect, useState} from "react";

function ListItem(props) {

  const {index, appointment, selectPatient, receptionPatient, testPatient, isFinished, setAppointmentState} = props;
  const [state, setState] = useState("예약");

  useEffect(() => {
    const temp = {...appointment, appointmentState: state};
    setAppointmentState(temp);
  },[state]);

  useEffect(() => {
    if(appointment.patientId === isFinished) {
      setState("완료");
    }
  },[isFinished]);

  const handleStateChange = (event, patientId, appointmentKind) => {
    setState(event.target.value);
    if(event.target.value === "내원" && appointmentKind === "진료") {
      //접수 테이블 추가
      receptionPatient(patientId);
    } else if(event.target.value === "내원" && appointmentKind === "검사") {
      //검사 테이블 추가
      testPatient(patientId);
    }
  };

  return (
    <div key={index} onClick={() => selectPatient(appointment.patientId)} className={`${styles.appointmentRow} border-bottom d-flex`} >
        <span className={styles.appointmentItem}>
        {appointment.order}
        </span>
        <span className={styles.appointmentItem}>
        {appointment.time}
        </span>
        <span className={styles.appointmentItem}>
        {appointment.name}
        </span>
        <span className={styles.appointmentItem}>
        {appointment.appointmentKind}
        </span>
        <span className={styles.appointmentItem}>
        {appointment.doctor}
        </span>
        {
          { 
            예약 : (<select style={{color: "black"}} value={state} onChange={(event) =>handleStateChange(event, appointment.patientId, appointment.appointmentKind)}>
                      <option style={{color: "black"}} value="예약">예약</option>
                      <option style={{color: "green"}} value="내원">내원</option>
                      <option style={{color: "blue"}} value="완료">완료</option>
                      <option style={{color: "red"}} value="취소">취소</option>
                    </select>),
            내원 : (<select style={{color: "green"}} value={state} onChange={(event) =>handleStateChange(event, appointment.patientId, appointment.appointmentKind)}>
                      <option style={{color: "black"}} value="예약">예약</option>
                      <option style={{color: "green"}} value="내원">내원</option>
                      <option style={{color: "blue"}} value="완료">완료</option>
                      <option style={{color: "red"}} value="취소">취소</option>
                    </select>),
            취소 : (<select style={{color: "red"}} value={state} onChange={(event) =>handleStateChange(event, appointment.patientId, appointment.appointmentKind)}>
                      <option style={{color: "black"}} value="예약">예약</option>
                      <option style={{color: "green"}} value="내원">내원</option>
                      <option style={{color: "blue"}} value="완료">완료</option>
                      <option style={{color: "red"}} value="취소">취소</option>
                    </select>),
            완료 : (<select style={{color: "blue"}} value={state} onChange={(event) =>handleStateChange(event, appointment.patientId, appointment.appointmentKind)}>
                      <option style={{color: "black"}} value="예약">예약</option>
                      <option style={{color: "green"}} value="내원">내원</option>
                      <option style={{color: "blue"}} value="완료">완료</option>
                      <option style={{color: "red"}} value="취소">취소</option>
                    </select>)
          }[state]
        }
        </div>
  );
}

export default ListItem;