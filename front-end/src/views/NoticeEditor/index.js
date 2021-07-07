import { Route, Switch } from "react-router";
import UpdateNotice from "./UpdateNotice";
import WriteNotice from "./WriteNotice";
function NoticeEditor(props) {

  return(
    <Switch>
      <Route path={`${props.match.url}/writenotice`} exact component={WriteNotice}/>
      <Route path={`${props.match.url}/writeimgnotice`} exact component={WriteNotice}/>
      <Route path={`${props.match.url}/updatenotice/:notice_id`} exact component={UpdateNotice}/>
    </Switch>
  );
  
  
}
export default NoticeEditor;