import { useSelector } from "react-redux";
import style from "./Save.module.css";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 진료 내 컴포넌트의 수정이 일어날 때 마다 리덕스 스토어의 상태가 UPDATE, 저장버튼 클릭시 axois로 POST
// 현재 과거 진료까지 수정 가능.. 완료된 진료의 경우 상태변경 금지하기

function Save(props){

  

  const curRecord = useSelector(state => state.treatmentReducer.curRecord);
  const curComment = useSelector(state => state.treatmentReducer.curComment);
  const curDiagnoses = useSelector(state => state.treatmentReducer.curDiagnoses);
  const curPrescriptions = useSelector(state => state.treatmentReducer.curPrescriptions);
  const curTests = useSelector(state => state.treatmentReducer.curTests);

  const saveTreatment = () => {
    console.log(curRecord);
    console.log(curComment);
    console.log(curDiagnoses);
    console.log(curPrescriptions);
    console.log(curTests);
  }

  return(
      <div className={style.save} onClick={saveTreatment}>
        <FontAwesomeIcon icon={faSave} className={style.addIcon}/> 저장
      </div>
  );
}

export default Save;