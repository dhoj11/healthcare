import styles from "./ListItem.module.css";
import {useState} from "react";
import moment from "moment";

function ListItem(props) {
  
  const {index, reception, selectPatient, finished} = props;
  const [state, setState] = useState("대기");

  const handleStateChange = (event, patientId) => {
    setState(event.target.value);
    console.log(state);
    if(event.target.value === "완료" && patientId !== undefined) {
      console.log(patientId);
      finished(patientId);
    }
  };

  return (
    <div key={index} onClick={() => selectPatient(reception.patientId)} className={`${styles.appointmentRow} border-bottom d-flex`} >
        <span className={styles.appointmentItem}>
        {index+1}
        </span>
        <span className={styles.appointmentItem}>
        {moment().format('HH:mm')}
        </span>
        <span className={styles.appointmentItem}>
        {reception.name}
        </span>
        <span className={styles.appointmentItem}>
        {reception.treatmentComment}
        </span>
        <span className={styles.appointmentItem}>
        {reception.doctor}
        </span>
        {
          { 
            대기 : (<select style={{color: "green"}} value={state} onChange={(event) =>handleStateChange(event, reception.patientId, reception.appointmentKind)}>
                      <option style={{color: "green"}} value="대기">대기</option>
                      <option style={{color: "blue"}} value="완료">완료</option>
                      <option style={{color: "red"}} value="진료">진료</option>
                    </select>),
            진료 : (<select style={{color: "red"}} value={state} onChange={(event) =>handleStateChange(event, reception.patientId, reception.appointmentKind)}>
                      <option style={{color: "green"}} value="대기">대기</option>
                      <option style={{color: "blue"}} value="완료">완료</option>
                      <option style={{color: "red"}} value="진료">진료</option>
                    </select>),
            완료 : (<select style={{color: "blue"}} value={state} onChange={(event) =>handleStateChange(event, reception.patientId, reception.appointmentKind)}>
                      <option style={{color: "green"}} value="대기">대기</option>
                      <option style={{color: "blue"}} value="완료">완료</option>
                      <option style={{color: "red"}} value="진료">진료</option>
                    </select>)
          }[state]
        }
        </div>
  );
}

export default ListItem;