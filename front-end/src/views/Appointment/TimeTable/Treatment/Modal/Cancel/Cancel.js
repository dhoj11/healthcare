import { useSelector } from "react-redux";
import { cancelTreatmentAppointment } from "../../../../../../apis/appointment";
import { sendMqttMessage } from "../../../../../../apis/message";
import styles from "./Cancel.module.css";
/*
  Title : Appointment_TimeTable_Treatment_Modal_Cancel
  Description : 진료 예약 취소를 할 수 있는 모달창 (예약되어 있는 셀 클릭시)

  Date : 2021-07-10
  Author : 조운호
*/
function ComName(props) {
  const {CancelModalClose,clickedappoint,axiosTreatmentAppointList} = props;
  const hospital_code = useSelector(state => state.authReducer.hospital_code);

  /*
    # 예약 취소하기
      1. 예약 취소
      2. MQTT 메세지 보내기
      3. 예약취소 모달창 close
  */
  const appointCancel = () => {
    (async function() {
      try{
        await cancelTreatmentAppointment(clickedappoint.appointment_id);
        await sendMqttMessage({
          topic : "/"+hospital_code,
          content : "rerender/Appointment_TimeTable_Treatment"
        })
        await sendMqttMessage({
          topic : "/"+hospital_code,
          content : "rerender/Administration_Appointment"
        })
        CancelModalClose();
      } catch(error){
        throw error;
      }
    })();

    
    
  }
  return(
    <>
    <div className="modal_body">
      <div className={styles.modal_header}>예약 정보</div>
      <div className={styles.modal_content}>
        <div>
          <div>날짜</div>
          <div>시간</div>
          <div>담당의</div>
          <div>예약환자</div>
          <div>예약내용</div>
        </div>
        <div className={styles.value}>
          <div>{clickedappoint.appointment_date}</div>
          <div>{clickedappoint.appointment_time}</div>
          <div>{clickedappoint.staff_name}</div>
          <div>{clickedappoint.patient_name}</div>
          <div>{clickedappoint.appointment_content}</div>
        </div>
      </div>
        
      
    </div>
    <div className={styles.modal_footer}>
      <button className={styles.back_btn} onClick={CancelModalClose}>이전</button>
      <button className={styles.cancel_btn}  onClick={appointCancel}>예약취소</button>
    </div>
    </>
  );
}
export default ComName;