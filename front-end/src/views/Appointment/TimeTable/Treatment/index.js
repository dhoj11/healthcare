import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { getTreatmentAppoint } from "../../../../apis/appointment";
import { getAppointTime } from "../data/data";
import Appoint from "../Modal/Appoint/Appoint";
import styles from "./index.module.css";
import Cancel from "../Modal/Cancel/Cancel";
import { createMasonryCellPositioner } from "react-virtualized";

function Treatment(props) {
  const {startDate} = props;
  const [appointList,setAppointList] = useState(null);

  const [showAppointModal, setShowAppointModal] = useState(false);
  const [showCancelModal, setCancelModal]=useState(false);
  const [clickedappoint,setClickedAppoint] = useState({});

  const [selectAppointInfo,setSelectAppointInfo] = useState({
    appointment_time:"",
    staff_id:"",
  });


  //예약창 열기
  const openAppointmentModal = (timelyAppoint,appoint,index) =>{
    const staff_name=Object.keys(timelyAppoint)[index];
    const now=moment().format("YYYY-MM-DD HH:mm");
    const click=moment(moment(startDate).format("YYYY-MM-DD")+ " "+timelyAppoint.시간).format("YYYY-MM-DD HH:mm")
    if(now>click){
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
  //데이터 변환
  const axiosTreatmentAppointList = useCallback(async() => {
    try{
      const response =await getTreatmentAppoint(moment(startDate).format("YYYY-MM-DD"));
      const start_time ="10:00";
      const end_time ="18:00";
      const lunch_start = "13:00";
      const lunch_end = "14:00"
      const interval =30;
      let temp = start_time;
      let appointmentTime =new Array();
      let i=0;
      
      while(temp<end_time){
        if(!(lunch_start<temp && temp<lunch_end)){
          appointmentTime[i++] =temp;
        }
        temp =moment(moment().format("YYYY-MM-DD")+" "+temp).add(interval,'m').format("HH:mm");
      }


      const staffs =response.data.staffs;
      const doctorAppointment = response.data.doctorAppointment;
      let treatmentAppoint=[]
      for(let time of appointmentTime){
        let timelyData = new Object();
        timelyData.시간=time;
        for(let i=0;i<staffs.length;i++){
          console.log(time);
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
      console.log(treatmentAppoint)
      setAppointList(treatmentAppoint);
    } catch(error){
      throw error;
    }
  })

  useEffect(() => {
    axiosTreatmentAppointList();
  },[startDate])
  

  //모달 관리
  const AppointModalClose = () => setShowAppointModal(false);
  const CancelModalClose = () => setCancelModal(false);


  return(    
    appointList !== null ?
    (
    <table className= {styles.TimeTable}>
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
        {appointList.map((timelyAppoint,index) => {
          return(
            
            <tr key={index}>
              {
                Object.values(timelyAppoint).map((appoint,index) => {
                  if(index ===0){
                    return(
                      <td key={index}>{appoint}</td>
                    )
                  }else{
                    if((typeof appoint) !== "string"){
                      return(
                        <td key={index} onClick={() =>openAppointmentModal(timelyAppoint,appoint,index)}>
                          <div>
                            <div>
                              <span>{appoint.patient_name}</span>
                              <span>({appoint.patient_gender})</span>
                              <span>{appoint.appointment_state}</span>
                            </div>
                            <div>
                              {appoint.appointment_content}
                            </div>
                          </div>
                          
                        </td>
                      )
                    }else{
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