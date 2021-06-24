import styles from "./Staff.module.css";
function Staff(props) {
  return(
    <div className ={styles.staff}>
      <img src={"/resources/img/staff1.jpg"} alt="" width="150"/>
      <div className={styles.staff_content}>
        <div>김의사</div>
        <div>예약 환자: 10명</div>
        <div>Tel.010-1234-5678</div>
      </div>
      
    </div>
  );
}
export default Staff;