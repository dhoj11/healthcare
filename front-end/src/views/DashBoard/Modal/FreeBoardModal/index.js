import createPalette from "@material-ui/core/styles/createPalette";
import moment from "moment";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { createFreeBoardAnswer, deleteFreeBoard, deleteFreeBoardAnswer, getFreeBoard, getFreeBoardAnswerList, updateFreeBoard } from "../../../../apis/dashboard";
import { getFreeBoardAnswer } from "../../data";
import DeleteModal from "../DeleteModal";
import AnswerDeleteModal from "../DeleteModal/AnswerDeleteModal";
import styles from "./index.module.css";
import UpdateModal from "./UpdateModal";
import {useSelector } from "react-redux";

function FreeBoardModal(props) {
  const {showFreeBoardModal, closeFreeBoardModal,freeBoardItem, freeBoardAnswer,addAnswerReRender,freeBoardReRender} = props;
  const [showDeleteModal,setShowDeleteModal] = useState(false);
  const [showAnswerDeleteModal,setShowAnswerDeleteModal] = useState(false);
  const [showUpdateModal,setUpdateModal] = useState(false);
  const [answer,setAnswer] = useState("");
  const [deleteAnswerId,setDeleteAnswerId] = useState(null);

  const staff_name = useSelector((state) => state.authReducer.staff_name);

  const changeText = (e) => {
    setAnswer(e.target.value)
  }
  const addAnswer = async() => {
      try{
        if(answer ===""){
          alert("댓글 내용을 입력해주세요");
        }else{
          const newAnswer=
          {
            "freeboard_id":freeBoardItem.freeboard_id,
            "freeboard_answer_content":answer,
            "freeboard_answer_date":moment().format('YYYY-MM-DD'),
            "freeboard_answer_time": moment().format('HH:mm'),
            "staff_name":staff_name
          }
          await createFreeBoardAnswer(newAnswer);
          setAnswer("");
          addAnswerReRender();
        }
        
      } catch(error){
        throw error;
      }
    
  }
  const deleteItem = () => {
    (async function() {
      try{
        await deleteFreeBoard(freeBoardItem.freeboard_id);
        setShowDeleteModal(false);
        closeFreeBoardModal();
      } catch(error){
        throw error;
      }
    })();
  }
  const updateItem = (freeBoardItem) => {
    (async function() {
      try{
        await updateFreeBoard(freeBoardItem);
        setUpdateModal(false);
        freeBoardReRender();
      } catch(error){
        throw error;
      }
      
    })();
  }
  const deleteAnswerItem = () => {
    (async function() {
      try{
        await deleteFreeBoardAnswer(deleteAnswerId);
        setShowAnswerDeleteModal(false);
        addAnswerReRender();
      } catch(error){
        throw error;
      }
    })();
  }
  const OpenDeleteModal = () => {
    setShowDeleteModal(true);
  }
  const OpenAnswerDeleteModal = (freeboard_answer_id) => {
    setDeleteAnswerId(freeboard_answer_id);
    setShowAnswerDeleteModal(true);
  }
  const OpenUpdateModal = () => {
    setUpdateModal(true);
  }
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  }
  const closeAnswerDeleteModal = () => {
    setShowAnswerDeleteModal(false);
  }
  const closeUpdateModal = () => {
    setUpdateModal(false);
  }
  return(
    <>
    {
      showFreeBoardModal && freeBoardItem!==null ? (
        <Modal
      show={showFreeBoardModal} 
      onHide={closeFreeBoardModal}
      size="lg"
      centered="true"
      >
      <Modal.Header closeButton>
            <Modal.Title>자유게시판</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={styles.body_answer}>
              <div className={styles.body}>
                <div className={`${styles.writer} justify-content-between`}>
                  <div className={styles.left}>
                    <div>
                      <i className={`fas fa-user ${styles.img} `} ></i>
                    </div>
                    <div className={styles.wirter_content}>
                        <div className={styles.writer_name}>{freeBoardItem.staff_name}</div>
                        <div className={styles.write_date}>{(freeBoardItem.freeboard_date).substr(5,5)} {freeBoardItem.freeboard_time}</div>
                    </div>
                  </div>
                  <div>
                    {
                      freeBoardItem.staff_name ===staff_name ?
                        <>
                          <button className={styles.btn} onClick={OpenUpdateModal}>수정</button>
                          <button className={styles.btn} onClick={OpenDeleteModal}>삭제</button>
                        </>
                        :
                        null
                    } 
                      
                    </div>    
                </div>
                <div className={styles.title}>
                  {freeBoardItem.freeboard_title}
                </div>
                <div className={styles.content}>
                {(freeBoardItem.freeboard_content).split("\n").map((text,index) =>{
                    return ( 
                      <span key={index}>
                        {text}
                        <br></br>
                      </span>
                    )
                  })}
                </div>
              </div>
              {
                freeBoardAnswer ? 
                (
                  <div className={styles.answer}>
                    {freeBoardAnswer.map((data,index) =>{
                      return (
                        <div key={index}>
                          <hr></hr>
                          <div>
                            <div className={`${styles.answer_writer} justify-content-between`}>
                              <div className="d-flex">
                                <div>
                                  <i className={`fas fa-user ${styles.Small_img}`} ></i>
                                </div>
                                <div>
                                  {data.staff_name}
                                </div>                                
                              </div>
                              <div>
                                {
                                  data.staff_name === staff_name ? 
                                  <button className={styles.btn} onClick={() =>OpenAnswerDeleteModal(data.freeboard_answer_id)}>삭제</button>
                                  :
                                  null
                                }
                                
                              </div>                           
                            </div>
                            <div>
                              {data.freeboard_answer_content}
                            </div>
                            <div className={styles.answer_date}>
                              {(data.freeboard_answer_date).substr(5,5)} {data.freeboard_answer_time}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : null
              }
              
            </div>
            
            
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <div>
                <input type="text" placeholder="댓글을 입력하세요" onChange={changeText} className={styles.answer_text} value={answer}></input>
              </div>
              <div className={styles.register}>
                <button onClick={addAnswer} >
                  <i className={`far fa-check-circle ${styles.register_img}`}></i>
                </button>
              </div>
            </div>
          </Modal.Footer>
          <DeleteModal showDeleteModal={showDeleteModal}  closeDeleteModal={closeDeleteModal} deleteItem={deleteItem}></DeleteModal>
          <AnswerDeleteModal showAnswerDeleteModal={showAnswerDeleteModal} closeAnswerDeleteModal={closeAnswerDeleteModal} deleteAnswerItem={deleteAnswerItem}></AnswerDeleteModal>
          <UpdateModal showUpdateModal={showUpdateModal} closeUpdateModal={closeUpdateModal} freeBoardItem={freeBoardItem} updateItem={updateItem}> </UpdateModal>
    </Modal>
    
      ) :
      null
    }
      
    </>
  );
}
export default FreeBoardModal;