import { useEffect, useState } from "react";
import Date from "./common/Date/Date";
import Patients from "./common/Patients/Patients";
import TestResult from "./TestResult/";
import TreatmentRecord from "./TreatmentRecord";
import style from "./index.module.css";

function Treatment(props){

  const [work, setWork] = useState({ });

  useEffect(() => {
      setWork("TreatmentRecord");
  }, []);

  const changeWork = (evnet, work) => {
    setWork(work);
  }

  return(
    <div className={style.treatmentMain}>

      <div className={style.selectWork}>
        <div className={style.item} onClick={(event) => changeWork(event, "TreatmentRecord")}>진료</div>
        <div className={style.item} onClick={(evnet) => changeWork(evnet, "TestResult")}>검사결과</div>
      </div>

      <div className={style.treatmentContent}>

        <Date/>

        <div className={style.treatmentWorkArea}>
          { work === "TreatmentRecord" ? <TreatmentRecord/> : null}
          { work === "TestResult" ? <TestResult/> : null}
        </div>

        <Patients/>
        
      </div>
    </div>
  );
}

export default Treatment;