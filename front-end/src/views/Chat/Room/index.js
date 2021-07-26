import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getParticipantListByStaffId } from "../../../apis/chat";
import RoomItem from "./RoomItem";
import styles from "./index.module.css";
import { Modal } from "react-bootstrap";
import { getStaffList } from "../../../apis/dashboard";
import CreateChatModal from "./CreateChatModal";
function Room(props) {
  const {setRoomClick,setClickRoomId,mqttMessage,roomClick} = props;
  const staff_id = useSelector(state=>state.authReducer.staff_id);  
  const [participantList,setParticipantList] = useState([]);
  const [staffList,setStaffList] = useState([]); //직원리스트
  const [showCreateChatModal, setShowCreateChatModal] = useState(false);

  const selectParticipantByStaffId = async() => {
    try{
      const response = await getParticipantListByStaffId(staff_id);
      setParticipantList(response.data);
    } catch(error){
      throw error;
    }
  }
  
  const OpenCreateChatModal = () => {
    setShowCreateChatModal(true);
  }
  const CreateChatModalClose = () => {
    setShowCreateChatModal(false);
  }
  useEffect(() => {
    if(mqttMessage[0]==="rerender" && mqttMessage[1] ==="Chat_Room"){
      selectParticipantByStaffId();
    }
  },[mqttMessage])
  useEffect(() => {
    selectParticipantByStaffId();
  },[roomClick])
 
  return(
    <>
    <div>
      <div className="d-flex justify-content-between">
        <div className={styles.title}>채팅</div>
        <div className={styles.icon} ><i className="fas fa-comment-medical" onClick={OpenCreateChatModal}></i></div>
      </div>
      <div className={styles.room_contain}>
        {
          participantList.map((participant) => {
            return(
              <RoomItem participant={participant} setRoomClick={setRoomClick} mqttMessage={mqttMessage} setClickRoomId={setClickRoomId} roomClick={roomClick} key={participant.participant_id}></RoomItem>
            )
          })
        }
      </div>
      
    </div>

    <Modal
          show={showCreateChatModal} 
          onHide={CreateChatModalClose}
          centered="true"
          >
        <CreateChatModal setRoomClick={setRoomClick} setClickRoomId={setClickRoomId} CreateChatModalClose={CreateChatModalClose}></CreateChatModal>
      </Modal>
    </>
  );
}
export default Room;