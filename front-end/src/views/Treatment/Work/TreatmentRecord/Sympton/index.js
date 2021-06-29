import style from "./Sympton.module.css";

import data from "../../../data/treatment"
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

/**
 * 선택된 진료의 내원사유(예약, 접수시 작성)를 불러온다..
 * 
 * TODO : 현재진료번호로 접수테이블에서 reception_content 속성값 가져오는 api 작성
 * 요청데이터의 형태 
 * **** 접수테이블에서 가져오기 때문에 DB의 속성명과 요청 데이터의 속성명이 다르다. 주의하자.****
 * {treatment_record: ""}
 */

function Sympton(props){

  const treatments = data;

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);

  const [sympton, setSympton] = useState();

  const getSympton = useCallback(()=> {
    const prevTreatment = treatments.filter(item => item.treatment_id === treatment);
    if(prevTreatment[0]) setSympton(prevTreatment[0].treatment_sympton);
  },[]) 
  
  useEffect(()=> {
    const prevTreatment = treatments.filter(item => item.treatment_id === treatment);
    if(prevTreatment[0]) setSympton(prevTreatment[0].treatment_sympton);
  },[treatment])

  useEffect(()=>{
    setSympton("");
  },[patient]);

  useEffect(()=>{
    setSympton(getSympton);
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

export default Sympton;