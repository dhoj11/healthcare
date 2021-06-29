import { Modal } from "react-bootstrap";
import styles from "./index.module.css";

function WriteModal(props) {
  const {showWriteModal,closeWriteBoardModal} = props;
  const saveItem = () => {
    closeWriteBoardModal();
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
            <input type="text" placeholder="제목" className={styles.title}></input>
            <hr/>
          </div>
          <div>
            <textarea rows="6" className={styles.content} placeholder="내용을 입력하세요.">
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