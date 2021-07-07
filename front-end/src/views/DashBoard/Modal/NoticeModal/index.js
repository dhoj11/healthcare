import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteNotice } from "../../../../apis/dashboard";
import DeleteModal from "../DeleteModal";
import styles from "./index.module.css";

function NoticeModal(props) {
  const {showNoticeModal,closeNoticeModal,noticeItem} = props;
  const [showDeleteModal,setShowDeleteModal] = useState(false);

  

  const contentRef = useRef();
  useEffect(() => {
    if(showNoticeModal){
      contentRef.current.innerHTML=noticeItem.notice_content;
    }
  }, [showNoticeModal])

  const deleteItem = () => {
    
    (async function() {
      try{
        await deleteNotice(noticeItem.notice_id);
        setShowDeleteModal(false);
        closeNoticeModal();
      } catch(error){
        throw error;
      }
    })();
    
  }
  const OpenDeleteModal = () => {
    setShowDeleteModal(true);
  }

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  }
  return(
    <>
    {
      showNoticeModal ? (
        <Modal
      show={showNoticeModal} 
      onHide={closeNoticeModal}
      size="lg"
      centered="true"
      >
        <Modal.Header closeButton className={styles.notice_header}>
            <div className={styles.notice_top}>
              <div className={styles.notice_title}>{noticeItem.notice_title}</div>
              <div className={styles.notice_info}>
                <span>{noticeItem.staff_name}</span>
                <span>{noticeItem.notice_date}</span>
                <Link to={`/noticeeditor/updatenotice/${noticeItem.notice_id}`} className={styles.link}><span className={styles.modify}>수정</span></Link>
                
                <span onClick={OpenDeleteModal}>삭제</span>
              </div>
            </div>

        </Modal.Header>
        <Modal.Body>
          
          <div className={styles.notice_content}>
            
            <span ref={contentRef}></span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <button onClick={closeNoticeModal} className={styles.close}>확인</button>
          </div>
        </Modal.Footer>
    </Modal>
      ) :
      null
    }
    <DeleteModal showDeleteModal={showDeleteModal}  closeDeleteModal={closeDeleteModal} deleteItem={deleteItem}></DeleteModal>
    </>
  );
}
export default NoticeModal;