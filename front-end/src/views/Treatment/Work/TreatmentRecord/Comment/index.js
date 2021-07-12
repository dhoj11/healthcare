import React from "react";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Comment.module.css";
import { createSetCurCommentActoin } from "../../../../../redux/treatment-reducer";
import { getTreatmentComment } from "../../../../../apis/treatment";

/**
 * 선택된 진료의 과거진료기록(의무기록)을 가져온다.
 */

function Comment(props){

  const treatment = useSelector(state => state.treatmentReducer.treatment);
  const patient = useSelector(state => state.treatmentReducer.patient);
  const work = useSelector(state => state.treatmentReducer.work);
  const editBlock = useSelector(state => state.treatmentReducer.editBlock);

  const [comment, setComment] = useState();

  const dispatch = useDispatch();

  const getComment = useCallback( async() => {
    try{
      const response = await getTreatmentComment(treatment);
      setComment(response.data);
    }catch(error){
      console.log(error);
    }
  },[treatment]);

  useEffect(()=> {
    if(treatment !=="") getComment();
  },[treatment])

  useEffect(()=>{
    if(!editBlock) setComment("");  
  },[editBlock])

  const handleChange = useCallback((event) => {
    setComment(event.target.value);
  },[comment]);

  useEffect(()=>{
    if(treatment !=="") getComment();
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

export default React.memo(Comment);