import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Comment.module.css";
import data from "../../../data/treatment"
import { createSetCurCommentActoin } from "../../../../../redux/treatment-reducer";

function Comment(props){

  const [comment, setComment] = useState();
  const [editBlock, SetEditBlock] = useState(true);

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);

  const treatments = data;

  // 의무기록이랑 로직 완전히 같음
  // 선택된 진료 번호 추후 스프링에서 진료번호로 진료 내용 가져오기
  // 가져와서 setRecord 로 상태 업뎃

  const dispatch = useDispatch();

  const getComment = useCallback((event) => {
    const prevTreatment = treatments.filter(item => item.id === treatment);
    if(prevTreatment[0]) return prevTreatment[0].comment;
  },[treatment])

  useEffect(()=> {
    setComment(getComment);
  },[treatment])

  const handleChange = useCallback((event) => {
    setComment(event.target.value);
  },[comment]);

  useEffect( () => {
    const curTreatment = treatments.find(item => item.id === treatment);
    const today = getCurrentDate();
    SetEditBlock(true);
    if (curTreatment && today === curTreatment.date){
        setComment("");
        SetEditBlock(false);
      }
    },[treatment]);

  useEffect(()=>{
    setComment(getComment);
  },[work]);

 

  useEffect(()=>{
    setComment("");
  },[patient]);

  useEffect(()=>{
    dispatch(createSetCurCommentActoin(comment)) 
  },[comment]);

  // 선택 진료, 환자 바뀌면 리덕스 스토어 상태 초기화.
  useEffect(()=> {
    dispatch(createSetCurCommentActoin("")) 
  },[patient, treatment]);


  return(
    <div className={style.comment}>
      <div className={style.title}>
        특이사항
      </div>
      <textarea readOnly={editBlock && true}  
                className={`form-control ${style.write}`} 
                rows="10" 
                value={comment}
                onChange={handleChange}>  
                </textarea>
    </div>
  );
}

const getCurrentDate = () => {
  let date = new Date();
  let year = date.getFullYear().toString();
  let month = date.getMonth() + 1;
  month = month < 10 ? '0' + month.toString() : month.toString();
  var day = date.getDate();
  day = day < 10 ? '0' + day.toString() : day.toString();
  return year +  "-" + month + "-" + day ;
}
export default Comment;