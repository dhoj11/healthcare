import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.module.css";
import TestItem from "./TestItem";

function Test(props) {
  const {startDate,hospital} = props;
  const [appointmentHour,setAppointmentHour] = useState([]);

  const setTime = useCallback(async() => {
    try{
      const lunch_start =hospital.lunch_start;
      const start_time =hospital.officehour_start;
      const end_time =hospital.officehour_end;
      const lunch_end = hospital.lunch_end;
      const interval =hospital.officehour_interval;
      let temp = start_time;
      let appointmentTime =new Array();
      let i=0;
      while(temp<end_time){
        if(!(lunch_start<temp && temp<lunch_end)){
          appointmentTime[i++] =temp;
        }
        if(temp ==="23:30"){
          break;
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
              <TestItem startDate ={startDate} time={time} lunch_start={hospital.lunch_start}></TestItem>
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