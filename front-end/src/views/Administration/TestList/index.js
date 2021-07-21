import styles from "./TestList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import AppointmentWithTestModal from "./AppointmentWithTestModal";
import TestPatientListItem from "./TestPatientListItem";
import TestListItem from "./TestListItem";
import RequestTest from "./RequestTest";
import {getReceptionList, getTestCodesByReception,getTestReceptionListByState} from "../../../apis/administration";

function TestList(props) {

  const {mqttMessage, dayAppointment, testAppointmentId, selectedPatient} = props;
  
  const [testPatientList, setTestPatientList] = useState([]);    //모든 검사 환자 리스트를 초기 상태로 선언
  const [testCodeList, setTestCodeList] = useState([]);   //검사 리스트 빈 배열로 초기 상태 선언
  const [selectedTestCodes, setSelectedTestCodes] = useState([]);   //예약이 필요한 검사 리스트를 담을 상태
  const [patientId, setPatientId] = useState();   //선택한 환자 id
  const [patientName, setPatientName] = useState();
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false); 
  const [reqTestModalOpen, setReqTestModalOpen] = useState(false);
  const [rerenderer, setRerenderer] = useState();
  const [state, setState] = useState("");
  const [selectedReceptionId, setSelectedReceptionId] = useState("");   //검사 페이지에서 상태가 바뀔 때 현재 보고 있는 환자의 검사 목록과 같을 때만 리렌더링 해주게끔 하기 위해
  const [searchedPatientName, setSearchedPatientName] = useState("");
  const [searchedList, setSearchedList] = useState([]);

  //예약 후 검사 접수
  useEffect(() => {
    //비동기 통신
    const work = async () => {
      try {
        const response = await getReceptionList("검사");
        setTestPatientList(response.data);
        setSearchedList(response.data);
        setState("전체");
      } catch (error) {
        console.log(error.message);
        //history.push("./error"); 에러 컴포넌트로 이동
      }
    };
    work();
  },[testAppointmentId]);
  
  //검사 요청 시 리렌더링
  useEffect(() => {
    //비동기 통신
    if(rerenderer !== undefined) {
      const work = async () => {
        try {
          let response = await getReceptionList("검사");
          setTestPatientList(response.data);
          setSearchedList(response.data);
          response = await getTestCodesByReception(rerenderer.reception_id);
          setTestCodeList(response.data);
          setSelectedTestCodes([]);
          //setState("전체");
        } catch (error) {
          console.log(error.message);
          //history.push("./error"); 에러 컴포넌트로 이동
        }
      };
      work();
  }
  },[rerenderer])

  useEffect(() => {
    if(mqttMessage !== "") {
      if(mqttMessage.message[0] === "rerender" && mqttMessage.message[1] === "Administration_TestList") {
        console.log("검사 메시지 받았니?");
        if(state === "전체") {
          getAllList();
        }else {
          listWithState(state);
        }
        console.log(selectedReceptionId);
        console.log(mqttMessage.message[2]);
        if(mqttMessage.message[2] !== undefined && mqttMessage.message[2] === String(selectedReceptionId)) {
          console.log("reception_id 들어오고 현재 보고 있는 사람이구")
          const work = async () => {
            try {
              let response = await getTestCodesByReception(mqttMessage.message[2]);
              setTestCodeList(response.data);
              //setState("전체");
            } catch (error) {
              console.log(error.message);
            }
          };
          work();
        }
      }
    }
  },[mqttMessage])

  const openAppointmentModal = () => {
    setAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setAppointmentModalOpen(false);
  };

  const openReqTestModal = () => {
    setReqTestModalOpen(true);
  };

  const closeReqTestModal = () => {
    setReqTestModalOpen(false);
  };

  const getLength = () => {  //검사 환자 리스트의 전체 건수를 반환해줌
    return testPatientList.length;
  };

  const getAllList = async() => {
    try {
      console.log("getAllList 실행")
        const response = await getReceptionList("검사");
        setTestPatientList(response.data);
        setSearchedList(response.data);
        setSearchedPatientName("");
        setState("전체");
      } catch (error) {
        console.log(error.message);
      }
  };

  const listWithState = async(testReceptionState) => {
    try{
      const response = await getTestReceptionListByState(testReceptionState);
      setTestPatientList(response.data);
      setSearchedList(response.data);
      setSearchedPatientName("");
      setState(testReceptionState);
    }catch(error) {
      console.log(error.message);
    }
  }

  const showAppointmentTestList = async(reception_id, patientId, patient_name) => {
    try{
      const response = await getTestCodesByReception(reception_id);
      setTestCodeList(response.data);
      setSelectedReceptionId(reception_id);
    }catch(error) {
      console.log(error.message);
    }
    setPatientName(patient_name);
    setSelectedTestCodes([]);   //이전에 선택된 검사 리스트를 빈 배열로 세팅
    selectedPatient(patientId);
  }
  
  const changeCheckedList = (event, testCode) => {
    if(event.target.checked) {
      setSelectedTestCodes(selectedTestCodes.concat(testCode));
    }
    else {
      setSelectedTestCodes(prev => (selectedTestCodes.filter(item => item !== testCode)));
    }
  }

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchedPatientName(event.target.value);
  }

  const search = () => {
    setTestPatientList(searchedList.filter(testPatient => testPatient.patient_name === searchedPatientName));
    setState("전체");
  }

  return (
    <div className={styles.test_list}>
      <div className={styles.test_patient_list}>
          {/* <div className="mb-2 ml-2 d-flex"> */}
          <div className={styles.test_patient_list_title}>
            <img className="mr-2" src="/resources/svg/clipboard-data.svg"></img><span className="mr-1">검사</span>
            <div className={state === "전체" ? `${styles.test_state_selected}` : `${styles.test_state}`} onClick={getAllList} >전체 </div><div>|</div>
            <div className={state === "예약" ? `${styles.test_state_selected}` : `${styles.test_state}`} onClick={()=> listWithState("예약")}>예약</div><div>|</div>
            <div className={state === "대기" ? `${styles.test_state_selected}` : `${styles.test_state}`} onClick={()=> listWithState("대기")}>대기</div><div>|</div>
            <div className={state === "진행" ? `${styles.test_state_selected}` : `${styles.test_state}`} onClick={()=> listWithState("진행")}>진행</div><div>|</div>
            <div className={state === "완료" ? `${styles.test_state_selected}` : `${styles.test_state}`} onClick={()=> listWithState("완료")}>완료</div><div>|</div>
            <div className={styles.length} >총 {getLength()} 건</div>
            <div className={styles.patient_name_wrapper}>
              <input className={styles.patient_name} placeholder="name" type="text" value={searchedPatientName} onChange={handleChange}/>
              <button type="button" className={styles.patient_name_button} onClick={search}>검색</button>
          </div>
          </div>
          <div className="d-flex bg-light">
          <span className={`border ${styles.test_border}`}>
            순서
          </span>
          <span className={`border ${styles.test_border}`}>
            접수시간
          </span>
          <span className={`border ${styles.test_border}`}>
            이름
          </span>
          <span className={`border ${styles.test_border}`}>
            담당의
          </span>
          <span className={`border ${styles.test_border}`}>
            상태
          </span>
        </div>
        <div className={styles.patient_list_content}>
          {
            testPatientList.map((testPatient, index) => (
              <TestPatientListItem key={index} testCodeList={testCodeList} index={index} testPatient={testPatient} showAppointmentTestList={showAppointmentTestList}/>
            ))
          }
        </div>
      </div>
      <div className={styles.test_code_list}>
        <div className="mb-1 ml-2 d-flex">
          <img className="mr-3" src="/resources/svg/card-list.svg"></img>
          <span className={styles.test_code_list_title}>검사 목록</span>
          <div className={styles.test_patient_name}>
            <FontAwesomeIcon icon={faUser} className="mr-1"/>
            <span >{patientName}</span>
          </div>
          <div className={styles.test_button}>
            <button type="button" className="btn btn-sm btn-outline-secondary mr-2" onClick={openAppointmentModal}>검사예약</button>
            <AppointmentWithTestModal dayAppointment={dayAppointment} setSelectedTestCodes={setSelectedTestCodes} setRerenderer={setRerenderer} testCodes={selectedTestCodes} isOpen={appointmentModalOpen} close={closeAppointmentModal}/>
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={openReqTestModal}>검사요청</button>
            <RequestTest setSelectedTestCodes={setSelectedTestCodes} setRerenderer={setRerenderer} patientId={patientId} testCodes={selectedTestCodes} isOpen={reqTestModalOpen} close={closeReqTestModal} />
          </div>
        </div>
        <div className="d-flex bg-light">
          <span className={`border ${styles.test_code_border}`}>
            묶음코드
          </span>
          <span className={`border ${styles.test_code_border_name}`}>
            검사명
          </span>
          <span className={`border ${styles.test_code_border}`}>
            상태
          </span>
      </div>
      <div className={styles.patient_list_content}>
          {
            testCodeList.map((testCodes, index) => (
              <TestListItem key={index} testCodeList={testCodes} changeCheckedList={changeCheckedList} selectedTestCodes={selectedTestCodes} />
            ))
          }
      </div>
      </div>
    </div>
  );
}

export default TestList;