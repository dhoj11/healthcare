import style from "./Date.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createSetEditBlockActoin, createSetPatientAction, createSetTreatmentAction } from "../../../../redux/treatment-reducer";
import { useEffect, useState } from "react";
import { getTreatmentList } from "../../../../apis/treatment";

/**
 * 현재 선택된 환자의 과거 진료내역 리스트를 왼쪽에 표시한다.
 */

function Date(props){

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  
  const [treatments, setTreatments] = useState([]);

  const dispatch = useDispatch();

  const getTreatments = async() => {
    try{
      const response = await getTreatmentList(patient);
      setTreatments(response.data);
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

  useEffect( () => {
    if(patient==="") setTreatments([])
    else{
      const curTreatment = treatments.find(item => item.treatment_id === treatment);
      if (curTreatment && curTreatment.treatment_saved === 0)
          dispatch(createSetEditBlockActoin(false));
      if (curTreatment && curTreatment.treatment_saved === 1)
          dispatch(createSetEditBlockActoin(true));  
    }
  },[treatment]);

  return(
    <div className={style.selectDate}>
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

export default Date;