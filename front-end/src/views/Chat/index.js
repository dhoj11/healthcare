import { useState } from "react";
import { Toast, ToastHeader } from "react-bootstrap";
import styles from "./index.module.css";
import Staff from "./Staff";
import Room from "./Room";
import "./index.css";
import RoomItem from "./RoomItem";

/*
  Title : Chat
  Description : 채팅 컴포넌트(tab-직원/채팅)

  Date : 2021-07-18
  Author : 조운호
*/
function Chat(props) {
  const {chatShow,chatToggle} =props;
  const [tab, setTab] =useState("staff");
  const [roomClick,setRoomClick] = useState(false);
  const handleTabStaff = () => {
    setTab("staff")
  }
  const handleTabChat = () => {
    setTab("chat")
  }

  return(
    <Toast show={chatShow} onClose={chatToggle}  className={styles.chat} > 
    {
      !roomClick ?
      <>
      <Toast.Header className={styles.chat_header}>
        <div>
          <button onClick={handleTabStaff}>직원</button>
          <button onClick={handleTabChat}>채팅</button>
        </div>
      </Toast.Header>
      <Toast.Body className={styles.chat_body}>
        <div className={styles.chat_body}>
          {
            tab ==="staff" ?
            <Staff setRoomClick={setRoomClick}></Staff>
            :
            <Room setRoomClick={setRoomClick}></Room>
          }
        </div>
      </Toast.Body>
      </>
    :
      <RoomItem setRoomClick={setRoomClick}></RoomItem>
    }
    
  </Toast>
  );
}
export default Chat;