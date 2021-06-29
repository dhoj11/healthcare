import {Modal, Button} from "react-bootstrap";
import {useState, useEffect} from "react";
import {getPatientList, getStaffList} from "../../data";
import styles from "./AppointmentWithTreatmentModal.module.css";
import TimeSelect from "../../common/TimeSelect";
import Calendar from "../../../Appointment/Calendar";


function AppointmentModal(props) {
  const {patientId, isOpen, close} = props;
  const staticPatientList = getPatientList();
  const staticStaffList = getStaffList();
  const filteredPatient = staticPatientList.filter(patient => (patient.patient_id === patientId));
  
  const [startDate, setStartDate] = useState(new Date());
  const [patient, setPatient] = useState({});
  const [appointment, setAppointment] = useState({
    appointment_date: "",
    appointment_time: "",
    staff_id: "",
    patientId: patientId,
    appointment_state: "예약",
    appointment_content: "",
    appointment_kind: "진료"
  });

  useEffect(() => {
    setPatient(filteredPatient[0]);
    setAppointment({
      appointment_date: "",
      appointment_time: "",
      staff_id: "",
      patientId: patientId,
      appointment_state: "예약",
      appointment_content: "",
      appointment_kind: "진료"
    })
    return (() => {
        console.log("진료 예약 언마운트시 실행");
    });
  },[isOpen]);

  const changeDate = (date) => {
    setStartDate(date);
    console.log(date);
  }

  const handleChange = (event) => {
    setAppointment({
      ...appointment,
      [event.target.name]: event.target.value
    });
  }

  const newAppointment = () => {
    const newAppointment = {...appointment};
    close();
  }

  return (
    <>
    {isOpen ? (
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
              {staticStaffList.map((staff, key)=>(
                <div key={key}>
                  <input className="mr-2" type="radio" name="staff_id" value={staff.staff_id} onChange={handleChange}/>
                  <label className="form-check-label mr-2">{staff.staff_name}</label>
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
              <TimeSelect startDate={startDate} changeDate={changeDate} />
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
    </Modal>
    ) : null}
    </>
  );
}

export default AppointmentModal;