import styles from "./ReceptionOfTreatmentModal.module.css"
import {Modal,} from "react-bootstrap";
import {getPatientList, getStaffList} from "../../data";
import {useState, useEffect} from "react";

function ReceptionOfTreatmentModal(props) {
  const {patient, isOpen, close, visitReception} = props;
  // const staticPatientList = getPatientList();
  const staticStaffList = getStaffList();
  // const filteredPatient = staticPatientList.filter(patients => (patients.patientId === patientId));

  const [receptionPatient, setReceptionPatient] = useState({
    name: patient.name,
    treatmentComment: "",
    doctor: "",
    patientId: patient.patientId
  });
  
  useEffect(() => {
    setReceptionPatient({
      name: patient.name,
      treatmentComment: "",
      doctor: "",
      patientId: patient.patientId
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
            <div>{patient.name}</div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>진료의</div>
            <div className="d-flex">
              {staticStaffList.map(staff=>(
                <div key={staff.staffId}>
                  <input className="mr-2" type="radio" name="doctor" value={staff.name} onChange={handleChange}/>
                  <label className="form-check-label mr-2">{staff.name}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>진료내용</div>
            <div>
              <input type="text" className="form-control" name="treatmentComment" onChange={handleChange}/>
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