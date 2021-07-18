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

  //예약 후 검사 접수
  useEffect(() => {
    //비동기 통신
    const work = async () => {
      try {
        const response = await getReceptionList("검사");
        setTestPatientList(response.data);
        setState("전체");
      } catch (error) {
        console.log(error.message);
        //history.push("./error"); 에러 컴포넌트로 이동
      }
    };
    work();
  },[testAppointmentId]);

  useEffect(() => {
    //비동기 통신
    if(rerenderer !== undefined) {
      const work = async () => {
        try {
          let response = await getReceptionList("검사");
          setTestPatientList(response.data);
          response = await getTestCodesByReception(rerenderer.reception_id);
          setTestCodeList(response.data);
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
        if(mqttMessage.message[2] !== null) {
          console.log(mqttMessage.message[2]);
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
        console.log(response.data);
        setState("전체");
      } catch (error) {
        console.log(error.message);
      }
  };

  const listWithState = async(testReceptionState) => {
    try{
      const response = await getTestReceptionListByState(testReceptionState);
      setTestPatientList(response.data);
      setState(testReceptionState);
    }catch(error) {
      console.log(error.message);
    }
  }

  const showAppointmentTestList = async(reception_id, patientId, patient_name) => {
    try{
      const response = await getTestCodesByReception(reception_id);
      setTestCodeList(response.data);
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

  return (
    <div className={styles.test_list}>
      <div className={styles.test_patient_list}>
          {/* <div className="mb-2 ml-2 d-flex"> */}
          <div className={styles.test_patient_list_title}>
            <img className="mr-3" src="/resources/svg/clipboard-data.svg"></img><span className="mr-3">검사</span>
            <div className={styles.reception_state} onClick={getAllList} >전체 &nbsp;| </div>
            <div className={styles.reception_state} onClick={()=> listWithState("예약")}>예약 &nbsp;| </div>
            <div className={styles.reception_state} onClick={()=> listWithState("대기")}>대기 &nbsp;| </div>
            <div className={styles.reception_state} onClick={()=> listWithState("진행")}>진행 &nbsp;| </div>
            <div className={styles.reception_state} onClick={()=> listWithState("완료")}>완료</div>
            <div className={styles.length} >{state} : 총 {getLength()} 건</div>
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
              <TestPatientListItem testCodeList={testCodeList} key={index} index={index} testPatient={testPatient} showAppointmentTestList={showAppointmentTestList}/>
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
                <TestListItem testCodeList={testCodes} changeCheckedList={changeCheckedList} selectedTestCodes={selectedTestCodes} />
            ))
          }
      </div>
      </div>
    </div>
  );
}

export default TestList;