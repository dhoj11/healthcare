import {Modal, Button} from "react-bootstrap";
import {useState} from "react";
import {getPatientList, getStaffList} from "../../data";
import Calendar from "../../../Appointment/Calendar"

function AppointmentModal(props) {
  const {patientId, isOpen, close} = props;
  const staticPatientList = getPatientList();
  const staticStaffList = getStaffList();
  const filteredPatient = staticPatientList.filter(patient => (patient.patientId === patientId));
  
  const [startDate, setStartDate] = useState(new Date());
  const [patient, setPatient] = useState(filteredPatient[0]);

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
          <div>환자이름 {patient.name}</div>
          <div className="d-flex">
            <div>진료의</div>
            <div className="d-flex">
              {staticStaffList.map(staff=>(
                <div key={staff.staffId}>
                  <input type="radio" name="staff"/> {staff.name}
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex">
            <div>진료내용</div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="d-flex">
            <div><Calendar startDate={startDate} changeDate={changeDate}></Calendar></div>
            <div>시간고르기</div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          취소
        </Button>
        <Button variant="primary" onClick={close}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
    ) : null}
    </>
  );
}

export default AppointmentModal;