import { useCallback, useEffect, useState } from "react";

import style from "./Diagnose.module.css";
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from "@material-ui/lab";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

/*질병 샘플 데이터*/
import data from "../../../data/disease";
/*과거 진단 샘플 데이터*/
import data2 from "../../../data/diagnoses";
/* redux 진료번호로 진료시간을 가져오기 위함, 현재 DB 연결 없음*/  /*data2, 3은 묶어도 될 듯 함*/ 
import data3 from "../../../data/treatment"

import { createSetCurDiagnosesActoin } from "../../../../../redux/treatment-reducer";


// 진단목록 컴포넌트에서 필요한 데이터의 형태
// {tId: 16, "code": "D682","name" : "선천성 무피브리노젠혈증"}
// 리덕스 스토어에 저장된 진료번호(진료화면에서 날짜 선택시)로 DB 진단테이블에서 위와 같이 불러오자

function Diagnose(props){

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);

  const dispatch = useDispatch();

  const getDiagnose = useCallback((event) => {
    const prevDiagnoses = data2.filter(item => item.treatment_id === treatment);
     return prevDiagnoses;
  },[treatment]);

  const [diagnose, setDiagnose] = useState({disease_code:""});
  const [diagnoses, setDiagnoses] = useState(getDiagnose);
  const [editBlock, SetEditBlock] = useState(true);

  useEffect(()=>{
    setDiagnoses(getDiagnose);
  },[work]);

  useEffect(()=> {
    setDiagnoses(getDiagnose);
  },[treatment])

  useEffect(()=>{
    setDiagnoses([]);
  },[patient]);

  useEffect(()=>{
    dispatch(createSetCurDiagnosesActoin(diagnoses)) 
  },[diagnoses]);

  //  진료, 환자 바뀌면 리덕스 스토어 상태 초기화.
  useEffect(()=> {
    dispatch(createSetCurDiagnosesActoin({})) 
  },[patient, treatment]);

  useEffect( () => {
    const curTreatment = data3.find(item => item.treatment_id === treatment);
    const today = getCurrentDate();
    SetEditBlock(true);
    if (curTreatment && today === curTreatment.treatment_date){
        SetEditBlock(false);
        setDiagnoses([]);
      }
    },[treatment]);
  
  const addDiagnose = useCallback(() => {
    // 추가하면 현재 Tid 로 tid, code 해서 튜플 만들기
    if(  (!editBlock) && diagnose && diagnose.disease_code !== ""){ 
        let able = true;
        for(let i=0; i<diagnoses.length; i++){
          if(diagnoses[i].disease_code === diagnose.disease_code){
            able = false;
          }
        }
        if(able){
          const newDiagnoses = diagnoses.concat({ treatement_id:treatment, disease_code : diagnose.disease_code, disease_name: diagnose.disease_name});
          setDiagnoses(newDiagnoses);
        }
        setDiagnose("");  
    }
  },[diagnose,diagnoses]);
      
  const deleteDiagnose = useCallback((code) => {
    if(!editBlock) {  
      const newDiagnoses = diagnoses.filter(diagnose => diagnose.disease_code !== code);
      setDiagnoses(newDiagnoses);
    }
  },[diagnose,diagnoses]);

  return(
    <div className={style.diagnose}>
      <div className={style.title}>
        진단
      </div>
      <div className={style.diagnoseList}>
       <table className={`table table-sm table-hover ${style.diagnoseTable}`}>
            <thead className={style.thead}>
              <tr>
                <th scope="col" className="col-2">질병코드</th>
                <th scope="col" className="col-5">질병명</th>
                <th scope="col" className="col-1"></th>
              </tr>
            </thead>
            <tbody>
            {
              diagnoses && diagnoses.map((item, index) => { 
                return (<tr key={index}> 
                          <td>{item.disease_code}</td> 
                          <td>{item.disease_name}</td>
                          <td onClick={() => deleteDiagnose(item.disease_code)}><FontAwesomeIcon icon={faMinus} className={style.minus}/></td>
                        </tr>); })         
            }
            </tbody>
          </table>

          <div className={style.add}>
            <span className={style.addTitle}>질병명 :</span>
            <Autocomplete className={style.input}
                          options={data}
                          getOptionLabel={(option) => option.disease_name}
                          onChange={(event, newValue) => {
                            setDiagnose(newValue);
                          }}
                          renderInput={(params) => <TextField {...params}/>}
                          />
            <div className={style.addButton} onClick={addDiagnose}> 
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


export default Diagnose;