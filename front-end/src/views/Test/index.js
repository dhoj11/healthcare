import React from "react";

import { useCallback, useEffect, useState } from "react";
import PatientInformationCard from "../Administration/common/PatientInformationCard";
import Search from "./Search";
import State from "./State";
import style from "./test.module.css";
import TestResult from "./TestResult";
import TestList from "./TestList";
import { getPateint, getPateintByTestListId, getTestList } from "../../apis/test";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Test(props){

  const[testList, setTestList] = useState({test_list_id:"", patient_id: "", reception_id:""}); // testListId
  const[patient, setPatient] = useState();
  const[testLists, setTestLists] = useState();
  const[isSaved, setIsSaved] = useState(false);
  const[buttonAllow, setButtonAllow] = useState(false);

  /** 
  * 검색컴포넌트에 프롭으로 함수를 전달하고 검사번호를 입력받고 arg를 전달받아 아래 동작을 처리한다.
  *
  * setPatient  - 검사리스트에서 검사번호로 환자 아이디를 찾고, 환자리스트에서 환자 정보를 가져와 환자상태 업데이트
  * setTestList - 검사번호로 검사상태변수 업데이트
  */
  const getList = async () => {
    try{
      const response = await getTestList();
      setTestLists(response.data);
    } catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getList();
  },[])

  const searchTestList = useCallback( async (arg) => {
    try{
      if(arg && arg !== ""){
        const response = await getPateintByTestListId(arg);
        setTestList(arg); 
        setPatient(response.data);
        setButtonAllow(false);
      }
  }catch(error){
    console.log(error);
  }
  },[]);

  /**
   * 환자리스트에서 환자선택시, 환자번호와, 검사번호를 전달받음
   * 
   * arg : {test_list_id: "", patient_id: ""} 
   */
  const changeTestList = useCallback( async (arg) => {
    try{
      //console.log(arg)
    if(arg && arg !== ""){
      const response = await getPateint(arg.patient_id);
      setPatient(response.data);
      setTestList({test_list_id : arg.test_list_id, patient_id: arg.patient_id, reception_id : arg.reception_id});
      setButtonAllow(true);
    }
  }catch(error){
    console.log(error);
  }
  },[]);

  const changeState = useCallback ((testList, state)=> {
    let newTestLists = [...testLists];  
    for(let index in newTestLists){
      if(newTestLists[index].test_list_id === testList.test_list_id){
        if(newTestLists[index].reception_id === testList.reception_id)
          newTestLists[index].test_list_state = state;
      }
    }
    setTestLists(newTestLists);

          // DB 접수 테이블에서 상태 바꿔주는 코드 작성

  },[testLists]);

  useEffect(()=>{
    if(testLists){
      let test = testLists.find((item)=>item.test_list_id == testList)
      if( test && test.test_list_saved === 1)
        setIsSaved(true);
      else
        setIsSaved(false);   
    }
  },[testList])
  
  return(
    <div className={style.test}>
      <div className={style.left}>
        <div className={style.search}>
          <Search searchTestList={searchTestList}/>
        </div>
        <div className={style.leftMiddle}>
          <div className={style.patientCard}>
            { patient ?
            <PatientInformationCard patient={patient}/> 
              : <div className={style.noselect}>
                 <span><FontAwesomeIcon icon={faUserCheck} className={style.selectIcon}/></span>
                 <span className={style.content}> 검사자를 선택해주세요.</span>
              </div>
            } 
            </div>
          <div className={style.State}>
            { buttonAllow ? <State testList={testList} changeState={changeState}/> : <div className={style.noState}></div> }
          </div>
        </div>
        <div className={style.testList}>
          <TestList testLists={testLists} changeTestList={changeTestList}/>
        </div>
      </div>
      <div className={style.testResult}>
        <TestResult testList={testList} isSaved={isSaved}/>
      </div>
    </div>
  );
}

export default Test;