import style from "./Sympton.module.css";

import data from "../../../data/treatment"
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

function Sympton(props){
  
  const [sympton, setSympton] = useState();

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);

  const treatments = data;

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