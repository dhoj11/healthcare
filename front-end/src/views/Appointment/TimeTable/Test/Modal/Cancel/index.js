import { useEffect, useState } from "react";
import { Accordion, Button, Card, Collapse } from "react-bootstrap";
import { getTestCodeList,cancelAppointment, testListWait } from "../../../../../../apis/appointment";
import styles from "./index.module.css";
import TestList from "./TestList";

function Cancel(props) {
  const {clickedAppointment, CancelModalClose} = props;
  const [testCodeList,setTestCodeList] = useState([]);

  //예약번호로 예약되어있는 TestCode 리스트 가져오기
  useEffect(() => {
    (async function() {
      try{
        const response = await getTestCodeList(clickedAppointment.appointment_id);
        setTestCodeList(response.data);
      } catch(error){
        throw error;
      }
    })();
  },[])

  //예약 취소
  const cancelTestAppointment= () => {
    (async function() {
      try{
        await cancelAppointment(clickedAppointment.appointment_id);
        await testListWait(clickedAppointment.appointment_id);
        CancelModalClose(); 
      } catch(error){
        throw error;
      }
    })();
  }
  return(
    <div className={styles.info}>
      <div className={styles.title}>예약 정보</div>
      <div className ={styles.row}>
        <span>날짜</span> <span>{clickedAppointment.appointment_date}</span>
      </div>
      <div className ={styles.row}>
        <span>시간</span> <span>{(clickedAppointment.appointment_time).substr(0,5)}</span>
      </div>
      <div className ={styles.row}>
        <span>예약 환자</span> <span>{clickedAppointment.patient_name}({clickedAppointment.patient_gender})</span>
      </div>
      <div className ={styles.row}>검사항목</div>
      <div>
        <div className={`d-flex ${styles.tr}`}>
          <div>검사코드</div>
          <div>검사명</div>
          <div>처방코드</div>
          <div>상세검사명</div>
        </div>
        {testCodeList.map((testCode,index) => {
          return(
            <TestList key={index} testCode={testCode}></TestList>
          )
        })}
        
      </div>
      <div className={styles.btn_contain}>
        <button className={styles.prev_btn} onClick={CancelModalClose}>이전</button>
        <button className={styles.cancel_btn} onClick={cancelTestAppointment}>예약 취소</button>
      </div>
    </div>
  );
}
export default Cancel;