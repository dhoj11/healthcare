import styles from "./ListItem.module.css";
import {useEffect, useState} from "react";
import { changeAppointmentState, addReceptionAfterAppointment } from "../../../../apis/administration";
import React from "react";

function ListItem(props) {

  const {index, appointment, selectPatient, receptionPatient, appointmentTest, isFinished} = props;
  const [state, setState] = useState(appointment.appointment_state);

  useEffect(() => {
    if(appointment.appointment_id === isFinished) {
      const work = async () => {
        try{
          await changeAppointmentState(isFinished, "완료");
          setState("완료");
        }catch(error) {
          console.log(error.message);
        }
      }
      work();
    }
  },[isFinished]);

  //appointment가 변경되면 state도 appointment_state로 다시 세팅해줌.
  useEffect(()=> {
    setState(appointment.appointment_state);
  },[appointment])

  const handleStateChange = async(event, appointment_id, appointment_kind) => {
    setState(event.target.value);
    try{
      
      await changeAppointmentState(appointment_id, event.target.value); //db 상태 바꿔줌
      
      if(event.target.value === "내원" && appointment_kind === "진료") {
        //접수 컴포넌트에 추가, 진료테이블에 새로운 튜플 insert
        await addReceptionAfterAppointment(appointment_id);
        receptionPatient(appointment_id);
      } else if(event.target.value === "내원" && appointment_kind === "검사") {
        //검사 컴포넌트에 추가, 검사테이블에 새로운 튜플 insert
        appointmentTest(appointment_id);
      }
    } catch(error) {
      console.log(error.message);
     }
  };

  return (
    <div key={index} onClick={() => selectPatient(appointment.patient_id)} className={`${styles.appointmentRow} border-bottom d-flex`} >
        <span className={styles.appointmentItem}>
        {index+1}
        </span>
        <span className={styles.appointmentItem}>
        {appointment.appointment_time}
        </span>
        <span className={styles.appointmentItem}>
        {appointment.patient_name}
        </span>
        {
          {
            진료: (
              <span className={styles.appointmentItem} style={{color: "#7950f2"}}>
                {appointment.appointment_kind}
              </span>),
            검사: (
              <span className={styles.appointmentItem} style={{color: "#7950f2"}}>
                ㆍ{appointment.appointment_kind}
              </span>)
          }[appointment.appointment_kind]
        }
        <span className={styles.appointmentItem}>
        {appointment.staff_name}
        </span>
        {
          { 
            예약 : (<select className={styles.select_box} style={{color: "#495057"}} value="예약" onChange={(event) =>handleStateChange(event, appointment.appointment_id, appointment.appointment_kind)}>
                      <option style={{color: "#495057"}} value="예약">예약</option>
                      <option style={{color: "#74b816"}} value="내원">내원</option>
                      <option style={{color: "#1c7ed6"}} value="완료">완료</option>
                      <option style={{color: "#f03e3e"}} value="취소">취소</option>
                    </select>),
            내원 : (<select className={styles.select_box} style={{color: "#74b816"}} value="내원" onChange={(event) =>handleStateChange(event, appointment.appointment_id, appointment.appointment_kind)}>
                      <option style={{color: "#495057"}} value="예약">예약</option>
                      <option style={{color: "#74b816"}} value="내원">내원</option>
                      <option style={{color: "#1c7ed6"}} value="완료">완료</option>
                      <option style={{color: "#f03e3e"}} value="취소">취소</option>
                    </select>),
            취소 : (<select className={styles.select_box} style={{color: "#f03e3e"}} value="취소" onChange={(event) =>handleStateChange(event, appointment.appointment_id, appointment.appointment_kind)}>
                      <option style={{color: "#495057"}} value="예약">예약</option>
                      <option style={{color: "#74b816"}} value="내원">내원</option>
                      <option style={{color: "#1c7ed6"}} value="완료">완료</option>
                      <option style={{color: "#f03e3e"}} value="취소">취소</option>
                    </select>),
            완료 : (<select className={styles.select_box} style={{color: "#1c7ed6"}} value="완료" onChange={(event) =>handleStateChange(event, appointment.appointment_id, appointment.appointment_kind)}>
                      <option style={{color: "#495057"}} value="예약">예약</option>
                      <option style={{color: "#74b816"}} value="내원">내원</option>
                      <option style={{color: "#1c7ed6"}} value="완료">완료</option>
                      <option style={{color: "#f03e3e"}} value="취소">취소</option>
                    </select>)
          }[state]
        }
        </div>
  );
}

export default React.memo(ListItem);