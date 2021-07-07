import styles from "./Reception.module.css";
import {useState} from "react";
import { useEffect } from "react";
import ListItem from "./ListItem";
import {getReceptionList, getReceptionListByState} from "../../../apis/administration";

function Reception(props) {
  const {selectedPatient, receptionAppointmentId, visitReception, finished} = props;
  const [receptionList, setReceptionList] = useState([]);
  const [state, setState] = useState("");

  //예약 후 접수
  useEffect(() => {
    //비동기 통신
    const work = async () => {
      try {
        const response = await getReceptionList();
        setReceptionList(response.data);
        setState("전체");
      } catch (error) {
        console.log(error.message);
        //history.push("./error"); 에러 컴포넌트로 이동
      }
    };
    work();
  },[receptionAppointmentId]);

  //방문 접수 : props로 받아온 객체를 receptionList에 concat해줌
  useEffect(() => {
    //비동기 통신
    const work = async () => {
      try {
        const response = await getReceptionList();
        setReceptionList(response.data);
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
      const response = await getReceptionList();
      setReceptionList(response.data);
      setState("전체");
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
  }catch(error) {
    console.log(error.message);
  }
};

const selectPatient = (patientId) => { 
  selectedPatient(patientId);
}

return (
  <>
  <div className={styles.reception}>
  <div className="mb-1 ml-2 d-flex">
    <img className="mr-3" src="/resources/svg/clipboard-check.svg"></img> <span className="mr-3">접수</span>
    <div className={styles.reception_state} onClick={getAllList} >전체 &nbsp;| </div>
    <div className={styles.reception_state} onClick={()=> listWithState("대기")}>대기 &nbsp;| </div>
    <div className={styles.reception_state} onClick={()=> listWithState("진료")}>진료 &nbsp;| </div>
    <div className={styles.reception_state} onClick={()=> listWithState("완료")}>완료 &nbsp;| </div>
    <div className={styles.reception_state} onClick={()=> listWithState("취소")}>취소 </div>
    <div className={styles.length} >{state} : 총 {getLength()} 건</div>
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
      <ListItem key={index} index={index} reception={reception} selectPatient={selectPatient} finished={finished}/>
    ))}
  </div>
</div>
</>
  );
}

export default Reception;