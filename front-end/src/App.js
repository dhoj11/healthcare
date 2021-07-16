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
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const client = new Paho.Client("localhost", 61614 , "client-" + new Date().getTime());
    dispatch(createSetClientAction(client));
    client.connect({onSuccess: () => {
      console.log("접속 성공");
      client.subscribe("/");
    }});

    

    
    return (() => {
      (console.log("언마운트"));
    });
  },[]);
  return (
    <div className="main">
      <div>hihihihi</div>
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