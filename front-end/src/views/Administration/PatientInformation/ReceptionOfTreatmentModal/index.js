import styles from "./ReceptionOfTreatmentModal.module.css"
import {Modal,} from "react-bootstrap";
import {getStaffList} from "../../data";
import {useState, useEffect} from "react";
import moment from "moment";

function ReceptionOfTreatmentModal(props) {
  const {patient, isOpen, close, visitReception} = props;
  const staticStaffList = getStaffList();

  const [receptionPatient, setReceptionPatient] = useState({
    reception_date: moment().format("YYYY-MM-dd"),
    reception_time: moment().format("HH:mm"),
    patient_name: patient.patient_name,
    reception_content: "",
    staff_name: "",         //staff_id로 수정 필요
    appointment_id: null,
    reception_state: "대기",
    patient_id: patient.patient_id
  });
  
  useEffect(() => {
    setReceptionPatient({
      patient_name: patient.patient_name,
      reception_content: "",
      staff_name: "",
      patient_id: patient.patient_id
    })
    return (() => {
      
    });
  }, [isOpen]);

  const handleChange = (event) => {
    setReceptionPatient({
      ...receptionPatient,
      [event.target.name]: event.target.value
    })
  };

  const addReception = () => {
    const newReception = {...receptionPatient};
    visitReception(newReception);
    close();
  };

  return (
    <>
    {isOpen ? (
      <Modal show={isOpen} onHide={close} centered="true" className="modal">
      <Modal.Header closeButton>
        <Modal.Title>진료 접수</Modal.Title>
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
              {staticStaffList.map((staff,key)=>(
                <div key={key}>
                  <input className="mr-2" type="radio" name="staff_name" value={staff.staff_name} onChange={handleChange}/> 
                  <label className="form-check-label mr-2">{staff.staff_name}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>진료내용</div>
            <div>
              <input type="text" className="form-control" name="reception_content" onChange={handleChange}/>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className={styles.cancel_btn} onClick={close}>
          취소
        </button>
        <button className={styles.appoint_btn} onClick={addReception}>
          확인
        </button>
      </Modal.Footer>
    </Modal>
    ) : null}
    </>
  );
    }
export default ReceptionOfTreatmentModal;