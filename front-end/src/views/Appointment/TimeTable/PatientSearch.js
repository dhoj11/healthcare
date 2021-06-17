import { useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import { getPatientList } from "../data";
import styles from "./PatientSearch.module.css";
function PatientSearch(props) {

  const [patientList, setPatientList]= useState(getPatientList());
  const rowRenderer = ({index, key,style}) => {
    console.log(key,index);
    return (
      <div key={key} style={style} className={styles.tbody} onClick={(e) => selectPatient(e,patientList[index].patient_name)}>
        
          <span>
            {patientList[index].patient_name}
            </span>
            <span>
            {patientList[index].patient_gender}
            </span>
            <span>
            {patientList[index].patient_birth}
            </span>
            <span>
            {patientList[index].patient_tel}
            </span>
            <span>
            {patientList[index].date}
            </span>     
             
      </div>
    );
  };

  const searchName = (e) => {
      console.log(e.target.value)
      const result= getPatientList().filter(data => data.patient_name.includes(e.target.value));
      console.log(result);
      setPatientList(result);
      if(e.target.value===""){
        setPatientList(getPatientList());
      }
    //rowRenderer();
  }

  const selectPatient = (e,name) => {
    console.log(name);
    console.log(e);
    if(e.currentTarget.style.backgroundColor==="red"){
      e.currentTarget.style.backgroundColor="";
    }else{
      e.currentTarget.style.backgroundColor ="red";
    }
  } 
  return(
    <>
    <div className="modal_body">
              <div className={styles.search}><input type="text" className={styles.search__input} placeholder="Search" onChange={searchName}/></div>
              <div className={styles.patient_table}>
                <div className={styles.thead}><span>이름</span><span>성별</span><span>생년월일</span><span>전화번호</span><span>최근내원일</span></div>
                <AutoSizer disableHeight>
                  {({width, height}) => {
                    return (
                      <List width={width} height={250} 
                            list={patientList} 
                            rowCount={patientList.length}
                            rowHeight={50}
                            rowRenderer={rowRenderer}
                            overscanRowCount={4}/> 
                    );
                  }}
                </AutoSizer>
              </div>
            </div>
            <div className="modal_footer">
              <button className={styles.cancel_btn} onClick={props.handleClose}>취소</button>
              <button className={styles.appoint_btn} onClick={props.handleClose}>예약</button>
            </div>
    </>
  );
}
export default PatientSearch;