import { Redirect, Route , Switch } from "react-router-dom";
import Home from "./views/Home";
import Administration from "./views/Administration";

function AppRoute(){
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/administration" exact component={Administration}/>
      <Redirect to="/"/>
    </Switch>
  );
}
export default AppRoute;