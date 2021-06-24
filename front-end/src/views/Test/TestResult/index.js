import { useEffect, useState } from "react";
import style from "./TestResult.module.css";

// 후에는 검사번호로 불러오기
import testResultsData from "../data/testResults"

function TestResult(props){

  let prevItem; // 한 묶음코드 표시 위함 index 역할

  const[testList, setTestList] = useState();    // 왼쪽 테이블 대기 목록
  const[testResults, setTestResults] = useState([]); // 왼쪽 테이블에서 하나의 검사를 선택했을 때 오른쪽에 표시되는 검사 목록
  
  let inputResults = [];

  useEffect(()=>{
    setTestList(props.testList);
  },[props])

  useEffect(()=>{
    // testResults 가 만들어지는 시점은 testList가 만들어지는 시점과 같고,
    // 진료에서 검사를 의뢰할 때 만들어진다.

    // 스프링으로 요청할 땐 검사번호로 요청하자.
    const newTestResults = testResultsData.filter( item => { return item.test_list_id === testList});
    setTestResults(newTestResults);
  },[testList]);


  useEffect(()=>{
    
    inputResults = []
    const newTestResults = testResultsData.filter( item => { return item.test_list_id === testList});
    
    for(let index in newTestResults){
      inputResults.push(
        { 
          test_code: newTestResults[index].test_code,
          test_list_id : newTestResults[index].test_list_id,
          test_details_id : newTestResults[index].test_details_id,
          test_result_value : newTestResults[index].test_result_value
        });
    }
    console.log(inputResults);

  },[testResults])


  const handleChange = (event, index) =>{
    let inputIndex = inputResults.findIndex(obj => obj.test_details_id == event.target.name); 
    inputResults[inputIndex].test_result_value = event.target.value;

  }

  const saveResult = () => {
    // axios 요청으로 inputIndex을 저장하자.
  }

  return(
    <div className={style.TestResult}>
       <table className={`table table-hover ${style.testResultTable}`}>
              <thead className={style.thead}>
                <tr>
                  <th scope="col" className="col-1">검사코드</th>
                  <th scope="col" className="col-3">검사명</th>
                  <th scope="col" className="col-1">처방코드</th>
                  <th scope="col" className="col-3">상세검사명</th>
                  <th scope="col" className="col-2">결과값</th>

                </tr>
              </thead>
              <tbody>
                { 
                  testResults && testResults.map((item, index) => {
                    if(prevItem !== item.test_list_id){
                        prevItem=item.test_list_id;
                      
                      return(<tr key={index}>
                                <td>{item.test_code}</td>
                                <td>{item.test_name}</td>
                                <td>{item.test_details_code}</td>
                                <td>{item.test_details_name}</td>
                                <td><input className={`form-control ${style.input}`}
                                           type="text"
                                           name={item.test_details_id}
                                           defaultValue={item.test_result_value || ""}
                                           onChange={(event) => handleChange(event, index)}>
                                           
                                          </input></td>
                              </tr>
                            );
                    }
                    else{
                      prevItem=item.test_list_id;
                      return(<tr key={index}>
                              <td></td>
                              <td></td>
                              <td>{item.test_details_code}</td>
                              <td>{item.test_details_name}</td>
                              <td><input className={`form-control ${style.input}`}
                                        type="text"
                                        name={item.test_details_id}
                                        defaultValue={item.test_result_value || ""}
                                        onChange={(event) => handleChange(event)}>
                                        </input></td>
                            </tr>
                            );
                    }
                  })
                }
              </tbody>
            </table>
          <div className={style.saveButton}
               onClick={saveResult}>저장</div>
    </div>
  );
}

export default TestResult;