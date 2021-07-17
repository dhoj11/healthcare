import { useEffect, useState } from "react";
import { ColumnSizer } from "react-virtualized";
import { getTestByCode } from "../../../../../../../../apis/appointment";
import styles from "./index.module.css";

/*
  Title : Appointment_TimeTable_Test_Modal_Appoint_TestList
  Description : 현재 선택한 환자의 검사해야 할 항목

  Date : 2021-07-10
  Author : 조운호
*/
function TestListItem(props) {
  //setSelectTestItem : 체크박스 선택/해제 했을때 항목을 검사 예약 컴포넌트쪽으로 보내기위함
  const {testItem,setSelectTestItem,selectTestItem} = props;
  const [test,setTest]=useState(null);

  useEffect(() => {
    (async function(){
      try{
        const response = await getTestByCode(testItem.test_code);
        setTest(response.data);
      } catch(error){
        throw error;
      }
    })();
  },[]);

  /*
    # 체크박스 선택,해제 했을 때 해당 code 배열에 저장 및 삭제(concat,filter)
      1. 같은 값이 존재할 수 있기에 index를 구해서 구현
      2. 구한 배열을 검사 예약 컴포넌트쪽으로 보냄
  */
  const handleChange = (event) => {
    if(event.target.checked){
      setSelectTestItem(prevSelectTestItem => ({
        test_list_id:prevSelectTestItem.test_list_id.concat(testItem.test_list_id),
        test_code: prevSelectTestItem.test_code.concat(event.target.value),
        reception_id:prevSelectTestItem.reception_id.concat(testItem.reception_id)
      }        
      ))
    }else{
      let idx;
      //testcode값에 해당하는 test_list_id값의 index값 구하기
      selectTestItem.test_code.map((item,index) => {
        if(item===event.target.value){
          idx=index;
        }
      })
      let temp=selectTestItem.test_list_id;
      let tempReceptionId=selectTestItem.reception_id;
      //checkbox에 해제 된 test_list_id 값 제거
      temp.splice(idx,1);
      tempReceptionId.splice(idx,1);
      setSelectTestItem(prevSelectTestItem => ({
        test_list_id: temp,
        test_code:prevSelectTestItem.test_code.filter(item => item!==event.target.value),
        reception_id:tempReceptionId
      }
      ))
    }
    
  }

  
  return(
      test ?
        <div className={styles.thead}>
        <div className={styles.code}>
          <input type="checkbox" value={testItem.test_code} className="mr-2" onChange={handleChange}></input>
          <span>{test.test_code}</span>
        </div>
        <div className={styles.testname}>{test.test_name}</div>
      </div>
      :
      null
    
  );
}
export default TestListItem;