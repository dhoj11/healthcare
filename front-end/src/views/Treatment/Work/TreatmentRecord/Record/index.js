import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Record.module.css";
import { createSetCurRecordActoin } from "../../../../../redux/treatment-reducer";
import { getTreatmentRecord } from "../../../../../apis/treatment";

/**
 * 선택된 진료의 과거진료기록(의무기록)을 가져온다.
 */
function Record(props){

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);
  const editBlock = useSelector(state => state.treatmentReducer.editBlock);

  const [record, setRecord] = useState("");

  const dispatch = useDispatch();

  const getRecord = useCallback( async () => {
    try{
      const response = await getTreatmentRecord(treatment);
      setRecord(response.data);
    }catch(error){
      console.log(error);
    }
  },[treatment])

  useEffect(()=> {
    if(treatment !=="") getRecord();
  },[treatment])

  useEffect(()=>{
    if(!editBlock) setRecord("");  
  },[editBlock])

  const handleChange = useCallback((event) => {
    setRecord( () => event.target.value);
  },[record]);

  useEffect(()=>{
    if(treatment !=="") getRecord();
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

export default React.memo(Record);