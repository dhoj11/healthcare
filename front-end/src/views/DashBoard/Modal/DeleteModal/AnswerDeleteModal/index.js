import { Modal } from "react-bootstrap";
import styles from "./index.module.css";
function AnswerDeleteModal(props) {
  const {showAnswerDeleteModal,closeAnswerDeleteModal, deleteAnswerItem} = props;
  return(
    <Modal
      show={showAnswerDeleteModal} 
      onHide={closeAnswerDeleteModal}
      centered="true"
      >
        <div className={styles.contain}>
          <div className={styles.title}>
            이 댓글을 삭제합니다. 계속하시겠습니까?
          </div>
          <div className={styles.btn_contain}>
            <button className={styles.okay} onClick={deleteAnswerItem}>확인</button>
            <button className={styles.cancel} onClick={closeAnswerDeleteModal}>취소</button>
          </div>
        </div>
        
    </Modal>
  );
}
export default AnswerDeleteModal;