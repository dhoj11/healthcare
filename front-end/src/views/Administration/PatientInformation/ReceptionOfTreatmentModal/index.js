import styles from "./ReceptionOfTreatmentModal.module.css"
import {Modal,} from "react-bootstrap";
import { getDoctorNameList, addReceptionAfterVisit } from "../../../../apis/administration";
import {useState, useEffect} from "react";
import {sendMqttMessage} from "../../../../apis/message";
import { useSelector } from "react-redux";

function ReceptionOfTreatmentModal(props) {
  const {setRerenderer, patient, isOpen, close, visitReception} = props;
  const [doctorList, setDoctorList] = useState([]);
  const hospital_code = useSelector(state => state.authReducer.hospital_code);
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
      await sendMqttMessage({
        topic : "/"+hospital_code,
        content : "rerender/Treatment_Patients"
      })
      await sendMqttMessage({
        topic : "/"+hospital_code,
        content : "rerender/Administration_Reception"
      })
    }catch(error) {
      console.log(error)
    }
    visitReception(newReception);
    setRerenderer(new Date());
    console.log(newReception);
    close();
  };

  return (
    <>
    {isOpen ? (
      <Modal show={isOpen} onHide={close} size="lg" centered="true" className="modal">
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
                <div key={key} className={styles.doctor_list}>
                  <input className="mr-2" type="radio" name="staff_id" value={doctor.staff_id} onChange={handleChange}/> 
                  <label className="form-check-label mr-2">{doctor.staff_name}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>진료내용</div>
            <div className={styles.reception_content}>
              <input type="text" className="form-control" placeholder="7자 이내로 적어주세요." name="reception_content" onChange={handleChange}/>
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