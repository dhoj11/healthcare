import Chart from "./Chart";
import Calendar from "../Appointment/Calendar";
import Staff from "./StaffList";
import styles from "./index.module.css";
import { useState } from "react";
import MemoList from "./MemoList";
function DashBoard(props) {
  const [startDate, setStartDate] = useState(new Date());
  const changeDate = (date) => {
    setStartDate(date);
  }
  return(
    <div className={styles.dashboard_contain}>
      <div className={styles.top_contain}>
        <div className={styles.chart_contain}>
          <Chart></Chart>
        </div>
        <Calendar startDate={startDate} changeDate={changeDate}></Calendar>
      </div>

      <div className={styles.bottom_contain}>
        <Staff></Staff>
        <MemoList></MemoList>
      </div>
    </div>
  );
}
export default DashBoard;