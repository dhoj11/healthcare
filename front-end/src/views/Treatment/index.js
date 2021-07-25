import React from "react";
import { useCallback, useEffect, useState } from "react";
import Date from "./common/Date";
import Patients from "./common/Patients";
import style from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createSetPatientAction, createSetTreatmentAction, createSetWorkActoin } from "../../redux/treatment-reducer";
import Work from "./Work";

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.min.css';
import Search from "./Search";

/**
 * 진료 최상위 컴포넌트
 */
function Treatment(props){

  const client = useSelector((state) => state.mqttReducer.client);
  const staff_id = useSelector((state) => state.authReducer.staff_id);

  const [work, setWork] = useState({});
  const [mqttRerenderMessage, SetMqttRerenderMessage] = useState("");
  const [mqttAlertMessage, SetmqttAlertMessage] = useState("");

  const dispatch = useDispatch();

  /**
   * 진료 Mqtt 브로커
   * 
   * 메세지를 수신한후 rerender, alert 메세지를 구분하여 상태로 저장
   * 리렌더 대상 컴포넌트에 프롭으로 전달 
   */
  const MqttBroker = () => {
    client.onMessageArrived = (msg) => {
      let message = JSON.parse(msg.payloadString);
      console.log(message);
      let topic = message.topic.split('/');
     if(topic[3] === staff_id ){
        message = message.content.split('/');
        if(message[0] === "rerender" && message[1] === "Treatment_Patients")
          SetMqttRerenderMessage({message});
        if(message[0] === "alert" && message[1] === "Treatment")
          SetmqttAlertMessage(message[2]);
      }
    }
  };

  useEffect(()=>{
    if(client!=="") MqttBroker();
  },[client])


  /**
   * Mqtt alert 메세지
   * 
   * 수신한 mqtt 메세지가 alert일 경우 내용을 표시함
   */
  useEffect(()=>{
      if(mqttAlertMessage !=""){
        store.addNotification({
          title: mqttAlertMessage,
          message: " ",
          type: "info",                     
          container: 'bottom-right',              
          animationIn: ["animate__animated", "animate__bounceIn"],     
          animationOut: ["animate__animated", "animate__bounceOut"],   
          dismiss: {
            duration: 0,
            click: true
          }
        })
      }
  },[mqttAlertMessage])
  
  useEffect(() => {
    setWork("TreatmentRecord");
  },[]);

  const changeWork = useCallback((work) => {
    setWork(work);
  },[]);

  useEffect(()=> {
    dispatch(createSetWorkActoin(work));
  },[work])

  useEffect(()=>{
    dispatch(createSetTreatmentAction(""));
    dispatch(createSetPatientAction(""));
  },[])

  return(
    <div className={style.treatmentMain}>
      <div className={style.selectWork}>
        <div className={style.select}>
          <div className={work === "TreatmentRecord" ? `${style.record}` : `${style.item}` } onClick={() => changeWork("TreatmentRecord")}>진료</div>
          <div className={work === "TestResult" ? `${style.TestResult}` : `${style.item}` } onClick={() => changeWork("TestResult")}>검사결과</div>
        </div>
        <div className={style.search}>
          <Search/>
        </div>
      </div>
      <div className={style.treatmentContent}>
        <Date/>
        <div className={style.treatmentWorkArea}>
          <Work work={work}/>
        </div>
        <Patients mqttRerenderMessage={mqttRerenderMessage}/>
      </div>
    </div>
  );
}

export default Treatment;