import style from "./Test.module.css";
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from "@material-ui/lab";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";


// 진단 검사 데이터
import data from "../../../data/test";
// 과거 진단 검사의뢰 데이터
import data2 from "../../../data/testLists"
import data3 from "../../../data/treatment";
import { useDispatch, useSelector } from "react-redux";
import { createSetCurTestsActoin } from "../../../../../redux/treatment-reducer";


function Test(props){

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);

  const getTest = useCallback((event) => {
    const prevTests = data2.filter(item => item.tId === treatment);
    return prevTests;
  },[treatment]);

  const [test, setTest] = useState({code:""});
  const [tests, setTests] = useState(getTest);
  const [editBlock, SetEditBlock] = useState(true);

  const dispatch = useDispatch();

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

   //  진료, 환자 바뀌면 리덕스 스토어 상태 초기화.
  useEffect(()=> {
    dispatch(createSetCurTestsActoin({})) 
  },[patient, treatment]);


  useEffect( () => {
    console.log(treatment);
    const curTreatment = data3.find(item => item.id === treatment);
    const today = getCurrentDate();
    SetEditBlock(true);
    if (curTreatment && today === curTreatment.date){
        SetEditBlock(false);
        setTests([]);
      }
    },[treatment]);

  const addTest = useCallback((event) => {
    if( (!editBlock) && tests && test.code !== ""){
      let able = true;
      for(let i=0; i<tests.length; i++){
        if(tests[i].code === test.code){
          able = false;
        }
      }
      if(able){
        const newTest = tests.concat(test);
        setTests(newTest);
      }
      setTest({code:""});
    }
  },[test, tests]);

  const deleteTest = useCallback((event, code) => {
    if(!editBlock){
      const newTests = tests.filter(test => test.code !== code);
      setTests(newTests);
    }
  },[test, tests]);

  return(
    <div className={style.test}>
      <div className={style.title}>
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
                return (<tr key={item.code}> 
                          <td>{item.code}</td> 
                          <td>{item.name}</td>
                          <td onClick={(event) => deleteTest(event, item.code)}><FontAwesomeIcon icon={faMinus} className={style.minus}/></td>
                        </tr>); })
            }
              </tbody>
            </table>

            <div className={style.add}>
            <span className={style.addTitle}>검사명 :</span>
            <Autocomplete className={style.input}
                          options={data}
                          getOptionLabel={(option) => option.name || option.code}
                          onChange={(event, newValue) => {
                            setTest(newValue);
                          }}
                          renderInput={(params) => <TextField {...params}/>}
                          />
            <div className={style.addButton} onClick={addTest}> 
              <FontAwesomeIcon icon={faPlus} className={style.plus}/>
            </div>
          </div>
      </div>
    </div>
  );
}

const getCurrentDate = () => {
  let date = new Date();
  let year = date.getFullYear().toString();
  let month = date.getMonth() + 1;
  month = month < 10 ? '0' + month.toString() : month.toString();
  var day = date.getDate();
  day = day < 10 ? '0' + day.toString() : day.toString();
  return year +  "-" + month + "-" + day ;
}

export default Test;