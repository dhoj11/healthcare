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
  const filteredPatient = staticPatientList.filter(patient => (patient.patientId === patientId));
  
  const [startDate, setStartDate] = useState(new Date());
  const [patient, setPatient] = useState({});

  useEffect(() => {
    setPatient(filteredPatient[0]);
    return (() => {
        console.log("진료 예약 언마운트시 실행");
    });
  },[props]);

  const changeDate = (date) => {
    setStartDate(date);
    console.log(date);
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
            <div>{patient.name}</div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>진료의</div>
            <div className="d-flex">
              {staticStaffList.map(staff=>(
                <div key={staff.staffId}>
                  <input className="mr-2" type="radio" name="staff" value={staff.staffId}/>
                  <label className="form-check-label mr-2">{staff.name}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>진료내용</div>
            <div>
              <input type="text" className="form-control"/>
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
        <button className={styles.appoint_btn} onClick={close}>
          확인
        </button>
      </Modal.Footer>
    </Modal>
    ) : null}
    </>
  );
}

export default AppointmentModal;