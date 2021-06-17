import { Redirect, Route , Switch } from "react-router-dom";
import Appointment from "./views/Appointment";
import Home from "./views/Home";
import Administration from "./views/Administration";
import DashBoard from "./views/DashBoard";

function AppRoute(){
  return(
    <Switch>
      <Route path="/DashBoard" exact component={DashBoard}/>
      <Route path="/Appointment" exact component={Appointment}/>
      <Route path="/administration" exact component={Administration}/>
      <Redirect to="/"/>
    </Switch>
  );
}
export default AppRoute;