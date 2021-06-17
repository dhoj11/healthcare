import { useEffect, useState } from "react";
import style from "./Patients.module.css";

import data from "../../data/patients";

function Patients(props){

  const patients  = data;

  const [curPatient, setCurPatient] = useState(
    "id", 
    "name",
    "age",
    "gender",
    "disease",
    "medicine",
    "comment",
    "state"
  )

  const [listState, setListState] = useState();

  const selectPatient = (event, patient) => {
    setCurPatient(patient);
  }

  useEffect(() => {
    setListState("all");
  }, []);

  const selectListState = (event, state) => {
    setListState(state);
  }
  
  return(
    <div className={style.wrapper}>
        <div className={style.filter}>
            <div onClick={(event) => selectListState(event, "all")}>전체</div>
            <div onClick={(event) => selectListState(event, "before")}>대기</div>
            <div onClick={(event) => selectListState(event, "complete")}>완료</div>
          </div>
        <div>
          <hr/>
        </div>

      <div className={style.patients}>

      {listState === "all" ?
          patients.map((item) => { 
            return (<div className={style.patientItem} 
                      onClick={(event) => selectPatient(event, item)} 
                      key={item.id}> 
                      {item.name} ( {item.gender} {item.age} ) 
                    </div>); })
      
      :  listState === "before" ?
            patients.filter( item => { return item.state === "before"} ).map((item) => { 
              return (<div className={style.patientItem} 
                        onClick={(event) => selectPatient(event, item)} 
                        key={item.id}> 
                        {item.name} ( {item.gender} {item.age} ) 
                      </div>); })

          : listState === "complete" ?
              patients.filter( item => { return item.state === "complete"} ).map((item) => { 
                return (<div className={style.patientItem} 
                          onClick={(event) => selectPatient(event, item)} 
                          key={item.id}> 
                          {item.name} ( {item.gender} {item.age} ) 
                        </div>); })
          :null
      }
     
      </div>

      <div className={style.patient}>
        <i className={`far fa-user-circle ${style.profileIcon}`}></i>
        <div className={style.patientDescription}>

          { curPatient && <span className={style.name}> {curPatient.name}({curPatient.gender}, 만{curPatient.age}세) </span> }
          
          <div className={style.subWrapper}>
            <span className={style.subTitle}>만성질환</span>
            <span className={style.subDesc}>{curPatient.disease}</span>
            <span className={style.subTitle}>복용약물</span>
            <span className={style.subDesc}>{curPatient.medicine}</span>
            <span className={style.subTitle}>특이사항</span>
            <span className={style.subDesc}>{curPatient.commnet}</span>
          </div>
        </div>
      </div>



    </div>
  );
}

export default Patients;