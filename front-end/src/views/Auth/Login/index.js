import style from "./Login.module.css";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login(props){
  return(
    <div className={style.login}>
      <div className={style.loginWrapper}>
        <img className={style.loginImg} src="../../resources\img\login.jpg" />
        <span className={style.title}>WELCOME</span>
        <div className={style.idWrapper}>
          <div className={style.iconBox}><FontAwesomeIcon icon={faUser} className={style.idIcon}/></div>
          <input className={`form-control ${style.staffId}`} type="text"></input>
        </div>
        <div className={style.pwdWrapper}>
          <div className={style.iconBox}><FontAwesomeIcon icon={faKey} className={style.pwdIcon}/></div>
          <input className={`form-control ${style.staffPwd}`} type="password"></input>
        </div>
        <div className={style.loginButton}>로그인</div>
      </div>
    </div>
  );
}

export default Login;