import styles from "./index.module.css";
import Staff from "./Staff";
function StaffList(props) {
  return(
    <div className={styles.staffs}>
      <div className={styles.staff_contain}>
        <Staff></Staff>
        <Staff></Staff>
        <Staff></Staff>
      </div>
      <div className={styles.staff_contain}>
        <Staff></Staff>
        <Staff></Staff>
        <Staff></Staff>
      </div>
    </div>
  );
}
export default StaffList;