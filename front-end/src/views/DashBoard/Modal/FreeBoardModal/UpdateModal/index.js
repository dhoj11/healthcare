import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./index.module.css";

function UpdateModal(props) {
  const {showUpdateModal,closeUpdateModal,updateItem} = props;
  const [freeBoardItem,setFreeBoardItem] = useState({});

  useEffect(() => {
    setFreeBoardItem(props.freeBoardItem);
  },[props])

  const changeInput = (e) => {
    setFreeBoardItem({
       ...freeBoardItem,
       [e.target.name] : e.target.value
    })
  }

  return(
    <Modal
      show={showUpdateModal} 
      onHide={closeUpdateModal}
      centered="true"
    >
      <Modal.Header closeButton>
        <Modal.Title >
          글 수정
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.contain}>
          <div>
            <input type="text"  name="freeboard_title" className={styles.title} placeholder="제목" onChange={changeInput} value={freeBoardItem.freeboard_title}></input>
            <hr/>
          </div>
          <div>
            <textarea rows="6" name="freeboard_content" className={styles.content} placeholder="내용을 입력하세요." onChange={changeInput} value={freeBoardItem.freeboard_content}>
            </textarea>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className={styles.save} onClick={() => updateItem(freeBoardItem)}>수정</button>
      </Modal.Footer>
    </Modal>
  );
}
export default UpdateModal;