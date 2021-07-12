import style from "./StaffAddModal.module.css";

import React from "react";
import { Modal } from "react-bootstrap";
import { useRef, useState } from "react";
import { createAccouont } from "../../../../../apis/account";

function StaffAddModal(props) {

  const {isOpen, close} = props;

  const inputFile = useRef();

  const[account, setAccount] = useState({
      staff_name: "",
      staff_id: "",
      staff_password:"",
      staff_tel:"",
      staff_authority:"",
  })

  const handleChange = (event) => {
    setAccount({...account,
                [event.target.name]: event.target.value
              });
  };

  const handleChangeRole = (staff_authority) => {
    setAccount({...account, staff_authority});
  }


  /**
   * 직원을 추가한다. 
   */
  const handleAdd = async(evnet) => {
    evnet.preventDefault();
    try{
      const formData = new FormData();
      formData.append("hospital_code", process.env.REACT_APP_HOSPITAL_CODE)
      formData.append("staff_name", account.staff_name);
      formData.append("staff_id", account.staff_id);
      formData.append("staff_password", account.staff_password);
      formData.append("staff_tel", account.staff_tel);
      formData.append("staff_authority", account.staff_authority);
      if(account.staff_authority == '의사') formData.append("authority", "ROLE_DOCTOR");
      if(account.staff_authority == '간호') formData.append("authority", "ROLE_NURSE");
      if(account.staff_authority == '임상') formData.append("authority", "ROLE_TESTER");
      if(inputFile.current.files[0]) formData.append("staff_pic", inputFile.current.files[0]);
      await createAccouont(formData);
    } catch (error){
      console.log(error);
    }

    props.handleAddStaff(account);

    init();
    close();
  }

  const init = () => {
    setAccount({
      staff_name: "",
      staff_id: "",
      staff_password:"",
      staff_tel:"",
      staff_authority:"",
    });
  }
  
  const handleClose = () => {
    init();
    close();
  }
  
  return (
    <>
    {isOpen? (
      <Modal
        show={isOpen}
        onHide={close}
        centered="true"
        keyboard={false}
      >
        <Modal.Body className={style.body}>
            <div className={style.item}>
              <span className={style.title}>직원이름</span>
              <input type="text" name="staff_name" className={`form-control ${style.addInput}`} value={account.staff_name} onChange={handleChange} />
            </div>
            <div className={style.item}>
              <span className={style.title}>아이디</span>
              <input type="text" name="staff_id" className={`form-control ${style.addInput}`} value={account.staff_id} onChange={handleChange}/>
            </div>
            <div className={style.item}>
            <span className={style.title}>비밀번호</span>
              <input type="password" name="staff_password" className={`form-control ${style.addInput}`} value={account.staff_password} onChange={handleChange}/> 
            </div>
            {/* <div className={style.item}>
            <span className={style.title}>비밀번호확인</span>
              <input type="password" name="password2" className={`form-control ${style.addInput}`}/>
            </div> */}
            <div className={style.item}>
              <span className={style.title}>연락처</span>
              <input type="text" name="staff_tel" className={`form-control ${style.addInput}`} value={account.staff_tel} onChange={handleChange}/>
            </div>
            <div className={`${style.item} ${style.role}`}>
              <span className={ account.staff_authority === "의사" ? `${style.selectRole}` : `${style.roleButton}`} onClick={()=>handleChangeRole("의사")}>의사</span>
              <span className={ account.staff_authority === "간호" ? `${style.selectRole}` : `${style.roleButton}`} onClick={()=>handleChangeRole("간호")}>간호사</span>
              <span className={ account.staff_authority === "임상" ? `${style.selectRole}` : `${style.roleButton}`} onClick={()=>handleChangeRole("임상")}>임상병리사</span>
            </div>
            <form onSubmit={handleAdd}> 
              <div className={`${style.item} ${style.pic}`}>
                <span className={style.title}>프로필사진</span>
                <span><input id="staff_pic" name="staff_pic" type="file" className="form-control-file" ref={inputFile}/></span>
              </div>
              <div className={style.actionButton}>
                <span className={style.cancel} onClick={handleClose}>취소</span>
                <input type="submit" className={style.join} value="등록"/>
              </div>
            </form>
       

        </Modal.Body>
      </Modal>
    ):null}
    </>
  );
}

export default React.memo(StaffAddModal);