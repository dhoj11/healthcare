import styles from "./TimeSelect.module.css";
import {getAppointmentTime} from "../../data";
import {Fragment, useState, useEffect} from "react";
import {isReserved} from "../../../../apis/administration";
import React from "react";


function TimeSelect(props) {
  const { appointmentDate, staffId, changeTime } = props;
  const appointmentTime = getAppointmentTime();   //예약 가능한 시간을 가지고 옴
  const [possibleTime, setPossibleTime] = useState();
  const [timeSelect, setTimeSelect] = useState();

  useEffect(() => {
    
    if(appointmentDate !== "" && staffId !== "") {
      const work = async() => {
        try{
          const response = await isReserved(staffId, appointmentDate);
          setPossibleTime(response.data);
        }catch(error) {
          console.log(error.message);
        }
      }
      work();
    }
  },[props])

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
                <button className={ timeSelect === time ? `${styles.selected_time_box}` : `${styles.time_box}`} value={time} onClick={() => selectTime(time)}>{time}</button>
            </Fragment>
            ))
          }
        </div>
      </div>
    ) 
    : 
    (
      <div className={styles.time_select}>
      <div>
        {
          appointmentTime.map((time, index) => (
            <Fragment key={index}>
              <button className={ timeSelect === time ? `${styles.selected_time_box}` : `${styles.time_box}`} value={time} onClick={() => selectTime(time)}>{time}</button>
          </Fragment>
          ))
        }
      </div>
    </div>
    )}
    </>
  );
}

export default React.memo(TimeSelect);