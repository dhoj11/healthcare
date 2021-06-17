import {Modal, Button} from "react-bootstrap";
import {useState} from "react";
import styles from "./NewPatientModal.module.css"

function NewPatientModal(props) {

  const {isOpen, close} = props;
  const [newPatient, setNewPatient] = useState({
    patientId : "",
    name: "",
    birth: "",
    gender: "",
    tel: "",
    medicine: "",
    disease: "",
    comment: ""
  })

  const handleChange = (event) => {
    setNewPatient({
      [event.target.name] : event.target.value
    });
  };

  const changeMedicine = (event) => {
    setNewPatient({
      ...newPatient,
      medicine: event.target.value
    });
  };

  return (
    <>
    {isOpen ? (
      <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>신규환자등록</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="register-form">
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>이름</div>
            <div>
              <input className="form-control" value={newPatient.name} onChange={handleChange}/>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>생년월일</div>
            <div className={styles.register_form_birth}>
              <div className="d-flex">
                <input type="text" className="form-control" placeholder="" value={newPatient.birth} onChange={handleChange}/> <span> &nbsp;-&nbsp;</span>
              </div>
              <div className="d-flex">
                <input type="text" className={`${styles.form_gender}`} placeholder="" value={newPatient.gender} maxLength='1' onChange={handleChange}/><span>******</span>
              </div>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>연락처</div>
            <div>
              <input type="text" className="form-control" placeholder="'-' 없이 숫자만 입력" value={newPatient.tel} onChange={handleChange}/>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>복용약물</div>
            <div>
              <input type="text" className="form-control" placeholder="" value={newPatient.medicine} onChange={handleChange}/>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>만성질환</div>
            <div>
              <input type="text" className="form-control" placeholder="" value={newPatient.disease} onChange={handleChange}/>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>특이사항</div>
            <div>
              <input type="text" className="form-control" placeholder="" value={newPatient.comment} onChange={handleChange}/>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          취소
        </Button>
        <Button variant="primary" onClick={close}>
          등록
        </Button>
      </Modal.Footer>
    </Modal>
    ) : null}
    </>
  );
}

export default NewPatientModal;