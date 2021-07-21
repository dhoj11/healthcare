import { useState, useRef } from "react";
import { Toast, ToastHeader } from "react-bootstrap";
import styles from "./index.module.css";
import Staff from "./Staff";
import Room from "./Room";
import "./index.css";
import ChatRoom from "./ChatRoom";
import { useEffect } from "react";
import Paho from "paho-mqtt";

/*
  Title : Chat
  Description : 채팅 컴포넌트(tab-직원/채팅)

  Date : 2021-07-18 ~ 2021-07-20
  Author : 조운호
*/
function Chat(props) {
  const {chatShow,chatToggle} =props;
  const [tab, setTab] =useState("staff");
  const [roomClick,setRoomClick] = useState(false);
  const [clickRoomId, setClickRoomId] = useState(null);
  const [mqttMessage, setMqttMessage] = useState("");

  const handleTabStaff = () => {
    setTab("staff")
  }
  const handleTabChat = () => {
    setTab("chat")
  }
  let client = useRef(null);
  const MqttBroker = () => {
    client = new Paho.Client("localhost",61614, "chatclient-"+new Date().getTime());
    client.connect({onSuccess: () => {
      console.log("접속성고오옹");
      client.unsubscribe("/"+sessionStorage.getItem("hospital_code")+"/"+sessionStorage.getItem("staff_id"));
      client.subscribe("/"+sessionStorage.getItem("hospital_code")+"/"+sessionStorage.getItem("staff_id"));
    }
    });
    client.onMessageArrived = (msg) => {
      let message = JSON.parse(msg.payloadString);
      console.log("메세지 도착");
      message = message.content.split('/');
      setMqttMessage(message);
    };
    client.onConnectionLost = () => {
      console.log("접속 끊김");
    };
  }
  
  useEffect(() => {
     MqttBroker();
     return () => {
      client.disconnect();
     }
  },[chatShow])

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
            <Staff setRoomClick={setRoomClick} setClickRoomId={setClickRoomId}></Staff>
            :
            <Room setRoomClick={setRoomClick} setClickRoomId={setClickRoomId} mqttMessage={mqttMessage}></Room>
          }
        </div>
      </Toast.Body>
      </>
    :
      <ChatRoom setRoomClick={setRoomClick} clickRoomId={clickRoomId} mqttMessage={mqttMessage}></ChatRoom>
    }
    
  </Toast>
  );
}
export default Chat;