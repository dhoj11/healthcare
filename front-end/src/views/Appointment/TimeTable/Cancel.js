import styles from "./Cancel.module.css";
function ComName(props) {
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
          <div>2021-06-22</div>
          <div>{props.appointInfo.time}</div>
          <div>{props.appointInfo.doctor}</div>
          <div>{props.appointInfo.patient_name}</div>
          <div>{props.appointInfo.appointment_content}</div>
        </div>
      </div>
        
      
    </div>
    <div className={styles.modal_footer}>
      <button className={styles.back_btn} onClick={props.CancelModalClose}>이전</button>
      <button className={styles.cancel_btn}  onClick={props.appointCancel}>예약취소</button>
    </div>
    </>
  );
}
export default ComName;