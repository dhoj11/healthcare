import React from "react";

import style from "./Date.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createSetEditBlockActoin, createSetPatientAction, createSetTreatmentAction } from "../../../../redux/treatment-reducer";
import { useEffect, useState } from "react";
import { getNowTreatment, getTreatmentList } from "../../../../apis/treatment";
import moment from "moment";

/**
 * 선택된 환자의 당일/ 과거 진료내역을 표시.
 */
function Date(props){

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const staff_id = useSelector(state => state.authReducer.staff_id);

  const [treatments, setTreatments] = useState([]);
  const [nowTreatment, setNowTreatment] = useState([]);

  const dispatch = useDispatch();


  /**
   * 진료내역요청
   * 
   * 1. response : 과거 진료 내역 
   *  - 선택 환자의 과거 다른 진료의의 진료 내역을 요청
   * 2. response2 : 당일 진료 내역
   *  - 선택 환자의 당일 진료의 진료 내역을 요청
   */
  const getTreatments = async() => {
    try{
      const response = await getTreatmentList(patient);
      setTreatments(response.data);
      const response2 = await getNowTreatment(patient, staff_id);
      setNowTreatment(response2.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    return () => {
      dispatch(createSetPatientAction(""));
    };
  },[])

  useEffect(()=>{
    if(patient !=="") getTreatments();
  },[patient])

  useEffect(()=>{
    dispatch(createSetTreatmentAction(""));
  },[patient])


  /**
   * 진료의 수정(저장) 활성화 여부 결정
   * 
   * 1. 당일진료
   *  - 저장된 당일진료 수정 금지
   *  - 저장되지 않은 당일진료 수정 허용
   * 
   * 2. 과거 진료
   *  - 기본적으로 수정 금지
   *  - 본인 진료가 아닐 경우, 저장된 진료일 경우, 이전 날짜일 경우
   */
  useEffect( () => {
    if(patient==="") setTreatments([])
    else{
      const curTreatment = nowTreatment.find(item => item.treatment_id === treatment);
      if (curTreatment && curTreatment.treatment_saved === 0)
          dispatch(createSetEditBlockActoin(false));
      if (curTreatment && curTreatment.treatment_saved === 1)
          dispatch(createSetEditBlockActoin(true));  

      const prevTreatment = treatments.find(item => item.treatment_id === treatment);
      if (prevTreatment && prevTreatment.staff_id != staff_id)
          dispatch(createSetEditBlockActoin(true)); 
      if (prevTreatment && prevTreatment.treatment_saved === 0)
          dispatch(createSetEditBlockActoin(false));
      if (prevTreatment && prevTreatment.treatment_saved === 1)
          dispatch(createSetEditBlockActoin(true));  
      if (prevTreatment && prevTreatment.treatment_date != moment().format('YYYY-MM-DD'))
          dispatch(createSetEditBlockActoin(true)); 
    }
  },[treatment]);

  return(
    <div className={style.selectDate}>
      {
        nowTreatment.map((item) => {
          return (<div key={item.treatment_id}
                       className={ item.treatment_id === treatment ? `${style.selectTreatment}` : `${style.dateItem}` }
                       onClick={() => {
                         dispatch(createSetTreatmentAction(item.treatment_id));
                       }}>
                       {item.treatment_date} 
                   </div>);
                   })
      }
      <hr/>
      {
        treatments.map((item) => {
          return (<div key={item.treatment_id}
                       className={ item.treatment_id === treatment ? `${style.selectTreatment}` : `${style.dateItem}` }
                       onClick={() => {
                         dispatch(createSetTreatmentAction(item.treatment_id));
                       }}>
                       {item.treatment_date} 
                   </div>);
                   })
      }
    </div>
  );
}

export default React.memo(Date);