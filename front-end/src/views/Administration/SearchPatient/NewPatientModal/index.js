import {Modal, Button} from "react-bootstrap";
import {useState} from "react";
import "./NewPatientModal.css"

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
          <div className="register-form-row">
            <div className="border border-title ">이름</div>
            <div>
              <input className="form-control" value={newPatient.name} onChange={handleChange}/>
            </div>
          </div>
          <div className="register-form-row ">
            <div className="border border-title ">생년월일</div>
            <div className="register-form-birth">
              <input type="text" className="form-control" placeholder="" value={newPatient.birth} onChange={handleChange}/> -
              <input type="text" className="form-control" placeholder="" value={newPatient.gender} onChange={handleChange}/>
            </div>
          </div>
          <div className="register-form-row ">
            <div className="border border-title ">연락처</div>
            <div>
              <input type="text" className="form-control" placeholder="'-' 없이 숫자만 입력" value={newPatient.tel} onChange={handleChange}/>
            </div>
          </div>
          <div className="register-form-row">
            <div className="border border-title ">복용약물</div>
            <div>
              <input type="text" className="form-control" placeholder="" value={newPatient.medicine} onChange={handleChange}/>
            </div>
          </div>
          <div className="register-form-row">
            <div className="border border-title ">만성질환</div>
            <div>
              <input type="text" className="form-control" placeholder="" value={newPatient.disease} onChange={handleChange}/>
            </div>
          </div>
          <div className="register-form-row">
            <div className="border border-title ">특이사항</div>
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