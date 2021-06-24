import styles from "./TimeSelect.module.css";
import {getAppointmentTime} from "../../data";
import {Fragment, useState, useEffect} from "react";


function TimeSelect(props) {

  const appointmentTime = getAppointmentTime();   //예약 가능한 시간을 가지고 옴
  const [timeSelect, setTimeSelect] = useState(appointmentTime);

  return (
    <div className={styles.time_select}>
      <div>
        {
          timeSelect.map((time, index) => (
            <Fragment key={time}>
            {(index+1) % 4 === 0 ? 
              (
                <>
                  <button className={`${styles.time_box}`}>{time}</button>
                  <div></div>
                </>
              )
                :
              (
                <span>
                  <button className={`${styles.time_box}`}>{time}</button>
                </span>
              )
            }
          </Fragment>
          ))
        }
      </div>
    </div>
  );
}

export default TimeSelect;