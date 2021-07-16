import './App.css';
import './reset.css';
import AppMenu from "./AppMenu";
import AppRoute from "./AppRoute";
import AppHeader from './AppHeader';
import { useEffect } from 'react';
import Paho from "paho-mqtt";
import { createSetClientAction } from './redux/mqtt-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { sendMqttMessage } from './apis/message';
import { createMasonryCellPositioner } from 'react-virtualized';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const client = new Paho.Client("localhost", 61614 , "client-" + new Date().getTime());
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
        <div className="header">
          <AppHeader/>
        </div>
        <div className="body">
          <div className="sidebar">
            <AppMenu/>
          </div>
          <div className="content">
            <AppRoute/>
          </div>
        </div>    
        
    </div>
  );
}

export default App;