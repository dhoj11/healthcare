import { faHospital, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import moment from 'moment';

function AppHeader(props){

  const [time, setTime] = useState(moment());
  
  useEffect( () => {
    setInterval(() => {
      setTime(moment());
    }, 1000);
  }, []);

  return(
    <div className="appHeader">
      <div className="hospitalTitle">
        <FontAwesomeIcon icon={faHospital} className="hospitalIcon"/>
        <span className="name">사조병원</span>
      </div>
      <div className="currentTime">
        <div className="date">{time.format('YYYY-MM-DD   ')}</div>
        <div className="time">{time.format('HH:mm:ss')}</div>
      </div>
      <div className="loginUser">
        <span className="name">의사 : 조운호</span>
        <span className="logOut"><FontAwesomeIcon icon={faSignOutAlt} className="logOutIcon"/>log-out</span>
      </div>
    </div>
  );
}

export default AppHeader;

