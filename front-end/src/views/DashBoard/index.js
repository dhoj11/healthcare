import Chart from "./Chart";
import Calendar from "../Appointment/Calendar";
import Staff from "./Staff";
import Memo from "./Memo";
import styles from "./index.module.css";
function DashBoard(props) {
  return(
    <div className={styles.dashboard_contain}>
      <div className={styles.top_contain}>
        <Chart></Chart>
        <Calendar></Calendar>
      </div>

      <div className={styles.bottom_contain}>
        <Staff></Staff>
        <Memo></Memo>
      </div>
    </div>
  );
}
export default DashBoard;