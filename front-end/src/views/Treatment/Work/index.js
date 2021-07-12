import React from "react";
import TestResult from "./TestResult/";
import TreatmentRecord from "./TreatmentRecord";

function Work(props){
  return(
    <div>  
        {props.work === "TreatmentRecord"? <TreatmentRecord/> : <TestResult/> }
        {/* {props.work === "TestResult"? <TestResult/> : null } */}
    </div>
  );
}

export default React.memo(Work);