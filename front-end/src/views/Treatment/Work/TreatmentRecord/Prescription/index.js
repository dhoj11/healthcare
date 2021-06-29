import style from "./Prescription.module.css";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data2 from "../../../data/prescriptions"; /* 과거 처방 샘플 데이터 */
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSetCurPrescriptionsActoin } from "../../../../../redux/treatment-reducer";
import PrescriptionAddModal from "./PrescriptionAddModal";

/**
 * 현재선택된 진료의 과거 처방기록을 표시한다.
 * 자식컴포넌트에서 처방을 추가한다.
 * 
 * TODO : 처방테이블에서 진료번호로 처방데이터 요청 api 작성
 * 요청데이터형태
 * {treatment_id: {num}, prescription_code: "", prescription_name: "", prescription_kind : "", prescription_type:	"", prescription_comment: 3},
 */

function Prescription(props){

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);
  const editBlock = useSelector(state => state.treatmentReducer.editBlock);

  const dispatch = useDispatch();

  const getPrescriptions = useCallback((event) => {
    const prevPrescriptions = data2.filter(item => item.treatment_id === treatment);
    return prevPrescriptions;
  },[treatment]);

  const [prescriptions, setPrescriptions] = useState(getPrescriptions);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const openAddModal = () => {
    if(!editBlock){
      setAddModalOpen(true);
    }
  };

  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  useEffect(()=>{
    setPrescriptions(getPrescriptions);
  },[work]);

  useEffect(()=> {
    setPrescriptions(getPrescriptions);
  },[treatment])

  useEffect(()=>{
    setPrescriptions([]);
  },[patient]);

  useEffect(()=>{
    dispatch(createSetCurPrescriptionsActoin(prescriptions)) 
  },[prescriptions]);

  useEffect(()=> {
    dispatch(createSetCurPrescriptionsActoin({})) 
  },[patient, treatment]);

  /**
   * 처방을 추가하는 함수
   * 
   * 한진료에서 중복처방을 막음
   * 처방은 자식 모달컴포넌트에서 이루어지며 이 함수가 props으로 전달됨
   */
    
  const addPrescriptions = (prescription) => {
    if( (!editBlock) && prescription){
      let able = true;
      for(let i=0; i<prescriptions.length; i++){
        if(prescriptions[i].medicine_code === prescription.medicine_code){
          able = false;
        }
      }
      if(able){
        const newPrescriptions = prescriptions.concat({treatment_id:treatment, 
                                      medicine_code: prescription.medicine_code, 
                                      medicine_name: prescription.medicine_name, 
                                      medicine_kind: prescription.medicine_kind,
                                      medicine_type: prescription.medicine_type,           
                                      prescription_comment:prescription.prescription_comment || "",
                                      prescription_amount:prescription.prescription_amount || ""
                                      //prescription_time:prescription.prescription_time || ""
                                    });
        setPrescriptions(newPrescriptions);
      }
    }
  }

  const deletePrescription = useCallback((code) => {
    if (!editBlock){
      const newPrescriptions = prescriptions.filter(prescriptions => prescriptions.medicine_code !== code);
      setPrescriptions(newPrescriptions);
    }
  },[prescriptions]);

  return(
    <div className={style.prescription}>
      <div className={style.title} onClick={openAddModal}>
        처방
      </div>
      <div className={style.prescriptionList}>
      <table className={`table table-sm table-hover ${style.prescriptionTable}`}>
            <thead className={style.thead}>
              <tr>
                <th scope="col" className="col-1">약코드</th>
                <th scope="col" className="col-4">약명</th>
                <th scope="col" className="col-2">구분</th>
                <th scope="col" className="col-2">타입</th>
                <th scope="col" className="col-2">처방일수</th>
                <th scope="col" className="col-1"></th>
              </tr>
            </thead>
            <tbody>
              {
                prescriptions.map((item, index) => {
                  return (<tr key={index}>
                            <td>{item.medicine_code}</td>
                            <td>{item.medicine_name}</td>
                            <td>{item.medicine_kind}</td>
                            <td>{item.medicine_type}</td>
                            <td>{item.prescription_comment}</td>
                            <td onClick={() => deletePrescription(item.medicine_code)}><FontAwesomeIcon icon={faMinus} className={style.minus}/></td>
                        </tr>);
                })
              }
            </tbody>
          </table>
      </div>

    <PrescriptionAddModal isOpen={addModalOpen} close={closeAddModal} addPrescriptions={addPrescriptions}/>

    </div>
  );
}

export default Prescription;