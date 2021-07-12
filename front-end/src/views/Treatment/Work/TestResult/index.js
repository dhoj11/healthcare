import React from "react";

import Blood from "./Blood";
import style from "./index.module.css";

function TestResult(props){
  return(
    <div className={style.test}>
      <Blood/>
      {/* <Xray/> */}
    </div>
  );
}

export default React.memo(TestResult);