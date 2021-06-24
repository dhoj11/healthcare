import { useEffect, useState } from "react";
import style from "./Search.module.css"

function Search(props){

  const[testListId, setTestListId] = useState("");

  const changePatient = () => {
    props.chagnePatiendId(testListId);
  }

  const handleChange = (event) => {
    setTestListId(event.target.value);
  }

  return(
    <div className={style.search}>
      <input className={`form-control ${style.field}`} onChange={handleChange} type="text" placeholder="바코드(검사번호)를 입력하세요."></input>
      <button type="button" className={`btn btn-light ${style.searchButton}`} onClick={changePatient}>검색</button>
    </div>
  );
}

export default Search;