import { useCallback, useRef, useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import { getPatientList } from "../../data/data";
import styles from "./Appoint.module.css";
function Appoint(props) {

  const [patientList, setPatientList]= useState(getPatientList);
  const [appointInfo, setAppointInfo] = useState({
    selectPatientId:"",
    treatmentContent:""   
  });
  const [select,setSelect] = useState("");
  const rowRenderer = ({index, key,style}) => {
    return (
      
      <div key={key}
           style={style} 
           className={
                      select === patientList[index].patient_id? `${styles.tbodyClicked} ${styles.tbody}` : `${styles.tbodyDefault} ${styles.tbody}`     
                      } 
           onClick={(e) => selectPatient(e,patientList[index].patient_id)}>
          
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
            {patientList[index].reception_date}
            </span>     
             
      </div>
    );
  };

  const searchName = (e) => {
      const result= getPatientList().filter(data => data.patient_name.includes(e.target.value));
      setPatientList(result);
      if(e.target.value===""){
        setPatientList(getPatientList());
      }
    //rowRenderer();
  }

  const selectPatient =useCallback((e,id) => {
    console.log(id);
    console.log("afdafa",appointInfo);
    setSelect(id);
    setAppointInfo({
      ...appointInfo,
      selectPatientId:id
    });
  },[appointInfo])

  const setTreatmentcontent = (e) => {
    console.log("aaaaaaa",e.target.value);
    setAppointInfo({      
      ...appointInfo,
      treatmentContent:e.target.value
    })
  }
  return(
    <>
    <div className="modal_body">
      
              <div className={`d-flex justify-content-between ${styles.search}`}>
                <div className={styles.patientSearch}><i class="fas fa-user-friends"></i><span>환자 검색</span><input type="text"  placeholder="Name" onChange={searchName}/></div>
                <div className={styles.treatmentContent}><span>진료 내용</span><input type="text" onChange={setTreatmentcontent}></input></div>
              </div>
              <div className={styles.patient_table}>
                <div className={styles.thead}>
                  <span>이름</span><span>성별</span><span>생년월일</span><span>전화번호</span><span>최근내원일</span>
                </div>
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
              <button className={styles.cancel_btn} onClick={props.AppointModalClose}>취소</button>
              <button className={styles.appoint_btn} onClick={() => props.appoint(appointInfo)}>예약</button>
            </div>
    </>
  );
}
export default Appoint;