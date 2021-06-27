import style from "./Error403.module.css";

import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Error403(props){
  return(
    <div className="page403">
      <FontAwesomeIcon icon={faBan} className={style.ban}/>
    </div>
  );
}

export default Error403;