import Record from "./Record/Record";
import Comment from "./Comment/Comment";
import Diagnose from "./Diagnose/Diagnose";
import Test from "./Test/Test";
import Prescription from "./Prescription/Prescription";
import Sympton from "./Sympton/Sympton";
import style from "./index.module.css";

function TreatmentRecord(props){

  return(
    <div className={style.treatmentRecord}>

      <Sympton/>
  
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

export default TreatmentRecord;