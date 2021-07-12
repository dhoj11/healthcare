import { useState, useEffect } from "react";
import {Modal, Button} from "react-bootstrap";
import { requestTest } from "../../../../apis/administration";
import styles from "./RequestTest.module.css";

function RequestTest(props) {

  const {setSelectedTestCodes, setRerenderer, testCodes, isOpen, close} = props;

  const handleReqTest = async() => {
    
    try{
      await requestTest(testCodes);
    }catch(error) {
      console.log(error.message);
    }
    setSelectedTestCodes([]);
    setRerenderer(testCodes[0].reception_id);
    close();
  }

  return (
    <>
    {isOpen ? (
      testCodes.length !== 0 ? (
        <Modal show={isOpen} onHide={close} centered="true" className="modal">
        <Modal.Header closeButton>
          <Modal.Title>검사 요청</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mt-3 mb-3">
            <div className={styles.row}>
              <div className={`${styles.border_title} border`}>환자 이름</div>
              <div>
                {testCodes[0].patient_name}
              </div>
            </div>
            <div className={styles.row}>
            <div className={`${styles.border_title} border`}>검사 종류</div>
            <div>
              <div className="d-flex">
                {testCodes.map((testCode, index)=>(
                  <div key={index}>
                    <input className="mr-2" type="checkbox" checked readOnly /><span className="mr-3">{testCode.test_code}</span>
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
          <button className={styles.appoint_btn} onClick={handleReqTest}>
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
           환자와 검사 목록을 선택해주세요.
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