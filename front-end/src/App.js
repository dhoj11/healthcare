import './App.css';
import './reset.css';
import AppMenu from "./AppMenu";
import AppRoute from "./AppRoute";
import AppHeader from './AppHeader';
import { useEffect } from 'react';
import Paho from "paho-mqtt";
import { useDispatch } from 'react-redux';
import {createSetClientAction} from "./redux/mqtt-reducer";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const client = new Paho.Client("localhost", 61614, "client-" + new Date().getTime());
    dispatch(createSetClientAction(client));
    if(sessionStorage.getItem("staff_id")) {
      //토픽 설정
    }else {
      //토픽 설정 X
    }
    return (() => {
      client.disconnect();
    })
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