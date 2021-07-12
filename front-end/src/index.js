import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { createStore } from 'redux';
import rootReducer from './redux/root-reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension"
import { addAuthHeader } from './apis/axiosConfig';
import { createSetAuthTokenAction, createSetStaffIdAction, createSetStaffNameAction, createSetStaffAuthorityAction, createSetHospitalCodeAction, createSetHospitalNameAction } from './redux/auth-reducer';

const store = createStore(rootReducer, composeWithDevTools());
//Redux에 인증 정보 설정
store.dispatch(createSetStaffIdAction(sessionStorage.getItem("staff_id") || ""));
store.dispatch(createSetAuthTokenAction(sessionStorage.getItem("authToken") || ""));
store.dispatch(createSetStaffNameAction(sessionStorage.getItem("staff_name") || ""));
store.dispatch(createSetStaffAuthorityAction(sessionStorage.getItem("staff_authority") || ""));
store.dispatch(createSetHospitalCodeAction(sessionStorage.getItem("hospital_code") || ""));
store.dispatch(createSetHospitalNameAction(sessionStorage.getItem("hospital_name") || ""));
//store.state.colorReducer
//store.dispatch()

//Axios에 인증 헤더 추가
if(sessionStorage.getItem("staff_id")){
  addAuthHeader(sessionStorage.getItem("authToken"));
}
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
