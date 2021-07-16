import  { useRef, useState }  from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from "./index.module.css";
import "./index.css";
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit , faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { createImgNotice, createNotice } from '../../../apis/dashboard';
import NoticeModal from '../../DashBoard/Modal/NoticeModal';
import { AlertTitle } from '@material-ui/lab';
import { useSelector } from 'react-redux';
function WriteNotice(props) {

  const [text, setText] = useState("");
  const [title,setTitle] = useState("");
  const [showNoticeModal,setShowNoticeModal] = useState(false);
  const [noticeItem,setNoticeItem] = useState({});
  const [showCreateModal,setShowCreateModal] = useState(false);
  const staff_id = useSelector((state) => state.authReducer.staff_id);
  const inputFile  = useRef();

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
  const addNotice = () =>{
    if(props.match.url ==="/noticeeditor/writenotice"){
      if(text ==="" || title ==="" ||text==="<p><br></p>"){
        alert("제목과 내용을 입력해주세요.");
      }else{
        let notice = {
          staff_id:staff_id,
          notice_date:moment().format("YYYY-MM-DD"),
          notice_content:text,
          notice_title:title
        };
        setNoticeItem(notice);
        (async function() {
          try{
            await createNotice(notice);
          } catch(error){
            throw error;
          }
        })();
        setText("");
        setTitle("");
        openCreateModal();
      }
    } else{
      console.log(text,title);
      if(text ==="" || title ==="" ||text==="<p><br></p>"){
        alert("제목과 내용을 입력해주세요.")
      } else if(inputFile.current.files[0] ===undefined){
        alert("사진을 첨부해주세요");
      } else{
        const formData = new FormData();
        formData.append("staff_id",staff_id);
        formData.append("img_notice_date",moment().format("YYYY-MM-DD"));
        formData.append("img_notice_content",text);
        formData.append("img_notice_title",title);
        formData.append("img_notice_attach",inputFile.current.files[0]);
        (async function() {
          try{
            await createImgNotice(formData);
          } catch(error){
            throw error;
          }
        })();
        inputFile.current.value='';
        setText("");
        setTitle("");
        openCreateModal();
      }
      
    }
    
   
  }
  const preview = () => {
    if(props.match.url ==="/noticeeditor/writenotice"){
      if(title==="" || text ===""||text==="<p><br></p>"){
        alert("제목과 내용을 입력해주세요.")
      }else{
        let jsonData= {
          notice_title:title,
          notice_content:text,
          notice_date:moment().format("YYYY-MM-DD"),
        };
        setNoticeItem(jsonData);
        openNoticeModal();
      }
    }else{
      if(text ==="" || title ==="" ||text==="<p><br></p>"){
        alert("제목과 내용을 입력해주세요.")
      } else if(inputFile.current.files[0] ===undefined){
        alert("사진을 첨부해주세요");
      }
      else{
        const imageUrl = URL.createObjectURL(inputFile.current.files[0]);
        let jsonData= {
          notice_title:title,
          notice_content:text,
          notice_date:moment().format("YYYY-MM-DD"),
          notice_image:imageUrl
        };
        setNoticeItem(jsonData);
        openNoticeModal();
      }
    }
    
  }
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'align': [] }, { 'color': [] }, { 'background': [] }],      
      ['clean']
    ],
  }
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "color",
    "background",
    "image",
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
        <button onClick={addNotice}>저장</button>
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
              <div className={styles.create_title}>공지가 등록되었습니다.</div>
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
export default WriteNotice;