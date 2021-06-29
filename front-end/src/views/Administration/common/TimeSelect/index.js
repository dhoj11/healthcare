import styles from "./TimeSelect.module.css";
import {getAppointmentTime} from "../../data";
import {Fragment, useState, useEffect} from "react";


function TimeSelect(props) {

  const appointmentTime = getAppointmentTime();   //예약 가능한 시간을 가지고 옴
  const [timeSelect, setTimeSelect] = useState();

  const changeTime = (time) => {
    setTimeSelect(time);
  }

  return (
    <div className={styles.time_select}>
      <div>
        {
          appointmentTime.map((time, index, key) => (
            <Fragment key={key}>
              <button className={ timeSelect === time ? `${styles.selected_time_box}` : `${styles.time_box}`} onClick={() => changeTime(time)}>{time}</button>
          </Fragment>
          ))
        }
      </div>
    </div>
  );
}

export default TimeSelect;