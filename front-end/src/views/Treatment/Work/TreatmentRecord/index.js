import React from "react";
import Record from "./Record";
import Comment from "./Comment";
import Diagnose from "./Diagnose";
import Test from "./Test";
import Prescription from "./Prescription";
import Sympton from "./Sympton";
import style from "./index.module.css";
import Save from "./Save";

function TreatmentRecord(props){
  return(
    <div className={style.treatmentRecord}>

      <div className={style.top}>
        <Sympton/>
        <Save/>
      </div>
  
      <div className={style.write}>
        <Record/>
        <Comment/>
        <Diagnose/>
      </div>
      
      <Prescription/>
      <Test/>
    </div>
  );
}

export default React.memo(TreatmentRecord);