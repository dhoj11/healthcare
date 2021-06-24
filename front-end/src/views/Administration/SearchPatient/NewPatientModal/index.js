import {Modal, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import styles from "./NewPatientModal.module.css"
import moment from "moment";

function NewPatientModal(props) {

  const date = new Date();
  const {isOpen, close, newPaitentList} = props;
  const [newPatientId, setNewPatientId] = useState(20);
  const [newPatient, setNewPatient] = useState({
    name: "",
    gender: "",
    birth: "",
    tel: "",
    recentVisit: moment().format('YYYY-MM-DD'),
    medicine: "",
    disease: "",
    comment: ""
  })

  useEffect(() => {
    setNewPatient({
      name: "",
      gender: "",
      birth: "",
      tel: "",
      recentVisit: moment().format('YYYY-MM-DD'),
      medicine: "",
      disease: "",
      comment: ""
    })
    return (() => {
      
    });
  }, [props.isOpen]);

  const handleChange = (event) => {
    setNewPatient({
      ...newPatient,
      [event.target.name] : event.target.value
    });
  };

  const addNewPatient = () => {
    const patientAge = moment().diff(newPatient.birth, 'years');
    const patient = {patientId: newPatientId.toString(), age: patientAge.toString(), ...newPatient};
    setNewPatientId(newPatientId + 1);
    newPaitentList(patient);
    close();
  };

  return (
    <>
    {isOpen ? (
      <Modal show={isOpen} onHide={close} centered="true" className="modal">
      <Modal.Header closeButton>
        <Modal.Title>신규환자등록</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="register-form">
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>이름</div>
            <div>
              <input className="form-control" name="name" value={newPatient.name} onChange={handleChange}/>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>생년월일</div>
            <div className={styles.register_form_birth}>
              <div className="d-flex">
                <input type="date" name="birth" className="form-control" value={newPatient.birth} onChange={handleChange}/>
              </div>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>성별</div>
              <div className="d-flex">
                <div>
                  <input className="mr-1" type="radio" name="gender" value="남" onChange={handleChange} />
                  <label className="mr-3">남</label>
                </div>
                <div>
                  <input className="mr-1" type="radio" name="gender" value="여" onChange={handleChange} />
                  <span>여</span>
                </div>
              </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>연락처</div>
            <div>
              <input type="text" name="tel" className="form-control" placeholder="'-' 포함 숫자 입력" value={newPatient.tel} onChange={handleChange}/>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>복용약물</div>
            <div className="d-flex">
              <div className={`${styles.medicine}`}>
                <input className="mr-1" type="radio" name="medicine" placeholder="" value="없음" onChange={handleChange}/><label className="mr-3">없음</label>
              </div>
              <div className={`${styles.medicine} d-flex`}>
                <div>
                  <input className="mr-1" type="radio" name="medicine" value={newPatient.medicine} onChange={handleChange}/><label className="mr-1">기타</label>
                </div>
                <div>
                  <input type="text" name="medicine" className="form-control" placeholder="" value={newPatient.medicine} onChange={handleChange}/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>만성질환</div>
            <div className="d-flex">
              <div className={`${styles.medicine}`}>
                <input className="mr-1" type="radio" name="disease" placeholder="" value="없음" onChange={handleChange}/><label className="mr-3">없음</label>
              </div>
              <div className={`${styles.medicine} d-flex`}>
                <div>
                  <input className="mr-1" type="radio" name="disease" value={newPatient.disease} onChange={handleChange}/><label className="mr-1">기타</label>
                </div>
                <div>
                  <input type="text" name="disease" className="form-control" placeholder="" value={newPatient.disease} onChange={handleChange}/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>특이사항</div>
            <div className="d-flex">
              <div className={`${styles.medicine}`}>
                <input className="mr-1" type="radio" name="comment" placeholder="" value="없음" onChange={handleChange}/><label className="mr-3">없음</label>
              </div>
              <div className={`${styles.medicine} d-flex`}>
                <div>
                  <input className="mr-1" type="radio" name="comment" value={newPatient.comment} onChange={handleChange}/><label className="mr-1">기타</label>
                </div>
                <div>
                  <input type="text" name="comment" className="form-control" placeholder="" value={newPatient.comment} onChange={handleChange}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          취소
        </Button>
        <Button variant="primary" onClick={addNewPatient}>
          등록
        </Button>
      </Modal.Footer>
    </Modal>
    ) : null}
    </>
  );
}

export default NewPatientModal;