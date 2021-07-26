import { useEffect, useState } from "react";
import { getLastChat, getOtherStaffId } from "../../../../apis/chat";
import styles from "./index.module.css";
function RoomItem(props) {
  const {participant,setRoomClick,setClickRoomId,mqttMessage,roomClick} =props;
  const [lastChat,setLastChat] =useState(null);
  const [otherStaffId,setOtherStaffId] = useState(null);

  const selectLasChat = async() => {
    try{
      const response = await getLastChat(participant.room_id);
      setLastChat(response.data);

    } catch(error){
      throw error;
    }
  }
  const selectOtherStaffId = async() => {
    try{
      const response = await getOtherStaffId(participant.room_id,participant.staff_id);
      console.log(response.data);
      setOtherStaffId(response.data);
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
    selectOtherStaffId();
  },[])
  useEffect(() => {
    if(mqttMessage[0]==="rerender" && mqttMessage[1] ==="Chat_Room"){
      selectLasChat();
    }
  },[mqttMessage])
  return(
      lastChat ?
      <div onDoubleClick={roomClickTrue} className={`d-flex justify-content-between ${styles.room_item}`}>
      <div className="d-flex">
        <div className={`d-flex flex-wrap ${styles.img_total}`}>
          {
            otherStaffId !==null ?
            otherStaffId.map((data,index)=>{
              if(otherStaffId.length===1){
                return(
                  <div className={styles.staff_img_contain}>
                    <img key={data} src={`${process.env.REACT_APP_URL}/dashboard/staff/downloadAttach/${data}`} className={styles.staff_img} ></img>
                  </div>
                )
              }else if(otherStaffId.length===2){
                return(
                  <div className={styles.staff_img_contain2}>
                    <img key={data} src={`${process.env.REACT_APP_URL}/dashboard/staff/downloadAttach/${data}`} className={styles.staff_img} ></img>
                  </div>
                )
              }else if(otherStaffId.length===3){
                  return(
                    <div className={`${styles.staff_img_contain3}`}>
                      <img key={data} src={`${process.env.REACT_APP_URL}/dashboard/staff/downloadAttach/${data}`} className={styles.staff_img} ></img>
                    </div>
                  )                             
              }else{
                if(index <4){
                  return(
                    <div>
                    <div className={`${styles.staff_img_contain4}`}>
                      <img key={data} src={`${process.env.REACT_APP_URL}/dashboard/staff/downloadAttach/${data}`} className={styles.staff_img} ></img>
                    </div>
                    </div>
                  )
                } 
               
              }
              
            })
            : null
          }
          </div>
        <div className={styles.name_chat_contain}>
          <div className={styles.room_name}>{participant.participant_room_name}</div>
          <div className={styles.lastchat}>{lastChat.chat_content}</div>
        </div>
      </div>
      <div className="d-flex">
        <span >
          {
            participant.participant_not_read_chat_num ===0 ?
            null
            :
            <div className={styles.not_read_chat_num}>{participant.participant_not_read_chat_num}</div>
          }
        </span>
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