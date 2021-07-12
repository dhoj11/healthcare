import { faHospital, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { createSetAuthTokenAction, createSetStaffAuthorityAction, createSetStaffIdAction, createSetStaffNameAction } from "./redux/auth-reducer";
import { removeAuthHeader } from "./apis/axiosConfig";
import { useHistory } from "react-router";

function AppHeader(props){

  const [time, setTime] = useState(moment());
  const staff_name = useSelector((state) => state.authReducer.staff_name);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect( () => {
    setInterval(() => {
      setTime(moment());
    }, 1000);
  }, []);

  const logout = (event) => {
    console.log("로그아웃");
     //Redux
     dispatch(createSetStaffIdAction(""));
     dispatch(createSetAuthTokenAction(""));
     dispatch(createSetStaffNameAction(""));
     dispatch(createSetStaffAuthorityAction(""));
     removeAuthHeader();
     //SessionStorage에 인증 내용 제거
     sessionStorage.removeItem("staff_id");
     sessionStorage.removeItem("authToken");
     history.push("/");
  }
  return(
    <div className="appHeader">
      <div className="hospitalTitle">
      {
          staff_name !=="" ? 
          <>
          <FontAwesomeIcon icon={faHospital} className="hospitalIcon"/>
        <span className="name">사조병원</span>
          </>
          :
          null
        }

        
      </div>
      <div className="currentTime">
        <div className="date">{time.format('YYYY-MM-DD   ')}</div>
        <div className="time">{time.format('HH:mm:ss')}</div>
      </div>
      <div className="loginUser">
        {
          staff_name !=="" ? 
          <>
          <span className="name">{staff_name}</span>
          <span className="logOut" onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} className="logOutIcon" />log-out</span>
          </>
          :
          null
        }
        
      </div>
    </div>
  );
}

export default AppHeader;

