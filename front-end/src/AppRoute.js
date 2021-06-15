import { Redirect, Route , Switch } from "react-router-dom";
import Appointment from "./views/Appointment";
import Home from "./views/Home";

function AppRoute(){
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Appointment" exact component={Appointment}/>
      <Redirect to="/"/>
    </Switch>
  );
}
export default AppRoute;