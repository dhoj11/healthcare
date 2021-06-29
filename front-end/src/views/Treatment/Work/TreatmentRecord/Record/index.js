import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Record.module.css";
import data from "../../../data/treatment"
import { createSetCurRecordActoin } from "../../../../../redux/treatment-reducer";

/**
 * 선택된 진료의 과거진료기록(의무기록)을 가져온다.
 * 
 * TODO : 현재진료번호로 진료테이블에서 comment 속성값 가져오는 api 작성
 * 요청데이터의 형태
 * {treatment_record: ""}
 */

function Record(props){

  const treatments = data;

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);
  const editBlock = useSelector(state => state.treatmentReducer.editBlock);

  const [record, setRecord] = useState();

  const dispatch = useDispatch();

  const getRecord = useCallback((event) => {
    const prevTreatment = treatments.find(item => item.treatment_id === treatment);
    if(prevTreatment) return prevTreatment.treatment_record;
  },[treatment])

  useEffect(()=> {
    setRecord(getRecord);
  },[treatment])

  useEffect(()=>{
    if(!editBlock) setRecord("");  
  },[editBlock])

  const handleChange = useCallback((event) => {
    setRecord( () => event.target.value);
  },[record]);

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

export default Record;