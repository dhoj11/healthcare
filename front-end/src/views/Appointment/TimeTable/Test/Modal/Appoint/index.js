import { useState } from "react";
import SearchPatient from "../../../../SearchPatient/index";
import TestList from "./TestList";
import styles from "./index.module.css";
import moment from "moment";
import { createTestappointment, getReceptionStaffId, getTestListTreatmentId, maxAppointmentId, testListAppointment, updateReceptionState } from "../../../../../../apis/appointment";
import { useSelector } from "react-redux";
import { sendMqttMessage } from "../../../../../../apis/message";


/*
  Title : Appointment_TimeTable_Test_Modal_Appoint
  Description : 1. 검사 예약을 할 수 있는 모달창(예약 버튼 클릭시)
                2. 환자 검색, 검사항목 선택 가능

  Date : 2021-07-10
  Author : 조운호
*/
function Appoint(props) {
  const {startDate,time,appointModalClose} = props;
  const [selectPatientId,setSelectPatientId] = useState("");  //선택한 환자 아이디
  const hospital_code = useSelector(state => state.authReducer.hospital_code);
  const selectedPatientId = (id) => {
    setSelectPatientId(id);
  }
  const [selectTestItem,setSelectTestItem] = useState(null);
  
  //checkbox선택한 testlistItem 저장
  const setSelectTestListItem = (item) => {
    setSelectTestItem(item);
  };

  /*
    # 검사 예약 하기
      1. 현재 선택한 환자의 예약할 검사항목을 가져옴
      2. 해당 검사항목으로 Reception table, Appointment table,test_list 의 state 바꿔주기
      3. 예약 테이블 튜플 생성
      4. 에약할 검사항목 예약번호 변경
      5. Mqtt 메세지 보내기 
  */
  const appointment = () => {
    let appointment_date = moment(startDate).format("YYYY-MM-DD");
    let appointment_time = time;
    if(selectTestItem.test_code[0]!==undefined){
      //reception id 가져오기
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
          //MQTT 메세지 보내기
          await sendMqttMessage({
            topic : "/"+hospital_code,
            content : "rerender/Appointment_TimeTable_Test"
          })
          await sendMqttMessage({
            topic : "/"+hospital_code,
            content : "rerender/Administration_Appointment"
          })
          await sendMqttMessage({
            topic : "/"+hospital_code,
            content : "rerender/Adiministration_TestList"
          })
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