import React from "react";
import Account from "./Account";
import Custom from "./Custom";
import style from "./Setting.module.css";

function Setting(props){
  return(
    <div className={style.setting}>
      <div className={style.custom}>
        <Custom/>
      </div>
      <div className={style.account}>
        <Account/>
      </div>
    </div>
  );
}

export default Setting;