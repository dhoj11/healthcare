import { useEffect, useState } from "react";
import styles from "./TestListItem.module.css";

function TestListItem(props) {

  const {testCodeList, changeCheckedList, isReq, selectedTestCodes} = props;
  const [isChecked, setIsChecked] = useState(false);
  const [state, setState] = useState("대기");
  const [req, setReq] = useState(-1);

  useEffect(()=> {
    setIsChecked(false);
    console.log(testCodeList);
  },[testCodeList]);

  useEffect(() => {
    if(isReq === true) {
      selectedTestCodes.map(testCode => {
        if(testCode === testCodeList.test_code) {
          setState("요청");
        }
      })
    }
  },[isReq]);
  /**
   * 진행이면 reception_state도 진행으로 바꿔줌, test_list_id를 넘겨줘서 그 id에 해당하는 상태가 모두 완료이면 reception_state도 완료로 바꿔줌
   */

  const handleClick = () => {
    if(isChecked === true) {
      setIsChecked(false);
    }else {
      setIsChecked(true);
    }
  }

  return (
    <div className={`border-bottom d-flex ${styles.code_row}`}>
        <span className={styles.test_code_item_code}>
        {testCodeList.test_list_state === '대기'? 
          <input className="mr-1" type="checkbox" checked={isChecked} value={testCodeList.test_code} onClick={handleClick} onChange={(event)=>changeCheckedList(event, testCodeList)}/>
          :
          <input className="mr-1" type="checkbox" checked readOnly/>
         }
          {testCodeList.test_code}
        </span>
        <span className={styles.test_code_item_name}>
          {testCodeList.test_name}
        </span>
        {
          { 
            대기 : <span style={{color: "#74b816"}} className={styles.test_code_item}>{testCodeList.test_list_state}</span>,
            예약 : <span style={{color: "#495057"}} className={styles.test_code_item}>{testCodeList.test_list_state}</span>,
            요청 : <span style={{color: "#fab005"}} className={styles.test_code_item}>{testCodeList.test_list_state}</span>,
            진행 : <span style={{color: "#f03e3e"}} className={styles.test_code_item}>{testCodeList.test_list_state}</span>,
            완료 : <span style={{color: "#1c7ed6"}} className={styles.test_code_item}>{testCodeList.test_list_state}</span>
          }[testCodeList.test_list_state] //진료쪽에서 진행, 완료 상태가 들어오게끔 구현 시 state로 변경
        }
      </div>
  );
}

export default TestListItem;