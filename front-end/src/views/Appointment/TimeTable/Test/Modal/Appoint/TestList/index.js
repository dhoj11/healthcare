import { useEffect, useState } from "react";
import { getTestListByPatientId } from "../../../../../../../apis/appointment";
import styles from "./index.module.css";
import TestItem from "./TestListItem";
function TestList(props) {
  const {selectPatientId,setSelectTestListItem} =props;
  const [testList,setTestList] = useState([]);
  const [selectTestItem,setSelectTestItem] = useState({
    test_list_id:[],
    test_code:[],
    reception_id:[]
  });
  
  useEffect(() => {
    setSelectTestListItem(selectTestItem);
  },[selectTestItem])

  useEffect(() => {
    if(selectPatientId){
      (async function() {
        try{
          const response = await getTestListByPatientId(selectPatientId);
          setTestList(response.data);
        } catch(error){
          throw error;
        }
      })();
    }
  },[selectPatientId])
  return(
      selectPatientId ?(
        testList.length !==0 ?
      <div className={styles.testList}>
        <div className={styles.thead}>
          <div className={styles.code}>묶음 코드</div>
          <div className={styles.testname}>검사명</div>
        </div>
        {testList.map((testItem,index) => {
          return(
            <TestItem key={index} testItem={testItem} setSelectTestItem={setSelectTestItem} selectTestItem={selectTestItem}></TestItem>
          )
        })}
        
      </div>
      :
      <div className={styles.default}>해당 환자는 검사할 항목이 없습니다.</div>)
    : 
    <div className={styles.default}>
        <img className={styles.patient_icon} src="/resources/svg/emoji-smile.svg" height="100px"/>
        <div>환자를 선택해주세요!</div>
    </div>
  );
}
export default TestList;