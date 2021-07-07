import { useEffect } from "react";
import { useState } from "react";
import { getFreeBoard, getFreeBoardAnswerList, getFreeBoardList } from "../../../apis/dashboard";
import FreeBoardModal from "../Modal/FreeBoardModal";
import WriteModal from "../Modal/FreeBoardModal/WriteModal";
import styles from "./index.module.css";
function FreeBoard(props) {
  const [freeBoard,setFreeBoard] = useState([]);
  const [freeBoardAnswer,setFreeBoardAnswer] =useState([]);
  const [showFreeBoardModal,setShowFreeBoardModal] = useState(false);
  const [showWriteModal,setShowWriteModal] = useState(false);
  const [freeBoardItem,setFreeBoardItem] = useState({});


  console.log("ㅎㅇㅎㅇㅎㅇ");
  useEffect(() => {
    (async function() {
      try{
        const response = await getFreeBoardList();
        setFreeBoard(response.data);
      } catch(error){
        throw error;
      }
    })();
  },[showWriteModal,freeBoardAnswer,showFreeBoardModal])

  const addAnswerReRender = () => {
    (async function() {
      try{
        const response = await getFreeBoardAnswerList(freeBoardItem.freeboard_id); 
        setFreeBoardAnswer(response.data);
      } catch(error){
        throw error;
      }
    })();
  }
  const freeBoardReRender = () => {
    (async function() {
      try{
        const responseBoard = await getFreeBoard(freeBoardItem.freeboard_id);
        setFreeBoardItem(responseBoard.data);
        const response = await getFreeBoardList();
        setFreeBoard(response.data);
      } catch(error){
        throw error;
      }
    })();
  }

  const openFreeBoardModal = (data) => {
    (async function() {
      try{
        const response=await getFreeBoardAnswerList(data.freeboard_id);
        setFreeBoardAnswer(response.data);
        setFreeBoardItem(data);
        setShowFreeBoardModal(true);
      } catch(error){
        throw error;
      }
    })();
  }
  const closeFreeBoardModal = () => {
    setShowFreeBoardModal(false);
  }

  const openWriteBoardModal = () => {
    setShowWriteModal(true);
  }
  const closeWriteBoardModal = () => {
    setShowWriteModal(false);
  }

  return(
    <>
    <div className={styles.FreeBoard_contain}>
      <div className={`${styles.FreeBoard_header} d-flex justify-content-between`}>
        <div>
          <i class="fas fa-bullhorn"> </i>
          <span>자유게시판</span>
        </div>
        <button onClick={openWriteBoardModal}><i class="fas fa-pencil-alt"></i>글 쓰기</button>
      </div>
      <div className={styles.FreeBoard_body}>
        {
          freeBoard.map((data,index) => {
            return(
              <div key={index} className={`${styles.FreeBoard_item} d-flex justify-content-between`} onClick={() => openFreeBoardModal(data)}>
                <div className={styles.FreeBoard_title}>{data.freeboard_title}</div>
                <div className={styles.FreeBoard_etc}>
                  <span>{data.freeboard_date}</span>
                  <span>{data.patient_name}</span>
                  <i class="far fa-comment"></i>
                  <span>{data.freeboard_comment_count}</span>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
    <FreeBoardModal showFreeBoardModal={showFreeBoardModal} closeFreeBoardModal={closeFreeBoardModal} freeBoardItem={freeBoardItem} freeBoardAnswer={freeBoardAnswer} addAnswerReRender={addAnswerReRender} freeBoardReRender={freeBoardReRender}></FreeBoardModal>
    <WriteModal showWriteModal={showWriteModal} closeWriteBoardModal={closeWriteBoardModal}></WriteModal>

    </>
  );
}
export default FreeBoard;