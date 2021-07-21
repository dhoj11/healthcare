import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getParticipantListByStaffId } from "../../../apis/chat";
import RoomItem from "./RoomItem";
import styles from "./index.module.css";
function Room(props) {
  const {setRoomClick,setClickRoomId,mqttMessage} = props;
  const staff_id = useSelector(state=>state.authReducer.staff_id);  
  const [participantList,setParticipantList] = useState([]);
  const selectParticipantByStaffId = async() => {
    try{
      const response = await getParticipantListByStaffId(staff_id);
      setParticipantList(response.data);
    } catch(error){
      throw error;
    }
  }
  useEffect(() => {
    if(mqttMessage[0]==="rerender" && mqttMessage[1] ==="Chat_Room"){
      selectParticipantByStaffId();
    }
  },[mqttMessage])
  useEffect(() => {
    selectParticipantByStaffId();
  },[])
 
  return(
    <div>
      <div className={styles.title}>채팅</div>
      {
        participantList.map((participant) => {
          return(
            <RoomItem participant={participant} setRoomClick={setRoomClick} mqttMessage={mqttMessage} setClickRoomId={setClickRoomId} key={participant.participant_id}></RoomItem>
          )
        })
      }
    </div>
  );
}
export default Room;