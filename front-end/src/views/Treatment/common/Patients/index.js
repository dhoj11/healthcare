import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Patients.module.css";
import { createSetPatientAction } from "../../../../redux/treatment-reducer";

import data from "../../data/patients";

/**
 * 오늘 진료대기/완료된 환자를 오른쪽 리스트에 표시한다.
 * 
 * 접수테이블에 튜플이 추가 될 때 진료테이블에 튜플이 추가된다. 
 * 따라서 내원한 환자만 표시됨
 * 
 * TODO : 접수테이블에서 로그인된 의사(staff_id) && 오늘날짜의 환자 id로 환자 데이터 요청 api 작성
 * 
 * 요청데이터의 형태
 *  {id: {num}, name: "", age:{num}, gender: "", disease: "", medicine: "", comment: "", state: ""}, 
 */

function Patients(props){

  const patients  = data;

  const patient = useSelector(state => state.treatmentReducer.patient);

  const [curPatient, setCurPatient] = useState({patient_id:patient});
  const [listState, setListState] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setListState("all");
  },[]);

  useEffect(()=> {
      dispatch(createSetPatientAction(curPatient.patient_id)); 
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
            return (<div className={ item.patient_id === patient ? `${style.selectpatient}` : `${style.patientItem}` }
                      onClick={() => {
                        setCurPatient(item); 
                      }} 
                      key={item.patient_id}> 
                      {item.patient_name} ( {item.patient_gender} {item.patient_age} ) 
                    </div>); })
      
      :  listState === "before" ?
            patients.filter( item => { return item.patient_state === "before"} ).map((item) => { 
              return (<div className={ item.patient_id === patient ? `${style.selectpatient}` : `${style.patientItem}` }
                        onClick={() => {
                          setCurPatient(item); 
                        }} 
                        key={item.patient_id}> 
                        {item.patient_name} ( {item.patient_gender} {item.patient_age} ) 
                      </div>); })

          : listState === "complete" ?
              patients.filter( item => { return item.patient_state === "complete"} ).map((item) => { 
                return (<div className={ item.patient_id === patient ? `${style.selectpatient}` : `${style.patientItem}` }
                          onClick={() => {
                            setCurPatient(item); 
                          }} 
                          key={item.patient_id}> 
                          {item.patient_name} ( {item.patient_gender} {item.patient_age} ) 
                        </div>); })
          :null
      }
     
      </div>
      <div className={style.patient}>
        <i className={`far fa-user-circle ${style.profileIcon}`}></i>
        <div className={style.patientDescription}>

          { curPatient.patient_id !=="" && <span className={style.name}> {curPatient.patient_name}({curPatient.patient_gender}, 만{curPatient.patient_age}세) </span> }
          {
          curPatient.id !=="" &&
            <div className={style.subWrapper}>
              <span className={style.subTitle}>만성질환</span>
              <span className={style.subDesc}>{curPatient.patient_disease}</span>
              <span className={style.subTitle}>복용약물</span>
              <span className={style.subDesc}>{curPatient.patient_medicine}</span>
              <span className={style.subTitle}>특이사항</span>
              <span className={style.subDesc}>{curPatient.patient_commnet}</span>
            </div>
        }
        </div>
      </div>
    </div>
  );
}

export default Patients;