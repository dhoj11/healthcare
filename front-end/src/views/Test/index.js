import { useCallback, useState } from "react";
import PatientInformationCard from "../Administration/common/PatientInformationCard";
import Search from "./Search";
import State from "./State";
import style from "./test.module.css";
import TestResult from "./TestResult";
import patients from "./data/Patients"
import TestList from "./TestList";
import TestListData from "./data/testList";

function Test(props){

  const[testList, setTestList] = useState(); 
  const[patient, setPatient] = useState();   
  
  /** 
  * 검색컴포넌트에 프롭으로 함수를 전달하고 검사번호를 입력받고 arg를 전달받아 아래 동작을 처리한다.
  *
  * setPatient  - 검사리스트에서 검사번호로 환자 아이디를 찾고, 환자리스트에서 환자 정보를 가져와 환자상태 업데이트
  * setTestList - 검사번호로 검사상태변수 업데이트
  *
  * TODO : api 요청시 setPatient에 전달되는 파라미터를 새롭게 작성해야 함. 
  *        test_list_id 로 환자객체를 요청한다.
  *        반환 형태는 {"patientId":"","name":"", "gender":"","birth":"","age":"","tel": "","recentVisit": "", "medicine": "", "disease": "", "comment": ""}}
  *        반환된 objecet를 setPatient의 파라미터로 전달
  */

  const searchTestList = useCallback((arg) => {
    if(arg && arg !== ""){
      const selectPatient = TestListData.find((item)=>item.test_list_id == arg);
      if(selectPatient !== undefined){
        const patientObject = patients.find((item)=>item.patientId == selectPatient.patient_id+"");
        if(patientObject) setPatient(patientObject);
      }
      setTestList(arg); 
    }
  },[]);

  /**
   * 환자리스트에서 환자선택시, 환자번호와, 검사번호를 전달받음
   * 
   * arg - {test_list_id: "", patient_id: ""} 
   * 
   * TODO : api 요청시 arg.patient_id 로 환자 객체 요청
   */

  const changeTestList = useCallback((arg) => {
    if(arg && arg !== ""){
      const selectPatient = patients.filter((item)=>item.patientId===arg.patient_id+"");
      setPatient(selectPatient[0]);
      setTestList(arg.test_list_id);
    }
  },[]);

  return(
    <div className={style.test}>
      <div className={style.left}>
        <div className={style.search}>
          <Search searchTestList={searchTestList}/>
        </div>
        <div className={style.leftMiddle}>
          <div className={style.patientCard}>
            <PatientInformationCard patient={patient || {"patientId":"","name":"", "gender":"","birth":"","age":"","tel": "","recentVisit": "", "medicine": "", "disease": "", "comment": ""}}/> 
          </div>
          <div className={style.State}>
            <State testList={testList}/>
          </div>
        </div>
        <div className={style.testList}>
          <TestList changeTestList={changeTestList}/>
        </div>
      </div>
      <div className={style.testResult}>
        <TestResult testList={testList}/>
      </div>
    </div>
  );
}

export default Test;