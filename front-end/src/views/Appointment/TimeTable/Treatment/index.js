import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { getTreatmentAppoint } from "../../../../apis/appointment";
import Appoint from "./Modal/Appoint/Appoint";
import styles from "./index.module.css";
import Cancel from "./Modal/Cancel/Cancel";
import { useSelector } from "react-redux";

/*
  Title : Appointment_TimeTable_Treatment 
  Description : 진료예약 현황을 보여주는 화면

  Date : 2021-07-10
  Author : 조운호
*/
function Treatment(props) {
  const {startDate,hospital} = props;
  const [appointList,setAppointList] = useState(null);
  const [showAppointModal, setShowAppointModal] = useState(false);
  const [showCancelModal, setCancelModal]=useState(false);
  const [clickedappoint,setClickedAppoint] = useState({}); //선택한 예약정보
  const client = useSelector((state) => state.mqttReducer.client);

  const [selectAppointInfo,setSelectAppointInfo] = useState({
    appointment_time:"",
    staff_id:"",
  });


  /*
    # 모달창 열기
      1. 예약 상태에 따라 열리는 모달창 다름.
        - 상태(취소) => 다시 예약 가능
        - 상태(예약) => 예약 취소 가능
        - 빈셀 => 예약 가능 
  */
  const openAppointmentModal = (timelyAppoint,appoint,index) =>{
    const staff_name=Object.keys(timelyAppoint)[index];
    const now=moment().format("YYYY-MM-DD HH:mm");
    const click=moment(moment(startDate).format("YYYY-MM-DD")+ " "+timelyAppoint.시간).format("YYYY-MM-DD HH:mm")
    if(now>click){
      alert("현재 날짜와 시간 이후만 업데이트 할 수 있습니다.");
      return;
    }
    if(appoint.appointment_id !==undefined){
      if(appoint.appointment_state==="취소"){
        setSelectAppointInfo({
          appointment_time:timelyAppoint.시간,
          staff_id :appoint.staff_id
        })
        setShowAppointModal(true);
      } else if(appoint.appointment_state==="예약"){
        appoint.staff_name=staff_name;
        setClickedAppoint(appoint);
        setCancelModal(true);
      } else{
        return ;
      }
    }else{
      setSelectAppointInfo({
        appointment_time:timelyAppoint.시간,
        staff_id :appoint
      })
      setShowAppointModal(true);
    }  
  }

  /*
    # 데이터 변환
      1. 의사별 진료 예약 현황
      2. 데이터를 {의사1:예약내용 , 의사2:예약내용 , 의사3: 예약내용} 로 변환
      3. 데이터 변환 이유: map함수를 이용해서 의사별로 바로바로 예약 내용 뿌려 주기 위함
      4. 진료는 데이터 변환해서 작성 / 검사는 예약 내용을 컴포넌트화해서 작성
  */
  const axiosTreatmentAppointList = useCallback(async() => {
    try{
      const response =await getTreatmentAppoint(moment(startDate).format("YYYY-MM-DD"));
      const start_time =hospital.officehour_start;
      const end_time =hospital.officehour_end;
      const lunch_end = hospital.lunch_end;
      const interval =hospital.officehour_interval;
      let temp = start_time;
      let appointmentTime =new Array();
      let i=0;
      while(temp<end_time){
        if(!(hospital.lunch_start<temp && temp<lunch_end)){
          appointmentTime[i++] =temp;
        }
        if(temp ==="23:30"){
          break;
        }
        temp =moment(moment().format("YYYY-MM-DD")+" "+temp).add(interval,'m').format("HH:mm") 
      }
      const staffs =response.data.staffs;
      const doctorAppointment = response.data.doctorAppointment;
      let treatmentAppoint=[]
      for(let time of appointmentTime){
        let timelyData = new Object();
        timelyData.시간=time;
        for(let i=0;i<staffs.length;i++){
          for(let item of doctorAppointment[i]){
              if(time === item.appointment_time){
                timelyData[staffs[i].staff_name] = item;
              }                
          }
          if(timelyData[staffs[i].staff_name] ===undefined){
            timelyData[staffs[i].staff_name] = staffs[i].staff_id;
          }
        }
        treatmentAppoint.push(timelyData);
      }
      setAppointList(treatmentAppoint);
    } catch(error){
      throw error;
    }
  })
  /*
    # Mqtt 메세지 도착
     1. 현재페이지 리렌더링 메세지 도착시 list 다시 뿌려줌
  */
  const MqttBroker = () => {
    client.onMessageArrived = (msg) => {
      console.log("메세지 도착");
      let message = JSON.parse(msg.payloadString);

      message = message.content.split('/');
      if(message[0] === "rerender" && message[1] === "Appointment_TimeTable_Treatment"){
        axiosTreatmentAppointList();
      }
      
    }
  }



  useEffect(() => {
    if(hospital !==null){
      axiosTreatmentAppointList();
      MqttBroker();
    }
    
  },[props])
  

  //모달 관리
  const AppointModalClose = () => setShowAppointModal(false);
  const CancelModalClose = () => setCancelModal(false);


  return(    
    appointList !== null && hospital !==null?
    (
    <table className= {`${styles.TimeTable} table`}>
      <thead className= {styles.thead}>
        <tr>
          {Object.keys(appointList[0]).map((data,index) => {
            return(
              <th key={index}>{data}</th>
            )
          })}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {console.log(appointList)}
        {appointList.map((timelyAppoint,index) => {
          return(
            
            <tr key={index}>
              {
                Object.values(timelyAppoint).map((appoint,index) => {
                  if(index ===0){
                    return(
                      <td className={styles.not_poniter} key={appoint}>{appoint}</td>
                    )
                  }else{
                    if((typeof appoint) !== "string"){
                      
                      return(
                        <td 
                            key={index} 
                            onClick={() =>openAppointmentModal(timelyAppoint,appoint,index)}
                            >
                          <div className ={styles.info}>
                            <div className={appoint.appointment_state ==="예약" ? 
                                  `${styles.appoint}`
                                  : 
                                  appoint.appointment_state ==="취소" ? 
                                  `${styles.cancel}`
                                  :
                                  appoint.appointment_state ==="완료" ?
                                  `${styles.complete}`
                                  :
                                  `${styles.visit}`}>
                              <span>{appoint.patient_name}</span>
                              <span>({appoint.patient_gender})</span>
                              <span>{appoint.appointment_state}</span>
                              <div>
                                {appoint.appointment_content}
                               </div>
                            </div>
                          </div>                         
                        </td>
                      )
                    }else{
                      if(timelyAppoint.시간 ===hospital.lunch_start){
                        return (<td key={index} className={styles.lunch}>점심시간</td>)
                      }
                      return(
                        <td key={index} onClick={() =>openAppointmentModal(timelyAppoint,appoint,index)}>
                          <div>                            
                          </div>
                        </td>
                      )
                    }
                  }
                  
                })
              }
            </tr>
          )
        })}
      </tbody>
      <Modal
           show={showAppointModal} 
          onHide={AppointModalClose}
          size="lg"
          centered="true"
          >
            <Appoint AppointModalClose={AppointModalClose} selectAppointInfo={selectAppointInfo} startDate={startDate} axiosTreatmentAppointList={axiosTreatmentAppointList}></Appoint>
      </Modal>
      <Modal
            show={showCancelModal} 
            onHide={CancelModalClose}
            size="sm"
            centered="true"
            >
            <Cancel CancelModalClose={CancelModalClose} clickedappoint={clickedappoint} axiosTreatmentAppointList={axiosTreatmentAppointList}></Cancel>
      </Modal>
    </table>
    )
    :
    (null)
    
  );
}
export default Treatment;