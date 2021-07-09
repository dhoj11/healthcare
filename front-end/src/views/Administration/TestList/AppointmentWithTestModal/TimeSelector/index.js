import styles from "./TimeSelector.module.css";
import {getAppointmentTime} from "../../../data";
import {Fragment, useState, useEffect} from "react";
import {possibleAppointmentTime} from "../../../../../apis/administration";
import React from "react";


function TimeSelector(props) {
  const { timeAndCount, changeTime } = props;
  const appointmentTime = getAppointmentTime();   //예약 가능한 시간을 가지고 옴
  const [possibleTime, setPossibleTime] = useState();
  const [timeSelect, setTimeSelect] = useState();

  const selectTime = (time) => {
    setTimeSelect(time);
    changeTime(time);
  }

  return (
    <>
      <div className={styles.time_select}>
        <div>
          {
            timeAndCount.map((time, index) => (
              <Fragment key={index}>
                <button className={ timeSelect === time ? `${styles.selected_time_box}` : `${styles.time_box}`} value={time.appointment_time} onClick={() => selectTime(time.appointment_time)}>{time.appointment_time} <span className={styles.count}>{time.count}건</span></button>
            </Fragment>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default React.memo(TimeSelector);