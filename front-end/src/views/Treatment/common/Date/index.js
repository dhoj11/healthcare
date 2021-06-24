import style from "./Date.module.css";

import data from "../../data/treatment"
import { useDispatch, useSelector } from "react-redux";
import { createSetPatientAction, createSetTreatmentAction } from "../../../../redux/treatment-reducer";
import { useEffect } from "react";

function Date(props){

  // 현재 선택된 환자의 과거 진료 내역을 확인
  const treatments = data;

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(createSetTreatmentAction(treatment));
  },[treatment])

  useEffect(()=>{
    dispatch(createSetTreatmentAction(""));
  },[patient])

  return(
    <div className={style.selectDate}>
      {
        treatments.filter( item => { return item.patientId === patient}).map((item) => {
          return (<div key={item.id}
                       className={ item.id === treatment ? `${style.selectTreatment}` : `${style.dateItem}` }
                       onClick={() => {
                         dispatch(createSetTreatmentAction(item.id));
                       }}>
                       {item.date} 
                   </div>);
                   })
      }
    </div>
  );
}

export default Date;