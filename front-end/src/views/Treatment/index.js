import React from "react";
import { useCallback, useEffect, useState } from "react";
import Date from "./common/Date";
import Patients from "./common/Patients";
import style from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createSetPatientAction, createSetTreatmentAction, createSetWorkActoin } from "../../redux/treatment-reducer";
import Work from "./Work";

/**
 * 환자, 진료 선택 후 작업영역 탭으로 전환
 */

function Treatment(props){

  const [work, setWork] = useState({});
  const dispatch = useDispatch();

  const client = useSelector((state) => state.mqttReducer.client);
  const [mqttRerenderMessage, SetMqttRerenderMessage] = useState("");
  const [mattAlertMessage, SetmattAlertMessage] = useState("");

  const MqttBroker = () => {
    client.onMessageArrived = (msg) => {
      let message = JSON.parse(msg.payloadString);
      message = message.content.split('/');
      if(message[0] === "rerender")
        SetMqttRerenderMessage({message});
      if(message[0] === "alert")
        SetmattAlertMessage({message});
    }
  };
  
  useEffect(()=>{
    if(client!=="") MqttBroker();
  },[client])

  useEffect(() => {
    setWork("TreatmentRecord");
  },[]);

  const changeWork = useCallback((work) => {
    setWork(work);
  }, []);

  useEffect(()=> {
    dispatch(createSetWorkActoin(work));
  }, [work])

  useEffect(()=>{
    dispatch(createSetTreatmentAction(""));
    dispatch(createSetPatientAction(""));
  },[])

  return(
    <div className={style.treatmentMain}>
      <div className={style.selectWork}>
        <div className={work === "TreatmentRecord" ? `${style.record}` : `${style.item}` } onClick={() => changeWork("TreatmentRecord")}>진료</div>
        <div className={work === "TestResult" ? `${style.TestResult}` : `${style.item}` } onClick={() => changeWork("TestResult")}>검사결과</div>
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