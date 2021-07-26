import  { useEffect, useRef, useState }  from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from "./index.module.css";
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit , faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { createImgNotice, createNotice, getNotice, updateNotice } from '../../../apis/dashboard';
import NoticeModal from '../../DashBoard/Modal/NoticeModal';
function UpdateNotice(props) {

  const notice_id = parseInt(props.match.params.notice_id);
  const [text, setText] = useState("");
  const [title,setTitle] = useState("");
  const [showNoticeModal,setShowNoticeModal] = useState(false);
  const [noticeItem,setNoticeItem] = useState({});
  const [showCreateModal,setShowCreateModal] = useState(false);
  
  const inputFile  = useRef();
  useEffect(() => {
    (async function() {
      try{
        const response = await getNotice(notice_id);
        setNoticeItem(response.data);
        setText(response.data.notice_content);
        setTitle(response.data.notice_title);
      } catch(error){
        throw error;
      }
    })();
  },[])

  const openNoticeModal = () => {
    setShowNoticeModal(true);
  }
  const openCreateModal = () => {
    setShowCreateModal(true);
  }
  const closeNoticeModal = () => {
    setShowNoticeModal(false);
  }
  const closeCreateModal = () => {
    setShowCreateModal(false);
  }
  const handleChange = (value) => {
    setText(value);
  }
  const changeTitle = (e) =>{
    setTitle(e.target.value);
  }
  const modifyNotice = () =>{
    if(text ==="" || title ==="" ||text==="<p><br></p>"){
      alert("제목과 내용을 입력해주세요.");
    }else{
      let notice = {
        notice_id:notice_id,
        notice_content:text,
        notice_title:title,
        notice_date:noticeItem.notice_date
      };
      setNoticeItem(notice);
      (async function() {
        try{
          await updateNotice(notice);
        } catch(error){
          throw error;
        }
      })();
      setText("");
      setTitle("");
      openCreateModal();
    }
      
  }
  const preview = () => {
    if(title==="" || text ===""||text==="<p><br></p>"){
      alert("제목과 내용을 입력해주세요.")
    }else{
      let jsonData= {
        notice_title:title,
        notice_content:text,
        notice_date: noticeItem.notice_date
      };
      setNoticeItem(jsonData);
      openNoticeModal();
    }
    
  }
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }],      
      ['clean']
    ],
  }
  const formats = [
    'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'color', 'background',
  ];
  return(
    <>
    <div className={styles.contain}>
      <div className={styles.contain_div}>
        <div className={styles.title}>
        <span><input className={styles.title_input} type="text" placeholder="제목을 입력하세요" onChange={changeTitle} value={title}></input></span>
        {
          props.match.url ==="/noticeeditor/writeimgnotice" ?
          <span><input className={styles.file} type="file" ref={inputFile}></input></span>
          :
          null
        }
        </div>
        <ReactQuill value={text}
                    formats={formats}
                    modules={modules}
                    onChange={handleChange} 
                    className={styles.editor}/>
 
      </div>
      <div className={styles.footer}>
        <button onClick={preview}>미리보기</button>
        <button onClick={modifyNotice}>수정</button>
      </div>
    </div>
    <NoticeModal showNoticeModal={showNoticeModal} closeNoticeModal={closeNoticeModal} noticeItem={noticeItem}></NoticeModal>
    <Modal
      show={showCreateModal} 
      onHide={closeCreateModal}
      size="sm"
      centered="true"
      >
    <Modal.Header closeButton>
            <Modal.Title>
              <div className={styles.create_title}>공지가 수정되었습니다.</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
                <div className="d-flex justify-content-between">
                  <span>등록일시</span>
                  <span>{noticeItem.notice_date}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>제목</span>
                  <span>{noticeItem.notice_title}</span>
                </div>
                {/* <div className="d-flex justify-content-between">
                  <span>분류</span>
                  <span>text 공지사항</span>
                </div> */}
            </div>
              
          </Modal.Body>
            <div className={styles.btn_contain}>
            <FontAwesomeIcon icon={faEdit} className={styles.newspaperIcon}/>
              <Link to="/dashBoard" className={styles.check_btn}>
                <span className={styles.check}>글 확인하러 가기</span>
                <FontAwesomeIcon icon={faChevronRight} className={styles.rightIcon}/>
              </Link>
            </div>
            
            
    </Modal>
    </>
  );
  
  
}
export default UpdateNotice;