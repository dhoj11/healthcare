import { Route, Switch } from "react-router";
import UpdateNotice from "./UpdateNotice";
import UpdateImgNotice from "./UpdateImgNotice";

import WriteNotice from "./WriteNotice";
function NoticeEditor(props) {

  return(
    <Switch>
      <Route path={`${props.match.url}/writenotice`} exact component={WriteNotice}/>
      <Route path={`${props.match.url}/writeimgnotice`} exact component={WriteNotice}/>
      <Route path={`${props.match.url}/updatenotice/:notice_id`} exact component={UpdateNotice}/>
      <Route path={`${props.match.url}/updateimgnotice/:img_notice_id`} exact component={UpdateImgNotice}/>
    </Switch>
  );
  
  
}
export default NoticeEditor;