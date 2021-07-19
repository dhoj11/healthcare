import { Toast } from "react-bootstrap";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

/*
  Title : Chat_RoomItem
  Description : 1.(직원 더블 클릭 or 채팅방목록에서) 더블 클릭시 나오는  채팅방화면
                2. roomId를 가지고 과거 메세지 출력

  Date : 2021-07-18
  Author : 조운호
*/
function RoomItem(props) {
  const {setRoomClick} =props;

  const roomClickFalse = () => {
    setRoomClick(false);
  };
  return(
    <>
    <div className={`${styles.chat_header} d-flex`}>
      <div><FontAwesomeIcon icon={faChevronLeft} className={styles.arrowLeft} onClick={roomClickFalse}/></div>
      <div>이름</div>
    </div>
    <Toast.Body className={styles.chat_body}>

    </Toast.Body>
    </>
  );
}
export default RoomItem;