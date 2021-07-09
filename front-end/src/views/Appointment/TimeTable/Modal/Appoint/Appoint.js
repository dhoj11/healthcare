import moment from "moment";
import { useCallback, useEffect, useRef, useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import { createTretmentAppointment, getPatientList, getPatientListByName } from "../../../../../apis/appointment";
import styles from "./Appoint.module.css";
function Appoint(props) {
  const {selectAppointInfo,AppointModalClose, startDate, axiosTreatmentAppointList} =props;
  const [patientList, setPatientList]= useState([]);
  const [appointInfo, setAppointInfo] = useState({
    selectPatientId:"",
    treatmentContent:""   
  });
  const [searchedName, setSearchedName] = useState("");
  const [select,setSelect] = useState("");

  //환자 리스트 뽑아오기
  const axiosPatientList= useCallback(async () => {
    try{
      const response = await getPatientList();
      setPatientList(response.data);
    } catch(error){
      throw error;
    }
  },[])
  useEffect(() =>{
    axiosPatientList();
  },[])

  //예약
  const makeAppointment = () => {
    console.log(selectAppointInfo);
    // console.log();
    // let appointment_date =;
    const appointment = {
      appointment_date :  moment(startDate).format("YYYY-MM-DD"),
      appointment_time : selectAppointInfo.appointment_time,
      staff_id : selectAppointInfo.staff_id,
      appointment_state : "예약",
      patient_id : appointInfo.selectPatientId,
      appointment_content : appointInfo.treatmentContent,
      appointment_kind : "진료"
    };
    (async function() {
      try{
        await createTretmentAppointment(appointment);
        axiosTreatmentAppointList();
        AppointModalClose();
      } catch(error){
        throw error;
      }
    })();

  };
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
            {patientList[index].patient_recent_visit}
            </span>     
      </div>
    );
  };

  const changeName = (e) => {
    setSearchedName(e.target.value);
  }
  const searchName = (e) => {
    (async function() {
      try{
        const response = await getPatientListByName(searchedName);
        setPatientList(response.data);
        selectPatient();
      } catch(error){
        throw error;
      }
    })(); 
  }
  const selectPatient =useCallback((e,id) => {
    console.log(id);
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
                <div className={styles.patientSearch}>
                  <i className="fas fa-user-friends"></i>
                  <span>환자 검색</span><input type="text"  placeholder="Name" onChange={changeName}/>
                  <button className="btn btn-secondary btn-sm" onClick={searchName}>검색</button>
                </div>
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
              <button className={styles.cancel_btn} onClick={AppointModalClose}>취소</button>
              <button className={styles.appoint_btn} onClick={makeAppointment} >예약</button>
            </div>
    </>
  );
}
export default Appoint;