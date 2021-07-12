
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./index.module.css";
import moment from "moment";
import Treatment from "./Treatment";
import Test from "./Test";
import { useCallback, useState } from "react";
function TimeTable(props) {
  const {startDate,changeDate} = props;
  const [tab,setTab] = useState("treatment");
  // 이전 이후 날짜 클릭
  const prevDate = () => {
    let date = new Date(startDate);
    date.setDate(date.getDate()-1);
    changeDate(date);
  }
  const nextDate = () => {
    let date = new Date(startDate);
    date.setDate(date.getDate()+1);
    changeDate(date);
  }

  //진료 검사 탭
  const treatment = useCallback(() => {
    setTab("treatment");
  },[tab])
  const test = useCallback(() => {
    setTab("test");
  },[tab])
  return(
    <div className={styles.TimeTable_contain}>
        <div className={`${styles.date_contain} justify-content-between`}>
          <div className ={styles.showAppoint}>
            <button onClick={treatment} className={tab === "treatment" ? styles.clicked : styles.default }>진료</button>
            <button onClick={test} className={tab ==="test" ? styles.clicked : styles.default}>검사</button>
          </div>
          <div className={styles.date_top}>
            <button className={styles.leftbtn} onClick={prevDate}>{`<`}</button>
            <div className={styles.date}>{moment(startDate).format("YYYY-MM-DD")}</div> 
            <button className={styles.rightbtn} onClick={nextDate}>{`>`} </button>
          </div>
          <div className={styles.color}>
            <span>예약</span>
            <div></div>
            <span>내원</span>
            <div></div>
            <span>취소</span>
            <div></div>
            <span>완료</span>
            <div></div>
          </div>
        </div>
        {
          tab === "treatment"?
          <Treatment startDate={startDate}></Treatment>
          :
          <Test startDate={startDate}></Test>
        }
        
       

    </div>
    
    
  );
}
export default TimeTable;

