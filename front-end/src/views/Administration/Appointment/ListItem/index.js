import styles from "./ListItem.module.css";
import {useEffect, useState} from "react";
import { changeAppointmentState, addReceptionAfterAppointment, addTestReceptionAfterAppointment } from "../../../../apis/administration";
import { sendMqttMessage } from "../../../../apis/message";
import React from "react";
import { useSelector } from "react-redux";

function ListItem(props) {

  const {index, appointment, selectPatient, receptionPatient, appointmentTest, isFinished} = props;
  const [state, setState] = useState(appointment.appointment_state);
  const hospital_code = useSelector(state => state.authReducer.hospital_code);
  useEffect(() => {
    if(appointment.appointment_id === isFinished) {
      const work = async () => {
        try{
          await changeAppointmentState(isFinished, "취소");
          setState("취소");
          await sendMqttMessage({
            topic : "/"+hospital_code,
            content : "rerender/Appointment_TimeTable_Treatment"
            })
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
      
      await changeAppointmentState(appointment_id, event.target.value);
      if(event.target.value === "내원" && appointment_kind === "진료") {
        //접수 컴포넌트에 추가
        await addReceptionAfterAppointment(appointment_id); //접수 테이블에 생성
        receptionPatient(appointment_id);
      } else if(event.target.value === "내원" && appointment_kind === "검사") {
        //검사 컴포넌트에 추가
        await addTestReceptionAfterAppointment(appointment_id); //접수 테이블에 생성
        appointmentTest(appointment_id);
      }

      if(appointment_kind === "진료") {
        await sendMqttMessage({
        topic : "/"+hospital_code,
        content : "rerender/Appointment_TimeTable_Treatment"
        })
        if(event.target.value === "내원") {
          await sendMqttMessage({
            topic : "/"+hospital_code,
            content : "rerender/Administration_Reception"
          });
          await sendMqttMessage({
            topic : "/"+hospital_code+"/ROLE_DOCTOR/"+appointment.staff_id,
            content : "rerender/Treatment_Patients"
          });
          await sendMqttMessage({
            topic : "/"+hospital_code+"/ROLE_ADMIN/"+appointment.staff_id,
            content : "rerender/Treatment_Patients"
          });
        }
      }else if(appointment_kind==="검사"){
        await sendMqttMessage({
        topic : "/"+hospital_code,
        content : "rerender/Appointment_TimeTable_Test"
        })
        if(event.target.value === "내원") {
          await sendMqttMessage({
            topic : "/"+hospital_code,
            content : "rerender/Administration_TestList"
          })
        }
      }
      await sendMqttMessage({
        topic : "/"+hospital_code,
        content : "rerender/Administration_Appointment"
      })
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

export default ListItem;