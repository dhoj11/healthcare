import style from "./Test.module.css";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import data2 from "../../../data/testLists" // 과거 진단 검사의뢰 데이터
import { useDispatch, useSelector } from "react-redux";
import { createSetCurTestsActoin } from "../../../../../redux/treatment-reducer";
import TestAddModal from "./TestAddModal/TestAddModal";


/**
 * 현재선택된 진료의 과거 검사의뢰기록을 표시한다.
 * 자식컴포넌트에서 검사의뢰를 추가한다.
 * 
 * TODO : testList 테이블에서 진료번호로 검사데이터 요청 api 작성
 * 요청데이터형태
 * {treatment_id: {num},test_code: "", test_name: ""},
 */

function Test(props){

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);
  const editBlock = useSelector(state => state.treatmentReducer.editBlock);

  const getTest = useCallback((event) => {
    const prevTests = data2.filter(item => item.treatment_id === treatment);
    return prevTests;
  },[treatment]);

  const [tests, setTests] = useState(getTest);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const dispatch = useDispatch();

  const openAddModal = () => {
    if(!editBlock){
      setAddModalOpen(true);
    }
  };

  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  useEffect(()=>{
    setTests(getTest);
  },[work]);

  useEffect(()=> {
    setTests(getTest);
  },[treatment])

  useEffect(()=> {
    setTests([]);
  },[patient]);

  useEffect(()=>{
    dispatch(createSetCurTestsActoin(tests))
  },[tests])

  useEffect(()=> {
    dispatch(createSetCurTestsActoin({})) 
  },[patient, treatment]);

  /**
   * 검사를 추가하는 함수
   * 
   * 한진료에서 중복검사추가를 막음
   * 검사추가는 자식 모달컴포넌트에서 이루어지며 이 함수가 props으로 전달됨
   */

  const addTests  = (test) => {
    if( (!editBlock) && tests){
      let able = true;
      for(let i=0; i<tests.length; i++){
        if(tests[i].test_code === test.test_code){
          able = false;
        }
      }
      if(able){
        const newTest = tests.concat(test);
        setTests(newTest);
      }
    }
  } 

  const deleteTest = useCallback((code) => {
    if(!editBlock){
      const newTests = tests.filter(test => test.test_code !== code);
      setTests(newTests);
    }
  },[tests]);

  return(
    <div className={style.test}>
      <div className={style.title} onClick={openAddModal}>
        검사
      </div>
      <div className={style.testList}>
        <table className={`table table-sm table-hover ${style.testTable}`}>
              <thead className={style.thead}>
                <tr>
                  <th scope="col" className="col-4">검사코드</th>
                  <th scope="col" className="col-6">검사명</th>
                  <th scope="col" className="col-1"></th>
                </tr>
              </thead>
              <tbody>
              {
              tests.map((item) => { 
                return (<tr key={item.test_code}> 
                          <td>{item.test_code}</td> 
                          <td>{item.test_name}</td>
                          <td onClick={() => deleteTest(item.test_code)}><FontAwesomeIcon icon={faMinus} className={style.minus}/></td>
                        </tr>); })
            }
              </tbody>
            </table>
      </div>
      <TestAddModal isOpen={addModalOpen} close={closeAddModal} addTests={addTests}/>
    </div>
  );
}

export default Test;