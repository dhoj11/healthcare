import React from "react";

import { useState } from "react";
import style from "./Search.module.css"
import { isValidTestListId } from "../../../apis/test";

/**
 * 바코드로 검사를 검색
 */
function Search(props){

  const pattern = /\s/g;
  const[testListId, setTestListId] = useState();

  const handleChange = (event) => {
    setTestListId( event.target.value);
  }

  const searchTestListId = async() => {
    try{
      if( (!isNaN(testListId)) && !testListId.match(pattern) && testListId !== "" && testListId.length <= 10){
        const response = await isValidTestListId(testListId);
        if(response.data == 1)
          props.searchTestList(testListId);
        else{
          alert("검사번호가 유효하지 않습니다.");
        }
      }
      else{
        alert("검사번호가 유효하지 않습니다.");
      }
    }catch(error){
      console.log(error);
    }
  }
  
  return(
    <div className={style.search}>
      <input className={`form-control ${style.field}`} onChange={handleChange} type="text" placeholder="바코드(검사번호)를 입력하세요."></input>
      <button type="button" className={`btn btn-light ${style.searchButton}`} onClick={searchTestListId}>검색</button>
    </div>
  );
}

export default React.memo(Search);