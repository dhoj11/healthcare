import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Patients.module.css";

import data from "../../data/patients";
import { createSetPatientAction } from "../../../../redux/treatment-reducer";

function Patients(props){

  // 현재 로그인된 의사 id와 오늘 날짜로 접수테이블에서 환자id로 환자정보 불러오기
  // {id: 1, name: "이지은", age:"29", gender: "여", disease: "고혈압", medicine: "혈압약", comment: "없음", state: "complete"}, 

  const patient = useSelector(state => state.treatmentReducer.patient);

  const patients  = data;
  const dispatch = useDispatch();

  const [curPatient, setCurPatient] = useState({id:patient});
  const [listState, setListState] = useState();

  useEffect(() => {
    setListState("all");
  },[]);

  useEffect(()=> {
      dispatch(createSetPatientAction(curPatient.id)); 
  },[curPatient])


  const selectListState = useCallback((state) => {
    setListState(state);
  },[]);

  return(
    <div className={style.wrapper}>
        <div className={style.filter}>
            <div className={ listState === "all" ? `${style.select}` : `${style.item}` } onClick={() => selectListState("all")}>전체</div>
            <div className={ listState === "before" ? `${style.select}` : `${style.item}` } onClick={() => selectListState("before")}>대기</div>
            <div className={ listState === "complete" ? `${style.select}` : `${style.item}` } onClick={() => selectListState("complete")}>완료</div>
          </div>
        <div>
          <hr/>
        </div>

      <div className={style.patients}>

      {listState === "all" ?
          patients.map((item) => { 
            return (<div className={ item.id === patient ? `${style.selectpatient}` : `${style.patientItem}` }
                      onClick={() => {
                        setCurPatient(item); 
                      }} 
                      key={item.id}> 
                      {item.name} ( {item.gender} {item.age} ) 
                    </div>); })
      
      :  listState === "before" ?
            patients.filter( item => { return item.state === "before"} ).map((item) => { 
              return (<div className={ item.id === patient ? `${style.selectpatient}` : `${style.patientItem}` }
                        onClick={() => {
                          setCurPatient(item); 
                        }} 
                        key={item.id}> 
                        {item.name} ( {item.gender} {item.age} ) 
                      </div>); })

          : listState === "complete" ?
              patients.filter( item => { return item.state === "complete"} ).map((item) => { 
                return (<div className={ item.id === patient ? `${style.selectpatient}` : `${style.patientItem}` }
                          onClick={() => {
                            setCurPatient(item); 
                          }} 
                          key={item.id}> 
                          {item.name} ( {item.gender} {item.age} ) 
                        </div>); })
          :null
      }
     
      </div>
      <div className={style.patient}>
        <i className={`far fa-user-circle ${style.profileIcon}`}></i>
        <div className={style.patientDescription}>

          { curPatient.id !=="" && <span className={style.name}> {curPatient.name}({curPatient.gender}, 만{curPatient.age}세) </span> }
          {
          curPatient.id !=="" &&
            <div className={style.subWrapper}>
              <span className={style.subTitle}>만성질환</span>
              <span className={style.subDesc}>{curPatient.disease}</span>
              <span className={style.subTitle}>복용약물</span>
              <span className={style.subDesc}>{curPatient.medicine}</span>
              <span className={style.subTitle}>특이사항</span>
              <span className={style.subDesc}>{curPatient.commnet}</span>
            </div>
        }
        </div>
      </div>
    </div>
  );
}

export default Patients;