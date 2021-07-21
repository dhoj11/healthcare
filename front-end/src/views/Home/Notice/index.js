import styles from "./Notice.module.css";
import { getDZNotice, getDzNoticeById } from "../../../apis/home";
import { useEffect, useState, Fragment } from "react";
import NoticeModal from "./NoticeModal";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

function Notice(props) {

  const [noticeList, setNoticeList] = useState("");
  const [notice, setNotice] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNo, setSelectedNo] = useState(-1);
  
  useEffect(() => {
    const work = async() => {
      try{
        const response = await getDZNotice();
        setNoticeList(response.data);
      }catch(error) {
        console.log(error);
      }
    }
    work();
  },[])

  const openModal = async(noticeNo) => {
    console.log(noticeNo);
    try{
      const response = await getDzNoticeById(noticeNo);
      setNotice(response.data);
      console.log(response.data);
    }catch(error){
      console.log(error);
    }
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className={styles.notice}>
      <div className="d-flex">
        <div className={styles.icon_wrapper}><FontAwesomeIcon icon={faFlagCheckered} className={styles.icon}/></div>
        <div><span className={styles.title}>Notice</span></div>
      </div>
      <div>
        <div className={styles.first_row}>
          <div className={styles.notice_no}><span >No.</span></div>
          <div className={styles.notice_title}><span >Title</span></div>
          <div className={styles.notice_badge}><span ></span></div>
          <div className={styles.notice_writer}><span >Writer</span></div>
          <div className={styles.notice_date}><span >Date</span></div>
        </div>
      </div>
      <div className={styles.notice_items}>
        {noticeList !== "" ? (
          <>
            {noticeList.map((notice, index) => (
              <Fragment key={notice.dz_notice_id}><div className={styles.rows} onClick={() => openModal(notice.dz_notice_id)}>
                <div className={styles.notice_no_item}><span >{index+1}</span></div>
                <div className={styles.notice_title_item}><span >{notice.dz_notice_title}</span></div>
              {notice.dz_notice_date === moment().format("YYYY-MM-DD") ? 
                (<div className={styles.notice_badge}><span className={`${styles.notice_badge_item} badge badge-primary`}>new</span></div>) 
                : 
                (<div className={styles.notice_badge}><span ></span></div>)}
                <div className={styles.notice_writer_item}><span >{notice.dz_notice_writer}</span></div>
                <div className={styles.notice_date_item}><span >{notice.dz_notice_date}</span></div>
              </div>
              </Fragment>
          ))}
        </>
        ) : (<div className={styles.spinner_wrapper}>
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>)}
        <NoticeModal isOpen={isOpen} close={closeModal} notice={notice}/>
      </div>
    </div>
  );
}

export default Notice;