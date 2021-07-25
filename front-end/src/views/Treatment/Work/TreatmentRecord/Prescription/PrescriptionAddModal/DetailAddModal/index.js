import React from "react";
import style from "./DetailAddModal.module.css";
import { Modal } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

/**
 * 처방손자컴포넌트
 * 선택된 약의 복용일수, 1회투약양을 지정하여 처방한다.
 */
function DetailAddModal(props){

  const {isOpen, close} = props;

  const [medicine, setMedicine] = useState();
  const [prescription, setPrescription] = useState({
    medicine_code: "",
    medicine_name: "",
    medicine_kind: "",
    medicine_type: "",
    prescription_comment: 0, // 처방일수
    prescription_amount: "",   // 1회 복용량
    //prescription_time: [],
  });

  useEffect(()=>{
    setMedicine(props.medicine);
  },[props])

  useEffect(()=>{
    setPrescription(medicine);
  },[medicine]);

  const addPrescriptions = () => {
    props.addPrescriptions(prescription);
    close();
  }

  const handleChange = (event) => {

    if(event.target.name !== "medicine_time"){
      setPrescription({
        ...prescription,
        [event.target.name]: event.target.value
      })
    }
    
    // 복용시간(아침,점심,저녁) 지정해줄 경우 주석풀기
    // else {
    //   if(event.target.checked){
    //     setPrescription(prevPrescription => {
    //     return {
    //       ...prevPrescription,
    //       medicine_time: prevPrescription.prescription_time.concat(event.target.value)
    //     };
    //   });
    //   }else {
    //     setPrescription(prevPrescription => ({
    //       ...prevPrescription,
    //       medicine_time: prevPrescription.prescription_time.filter(item => item !== event.target.value) 
    //     }));
    //   } 
    // }
  };

  return(
    <>
    {isOpen? (
      <Modal
        show={isOpen}
        onHide={close}
        centered="true"
        keyboard={false}
        size="lg"
      >
        <Modal.Body className={style.body}>
          <div className={style.detail}>
            
            <div className={style.day}>
              <span className={style.title}>처방일수</span>
              <span>
                <input className={`form-control ${style.input}`} type="number"
                       name="prescription_comment"
                       onChange={handleChange}
                />
              </span>
              <span className={style.il}>일</span>
            </div>
            <div className={style.amount}>
              <span className={style.title}>1회 투약량</span>
              <span>
                <input className={`form-control ${style.input}`} type="text"
                       name="prescription_amount"
                       onChange={handleChange}
                />
              </span>
              <span className={style.il}></span>
            </div>

            {/* 아래 아침점심 선택 처방 정상동작 함 추후 고려하여 주석풀기 */}
            {/* <div className={style.time}>
              <div className={`form-group row`}>
                <div className={style.item}>
                  <div className={`form-check ${style.select}`}>
                    <input className="form-check-input" type="checkbox" name="prescription_time" value="moring" onChange={handleChange}/>
                    <label className={`form-check-label ${style.selectItem}`}>
                      아침
                    </label>
                  </div>
                  <div className={`form-check ${style.select}`}>
                    <input className="form-check-input" type="checkbox" name="prescription_time" value="lunch" onChange={handleChange}/>
                    <label className={`form-check-label ${style.selectItem}`}>
                      점심
                    </label>
                  </div>
                  <div className={`form-check ${style.select}`}>
                    <input className="form-check-input" type="checkbox" name="prescription_time" value="night" onChange={handleChange}/>
                    <label className={`form-check-label ${style.selectItem}`}>
                      저녁
                    </label>
                  </div>
                </div>
              </div>
            </div> */}
            <FontAwesomeIcon icon={faPlus} className={style.plus} onClick={addPrescriptions}/>
          </div>
        </Modal.Body>
      </Modal>
    ):null}
    </>
  );
}

export default React.memo(DetailAddModal);