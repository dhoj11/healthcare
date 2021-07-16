import { useState } from "react";
import SearchPatient from "../../../../SearchPatient/index";
import TestList from "./TestList";
import styles from "./index.module.css";
import moment from "moment";
import { createTestappointment, getReceptionStaffId, getTestListTreatmentId, maxAppointmentId, testListAppointment, updateReceptionState } from "../../../../../../apis/appointment";

function Appoint(props) {
  const {startDate,time,appointModalClose} = props;
  const [selectPatientId,setSelectPatientId] = useState("");
  const selectedPatientId = (id) => {
    setSelectPatientId(id);
  }
  const [selectTestItem,setSelectTestItem] = useState(null);
  
  //checkbox선택한 testlistItem 저장
  const setSelectTestListItem = (item) => {
    setSelectTestItem(item);
  };
  console.log(selectTestItem);
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
          const modifyAppointmentDate = moment(appointment_date).format("YYMMDD");
          //검사항목 예약 해주기
          for(let i=0; i<selectTestItem.test_code.length;i++){
            const response = await getTestListTreatmentId(selectTestItem.test_list_id[i],selectTestItem.test_code[i]);
            const treatment_id = response.data;
            const modify_test_list_id = modifyAppointmentDate+treatment_id;
            console.log(modify_test_list_id);
            await testListAppointment({
              test_list_id:selectTestItem.test_list_id[i],
              test_code:selectTestItem.test_code[i],
              appointment_id:appointment_id,              
              test_list_date: appointment_date,
              test_list_time: time,
              modify_test_list_id:modify_test_list_id
            })
          }
          let newReceptionIdArr = new Set(selectTestItem.reception_id);
          newReceptionIdArr = [...newReceptionIdArr];
          //접수테이블 state 바꿔주기
          for(let j=0; j<newReceptionIdArr.length;j++){
            await updateReceptionState(newReceptionIdArr[j]);
          }
          appointModalClose();
        } catch(error){
          throw error;
        }
      })();
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
        <button className={styles.prev_btn} onClick={appointModalClose}>이전</button>
        <button className={styles.appoint_btn} onClick={appointment}>예약</button>
      </div>
    </>
  );
}
export default Appoint;