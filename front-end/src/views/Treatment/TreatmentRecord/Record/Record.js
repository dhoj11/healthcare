import style from "./Record.module.css";

function Record(props){
  return(
    <div className={style.record}>
      <div className={style.title}>
        의무기록
      </div>
      
      <textarea className={`form-control ${style.write}`} rows="10"></textarea>
      
    </div>
  );
}

export default Record;