import style from "./StaffAdd.module.css";
import { faUserPlus,  faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StaffAddModal from "./StaffAddModal";
import { useState } from "react";
import StaffModifyModal from "./StaffModifyModal";

function StaffAdd(props){

  /**
   * 직원추가, 직원수정/삭제를 띄우기 위한 모달 컴포넌트
   * 
   * 주의 직원수정컴포넌트에 staff객체를 prop으로 전달한다.
   */

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [modifyModalOpen, setModifyModalOpen] = useState(false);

  const openAddModal = () => {
    setAddModalOpen(true);
  };

  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  const openModifyModal = () => {
    setModifyModalOpen(true);
  }

  const closeModifyModal = () => {
    setModifyModalOpen(false);
  }

  return(
    <div className={style.StaffAdd}>
      <span className={style.button} onClick={openAddModal}>
        <FontAwesomeIcon icon={faUserPlus} className={style.addIcon}/>직원추가
      </span>
      
      <span className={style.button2} onClick={openModifyModal}>
        <FontAwesomeIcon icon={faUserCog} className={style.addIcon}/>직원수정
      </span>

      <StaffAddModal isOpen={addModalOpen} close={closeAddModal} handleAddStaff={props.handleAddStaff}/>
      <StaffModifyModal isOpen={modifyModalOpen} close={closeModifyModal} staff={props.staff}/>
      
    </div>
  );
}

export default StaffAdd;