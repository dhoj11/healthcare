import { Toast } from "react-bootstrap";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getChatListByRoomId, getParticipant, getParticipantList, insertChat, updateParticipantDate, updateParticipantNotReadNumPlus, updateParticipantNotReadNumZero } from "../../../apis/chat";
import { useEffect } from "react";
import { sendMqttMessage } from "../../../apis/message";
import { getPatient } from "../../../apis/administration";

/*
  Title : Chat_ChatRoom
  Description : 1.(직원 더블 클릭 or 채팅방목록에서) 더블 클릭시 나오는  채팅방화면
                2. roomId를 가지고 과거 메세지 출력

  Date : 2021-07-18
  Author : 조운호
*/
function ChatRoom(props) {
  const {setRoomClick,clickRoomId,mqttMessage} =props;
  const [chatContent,setChatContent] = useState("");
  const [chatList,setChatList] = useState([]);
  const [participant,setParticipant] = useState(null);
  const hospital_code = useSelector(state => state.authReducer.hospital_code);
  const staff_id = useSelector(state => state.authReducer.staff_id);
  const chatContentDiv = useRef();
  const roomClickFalse = () => {
    setRoomClick(false);
  };
  const writeChat = (event) => {
    if(event.target.value!=="\n"){
      setChatContent(event.target.value);
    }
   
  }
  const createChat = async() => {
    try{
      const chat = {
        room_id : clickRoomId,
        staff_id : staff_id,
        chat_content : chatContent
      }
      await insertChat(chat);
      //update_date 변경
      await updateParticipantDate(clickRoomId);
      // 본인 아이디 제외 안 읽은 메세지 수 count+1씩 하기
      await updateParticipantNotReadNumPlus({
        room_id:clickRoomId,
        staff_id:staff_id
      });
    } catch(error){
      throw error;
    }
    
  }
  const publishTopic = async () => {
    try{
      const response = await getParticipantList(clickRoomId);
      const participantList = response.data;
      for(const participant of participantList){
        console.log(participant);
        await sendMqttMessage({
          topic: "/"+hospital_code + "/" + participant.staff_id,
          content:"rerender/Chat_ChatRoom"
        })
        await sendMqttMessage({
          topic: "/"+hospital_code + "/" + participant.staff_id,
          content:"rerender/Chat_Room"
        })
      }
    } catch(error){
      throw error;
    }
    // await sendMqttMessage({
    //   topic:"/"+hospital_code +"/"+
    // });
  };

  const sendMessage = (event) => {
    if(event.type === "click"){
      createChat();
      setChatContent("");
      publishTopic();
    }else {
      if(event.keyCode === 13 && event.shiftKey === false) {
        if(chatContent!==""){
          createChat();
          setChatContent("");
          publishTopic();
        }     
      }
    }
  }
  const getChatList= async(room_id) => {
    try{
      const response =await getChatListByRoomId(room_id);
      console.log(response.data);
      setChatList(response.data);
    } catch(error){
      throw error;
    }
  }
  const axiosGetParticipant = async() =>{
    try{
      const response = await getParticipant(clickRoomId,staff_id);
      console.log(response.data);
      setParticipant(response.data);
    } catch(error){
      throw error;
    }
  }
  const axiosUpdateParticipantNotReadNumZero = async() => {
    try{
      await updateParticipantNotReadNumZero({
        room_id:clickRoomId,
        staff_id:staff_id
      });
    } catch(error){
      throw error;
    }
  }
  useEffect(() => {
    getChatList(clickRoomId);
    axiosGetParticipant();
    if(clickRoomId !==null){
      axiosUpdateParticipantNotReadNumZero();
    }
  },[setRoomClick])
  
  useEffect(() => {
    if(mqttMessage[0]==="rerender" && mqttMessage[1] ==="Chat_ChatRoom"){
      if(clickRoomId !==null){
        axiosUpdateParticipantNotReadNumZero();
      }
      getChatList(clickRoomId);
      console.log("ddddd",clickRoomId);
    }
  },[mqttMessage])
  useEffect(() => {
    const scrollHeight = chatContentDiv.current.scrollHeight;
    const clientHeight = chatContentDiv.current.clientHeight;
    chatContentDiv.current.scrollTop = scrollHeight -clientHeight;
  },[chatList])
  return(
    <>
    <div className={`${styles.chat_header} d-flex`}>
      <div><FontAwesomeIcon icon={faChevronLeft} className={styles.arrowLeft} onClick={roomClickFalse}/></div>
      {
        participant ===null ?
        null
        :
        <div>{participant.participant_room_name}</div>
      }
      
    </div>
    <Toast.Body className={styles.chat_body}>
      <div className={styles.chat_content} ref={chatContentDiv}>
        {
          chatList.map((chat,index) => {
            if(chat.staff_id !==staff_id){
              if(index !==0){
                if(chatList[index-1].staff_id === chat.staff_id && chatList[index-1].chat_time.substring(0,5) ===chat.chat_time.substring(0,5)){
                  return(
                    <div className={styles.time_content_contain} key={chat.chat_id}>
                      <div className={styles.no_img}></div>
                      <div className={styles.chat}>{chat.chat_content}</div>
                      {
                        index === chatList.length-1 ?
                        <div className={styles.chat_time}>{chat.chat_time.substring(0,5)}</div>
                        :
                          chatList[index+1].staff_id === chat.staff_id && chatList[index+1].chat_time.substring(0,5) ===chat.chat_time.substring(0,5) ?
                          null
                          :
                          <div className={styles.chat_time}>{chat.chat_time.substring(0,5)}</div>
                      }
                    </div>
                  )
                }
              }
              return (
                <div key={chat.chat_id} className={`d-flex mt-3`}>
                  <div className={styles.staff_img_contain}>
                    <img src={`http://localhost:8080/dashboard/staff/downloadAttach/${chat.staff_id}`} className={styles.staff_img} ></img>
                  </div>
                  <div>
                    <div>{chat.staff_name}</div>
                    <div className={styles.time_content_contain}>
                      <div className={styles.chat}>{chat.chat_content}</div>
                      {
                        index === chatList.length-1 ?
                        <div className={styles.chat_time}>{chat.chat_time.substring(0,5)}</div>
                        :
                          chatList[index+1].staff_id === chat.staff_id && chatList[index+1].chat_time.substring(0,5) ===chat.chat_time.substring(0,5) ?
                          null
                          :
                          <div className={styles.chat_time}>{chat.chat_time.substring(0,5)}</div>
                      }
                    </div>
                  </div> 
                </div>
              )
            } else{
              if(index !==0){
                if(chatList[index-1].staff_id === chat.staff_id && chatList[index-1].chat_time.substring(0,5) ===chat.chat_time.substring(0,5)){
                  return(
                    <div className={`justify-content-end ${styles.time_content_contain}`}>
                      {
                        index === chatList.length-1 ?
                        <div className={styles.chat_time}>{chat.chat_time.substring(0,5)}</div>
                        :
                          chatList[index+1].staff_id === chat.staff_id && chatList[index+1].chat_time.substring(0,5) ===chat.chat_time.substring(0,5) ?
                          null
                          :
                          <div className={styles.chat_time}>{chat.chat_time.substring(0,5)}</div>
                      }
                       <div className={`${styles.chat} mr-3`}>{chat.chat_content}</div>

                    </div>
                  )
                }
              }
            }
            return (
              <div key={chat.chat_id} className={`d-flex mt-3 justify-content-end`}>
                <div>
                  <div className={styles.time_content_contain}>
                    {
                      index === chatList.length-1 ?
                      <div className={styles.chat_time}>{chat.chat_time.substring(0,5)}</div>
                      :
                        chatList[index+1].staff_id === chat.staff_id && chatList[index+1].chat_time.substring(0,5) ===chat.chat_time.substring(0,5) ?
                        null
                        :
                        <div className={styles.chat_time}>{chat.chat_time.substring(0,5)}</div>
                    }
                    <div className={`${styles.chat} mr-3`}>{chat.chat_content}</div>
                  </div>
                </div> 
              </div>
            )
          })
        }
      </div>
      <div className={styles.chat_input_contain}>
        <textarea className={styles.chat_input} onChange={writeChat} onKeyDown={sendMessage} value={chatContent}></textarea>
        <div>
          <button className={`${styles.submit}`} onClick={sendMessage}>전송</button>
        </div>
      </div>
    </Toast.Body>
    
    </>
  );
}
export default ChatRoom;