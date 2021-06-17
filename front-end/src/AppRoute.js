import { Redirect, Route , Switch } from "react-router-dom";
import Home from "./views/Home";
import Treatment from "./views/Treatment";

function AppRoute(){
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/treatment" exact component={Treatment}/>
      <Redirect to="/"/>
    </Switch>
  );
}
export default AppRoute;