import styles from "./TimeSelector.module.css";
import {Fragment, useState, useEffect} from "react";
import {isReserved} from "../../../../../apis/administration";
import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";


function TimeSelector(props) {
  const { possibleTime, appointmentDate, staffId, changeTime } = props;
  
  //const [possibleTime, setPossibleTime] = useState();
  const [timeSelect, setTimeSelect] = useState();
  const [loading, setLoading] = useState(false);
  const hospital_code = useSelector(state => state.authReducer.hospital_code);

  // useEffect(() => {
  //   setLoading(true);
  //   if(appointmentDate !== "" && staffId !== "") {
  //     const work = async() => {
  //       try{
  //         const response = await isReserved(hospital_code, staffId, appointmentDate);
  //         setPossibleTime(response.data);
  //       }catch(error) {
  //         console.log(error.message);
  //       }
  //     }
  //     work();
  //   }
  //   return(() => {
  //     setLoading(false);
  //   })
  // },[props]);

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
              <>
              {moment(appointmentDate+" "+time).format("YYYY-MM-DD HH:mm") > moment().format("YYYY-MM-DD HH:mm")? 
              ( <Fragment key={index}>
                <button className={ timeSelect === time ? `${styles.selected_time_box}` : `${styles.time_box}`} value={time} onClick={() => selectTime(time)}>{time}</button>
            </Fragment>)
            :
            (null)}
             
            </>
            ))
          }
        </div>
      </div>
    ) 
    : 
    (
     <div>나오니?</div>
    )}
    </>
  );
}

export default TimeSelector;