import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Record.module.css";
import data from "../../../data/treatment"
import { createSetCurRecordActoin } from "../../../../../redux/treatment-reducer";

function Record(props){

  const [record, setRecord] = useState();
  const [editBlock, SetEditBlock] = useState(true);
  // true 이면 수정 불가. 

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);

  const dispatch = useDispatch();

  const treatments = data;

  // 선택된 진료 번호 추후 스프링에서 진료번호로 진료 내용 가져오기
  // 가져와서 setRecord 로 상태 업뎃
  const getRecord = useCallback((event) => {
    const prevTreatment = treatments.find(item => item.id === treatment);
    if(prevTreatment) return prevTreatment.record;
  },[treatment])

  useEffect(()=> {
    setRecord(getRecord);
  },[treatment])


  const handleChange = useCallback((event) => {
    setRecord( () => event.target.value);
  },[record]);

  useEffect( () => {
    const curTreatment = treatments.find(item => item.id === treatment);
    const today = getCurrentDate();
    SetEditBlock(true);
    if (curTreatment && today === curTreatment.date){
        setRecord("");
        SetEditBlock(false);
      }
    },[treatment]);

  useEffect(()=>{
    setRecord(getRecord); 
  },[work]);
  
  useEffect(()=>{
    setRecord("");
  },[patient]);

  // 선택 진료, 환자 바뀌면 리덕스 스토어 상태 초기화.
  useEffect(()=> {
    dispatch(createSetCurRecordActoin("")) 
  },[patient, treatment]);

  useEffect(()=>{
    dispatch(createSetCurRecordActoin(record)) 
  },[record]);

  return(
    <div className={style.record}>
      <div className={style.title}>
        의무기록
      </div>
      <textarea readOnly={editBlock && true}  
                className={`form-control ${style.write}`} 
                rows="10" 
                value={record}
                onChange={handleChange}>
                </textarea>
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

export default Record;