import moment from "moment";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { createFreeBoard } from "../../../../../apis/dashboard";
import styles from "./index.module.css";

function WriteModal(props) {

  const staff_name = useSelector((state) => state.authReducer.staff_name);
  const {showWriteModal,closeWriteBoardModal} = props;
  const [freeBoardItem,setFreeBoardItem] = useState({
    freeboard_title:"",
    freeboard_content:""
  });

  const changeInput = (e) => {
    setFreeBoardItem({
      ...freeBoardItem,
      [e.target.name] : e.target.value
    })
  }
  const saveItem = async () => {
    try{
      if(freeBoardItem.freeboard_title==="" || freeBoardItem.freeboard_content===""){
        alert("제목과 내용을 입력해주세요");
      }else{
        const newFreeBoardItem = {...freeBoardItem};
        newFreeBoardItem.freeboard_date = moment().format("YYYY-MM-DD");
        newFreeBoardItem.freeboard_time = moment().format("HH:mm");
        newFreeBoardItem.staff_name = staff_name;
        await createFreeBoard(newFreeBoardItem);
        setFreeBoardItem({
          freeboard_title:"",
          freeboard_content:""
        });
        closeWriteBoardModal();
      }
      
    } catch(error){
      throw error;
    }
  }
  return(
    <Modal
      show={showWriteModal} 
      onHide={closeWriteBoardModal}
      centered="true"
    >
      <Modal.Header closeButton>
        <Modal.Title >
          글 쓰기
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.contain}>
          <div>
            <input type="text" placeholder="제목" name="freeboard_title" className={styles.title} onChange={changeInput}></input>
            <hr/>
          </div>
          <div>
            <textarea rows="6" name="freeboard_content" className={styles.content} placeholder="내용을 입력하세요." onChange={changeInput}>
            </textarea>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className={styles.save} onClick={saveItem}>완료</button>
      </Modal.Footer>
    </Modal>
  );
}
export default WriteModal;