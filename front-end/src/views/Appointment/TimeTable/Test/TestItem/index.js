import moment from "moment";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { getTestAppointmentList } from "../../../../../apis/appointment";
import Appoint from "../Modal/Appoint";
import Cancel from "../Modal/Cancel";

import styles from "./index.module.css";
function TestItem(props) {
  const {startDate,time,lunch_start} = props;
  let appointment_date = moment(startDate).format("YYYY-MM-DD"); //데이터 변환
  const [testAppoint,setTestAppoint] = useState([]);
  const [clickedAppointment,setClickedAppointment] = useState({});
  const [showCancelModal, setCancelModal]=useState(false);
  const [showAppointModal, setAppointModal]=useState(false);

  const CancelModalClose = () => setCancelModal(false);
  const appointModalClose = () => setAppointModal(false);

  //해당 날짜와 시간에 해당하는 예약정보 가져오기
  const axiosTestList = async() => {
    try{
      const response = await getTestAppointmentList(appointment_date,time);
      setTestAppoint(response.data);
    } catch(error){
      throw error;
    }
  }
  //취소 모달창 오픈
  const openModal = (appointItem) => {
    if(appointItem.appointment_state === "예약"){
      setClickedAppointment(appointItem);
      setCancelModal(true);
    }
  }
  //예약 모달창 오픈
  const openAppointModal = () => {
    setAppointModal(true);
  }
  useEffect(() => {
    axiosTestList();
  },[startDate,showCancelModal])
  return(
    <>
    <td>
      {
        time===lunch_start ?
        <div> 점심시간</div>
        :
        <div className={`d-flex`}>
        <button className={`${styles.addbtn}`} onClick={openAppointModal}>예약</button>
        {testAppoint.map((appointItem,index) => {
          return(
              <>
              <div key={index} 
                  onClick = {() => openModal(appointItem)}
                  className={appointItem.appointment_state ==="예약" ? 
                            `${styles.appoint} ${styles.default}`
                            : 
                            appointItem.appointment_state ==="취소" ? 
                            `${styles.cancel} ${styles.default}`
                            :
                            appointItem.appointment_state ==="완료" ?
                            `${styles.complete} ${styles.default}`
                            :
                            `${styles.visit} ${styles.default}`}>
                <span>{appointItem.patient_name}</span>
                <span>({appointItem.patient_gender})</span>
                <div><span>{appointItem.appointment_state}</span></div>   
              </div>
              </>      
          );
        })}
        </div>
      }
      
    </td>
    
      <Modal
            show={showCancelModal} 
            onHide={CancelModalClose}
            size= "lg"
            centered="true"
            >
            <Cancel clickedAppointment={clickedAppointment} CancelModalClose={CancelModalClose}></Cancel>
      </Modal>

      <Modal
            show={showAppointModal} 
            onHide={appointModalClose}
            size= "lg"
            centered="true"
            >
            <Appoint startDate={startDate} time={time}></Appoint>
      </Modal>
    </>
  );
}
export default TestItem;