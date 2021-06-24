import style from "./Blood.module.css";

import data from "../../../data/testResults"
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

function Blood(props){

  let prevItem; // 한 묶음코드 표시 위함 index 역할

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);

  const getTestResult = useCallback((event) => {
    const prevTestResults = data.filter(item => item.tId === treatment);
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
                  if(prevItem !== item.code){
                    prevItem=item.code;
                    return (
                      <tr key={index}>
                        <th>{item.code}</th>
                        <th>{item.name}</th>
                        <th>{item.dCode}</th>
                        <th>{item.dName}</th>
                        <th>{item.min}</th>
                        <th>{item.max}</th>
                        <th>{item.result} {item.unit}</th>
                      </tr>
                    );
                  }
                  else{
                    prevItem=item.code;
                    return (
                      <tr key={index}>
                        <th></th>
                        <th></th>
                        <th>{item.dCode}</th>
                        <th>{item.dName}</th>
                        <th>{item.min}</th>
                        <th>{item.max}</th>
                        <th>{item.result} {item.unit}</th>
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