import React from "react";
import style from "./Sympton.module.css";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { getTreatmentSympton } from "../../../../../apis/treatment";

/**
 * 선택된 진료의 내원사유(예약, 접수시 작성)를 불러온다.
 */
function Sympton(props){

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);

  const [sympton, setSympton] = useState("");

  const getSympton = useCallback( async ()=> {
    try{
      const response = await getTreatmentSympton(treatment);
      setSympton(response.data);
    } catch(error){
      console.log(error)
    }
  },[treatment]) 

  useEffect(()=> {
    if(treatment !=="") getSympton();
  },[treatment])

  useEffect(()=>{
    setSympton("");
  },[patient]);

  useEffect(()=>{
    if(treatment !=="") getSympton();
  },[work]);

  return(
    <div className={style.sympton}>
      <div className={style.title}>
        증상/내원사유
      </div>
      <div className={style.content}>
        {sympton}
      </div>
    </div>
  );
}

export default React.memo(Sympton);