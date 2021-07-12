import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.module.css";
import TestItem from "./TestItem";

function Test(props) {
  const {startDate} = props;
  const [appointmentHour,setAppointmentHour] = useState([]);

  const setTime = useCallback(async() => {
    try{
      const lunch_start = "13:00";
      const start_time ="10:00";
      const end_time ="18:00";
      const lunch_end = "14:00"
      const interval =30;
      let temp = start_time;
      let appointmentTime =new Array();
      let i=0;
      while(temp<end_time){
        if(!(lunch_start<temp && temp<lunch_end)){
          appointmentTime[i++] =temp;
        }
        temp =moment(moment().format("YYYY-MM-DD")+" "+temp).add(interval,'m').format("HH:mm");
      }
      setAppointmentHour(appointmentTime);      
    } catch(error){
      throw error;
    }
  })

  useEffect(() => {
    setTime();
  },[startDate])

  return(
    appointmentHour !== null ?

    <table className= {`${styles.TimeTable} table`}>
      <thead className= {styles.thead}>
        <tr>
          <th>시간</th>
          <th>검사</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {appointmentHour.map((time,index) => {
          return(
            <tr key={index}>
              <td>{time}</td>
              <TestItem startDate ={startDate} time={time}></TestItem>
            </tr>
          )
          
        })}
      </tbody>
    </table>
    :
    null
  );
}
export default Test;