import style from "./Login.module.css";
import { faKey, faUser, faHospital } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useHistory } from "react-router";
import { login } from "../../../apis/auth";
import { useDispatch } from "react-redux";
import { createSetAuthTokenAction, createSetStaffAuthorityAction, createSetStaffIdAction, createSetStaffNameAction } from "../../../redux/auth-reducer";
import { addAuthHeader } from "../../../apis/axiosConfig";
function Login(props){
  const [staff,setStaff] = useState({
    staff_id:"",
    staff_password:"",
    hospital_code:""
  })
  const dispatch = useDispatch();

  const history = useHistory();
  const handleLogin = async () => {
    try{
      await login(staff)
            .then((response) => {
               //요청 헤더에 JWT 토큰 추가
              addAuthHeader(response.data.authToken);
              //Redux에 인증 내용 저장
              dispatch(createSetStaffIdAction(response.data.staff_id));
              dispatch(createSetAuthTokenAction(response.data.authToken));
              dispatch(createSetStaffNameAction(response.data.staff_name));
              dispatch(createSetStaffAuthorityAction(response.data.staff_authority));
              //SessionStorage에 인증 내용 저장(브라우저 갱신시 사용)
              sessionStorage.setItem("staff_id",response.data.staff_id);
              sessionStorage.setItem("authToken",response.data.authToken);
              history.push("/dashboard");
            })         
            .catch(() => {
              alert("로그인 실패");
            });
          
          
    } catch(error){
      throw error;
    }
  }
  const handleChange = (event) => {
    setStaff({
      ...staff,
      [event.target.name]:event.target.value
    })
  };
  return(
    <div className={style.login}>
      <div className={style.loginWrapper}>
        <img className={style.loginImg} src="../../resources\img\login_dz_logo2.jpg" />
        <span className={style.title}>WELCOME</span>
        <div className={style.idWrapper}>
          <div className={style.iconBox}><FontAwesomeIcon icon={faUser} className={style.idIcon}/></div>
          <input className={`form-control ${style.staffId}`} type="text" placeholder="user id" name="staff_id" onChange={handleChange}></input>
        </div>
        <div className={style.pwdWrapper}>
          <div className={style.iconBox}><FontAwesomeIcon icon={faKey} className={style.pwdIcon}/></div>
          <input className={`form-control ${style.staffPwd}`} type="password" placeholder="user password" name="staff_password" onChange={handleChange}></input>
        </div>
        <div className={style.loginButtonArea}>
          <button className={style.appoint_btn} onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;