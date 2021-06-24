import { useCallback, useEffect, useState } from "react";
import PatientInformationCard from "../Administration/PatientInformation/PatientInformationCard";
import Search from "./Search";
import State from "./State";
import style from "./test.module.css";
import TestList from "./TestList";
import TestResult from "./TestResult";

function Test(props){

  const[testListId, setTestListId] = useState();
  const[testList, setTestList] = useState();

  const chagneTestListId = (pId) => {
    const newTestListId = pId+"";
    setTestListId(newTestListId);
  }

  const changeTestList = useCallback((arg) => {
    setTestList(arg);
  },[]);

  return(
    <div className={style.test}>
      <div className={style.left}>
        <div className={style.search}>
          <Search chagnePatiendId={chagneTestListId}/>
        </div>
        <div className={style.leftMiddle}>
          <div className={style.patientCard}>
            {/* 나중에 patientId 상태값을 prop으로 넘겨주자 */}
            <PatientInformationCard patientId={"2"}/>
          </div>
          <div className={style.State}>
            <State/>
          </div>
        </div>
        {/* 2021.06.19 TESTLIST CSS 어거지로 넣음 이건 수정 필수 
        수정안하면 해상도에 따라 틀어질 거 같음 */}
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