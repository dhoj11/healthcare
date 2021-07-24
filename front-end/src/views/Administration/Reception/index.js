import styles from "./Reception.module.css";
import {useRef, useState} from "react";
import { useEffect } from "react";
import ListItem from "./ListItem";
import {getReceptionList, getReceptionListByState} from "../../../apis/administration";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

function Reception(props) {
  const {mqttMessage, selectedPatient, receptionAppointmentId, visitReception, canceled} = props;
  const [receptionList, setReceptionList] = useState([]);
  const [state, setState] = useState("");
  const [patientName, setPatientName] = useState("");
  const [searchedList, setSearchedList] = useState([]);

  //예약 후 접수
  useEffect(() => {
    //비동기 통신
    const work = async () => {
      try {
        const response = await getReceptionList("진료");
        setReceptionList(response.data);
        setSearchedList(response.data);
        setState("전체");
      } catch (error) {
        console.log(error.message);
        //history.push("./error"); 에러 컴포넌트로 이동
      }
    };
    work();
  },[receptionAppointmentId]);

  useEffect(() => {
    if(mqttMessage !=="") {
      if(mqttMessage.message[0] === "rerender" && mqttMessage.message[1] === "Administration_Reception") {
        if(state === "전체") {
          getAllList();
        }else {
          listWithState(state);
        }
      }
  }
  },[mqttMessage])

  //방문 접수 : props로 받아온 객체를 receptionList에 concat해줌
  useEffect(() => {
    //비동기 통신
    const work = async () => {
      try {
        const response = await getReceptionList("진료");
        setReceptionList(response.data);
        setSearchedList(response.data);
        setState("전체");
      } catch (error) {
        console.log(error.message);
        //history.push("./error"); 에러 컴포넌트로 이동
      }
    };
    work();
  },[visitReception]);

  const getAllList = async() => {
    try {
      const response = await getReceptionList("진료");
      setReceptionList(response.data);
      setSearchedList(response.data);
      setState("전체");
      setPatientName("");
    } catch (error) {
      console.log(error.message);
    }
  };

const getLength = () => {  //접수 리스트의 건 수를 반환해줌
  return receptionList.length;
};

const listWithState = async(receptionState) => {
  try{
    const response = await getReceptionListByState(receptionState);
    setReceptionList(response.data);
    setState(receptionState);
    setPatientName("");
  }catch(error) {
    console.log(error.message);
  }
};

const selectPatient = (patientId) => { 
  selectedPatient(patientId);
}

const handleChange = (event) => {
  console.log(event.target.value);
  setPatientName(event.target.value);
}

const search = () => {
  setReceptionList(searchedList.filter(reception => reception.patient_name === patientName));
  setState("전체");
}

return (
  <>
  <div className={styles.reception}>
  <div className="mb-1 ml-2 d-flex">
    <img className="mr-2" src="/resources/svg/clipboard-check.svg"></img> <span className={`${styles.title} mr-2`}>접수</span>
    <div className={state === "전체" ? `${styles.reception_state_selected}` : `${styles.reception_state}`} onClick={getAllList} >전체 </div><div>|</div>
    <div className={state === "대기" ? `${styles.reception_state_selected}` : `${styles.reception_state}`} onClick={()=> listWithState("대기")}>대기</div><div>|</div>
    <div className={state === "진료" ? `${styles.reception_state_selected}` : `${styles.reception_state}`} onClick={()=> listWithState("진료")}>진료</div><div>|</div>
    <div className={state === "완료" ? `${styles.reception_state_selected}` : `${styles.reception_state}`} onClick={()=> listWithState("완료")}>완료</div><div>|</div>
    <div className={state === "취소" ? `${styles.reception_state_selected}` : `${styles.reception_state}`} onClick={()=> listWithState("취소")}>취소</div><div>|</div>
    <div className={styles.length} >총 {getLength()} 건</div>
    <div className={styles.patient_name_wrapper}>
      <input className={styles.patient_name} placeholder="name" type="text" value={patientName} onChange={handleChange}/>
      <button type="button" className={styles.patient_name_button} onClick={search}>검색</button>
    </div>
  </div>
  <div className="d-flex bg-light">
    <span className={`border ${styles.reception_border}`}>
      순서
    </span>
    <span className={`border ${styles.reception_border}`}>
      접수시간
    </span>
    <span className={`border ${styles.reception_border}`}>
      이름
    </span>
    <span className={`border ${styles.reception_border}`}>
      진료내용
    </span>
    <span className={`border ${styles.reception_border}`}>
      담당의
    </span>
    <span className={`border ${styles.reception_border}`}>
      상태
    </span>
  </div>
  <div className={styles.reception_content}>
    {receptionList.map((reception, index)=>(
      <ListItem key={index} index={index} reception={reception} selectPatient={selectPatient} finished={canceled}/>
    ))}
  </div>
</div>
</>
  );
}

export default React.memo(Reception);