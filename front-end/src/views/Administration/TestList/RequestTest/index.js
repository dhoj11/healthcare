import { useState, useEffect } from "react";
import {Modal, Button} from "react-bootstrap";
import styles from "./RequestTest.module.css";
import {getPatientList} from "../../data";

function RequestTest(props) {

  const {patientId, testCodes, isOpen, close, ReqTest} = props;
  const [patient, setpatient] = useState({});
  const staticPatientList = getPatientList();
  const filteredPatient = staticPatientList.filter(patients => (patients.patient_id === patientId));

  useEffect(() => {   //props가 변경될 때 patient의 상태를 props로 전해받은 patientId에 해당하는 환자로 세팅을 해줌
    setpatient(filteredPatient[0]);
  }, [patientId]);

  const handleChange = () => {
    ReqTest();
    close();
  }

  return (
    <>
    {isOpen ? (
      patientId !== undefined ? (
        <Modal show={isOpen} onHide={close} centered="true" className="modal">
        <Modal.Header closeButton>
          <Modal.Title>검사 요청</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mt-3 mb-3">
            <div className={styles.row}>
              <div className={`${styles.border_title} border`}>환자 이름</div>
              <div>
                {patient.patient_name}
              </div>
            </div>
            <div className={styles.row}>
            <div className={`${styles.border_title} border`}>검사 종류</div>
            <div>
              <div className="d-flex">
                {testCodes.map((testCode, index)=>(
                  <div key={index}>
                    <input className="mr-2" type="checkbox" checked readOnly /><span className="mr-3">{testCode}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
            <div className="ml-2">검사 요청 하시겠습니까?</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className={styles.cancel_btn} onClick={close}>
            취소
          </button>
          <button className={styles.appoint_btn} onClick={handleChange}>
            확인
          </button>
        </Modal.Footer>
      </Modal>
    ) : (
       <Modal show={isOpen} onHide={close} centered="true" className="modal">
       <Modal.Header closeButton>
         <Modal.Title>검사 요청</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <div>
           환자를 선택해주세요.
         </div>
       </Modal.Body>
       <Modal.Footer>
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

export default RequestTest;