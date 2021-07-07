import { Modal } from "react-bootstrap";
import styles from "./index.module.css";
function DeleteModal(props) {
  const {showDeleteModal,closeDeleteModal, deleteItem} = props;
  return(
    <Modal
      show={showDeleteModal} 
      onHide={closeDeleteModal}
      >
        <div className={styles.contain}>
          <div className={styles.title}>
            이 글을 완전히 삭제합니다. 계속하시겠습니까?
          </div>
          <div className={styles.btn_contain}>
            <button className={styles.okay} onClick={deleteItem}>확인</button>
            <button className={styles.cancel} onClick={closeDeleteModal}>취소</button>
          </div>
        </div>
        
    </Modal>
  );
}
export default DeleteModal;