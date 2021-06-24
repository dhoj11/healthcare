import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { getMemoList } from "./data";
import styles from "./index.module.css"
import Memo from "./Memo";
function MemoList(props) {

  const [memoList, setMemoList] = useState(getMemoList);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [memoContent, setMemoContent] = useState("");
  const [memoId,setMemoId] = useState(4);
  const memoContentChange = (e) => {
    setMemoContent(e.target.value);
  }


  const addMemo = () => {
    setMemoList(
      memoList.concat({
        id: memoId,
        name: "로그인Id",
        content: memoContent
      })
    )
    setMemoId(memoId+1);
    setMemoContent("");
    handleClose();
  }
  const deleteMemo = (id) => {
    const newMemoList = memoList.filter(memo => memo.id!==id)
    setMemoList(newMemoList);
  }

  const reverse =[...memoList].reverse();

  return(
    <div className={styles.memo_contain}>
      <div className={styles.memos}>
      {reverse.map((memo,index) => {
        return (
          <Memo key={index} memo={memo} deleteMemo={deleteMemo}></Memo>
        )
      })}
      

      </div>
      <button className={`{btn ${styles.plus_btn}`} onClick={handleShow}><i className="fas fa-plus"></i></button>
        <Modal 
        show={show} 
        onHide={handleClose} 
        animation={false}
        centered={true}
        >
          <div className={styles.modal_title}>메모 작성</div>
          <div className={styles.modal_body}><input type="text" onChange={memoContentChange} placeholder="내용 작성"></input></div>
          <div className={styles.modal_footer}>
              <button className={styles.cancel_btn} onClick={handleClose}>취소</button>
              <button className={styles.appoint_btn} onClick={addMemo}>작성</button>
            </div>

        </Modal>
    </div>
  );
}
export default MemoList;