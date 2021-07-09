import { cancelTreatmentAppointment } from "../../../../../apis/appointment";
import styles from "./Cancel.module.css";
function ComName(props) {
  const {CancelModalClose,clickedappoint,axiosTreatmentAppointList} = props;

  const appointCancel = () => {
    (async function() {
      try{
        cancelTreatmentAppointment(clickedappoint.appointment_id);
        axiosTreatmentAppointList();
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