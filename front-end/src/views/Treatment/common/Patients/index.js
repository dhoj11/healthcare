import React, { useLayoutEffect } from "react";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Patients.module.css";
import { createSetEditBlockActoin, createSetListStateActoin, createSetPatientAction } from "../../../../redux/treatment-reducer";

import { getPateintList, getPatient, isTreatmentComplete } from "../../../../apis/treatment";

/**
 * 로그인된 의사의 당일 진료 환자 목록 표시
 * 
 * 접수테이블에 튜플이 추가 될 때 진료테이블에 튜플이 추가됨
 */
function Patients(props){

  const staff_id = useSelector((state) => state.authReducer.staff_id);
  const patient = useSelector(state => state.treatmentReducer.patient);

  const [curPatient, setCurPatient] = useState({patient_id:patient});
  const [listState, setListState] = useState("all");
  const [patients, setPateints] = useState();

  const mqttRerenderMessage = props.mqttRerenderMessage;
  
  const dispatch = useDispatch();

  useEffect(()=>{
    if(mqttRerenderMessage !== ""){
        getPateints();
    }
  },[mqttRerenderMessage])


  /**
   * 내원 환자의 목록을 불러옴
   * 
   * 1. 로그인된 정보(staff_id)로 내원 환자의 정보를 요청
   * 2. 진료 진행상태를 요청하여 새로운 객체에 업데이트 
   * 3. 환자리스트 상태 업데이트 
   */
  const getPateints = useCallback(async() => {
    try{
      const response = await getPateintList(staff_id);
      let newPatients = response.data;
      if(newPatients){
        let isComplete;
        await newPatients.forEach( async (item, index) => {
          isComplete = await isTreatmentComplete(item.patient_id, staff_id)
          newPatients[index] = {
            ...newPatients[index]
            ,patient_state : isComplete.data
          }
        }) 
        setTimeout(() => setPateints(newPatients), 500);
      }
    } catch (error){
      console.log(error);
    }
  },[])

  useLayoutEffect(() => {
    getPateints();
  },[]);

  useEffect(()=> {
      dispatch(createSetPatientAction(curPatient.patient_id)); 
      dispatch(createSetEditBlockActoin(true)) 
  },[curPatient])

  const selectListState = useCallback((state) => {
    setListState(state);
  },[]);

  /**
   * 환자 프로필 표시
   * 
   * 1. 선택된 환자에 따라 환자 번호로 환자 정보를 요청
   * 2. 환자 상태 업데이트 
   */
  const changePatient = async() => {
    if(patient!=""){
      try{
        const response = await getPatient(patient);
        setCurPatient(response.data);
      }catch(error){
        console.log(error);
      }
    }
  }

  useEffect(()=>{
    changePatient();
  },[patient])

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

      {
        listState === "all" &&
          patients && patients.length > 0 && patients.map((item) => { 
            return (<div className={ item.patient_id === patient ? `${style.selectpatient}` : `${style.patientItem}` }
                      onClick={() => {
                        setCurPatient(item); 
                      }} 
                      key={item.patient_id}> 
                      {item.patient_name} ( {item.patient_gender} {item.patient_birth} ) 
                    </div>); })
       }
       {
        listState === "before" &&
        patients && patients.length > 0 && patients.filter( item => item.patient_state === "before").map(item => { 
                return (<div className={ item.patient_id === patient ? `${style.selectpatient}` : `${style.patientItem}` }
                          onClick={() => {
                            setCurPatient(item); 
                          }} 
                          key={item.patient_id}> 
                          {item.patient_name} ( {item.patient_gender} {item.patient_birth} ) 
                        </div>); })
        }
        {
        listState === "complete" &&
        patients && patients.length > 0 && patients.filter( item =>  item.patient_state === "complete" ).map((item) => { 
                return (<div className={ item.patient_id === patient ? `${style.selectpatient}` : `${style.patientItem}` }
                          onClick={() => {
                            setCurPatient(item); 
                          }} 
                          key={item.patient_id}> 
                          {item.patient_name} ( {item.patient_gender} {item.patient_birth} ) 
                        </div>); })
        }
      </div>
      <div className={style.patient}>
        <i className={`far fa-user-circle ${style.profileIcon}`}></i>
        <div className={style.patientDescription}>

          { curPatient.patient_id !=="" && <span className={style.name}> {curPatient.patient_name}({curPatient.patient_gender}, 만{curPatient.patient_birth}세) </span> }
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