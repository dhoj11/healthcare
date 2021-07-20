import { useEffect, useState } from "react";
import { getLastChat } from "../../../../apis/chat";
import styles from "./index.module.css";
function RoomItem(props) {
  const {participant,setRoomClick,setClickRoomId,mqttMessage} =props;
  const [lastChat,setLastChat] =useState(null);

  const selectLasChat = async() => {
    try{
      const response = await getLastChat(participant.room_id);
      setLastChat(response.data);

    } catch(error){
      throw error;
    }
  }
  const roomClickTrue=()=>{
    setClickRoomId(participant.room_id);
    setRoomClick(true);
  }
  useEffect(() => {
    selectLasChat();
  },[])
  useEffect(() => {
    if(mqttMessage[0]==="rerender" && mqttMessage[1] ==="Chat_Room"){
      console.log("요기 실행??");
      selectLasChat();
    }
  },[mqttMessage])
  return(
      lastChat ?
      <div onDoubleClick={roomClickTrue} className={`d-flex justify-content-between ${styles.room_item}`}>
      <div className="d-flex">
        <div className={styles.staff_img_contain}>
          <img src={`http://localhost:8080/dashboard/staff/downloadAttach/${participant.staff_id}`} className={styles.staff_img} ></img>
        </div>
        <div className={styles.name_chat_contain}>
          <div className={styles.room_name}>{participant.participant_room_name}</div>
          <div className={styles.lastchat}>{lastChat.chat_content}</div>
        </div>
      </div>
      <div className="d-flex">
        <div></div>
        <div className={styles.update_date}>
          <div>{participant.participant_update_date}</div>
          <div>{participant.participant_update_time.substring(0,5)}</div>
        </div>
      </div>
    </div>
    :
    null
  );
}
export default RoomItem;