import {Modal, Button} from "react-bootstrap";
import {useState, useEffect} from "react";
import styles from "./AppointmentWithTreatmentModal.module.css";
import TimeSelect from "../../common/TimeSelect";
import Calendar from "../../../Appointment/Calendar";
import {getDoctorNameList, addNewTreatmentAppointment} from "../../../../apis/administration";
import moment from "moment";


function AppointmentModal(props) {
  const {dayAppointment, patient, isOpen, close} = props;
  const [doctorList, setDoctorList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [appointmentDate, setAppointmentDate] = useState(moment().format("YYYY-MM-DD"));
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointment, setAppointment] = useState({
    appointment_date: moment().format("YYYY-MM-DD"),
    staff_id: "",
    patient_id: "",
    appointment_content: ""
  });

  useEffect(() => {
    if(patient !== undefined) {
      setStartDate(new Date());
      setAppointmentDate(moment().format("YYYY-MM-DD"));
      setAppointment({
        staff_id: "",
        patient_id: patient.patient_id,
        appointment_content: "",
      });
      const work = async() => {
        try{
          const response = await getDoctorNameList();
          setDoctorList(response.data);
        }catch(error) {
          console.log(error.message);
        }
      };
      work();
    }
  },[isOpen]);

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

  const newAppointment = async() => {
    const newAppointment = {...appointment, appointment_date: appointmentDate, appointment_time: appointmentTime};
    console.log(newAppointment);
    try{
      await addNewTreatmentAppointment(newAppointment);
    }catch(error) {
      console.log(error.message);
    }
    if(newAppointment.appointment_date === moment().format("YYYY-MM-DD")) {
      dayAppointment(true);
    }
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
              {doctorList.map((doctor, key)=>(
                <div key={key}>
                  <input className="mr-2" type="radio" name="staff_id" value={doctor.staff_id} onChange={handleChange}/>
                  <label className="form-check-label mr-2">{doctor.staff_name}</label>
                </div>
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
              <TimeSelect startDate={startDate} appointmentDate={appointmentDate} staffId={appointment.staff_id} changeTime={changeTime}/>
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

export default AppointmentModal;