import {Modal} from "react-bootstrap";
import {useState, useEffect} from "react";
import styles from "./AppointmentWithTreatmentModal.module.css";
import Calendar from "../../../Appointment/Calendar";
import {getDoctorNameList, addNewAppointment, isReserved} from "../../../../apis/administration";
import moment from "moment";
import TimeSelector from "./TimeSelector";
import { useSelector } from "react-redux";
import React from "react";


function AppointmentModal(props) {
  const {setRerenderer, dayAppointment, patient, isOpen, close} = props;
  const hospital_code = useSelector(state => state.authReducer.hospital_code);

  const [doctorList, setDoctorList] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [appointmentDate, setAppointmentDate] = useState(moment().format("YYYY-MM-DD"));
  const [appointmentTime, setAppointmentTime] = useState("");
  const [staff, setStaff] = useState("");
  const [possibleTime, setPossibleTime] = useState();
  const [appointment, setAppointment] = useState({
    appointment_date: moment().format("YYYY-MM-DD"),
    patient_id: "",
    appointment_content: "",
    appointment_kind: "진료"
  });

  useEffect(() => {
    if(patient !== undefined) {
      const work = async() => {
        try{
          const response = await getDoctorNameList();
          setDoctorList(response.data);
        }catch(error) {
          console.log(error.message);
        }
      };
      work();
      setStartDate(new Date());
      setAppointmentDate(moment().format("YYYY-MM-DD"));
      setAppointment({
        patient_id: patient.patient_id,
        appointment_content: "",
        appointment_kind: "진료"
      });
    }
  },[isOpen]);

  useEffect(() => {
    if(appointmentDate !== "" && staff !== "") {
      const work = async() => {
        try{
          const response = await isReserved(hospital_code, staff, appointmentDate);
          setPossibleTime(response.data);
        }catch(error) {
          console.log(error.message);
        }
      }
      work();
    }
  },[appointmentDate]);

  useEffect(() => {
    if(appointmentDate !== "" && staff !== "") {
      const work = async() => {
        try{
          const response = await isReserved(hospital_code, staff, appointmentDate);
          setPossibleTime(response.data);
        }catch(error) {
          console.log(error.message);
        }
      }
      work();
    }
  },[staff]);

  useEffect(() => {
    if(doctorList !== undefined) {
      setStaff(doctorList[0].staff_id);
    }
  },[doctorList])

  const changeDate = (date) => {
    const fmt = moment(date).format("YYYY-MM-DD");
    setStartDate(date);
    setAppointmentDate(fmt);
    console.log(appointmentDate);
  }

  const changeTime = (time) => {
    setAppointmentTime(time);
  }

  const handleChange = (event) => {
    setAppointment({
      ...appointment,
      [event.target.name]: event.target.value
    });
  }

  const handleRadioChange = (event) => {
    setStaff(event.target.value);
  }

  const newAppointment = async() => {
    if(staff === "") {
      alert("담당의를 선택해주세요.");
      return;
    }else if(appointment.appointment_content===""){
      alert("진료 내용을 입력해주세요.");
      return;
    }else if(appointmentTime === "") {
      alert("예약 시간을 선택해주세요.");
      return;
    }
    setRerenderer(new Date());
    const newAppointment = {...appointment, appointment_date: appointmentDate, appointment_time: appointmentTime, staff_id: staff};
    try{
      await addNewAppointment(newAppointment);
    }catch(error) {
      console.log(error.message);
    }
    if(newAppointment.appointment_date === moment().format("YYYY-MM-DD")) {
      dayAppointment(new Date());
    }
    setAppointmentTime("");
    close();
  }

  return (
    <>
    {isOpen ? (
      patient !== undefined ? (
      <Modal show={isOpen} onHide={close} size="lg" centered="true" className="modal">
      <Modal.Header closeButton>
        <Modal.Title>진료 예약</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`} >환자이름</div>
            <div>{patient.patient_name}</div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>진료의</div>
            <div className="d-flex">
              {doctorList.map((doctor, key, index)=>(
                <>
               
                  <div key={key}>
                  <input className="mr-2" type="radio" name="staff_id" value={doctor.staff_id} checked={doctor.staff_id === staff} onChange={handleRadioChange}/>
                  <label className="form-check-label mr-2">{doctor.staff_name}</label>
                  </div>
               
                </>
              ))}
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>진료내용</div>
            <div>
              <input type="text" className="form-control" name="appointment_content" onChange={handleChange}/>
            </div>
          </div>
          <div className="d-flex">
            <div><Calendar startDate={startDate} changeDate={changeDate}></Calendar></div>
            <div>
              <TimeSelector possibleTime={possibleTime} appointmentDate={appointmentDate} staffId={staff} changeTime={changeTime}/>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className={styles.cancel_btn} onClick={close}>
          취소
        </button>
        <button className={styles.appoint_btn} onClick={newAppointment}>
          확인
        </button>
      </Modal.Footer>
    </Modal>) : (null)
    ) : null}
    </>
  );
}

export default React.memo(AppointmentModal);