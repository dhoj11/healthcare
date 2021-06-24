import styles from "./AppointmentWithTestModal.module.css";
import {Modal, Button} from "react-bootstrap";
import {getPatientList} from "../../data";
import Calendar from "../../../Appointment/Calendar/Calendar"
import TimeSelect from "../../common/TimeSelect";
import {useState, useEffect} from "react";

function AppointmentWithTestModal(props) {
  
  const {patientId, testCodes, isOpen, close} = props;
  const staticPatientList = getPatientList();
  const filteredPatient = staticPatientList.filter(patients => (patients.patientId === patientId));

  const [startDate, setStartDate] = useState(new Date());   //calendar에 전해줄 상태
  const [patient, setpatient] = useState({});

  const changeDate = (date) => {
    setStartDate(date);
    console.log(date);
  }

  useEffect(() => {   //props가 변경될 때 patient의 상태를 props로 전해받은 patientId에 해당하는 환자로 세팅을 해줌
    setpatient(filteredPatient[0]);
    return (() => {
        console.log("검사 예약 언마운트시 실행");
    });
  }, [props]);

  return (
    <>
    {isOpen ? (
      patient !== undefined ? (
        <Modal show={isOpen} onHide={close} size="lg" centered="true" className="modal">
        <Modal.Header closeButton>
          <Modal.Title>검사 예약</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <div className={styles.register_form_row}>
              <div className={`${styles.border_title} border`} >환자 이름</div>
              {patient.name}
            </div>
            <div className={styles.register_form_row}>
              <div className={`${styles.border_title} border`}>검사 종류</div>
              <div className="d-flex">
                {testCodes.map((testCode,index)=>(
                  <div key={index}>
                    <input className="mr-2" type="checkbox" checked readOnly /><span className="mr-3">{testCode}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="d-flex">
              <div><Calendar startDate={startDate} changeDate={changeDate}></Calendar></div>
              <div>
                <TimeSelect />
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
      ):(
        <Modal show={isOpen} onHide={close} size="lg" centered="true" className="modal">
        <Modal.Header closeButton>
          <Modal.Title>검사 예약</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            환자를 선택해주세요.
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
      ) 
    ) : null}
    </>
  );
    }

export default AppointmentWithTestModal;