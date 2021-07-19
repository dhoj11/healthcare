import { Redirect, Route , Switch } from "react-router-dom";
import Appointment from "./views/Appointment";
import Treatment from "./views/Treatment";
import Administration from "./views/Administration";
import DashBoard from "./views/DashBoard";
import Test from "./views/Test";
import Home from "./views/Home";
import NoticeEditor from "./views/NoticeEditor";
import Error from "./views/Error";
import Setting from "./views/Setting";
import { useSelector } from "react-redux";
import React from "react";

function AppRoute(){

  const role = useSelector(state => state.authReducer.authority);

  const access_role = (page) => {
    if(page=== "treatment" ) if (role === "ROLE_ADMIN" || role === "ROLE_DOCTOR") return true; else return false;
    if(page=== "test") if (role === "ROLE_ADMIN" || role === "ROLE_DOCTOR" || role === "ROLE_TESTER") return true; else return false;
    if(page=== "appointment") if (role === "ROLE_ADMIN" || role === "ROLE_DOCTOR" || role === "ROLE_NURSE") return true; else return false;
    if(page=== "administration") if (role === "ROLE_ADMIN" || role === "ROLE_DOCTOR" || role === "ROLE_NURSE") return true; else return false; 
    if(page=== "setting") if (role === "ROLE_ADMIN") return true; else return false; 
  }

  const RouteIf = (
    { path, component: Component}) => { 
      if(path === "/treatment")
        return ( <Route  render={ () => {  if (access_role("treatment")) {  return <Component /> } else { return <Error /> } }} />)
      if(path === "/test")
        return ( <Route  render={ () => {  if (access_role("test")) {  return <Component /> } else { return <Error /> } }} />)
      if(path === "/appointment")
        return ( <Route  render={ () => {  if (access_role("appointment")) {  return <Component /> } else { return <Error /> } }} />)
      if(path === "/administration")
        return ( <Route  render={ () => {  if (access_role("administration")) {  return <Component /> } else { return <Error /> } }} />)
      if(path === "/setting")
        return ( <Route  render={ () => {  if (access_role("setting")) {  return <Component /> } else { return <Error /> } }} />)
  }
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/dashBoard" exact component={DashBoard}/>
      <RouteIf path="/treatment" component={Treatment}/>
      <RouteIf path="/appointment" component={Appointment}/>
      <RouteIf path="/administration" component={Administration}/>
      <RouteIf path="/test" component={Test}/>
      <RouteIf path="/setting" component={Setting}/>
      <Route path="/setting" exact component={Setting}/>
      <Route path="/noticeeditor"  component={NoticeEditor}/>
      <Route path="/error" exact component={Error}/>
      <Redirect to="/"/>
    </Switch>
  );
}
export default React.memo(AppRoute);

