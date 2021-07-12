import styles from "./TimeSelector.module.css";
import {Fragment, useState} from "react";
import React from "react";
import moment from "moment";


function TimeSelector(props) {
  const { appointmentDate, timeAndCount, changeTime } = props;
  const [timeSelect, setTimeSelect] = useState();


  const selectTime = (time) => {
    console.log(time);
    setTimeSelect(time);
    changeTime(time);
  }

  return (
    <>
     {timeAndCount !== undefined ? 
     (<div className={styles.time_select}>
        <div>
          {
            timeAndCount.map((time, index) => (
              <>
              {moment(appointmentDate+" "+time.appointment_time).format("YYYY-MM-DD HH:mm") > moment().format("YYYY-MM-DD HH:mm") ? (
                <Fragment key={index}>
                <button className={ timeSelect === time.appointment_time ? `${styles.selected_time_box}` : `${styles.time_box}`} value={time.appointment_time} onClick={() => selectTime(time.appointment_time)}>{time.appointment_time} <span className={styles.count}>{time.count}건</span></button>
              </Fragment>) : (null) }
            </>
            ))
          }
        </div>
      </div>)
       : 
       (null)
      }
     
    </>
  );
}

export default React.memo(TimeSelector);