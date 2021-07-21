import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getCountNotReadNum } from "./apis/chat";

function AppMenu(props){
  const {chatToggle} = props;
  const staff_id = useSelector(state => state.authReducer.staff_id);
  const [notReadNum,setNotReadNum] = useState(null);
  const getCountNotRead = async() => {
    try{
      const response = await getCountNotReadNum(staff_id);
      console.log(response.data);
      setNotReadNum(response.data);
    } catch(error){
      throw error;
    }
  }
  useEffect(() => {
    if(staff_id !== ""){
      getCountNotRead();
    }
  },[staff_id,props])
  console.log(staff_id);
  return(
    <>
      <ul className="nav flex-column" >
        <li className="nav-item mt-5">
          <Link to="/" className="nav-link mt-2"><i className="fas fa-sign-in-alt"></i></Link>
          <Link to="/dashBoard" className="nav-link mt-2"><i className="fas fa-home"></i></Link>
          <Link to="/appointment" className="nav-link"><i className="far fa-calendar"></i></Link>
          <Link to="/administration" className="nav-link"><i className="far fa-file-alt"></i></Link>
          <Link to="/treatment" className="nav-link"><i className="fas fa-stethoscope"></i></Link>
          <Link to="/test" className="nav-link"><i className="fas fa-vial"></i></Link>
          <Link to="/setting" className="nav-link"><i className="fas fa-user-cog"></i></Link>
        </li>
      </ul>
      <div>
        <button onClick={() =>chatToggle()} className="nav-link chaticon">
          <i className="far fa-comment"></i>
          {
            notReadNum === 0 || notReadNum === null?
            null
            :
            <span className="alert-ballon">{notReadNum}</span>
          }
          
        </button>
      </div>
    </>
  );
}

export default AppMenu;