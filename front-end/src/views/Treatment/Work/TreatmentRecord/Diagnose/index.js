import { useCallback, useEffect, useState } from "react";
import style from "./Diagnose.module.css";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import data2 from "../../../data/diagnoses"; /*과거 진단 샘플 데이터*/
import { createSetCurDiagnosesActoin } from "../../../../../redux/treatment-reducer";
import DiagnoseAddModal from "./DiagnoseAddModal";

/**
 * 현재선택된 진료의 과거 진단기록을 표시한다.
 * 자식컴포넌트에서 진단을 추가한다.
 * 
 * TODO : 진단테이블에서 진료번호로 진단데이터 요청 api 작성
 * 요청데이터형태
 * {treatment_id: {num}, disease_code: "", disease_code : ""}
 */

function Diagnose(props){

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);
  const editBlock = useSelector(state => state.treatmentReducer.editBlock);

  const dispatch = useDispatch();

  const getDiagnose = useCallback(() => {
    const prevDiagnoses = data2.filter(item => item.treatment_id === treatment);
     return prevDiagnoses;
  },[treatment]);

  const [diagnoses, setDiagnoses] = useState(getDiagnose);
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
    setDiagnoses(getDiagnose);
  },[work]);

  useEffect(()=> {
    setDiagnoses(getDiagnose);
  },[treatment])

  useEffect(()=>{
    setDiagnoses([]);
  },[patient]);

  useEffect(()=>{
    dispatch(createSetCurDiagnosesActoin(diagnoses)) 
  },[diagnoses]);

  useEffect(()=> {
    dispatch(createSetCurDiagnosesActoin({})) 
  },[patient, treatment]);

  /**
   * 질병을 추가하는 함수
   * 
   * 한진료에서 중복진단을 막음
   * 진단은 자식 모달컴포넌트에서 이루어지며 이 함수가 props으로 전달됨
   */

  const addDiagnoses = (diagnose) => {
    if((!editBlock) && diagnose){ 
      let able = true;
      for(let i=0; i<diagnoses.length; i++){
        if(diagnoses[i].disease_code === diagnose.disease_code){
          able = false;
        }
      }
      if(able){
        const newDiagnoses = diagnoses.concat({ treatement_id:treatment, disease_code : diagnose.disease_code, disease_name: diagnose.disease_name});
        setDiagnoses(newDiagnoses);
      }
    }
  }

  const deleteDiagnose = useCallback((code) => {
    if(!editBlock) {  
      const newDiagnoses = diagnoses.filter(diagnose => diagnose.disease_code !== code);
      setDiagnoses(newDiagnoses);
    }
  },[diagnoses]);


  return(
    <div className={style.diagnose}>
      <div className={style.title} onClick={openAddModal}>
        진단
      </div>
      <div className={style.diagnoseList}>
       <table className={`table table-sm table-hover ${style.diagnoseTable}`}>
            <thead className={style.thead}>
              <tr>
                <th scope="col" className="col-2">질병코드</th>
                <th scope="col" className="col-5">질병명</th>
                <th scope="col" className="col-1"></th>
              </tr>
            </thead>
            <tbody>
            {
              diagnoses && diagnoses.map((item, index) => { 
                return (<tr key={index}> 
                          <td>{item.disease_code}</td> 
                          <td>{item.disease_name}</td>
                          <td onClick={() => deleteDiagnose(item.disease_code)}><FontAwesomeIcon icon={faMinus} className={style.minus}/></td>
                        </tr>); })         
            }
            </tbody>
          </table>
      </div>
      <DiagnoseAddModal isOpen={addModalOpen} close={closeAddModal} addDiagnoses={addDiagnoses}/>
    </div>
  );
}

export default Diagnose;