import {Modal, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import styles from "./NewPatientModal.module.css"
import moment from "moment";

function NewPatientModal(props) {

  const {isOpen, close, addNewPaitent} = props;
  const [newPatient, setNewPatient] = useState({
    patient_name: "",
    patient_gender: "",
    patient_birth: "",
    patient_tel: "",
    patient_recent_visit: moment().format('YYYY-MM-DD'),
    patient_medicine: "",
    patient_disease: "",
    patient_comment: ""
  })

  useEffect(() => {
    setNewPatient({
      patient_name: "",
      patient_gender: "",
      patient_birth: "",
      patient_tel: "",
      patient_recent_visit: moment().format('YYYY-MM-DD'),
      patient_medicine: "",
      patient_disease: "",
      patient_comment: ""
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
    if(newPatient.patient_name === "") {
      alert("환자의 이름을 입력해주세요.")
      return;
    }else if(newPatient.patient_gender === "") {
      alert("환자의 성별을 입력해주세요.")
      return;
    }else if(newPatient.patient_birth === "") {
      alert("환자의 생년월일을 입력해주세요.")
      return;
    }else if(newPatient.patient_tel === "") {
      alert("환자의 연락처를 입력해주세요.")
      return;
    }else if(newPatient.patient_medicine === "") {
      alert("환자의 복용약물을 입력해주세요.")
      return;
    }else if(newPatient.patient_disease === "") {
      alert("환자의 만성질환을 입력해주세요.")
      return;
    }else if(newPatient.patient_comment === "") {
      alert("환자의 특이사항을 입력해주세요.")
      return;
    }
    addNewPaitent(newPatient);
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
              <input className="form-control" name="patient_name" value={newPatient.patient_name} onChange={handleChange}/>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>생년월일</div>
            <div className={styles.register_form_birth}>
              <div className="d-flex">
                <input type="date" name="patient_birth" className="form-control" value={newPatient.patient_birth} onChange={handleChange}/>
              </div>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>성별</div>
              <div className="d-flex">
                <div>
                  <input className="mr-1" type="radio" name="patient_gender" value="남" onChange={handleChange} />
                  <label className="mr-3">남</label>
                </div>
                <div>
                  <input className="mr-1" type="radio" name="patient_gender" value="여" onChange={handleChange} />
                  <span>여</span>
                </div>
              </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>연락처</div>
            <div>
              <input type="text" name="patient_tel" className="form-control" placeholder="'-' 포함 숫자 입력" value={newPatient.patient_tel} onChange={handleChange}/>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>복용약물</div>
            <div className="d-flex">
              <div className={`${styles.medicine}`}>
                <input className="mr-1" type="radio" name="patient_medicine" placeholder="" value="없음" onChange={handleChange}/><label className="mr-3">없음</label>
              </div>
              <div className={`${styles.medicine} d-flex`}>
                <div>
                  <input className="mr-1" type="radio" name="patient_medicine" value={newPatient.patient_medicine} onChange={handleChange}/><label className="mr-1">기타</label>
                </div>
                <div>
                  <input type="text" name="patient_medicine" className="form-control" placeholder="" value={newPatient.patient_medicine} onChange={handleChange}/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>만성질환</div>
            <div className="d-flex">
              <div className={`${styles.medicine}`}>
                <input className="mr-1" type="radio" name="patient_disease" placeholder="" value="없음" onChange={handleChange}/><label className="mr-3">없음</label>
              </div>
              <div className={`${styles.medicine} d-flex`}>
                <div>
                  <input className="mr-1" type="radio" name="patient_disease" value={newPatient.patient_disease} onChange={handleChange}/><label className="mr-1">기타</label>
                </div>
                <div>
                  <input type="text" name="patient_disease" className="form-control" placeholder="" value={newPatient.patient_disease} onChange={handleChange}/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.register_form_row}>
            <div className={`${styles.border_title} border`}>특이사항</div>
            <div className="d-flex">
              <div className={`${styles.medicine}`}>
                <input className="mr-1" type="radio" name="patient_comment" placeholder="" value="없음" onChange={handleChange}/><label className="mr-3">없음</label>
              </div>
              <div className={`${styles.medicine} d-flex`}>
                <div>
                  <input className="mr-1" type="radio" name="patient_comment" value={newPatient.patient_comment} onChange={handleChange}/><label className="mr-1">기타</label>
                </div>
                <div>
                  <input type="text" name="patient_comment" className="form-control" placeholder="" value={newPatient.patient_comment} onChange={handleChange}/>
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