import style from "./Blood.module.css";

import data from "../../../data/testResults"
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

function Blood(props){

  let prevItem; // 한 묶음코드 표시 위함 index 역할

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);

  const getTestResult = useCallback((event) => {
    const prevTestResults = data.filter(item => item.treatment_id === treatment);
    return prevTestResults;
  },[treatment]);

  const [testResults, setTestResults] = useState(getTestResult);

  useEffect(()=> {
    setTestResults(getTestResult);
  },[treatment])

  useEffect(()=> {
    setTestResults([]);
  },[patient]);

  useEffect(()=> {
    setTestResults(getTestResult);
  },[]);

  return(
      <div className={style.blood}>
        <div className={style.title}>
          진단검사
        </div>
        <div className={style.testList}>
          <table className={`table table-sm table-hover ${style.prescriptionTable}`}>
              <thead className={style.thead}>
                <tr>
                  <th scope="col" className="col-1">검사코드</th>
                  <th scope="col" className="col-3">검사명</th>
                  <th scope="col" className="col-1">처방코드</th>
                  <th scope="col" className="col-3">처방명</th>
                  <th scope="col" className="col-1">하한치</th>
                  <th scope="col" className="col-1">상한치</th>
                  <th scope="col" className="col-3">결과값</th>
                </tr>
              </thead>
              <tbody>
              {
                testResults.map((item, index) => {
                  if(prevItem !== item.test_code){
                    prevItem=item.test_code;
                    return (
                      <tr key={index}>
                        <th>{item.test_code}</th>
                        <th>{item.test_name}</th>
                        <th>{item.test_details_code}</th>
                        <th>{item.test_details_name}</th>
                        <th>{item.test_details_min}</th>
                        <th>{item.test_details_max}</th>
                        <th>{item.test_result_value} {item.test_details_unit}</th>
                      </tr>
                    );
                  }
                  else{
                    prevItem=item.test_code;
                    return (
                      <tr key={index}>
                        <th></th>
                        <th></th>
                        <th>{item.test_details_code}</th>
                        <th>{item.test_details_name}</th>
                        <th>{item.test_details_min}</th>
                        <th>{item.test_details_max}</th>
                        <th>{item.test_result_value} {item.test_details_unit}</th>
                    </tr>
                    );
                  }
                })
              }
              </tbody>
            </table>
        </div>
      </div>
  );
}

export default Blood;