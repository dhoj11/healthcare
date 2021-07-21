import styles from "./TimeSelector.module.css";
import {Fragment, useState} from "react";
import React from "react";
import moment from "moment";


function TimeSelector(props) {
  const { possibleTime, appointmentDate, changeTime } = props;
  const [timeSelect, setTimeSelect] = useState();

  const selectTime = (time) => {
    setTimeSelect(time);
    changeTime(time);
  }

  return (
    <>
    {possibleTime !== undefined ? 
    (
      <div className={styles.time_select}>
        <div>
          {
            possibleTime.map((time, index) => (
              <Fragment key={index}>
                {moment(appointmentDate+" "+time).format("YYYY-MM-DD HH:mm") > moment().format("YYYY-MM-DD HH:mm")? 
                (
                  <button className={ timeSelect === time ? `${styles.selected_time_box}` : `${styles.time_box}`} value={time} onClick={() => selectTime(time)}>{time}</button>
                )
                :
                (null)} 
            </Fragment>
            ))
          }
        </div>
      </div>
    ) 
    : 
    (
     null
    )}
    </>
  );
}

export default TimeSelector;