import { Redirect, Route , Switch } from "react-router-dom";
import Home from "./views/Home";

function AppRoute(){
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Redirect to="/"/>
    </Switch>
  );
}
export default AppRoute;