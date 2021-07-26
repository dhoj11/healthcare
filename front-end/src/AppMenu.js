import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCountNotReadNum } from "./apis/chat";

function AppMenu(props){
  const message = props;
  const location = useLocation().pathname;

  const {chatToggle} = props;
  const staff_id = useSelector(state => state.authReducer.staff_id);
  const [notReadNum,setNotReadNum] = useState(null);
  console.log(message);
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
      console.log("메뉴 재실행");
      getCountNotRead();
    }
  },[staff_id,props])
  
  console.log("fdsafdsadsdsds",notReadNum);
  return(
    <>
      <ul className="nav flex-column" >
        <li className="nav-item mt-5">
          <Link to="/" className={location === "/" ? `selected nav-link mt-2` : `unselected nav-link mt-2`}><i className="fas fa-home"></i></Link>
          <Link to="/dashBoard" className={location === "/dashBoard" ? `selected nav-link` : `unselected nav-link`}><i className="fas fa-desktop"></i></Link>
          <Link to="/appointment" className={location === "/appointment" ? `selected nav-link` : `unselected nav-link`}><i className="far fa-calendar"></i></Link>
          <Link to="/administration" className={location === "/administration" ? `selected nav-link` : `unselected nav-link`}><i className="far fa-file-alt"></i></Link>
          <Link to="/treatment" className={location === "/treatment" ? `selected nav-link` : `unselected nav-link`}><i className="fas fa-stethoscope"></i></Link>
          <Link to="/test" className={location === "/test" ? `selected nav-link` : `unselected nav-link`}><i className="fas fa-vial"></i></Link>
          <Link to="/setting" className={location === "/setting" ? `selected nav-link` : `unselected nav-link`}><i className="fas fa-user-cog"></i></Link>
        </li>
      </ul>
      <div>
        <button onClick={() =>chatToggle()} className="nav-link chaticon">
          <i className="far fa-comment"></i>
          {
            notReadNum === 0 || location ==="/" ?
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