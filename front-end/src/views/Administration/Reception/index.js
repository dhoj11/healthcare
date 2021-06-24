import {getReceptionList, getPatientList} from "../data";
import styles from "./Reception.module.css";
import { AutoSizer, List } from "react-virtualized";
import {useState} from "react";
import { useEffect } from "react";
import ListItem from "./ListItem";

function Reception(props) {
  const {selectedPatient, receptionPatientId, visitReception, finished} = props;
  const staticReceptionList = getReceptionList();
  const staticPatientList = getPatientList();
  const [receptionList, setReceptionList] = useState([]);

  //예약 후 접수
  useEffect(() => {
    console.log("예약 접수 실행");
    const newReception = receptionList.concat(staticReceptionList.filter(reception => reception.patientId === props.receptionPatientId));
    setReceptionList(newReception);
    return (() => {
      console.log("예약 접수 언마운트시 실행");
    });
  },[receptionPatientId]);

  //방문 접수 : props로 받아온 객체를 receptionList에 concat해줌
  useEffect(() => {
    console.log("방문 접수 실행");
    if(visitReception !== undefined) {
      const newReception = receptionList.concat(visitReception);
      setReceptionList(newReception);
    }
    return (() => {
      console.log("방문 접수 언마운트시 실행");
    });
  },[visitReception]);


  const listAll = () => {   //전체 클릭시 접수 리스트 상태를 다시 전체 접수 리스트로 세팅
  //setReceptionList(staticReceptionList);
};

const getAllLength = () => {  //접수 리스트의 전체 건수를 반환해줌
  return staticReceptionList.length;
};

  const listWithState = (receptionState) => {   //접수상태 클릭시 필터를 적용하여 클릭한 상태에 맞는 접수 리스트 상태를 세팅
  // const filteredReceptionList = staticReceptionList.filter(reception => reception.state === receptionState);
  // setReceptionList(filteredReceptionList);
};

  const selectPatient = (patientId) => {
  const filteredPatient = staticPatientList.filter(patient => patient.patientId === patientId);
  selectedPatient(filteredPatient[0]);
}

  return (
    <div className={styles.reception}>
    <div className="mb-1 ml-2 d-flex">
      <img className="mr-3" src="/resources/svg/clipboard-check.svg"></img> <span className="mr-3">접수</span>
      <div className="mr-2" onClick={listAll} style={{color : "#ffd43b"}}>전체 {getAllLength()} | </div>
      <div className="mr-2" onClick={()=> listWithState("완료")}>완료 | </div>
      <div className="mr-2" onClick={()=> listWithState("진료")}>진료 | </div>
      <div className="mr-2" onClick={()=> listWithState("대기")}>대기 </div>
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
        <ListItem index={index} reception={reception} selectPatient={selectPatient} finished={finished}/>
      ))}
    </div>
</div>
  );
}

export default Reception;