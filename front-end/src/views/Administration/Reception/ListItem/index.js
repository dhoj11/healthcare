import styles from "./ListItem.module.css";
import {useEffect, useState} from "react";
import {changeReceptionState} from "../../../../apis/administration";
import { sendMqttMessage } from "../../../../apis/message";
import { useSelector } from "react-redux";
import React from "react";

function ListItem(props) {
  
  const {index, reception, selectPatient, canceled} = props;
  const [state, setState] = useState(reception.reception_state);
  const hospital_code = useSelector(state => state.authReducer.hospital_code);

    //reception이 변경되면 state도 reception_state 다시 세팅해줌.
    useEffect(()=> {
      setState(reception.reception_state);
    },[reception])

  const handleStateChange = async(event, reception_id, appointment_id) => {
    setState(event.target.value);
    try{
      await changeReceptionState(reception_id, event.target.value);
      if(event.target.value==="진료") {
        await sendMqttMessage({
          topic : "/"+hospital_code +"/ROLE_DOCTOR/" + reception.staff_id,
          content : "alert/Treatment/" + reception.patient_name + "님 진료실 들어가십니다."
        })
        await sendMqttMessage({
          topic : "/"+hospital_code +"/ROLE_ADMIN/" + reception.staff_id,
          content : "alert/Treatment/" + reception.patient_name + "님 진료실 들어가십니다."
        })
      }else if(event.target.value === "취소") {
        await sendMqttMessage({
          topic : "/"+hospital_code +"/ROLE_DOCTOR/" + reception.staff_id,
          content : "rerender/Treatment_Patients"
          })
        await sendMqttMessage({
          topic : "/"+hospital_code +"/ROLE_ADMIN/" + reception.staff_id,
          content : "rerender/Treatment_Patients"
          })
      }
    }catch(error) {
      console.log(error.message);
    }
    if(event.target.value === "취소" && appointment_id !== null) {
      canceled(appointment_id);
    }
    await sendMqttMessage({
      topic : "/"+hospital_code,
      content : "rerender/Administration_Reception"
      })
  };

  return (
    <div key={index} onClick={() => selectPatient(reception.patient_id)} className={`${styles.appointmentRow} border-bottom d-flex`} >
        <span className={styles.appointmentItem}>
        {index+1}
        </span>
        <span className={styles.appointmentItem}>
        {reception.reception_time}
        </span>
        <span className={styles.appointmentItem}>
        {reception.patient_name}
        </span>
        <span className={styles.appointmentItem}>
        {reception.reception_content}
        </span>
        <span className={styles.appointmentItem}>
        {reception.staff_name}
        </span>
        {
          { 
            대기 : (<select className={styles.select_box} style={{color: "#74b816"}} value="대기" onChange={(event) =>handleStateChange(event, reception.reception_id, reception.appointment_id)}>
                      <option style={{color: "#74b816"}} value="대기">대기</option>
                      <option style={{color: "#1c7ed6"}} value="완료">완료</option>
                      <option style={{color: "#f59f00"}} value="진료">진료</option>
                      <option style={{color: "#f03e3e"}} value="취소">취소</option>
                    </select>),
            진료 : (<select className={styles.select_box} style={{color: "#f59f00"}} value="진료" onChange={(event) =>handleStateChange(event, reception.reception_id, reception.appointment_id)}>
                      <option style={{color: "#74b816"}} value="대기">대기</option>
                      <option style={{color: "#1c7ed6"}} value="완료">완료</option>
                      <option style={{color: "#f59f00"}} value="진료">진료</option>
                      <option style={{color: "#f03e3e"}} value="취소">취소</option>
                    </select>),
            완료 : (<select className={styles.select_box} style={{color: "#1c7ed6"}} value="완료" onChange={(event) =>handleStateChange(event, reception.reception_id, reception.appointment_id)}>
                      <option style={{color: "#74b816"}} value="대기">대기</option>
                      <option style={{color: "#1c7ed6"}} value="완료">완료</option>
                      <option style={{color: "#f59f00"}} value="진료">진료</option>
                      <option style={{color: "#f03e3e"}} value="취소">취소</option>
                    </select>),
            취소 : (<select className={styles.select_box} style={{color: "#f03e3e"}} value="취소" onChange={(event) =>handleStateChange(event, reception.reception_id, reception.appointment_id)}>
                      <option style={{color: "#74b816"}} value="대기">대기</option>
                      <option style={{color: "#1c7ed6"}} value="완료">완료</option>
                      <option style={{color: "#f59f00"}} value="진료">진료</option>
                      <option style={{color: "#f03e3e"}} value="취소">취소</option>
                    </select>),
          }[state]
        }
        </div>
  );
}

export default React.memo(ListItem);