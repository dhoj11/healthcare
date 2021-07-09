import styles from "./index.module.css";

function AppointInfo(props) {
  const {appointItems} = props;
  console.log(appointItems);
  return(
    <>
    <div className={styles.Info_contain}>
      <i class="fas fa-calendar-alt"></i>
      <span>예약 정보</span>
    </div>
    <div className={styles.Info_table}>
      <div className={styles.thead}>
        <span>예약날짜</span><span>예약시간</span><span>상태</span>
      </div>
       <div className={styles.body_contain}>
         {appointItems.map((data) => {
           return(
              <div className={styles.tbody}>
                <span>{data.appointment_date}</span>
                <span>{data.appointment_time}</span>
                <span>{data.appointment_kind}{data.appointment_state}</span>
              </div>
           
           )
         })}
         
       </div>
    </div>
    <div></div>
</>
  );
}
export default AppointInfo;