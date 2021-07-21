import './App.css';
import './reset.css';
import AppMenu from "./AppMenu";
import AppRoute from "./AppRoute";
import AppHeader from './AppHeader';
import { useEffect, useState } from 'react';
import Paho from "paho-mqtt";
import { createSetClientAction } from './redux/mqtt-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { sendMqttMessage } from './apis/message';
import { createMasonryCellPositioner } from 'react-virtualized';
import { Toast } from 'react-bootstrap';
import Chat from './views/Chat';
import ReactNotifications from 'react-notifications-component'
function App() {
  const dispatch = useDispatch();
  const [chatShow,setChatShow] = useState(false);
  const chatToggle = () => {
    setChatShow(!chatShow);
  }
  useEffect(() => {
    const client = new Paho.Client("localhost",61614 , "client-" + new Date().getTime());
    dispatch(createSetClientAction(client));
    client.connect({onSuccess: () => {
      client.subscribe("/");
      if(sessionStorage.getItem("staff_id")){
        client.unsubscribe("/");
        client.subscribe("/"+sessionStorage.getItem("hospital_code"));
        client.subscribe("/"+sessionStorage.getItem("hospital_code")+"/"+sessionStorage.getItem("authority"));
        client.subscribe("/"+sessionStorage.getItem("hospital_code")+"/"+sessionStorage.getItem("authority")+"/"+sessionStorage.getItem("staff_id"));
      }
    }});
    return (() => {
      client.disconnect();
    });
  },[]);

  return (
    <div className="main">
      <ReactNotifications />
        <div className="header">
          <AppHeader/>
        </div>
        <div className="body">
          <div className="sidebar">
            <AppMenu chatToggle={chatToggle}/>
          </div>
          <div className="content">
            <Chat chatShow={chatShow} chatToggle={chatToggle}></Chat>
            <AppRoute className="approute"/>
          </div>
        </div>

    </div>
  );
}

export default App;