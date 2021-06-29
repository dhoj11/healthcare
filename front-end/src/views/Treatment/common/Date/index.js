import style from "./Date.module.css";
import data from "../../data/treatment"
import { useDispatch, useSelector } from "react-redux";
import { createSetEditBlockActoin, createSetTreatmentAction } from "../../../../redux/treatment-reducer";
import { useEffect } from "react";

/**
 * 현재 선택된 환자의 과거 진료내역 리스트를 왼쪽에 표시한다.
 * 
 * TODO : 진료테이블에서 로그인된 의사(staff_id) && 오늘날짜 데이터 요청 api 작성
 * 
 * 요청데이터의 형태
 * {treatment_id: {int} , patient_id: {int},  treatment_sympton: "", treatment_record: "", treatment_comment: "", treatment_date: {"yyyy-MM-dd"}, treatment_saved: {num}},
 */

function Date(props){

  const treatments = data;

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(createSetTreatmentAction(""));
  },[patient])

  useEffect( () => {
    const curTreatment = treatments.find(item => item.treatment_id === treatment);
    if (curTreatment && curTreatment.treatment_saved === 0)
        dispatch(createSetEditBlockActoin(false));
    if (curTreatment && curTreatment.treatment_saved === 1)
        dispatch(createSetEditBlockActoin(true));  
  },[treatment]);

  return(
    <div className={style.selectDate}>
      {
        treatments.filter( item => { return item.patient_id === patient}).map((item) => {
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