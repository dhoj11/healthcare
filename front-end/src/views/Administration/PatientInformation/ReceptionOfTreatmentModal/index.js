import styles from "./ReceptionOfTreatmentModal.module.css"
import {Modal,} from "react-bootstrap";
import { getDoctorNameList, addReceptionAfterVisit } from "../../../../apis/administration";
import {useState, useEffect} from "react";

function ReceptionOfTreatmentModal(props) {
  const {patient, isOpen, close, visitReception} = props;
  const [doctorList, setDoctorList] = useState([]);
  const [receptionPatient, setReceptionPatient] = useState({
    patient_id: "",
    reception_content: "",
    staff_id: ""
  });
  
  useEffect(() => {
    if(patient !== undefined) {
      setReceptionPatient({
        patient_id: patient.patient_id,
        reception_content: "",
        staff_id: ""
      })

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
  }, [isOpen]);

  const handleChange = (event) => {
    setReceptionPatient({
      ...receptionPatient,
      [event.target.name]: event.target.value
    })
  };

  const addReception = async() => {
    const newReception = {...receptionPatient};
    try{
      await addReceptionAfterVisit(newReception);
    }catch(error) {
      console.log(error)
    }
    visitReception(newReception);
    console.log(newReception);
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
              {doctorList.map((doctor,key)=>(
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