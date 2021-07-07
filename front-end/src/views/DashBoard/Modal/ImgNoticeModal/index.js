import { useEffect, useState } from "react";
import { useRef } from "react";
import { Modal } from "react-bootstrap";
import { deleteImgNotice } from "../../../../apis/dashboard";
import DeleteModal from "../DeleteModal";
import styles from "./index.module.css";
function ImgNoticeModal(props) {
  const {showImgNoticeModal,closeImgNoticeModal,imgNoticeItem} = props;
  const [showDeleteModal,setShowDeleteModal] = useState(false);

  const contentRef = useRef();
  console.log(imgNoticeItem);
  useEffect(() => {
    if(showImgNoticeModal){
      contentRef.current.innerHTML = imgNoticeItem.img_notice_content;
    }
  },[showImgNoticeModal])

  const deleteItem = () => {
    (async function() {
      try{
        await deleteImgNotice(imgNoticeItem.img_notice_id);
        setShowDeleteModal(false);
        closeImgNoticeModal();
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
      showImgNoticeModal ? (
        <Modal
      show={showImgNoticeModal} 
      onHide={closeImgNoticeModal}
      size="lg"
      centered="true"
      >
        <Modal.Header closeButton className={styles.img_notice_header}>
            <div className={styles.img_notice_top}>
              <div className={styles.img_notice_title}>{imgNoticeItem.img_notice_title}</div>
              <div className={styles.img_notice_info}>
                <span>{imgNoticeItem.staff_name}</span>
                <span>{imgNoticeItem.img_notice_date}</span>
                <span>수정</span>
                <span onClick={OpenDeleteModal}>삭제</span>
              </div>
            </div>

        </Modal.Header>
        <Modal.Body>
          <div className={styles.img_notice_content}>
            <span ref={contentRef}></span>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <div>
            <button onClick={closeImgNoticeModal} className={styles.close}>확인</button>
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
export default ImgNoticeModal;