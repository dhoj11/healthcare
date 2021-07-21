import {Modal, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import styles from "./NoticeModal.module.css"
import {getDzNoticeById} from "../../../../apis/home";

function NoticeModal(props) {

  const {isOpen, close, notice} = props;

  return (
    <>
    {isOpen ? 
    (<Modal show={isOpen} onHide={close} size="lg" centered="true" className="modal">
      <Modal.Header closeButton>
        <Modal.Title>
          <div>
            <label className={styles.title}>{notice.dz_notice_title}</label>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <div className={styles.writer_wrapper}>
          <span className={styles.writer}>작성자 : {notice.dz_notice_writer}</span>
        </div>
        <div className={styles.date_wrapper}>
        <span className={styles.date}>작성일 : {notice.dz_notice_date}</span>
        </div>
        <div className={styles.content_wrapper}>
          {notice.dz_notice_content.split("\\n").map((line, key) => {
            return (
            <span key={key}>
              {line}
              <br />
            </span>)
          })}
        </div>
      
      </Modal.Body>
      <Modal.Footer>
        <button className={styles.confirm_btn} onClick={close}>
          확인
        </button>
      </Modal.Footer>
    </Modal>
    ) : null}
    </>
  );
}

export default NoticeModal;