import { Redirect, Route , Switch } from "react-router-dom";
import Appointment from "./views/Appointment";
import Treatment from "./views/Treatment";
import Administration from "./views/Administration";
import DashBoard from "./views/DashBoard";

function AppRoute(){
  return(
    <Switch>
      <Route path="/DashBoard" exact component={DashBoard}/>
      <Route path="/treatment" exact component={Treatment}/>
      <Route path="/Appointment" exact component={Appointment}/>
      <Route path="/administration" exact component={Administration}/>
      <Redirect to="/"/>
    </Switch>
  );
}
export default AppRoute;