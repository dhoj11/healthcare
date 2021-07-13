import { useEffect, useState } from "react";
import { ColumnSizer } from "react-virtualized";
import { getTestByCode } from "../../../../../../../../apis/appointment";
import styles from "./index.module.css";
function TestListItem(props) {
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
  },[props]);

  //체크박스 선택하거나 선택해제 했을 때 testcode 값 배열에 저장 및 삭제 (concat,filter)
  const handleChange = (event) => {
    if(event.target.checked){
      setSelectTestItem(prevSelectTestItem => ({
        test_list_id:prevSelectTestItem.test_list_id.concat(testItem.test_list_id),
        test_code: prevSelectTestItem.test_code.concat(event.target.value)
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
      //checkbox에 해제 된 test_list_id 값 제거
      temp.splice(idx,1);
      setSelectTestItem(prevSelectTestItem => ({
        test_list_id: temp,
        test_code:prevSelectTestItem.test_code.filter(item => item!==event.target.value)
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