import { useState } from "react";
import SearchPatient from "../../../../SearchPatient/index";
import TestList from "./TestList";
import styles from "./index.module.css";
import moment from "moment";
import { createTestappointment, getReceptionStaffId, maxAppointmentId, testListAppointment } from "../../../../../../apis/appointment";

function Appoint(props) {
  const {startDate,time} = props;
  const [selectPatientId,setSelectPatientId] = useState("");
  const selectedPatientId = (id) => {
    setSelectPatientId(id);
  }
  const [selectTestItem,setSelectTestItem] = useState(null);
  
  //checkbox선택한 testlistItem 저장
  const setSelectTestListItem = (item) => {
    setSelectTestItem(item);
  };
  //checkbox선택한 것들 예약해주기
  const appointment = () => {
    let appointment_date = moment(startDate).format("YYYY-MM-DD");
    let appointment_time = time;
    console.log(selectTestItem);
    if(selectTestItem.test_code[0]!==undefined){
      (async function(){
        try{
          const response = await getReceptionStaffId(selectTestItem.test_list_id[0],selectTestItem.test_code[0]);
          const staff_id=response.data;
          console.log(appointment_date,time,staff_id,selectPatientId);
          await createTestappointment({
            appointment_date,
            appointment_time:time,
            staff_id,
            patient_id:selectPatientId
          });
          const response2=await maxAppointmentId();
          const appointment_id=response2.data;
          for(let i=0; i<selectTestItem.test_code.length;i++){
            await testListAppointment({
              test_list_id:selectTestItem.test_list_id[i],
              test_code:selectTestItem.test_code[i],
              appointment_id:appointment_id,              
              test_list_date: appointment_date,
              test_list_time: time
            })
          }
        } catch(error){
          throw error;
        }
      })();
      console.log();
    }
  }
  return(
    <>
    <div className="d-flex ml-5">
      <div>
        <SearchPatient selectedPatientId={selectedPatientId}></SearchPatient>
      </div>
      <div className={styles.testList}>
        <TestList selectPatientId={selectPatientId} setSelectTestListItem={setSelectTestListItem}></TestList>
      </div>
    </div>
    <div className={styles.btn_contain}>
        <button className={styles.prev_btn}>이전</button>
        <button className={styles.appoint_btn} onClick={appointment}>예약</button>
      </div>
    </>
  );
}
export default Appoint;