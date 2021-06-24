import { useCallback, useEffect, useState } from "react";
import Date from "./common/Date";
import Patients from "./common/Patients";
import style from "./index.module.css";
import { useDispatch } from "react-redux";
import { createSetPatientAction, createSetTreatmentAction, createSetWorkActoin } from "../../redux/treatment-reducer";
import Work from "./Work";

function Treatment(props){

  const [work, setWork] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
      setWork("TreatmentRecord");
  }, []);

  const changeWork = useCallback((work) => {
    setWork(work);
  }, []);

  useEffect(()=> {
    dispatch(createSetWorkActoin(work));
  }, [work])

  useEffect(()=>{
    dispatch(createSetTreatmentAction(""));
    dispatch(createSetPatientAction(""));
  },[])

  // 2021.06.19. 현재 work 가 바뀔 때 마다 공통컴포넌트 Date, Patients가 re-render 됨
  // 추후 고치자
  return(
    <div className={style.treatmentMain}>
      <div className={style.selectWork}>
        <div className={work === "TreatmentRecord" ? `${style.record}` : `${style.item}` } onClick={() => changeWork("TreatmentRecord")}>진료</div>
        <div className={work === "TestResult" ? `${style.TestResult}` : `${style.item}` } onClick={() => changeWork("TestResult")}>검사결과</div>
      </div>
      <div className={style.treatmentContent}>
        <Date/>
        <div className={style.treatmentWorkArea}>
          <Work work={work}/>
        </div>
        <Patients/>
      </div>
    </div>
  );
}

export default Treatment;