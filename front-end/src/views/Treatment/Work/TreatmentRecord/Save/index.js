import { useDispatch, useSelector } from "react-redux";
import style from "./Save.module.css";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createSetEditBlockActoin } from "../../../../../redux/treatment-reducer";
import { saveTreatment } from "../../../../../apis/treatment";

/**
 * 진료페이지의 각 입력내용은 redux 스토어의 상태 변수로 관리된다.
 */

function Save(props){

  const treatment = useSelector(state => state.treatmentReducer.treatment);

  const curRecord = useSelector(state => state.treatmentReducer.curRecord);
  const curComment = useSelector(state => state.treatmentReducer.curComment);
  const curDiagnoses = useSelector(state => state.treatmentReducer.curDiagnoses);
  const curPrescriptions = useSelector(state => state.treatmentReducer.curPrescriptions);
  const curTests = useSelector(state => state.treatmentReducer.curTests);
  const editBlock = useSelector(state => state.treatmentReducer.editBlock);

  const dispatch = useDispatch();

  const save = async () => {

    // 진료테이블에 진료번호로, 의무기록, 특이사항, saved 업데이트 하기

    // 진단내용 있다면 진료번호,진단코드 추가

    // 처방내용이 있다면 진료번호, 약코드, commnet,amout 추가

    // 검사내용이 있다면 (검사번호 생성하고), 검사코드, testListtime(현재시간), test_list_date 오늘 날짜로 넣기

    dispatch(createSetEditBlockActoin(true));  

    try{

      const treatmentObj = { treatment_id : treatment
                            ,treatment_record : curRecord
                            ,treatment_comment : curComment
                            ,treatment_diagnoses: curDiagnoses
                            ,treatment_prescriptions : curPrescriptions
                            ,treatment_tests : curTests }

      await saveTreatment(treatmentObj);
    }catch(error){
      console.log(error);
    }
    console.log(curDiagnoses);
    console.log(curPrescriptions);
    console.log(curTests);
  }

  return(
    <>
      { !editBlock &&
      <div className={style.save} onClick={save}>
        <FontAwesomeIcon icon={faSave} className={style.addIcon}/> 저장
      </div>
      }
    </>
  );
}

export default Save;