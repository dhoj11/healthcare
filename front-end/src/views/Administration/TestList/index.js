import styles from "./TestList.module.css";
import {getTestPatientList, getTestCodeList} from "../data";
import { AutoSizer, List } from "react-virtualized";
import { useState, useEffect } from "react";
import AppointmentWithTestModal from "./AppointmentWithTestModal";
import TestPatientListItem from "./TestPatientListItem";
import RequestTest from "./RequestTest";
import moment from "moment";

function TestList(props) {

  const {testAppointmentId} = props;
  // 검사 환자 리스트와 그 환자에 해당하는 검사리스트를 가지고옴
  const staticTestPatientList = getTestPatientList();
  const staticTestCodeList = getTestCodeList();
  
  const [testPatientList, setTestPatientList] = useState([]);    //모든 검사 환자 리스트를 초기 상태로 선언
  const [testCodeList, setTestCodeList] = useState([]);   //검사 리스트 빈 배열로 초기 상태 선언
  const [appointmentTestCode, setAppointmentTestCode] = useState([]);   //예약이 필요한 검사 리스트를 담을 상태
  const [patientId, setPatientId] = useState();
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [reqTestModalOpen, setReqTestModalOpen] = useState(false);

  useEffect(() => {
    console.log("검사 접수 실행");
    const newTest = testPatientList.concat(staticTestPatientList.filter(test => test.appointment_id === testAppointmentId));
    setTestPatientList(newTest);
    return (() => {
      console.log("검사 접수 언마운트시 실행");
    });
  },[testAppointmentId]);

  const listAll = () => {   //전체 클릭시 검사 환자 리스트 상태를 다시 당일 검사 환자 리스트로 세팅
    //setTestPatientList(staticTestPatientList);
  };

  const getAllLength = () => {  //검사 환자 리스트의 전체 건수를 반환해줌
    return testPatientList.length;
  };

  const listWithState = (testState) => {   //검사상태 클릭시 필터를 적용하여 클릭한 상태에 맞는 검사 환자 리스트 상태를 다시 세팅
    //const filteredTestPatientList = staticTestPatientList.filter(testPatient => testPatient.state === testState);
    //setTestPatientList(filteredTestPatientList);
  };

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

  const showTestList = (patientId) => {
    const testList = staticTestCodeList.filter(testCode => testCode.patient_id === patientId);
    setTestCodeList(testList);
    setAppointmentTestCode([]);   //이전에 환자의 예약 검사 리스트를 빈배열로 세팅
    setPatientId(patientId);
  }
  const changeCheckedList = (event) => {
    if(event.target.checked) {
      setAppointmentTestCode(testCode => (appointmentTestCode.concat(event.target.value)));
    }
    else {
      setAppointmentTestCode(prev => (appointmentTestCode.filter(item => item !== event.target.value)));
    }
  }

  const testCodeRowRenderer = ({index, key, style}) => {
    return (
      <div key={key} style={style} className={`border-bottom d-flex ${styles.code_row}`}>
        <span className={styles.test_code_item}>
          <input className="mr-1" type="checkbox" value={testCodeList[index].test_code} onChange={changeCheckedList}/>
          {testCodeList[index].test_code}
        </span>
        <span className={styles.test_code_item}>
          {testCodeList[index].test_name}
        </span>
        <span className={styles.test_code_item}>
          {testCodeList[index].staff_name}
        </span>
        {
          { 
            대기 : <span style={{color: "#74b816"}}className={styles.test_code_item}>{testCodeList[index].test_list_state}</span>,
            진행중 : <span style={{color: "#f03e3e"}}className={styles.test_code_item}>{testCodeList[index].test_list_state}</span>,
            완료 : <span style={{color: "#1c7ed6"}}className={styles.test_code_item}>{testCodeList[index].test_list_state}</span>
          }[testCodeList[index].test_list_state]
        }
      </div>
    );
  };

  return (
    <div className={styles.test_list}>
      <div className={styles.test_patient_list}>
          <div className="mb-2 ml-2 d-flex">
            <img className="mr-3" src="/resources/svg/clipboard-data.svg"></img><span className="mr-3">검사</span>
            <div className="mr-2" onClick={listAll} style={{color : "#ffd43b"}}>전체 {getAllLength()} 건 </div>
            {/* <div className="mr-2" onClick={()=> listWithState("완료")}>완료  | </div>
            <div className="mr-2" onClick={()=> listWithState("진행중")}>진행중  | </div>
            <div className="mr-2" onClick={()=> listWithState("대기")}>대기 </div> */}
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
            testPatientList.map((testPatient,index) => (
              <TestPatientListItem index={index} testPatient={testPatient} showTestList={showTestList}/>
            ))
          }
        </div>
      </div>
      <div className={styles.test_code_list}>
        <div className="mb-1 ml-2 d-flex">
          <img className="mr-3" src="/resources/svg/card-list.svg"></img>
          <span className="mr-2">검사 목록</span>
          <div className={styles.test_button}>
            <button type="button" className="btn btn-sm btn-outline-secondary mr-2" onClick={openAppointmentModal}>검사예약</button>
            <AppointmentWithTestModal patientId={patientId} testCodes={appointmentTestCode} isOpen={appointmentModalOpen} close={closeAppointmentModal}/>
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={openReqTestModal}>검사요청</button>
            <RequestTest patientId={patientId} testCodes={appointmentTestCode} isOpen={reqTestModalOpen} close={closeReqTestModal}/>
          </div>
        </div>
        <div className="d-flex bg-light">
          <span className={`border ${styles.test_code_border}`}>
            묶음코드
          </span>
          <span className={`border ${styles.test_code_border}`}>
            검사명
          </span>
          <span className={`border ${styles.test_code_border}`}>
            검사담당자
          </span>
          <span className={`border ${styles.test_code_border}`}>
            상태
          </span>
      </div>
          <AutoSizer disableHeight>
          {({width, height}) => {
            return (
              <List width={width} height={300} 
                    list={testCodeList} 
                    rowCount={testCodeList.length}
                    rowHeight={40}
                    rowRenderer={testCodeRowRenderer}
                    overscanRowCount={5}/> //* overscanRowCount: 미리 5개의 여유분을 만들어 놔서 스크롤 시 로딩을 줄여줌*/}
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
}

export default TestList;