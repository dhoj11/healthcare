import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import TestItem from "./TestItem";
/*
  Title : Appointment_TimeTable_Test
  Description : 검사예약 현황(컴포넌트)을 보여주는 화면

  Date : 2021-07-10
  Author : 조운호
*/
function Test(props) {
  const {startDate,hospital} = props;
  const [appointmentHour,setAppointmentHour] = useState([]);  //병원 예약 가능 시간대
  const client = useSelector(state => state.mqttReducer.client);

  /*
    # 현재 병원의 근무시간 , 종료시간 , 예약텀, 점심시간에 따른 예약가능 시간대 설정
      ex) 근무시간: 09:00~18:00  예약텀: 30분
          => [09:00,09:30,10:00,10:30  ...]
  */
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

  /*
    # Mqtt 메세지 도착
     1. 현재페이지 리렌더링 메세지 도착시 리렌더링
  */
  const MqttBroker = () => {
    client.onMessageArrived = (msg) => {
      let message = JSON.parse(msg.payloadString);
      message = message.content.split('/');
      if(message[0] === "rerender" && message[1] === "Appointment_TimeTable_Test"){
        setTime();
      }
      
    }
  }

  useEffect(() => {
    setTime();
    //새로 고침하면 진료 페이지로 가기때문에 !client 하지 않아도 됨
    MqttBroker();
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
              <TestItem startDate ={startDate} time={time} lunch_start={hospital.lunch_start} appointmentHour={appointmentHour}></TestItem>
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