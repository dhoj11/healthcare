import style from "./Date.module.css";

function Date(props){
  return(
    <div className={style.selectDate}>

      <div className={style.dateItem}>
        2021-06-15
      </div>

      <div className={style.dateItem}>
        2021-06-15
      </div>

      <div className={style.dateItem}>
        2021-06-15
      </div>

      <div className={style.dateItem}>
        2021-06-15
      </div>


    </div>
  );
}

export default Date;