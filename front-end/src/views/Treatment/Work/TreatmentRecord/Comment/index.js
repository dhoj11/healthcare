import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Comment.module.css";
import data from "../../../data/treatment"
import { createSetCurCommentActoin } from "../../../../../redux/treatment-reducer";

/**
 * 선택된 진료의 과거진료기록(의무기록)을 가져온다.
 * 
 * TODO : 현재진료번호로 진료테이블에서 comment 속성값 가져오는 api 작성
 * 요청데이터의 형태
 * {treatment_comment: ""}
 */

function Comment(props){

  const treatments = data;

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);
  const editBlock = useSelector(state => state.treatmentReducer.editBlock);

  const [comment, setComment] = useState();

  const dispatch = useDispatch();

  const getComment = useCallback(() => {
    const prevTreatment = treatments.filter(item => item.treatment_id === treatment);
    if(prevTreatment[0]) return prevTreatment[0].treatment_comment;
  },[treatment])

  useEffect(()=> {
    setComment(getComment);
  },[treatment])

  useEffect(()=>{
    if(!editBlock) setComment("");  
  },[editBlock])

  const handleChange = useCallback((event) => {
    setComment(event.target.value);
  },[comment]);

  useEffect(()=>{
    setComment(getComment);
  },[work]);

  useEffect(()=>{
    setComment("");
  },[patient]);

  useEffect(()=>{
    dispatch(createSetCurCommentActoin(comment)) 
  },[comment]);

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

export default Comment;