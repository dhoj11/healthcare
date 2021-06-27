import {Modal, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import styles from "./NoticeModal.module.css"
import {getNoticeList} from "../../data";

function NoticeModal(props) {

  const {isOpen, close, selectedNo} = props;
  const staticNoticeList = getNoticeList();
  const temp = staticNoticeList.filter(notice => notice.dz_notice_no === selectedNo);
  const notice = temp[0];
  console.log(notice);

  return (
    <>
    {isOpen ? (
      <Modal show={isOpen} onHide={close} size="lg" centered="true" className="modal">
      <Modal.Header closeButton>
        <Modal.Title>공지사항</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.title_wrapper}>
          <label className={styles.title}>{notice.dz_notice_title}</label>
        </div>
        <div className={styles.writer_wrapper}>
          <span className={styles.writer}>작성자 : {notice.dz_notice_writer}</span>
        </div>
        <div className={styles.date_wrapper}>
         <span className={styles.date}>작성일 : {notice.dz_notice_date}</span>
        </div>
        <div className={styles.content_wrapper}>
          {notice.dz_notice_content.split("\n").map((line, key) => {
            return (
            <span key={key}>
              {line}
              <br />
            </span>)
          })}
        </div>
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={close}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
    ) : null}
    </>
  );
}

export default NoticeModal;