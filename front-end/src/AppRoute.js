import { Redirect, Route , Switch } from "react-router-dom";
import Appointment from "./views/Appointment";
import Home from "./views/Home";
import Treatment from "./views/Treatment";
import Administration from "./views/Administration";
import Test from "./views/Test";
import Login from "./views/Auth/Login";

function AppRoute(){
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/treatment" exact component={Treatment}/>
      <Route path="/Appointment" exact component={Appointment}/>
      <Route path="/administration" exact component={Administration}/>
      <Route path="/test" exact component={Test}/>
      
      {/* //회원로그인 임시로 라우트 */} 
      <Route path="/auth/login" exact component={Login}/> 
      <Redirect to="/"/>
    </Switch>
  );
}
export default AppRoute;