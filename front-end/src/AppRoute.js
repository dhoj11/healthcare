import { Redirect, Route , Switch } from "react-router-dom";
import Appointment from "./views/Appointment";
import Home from "./views/Home";
import Treatment from "./views/Treatment";
import Administration from "./views/Administration";

function AppRoute(){
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/treatment" exact component={Treatment}/>
      <Route path="/Appointment" exact component={Appointment}/>
      <Route path="/administration" exact component={Administration}/>
      <Redirect to="/"/>
    </Switch>
  );
}
export default AppRoute;