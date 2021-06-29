import { useDispatch, useSelector } from "react-redux";
import style from "./Save.module.css";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createSetEditBlockActoin } from "../../../../../redux/treatment-reducer";

/**
 * 진료페이지의 각 입력내용은 redux 스토어의 상태 변수로 관리된다.
 * 
 * TODO : 현재선택된 진료번호로 아래의 진료내역을 update 요청 api 작성
 * *** treatment_saved 값 1로 변경해주기 ***
 */

function Save(props){

  const curRecord = useSelector(state => state.treatmentReducer.curRecord);
  const curComment = useSelector(state => state.treatmentReducer.curComment);
  const curDiagnoses = useSelector(state => state.treatmentReducer.curDiagnoses);
  const curPrescriptions = useSelector(state => state.treatmentReducer.curPrescriptions);
  const curTests = useSelector(state => state.treatmentReducer.curTests);
  const editBlock = useSelector(state => state.treatmentReducer.editBlock);

  const dispatch = useDispatch();

  const saveTreatment = () => {
    dispatch(createSetEditBlockActoin(true));  
    console.log(curRecord);
    console.log(curComment);
    console.log(curDiagnoses);
    console.log(curPrescriptions);
    console.log(curTests);

  }

  return(
    <>
      { !editBlock &&
      <div className={style.save} onClick={saveTreatment}>
        <FontAwesomeIcon icon={faSave} className={style.addIcon}/> 저장
      </div>
      }
    </>
  );
}

export default Save;