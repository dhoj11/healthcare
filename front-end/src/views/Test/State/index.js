import style from "./State.module.css"

function State(props){
  return(
    <div calssName={style.state}>
      <span className={style.item}>바코드 출력</span>
      <span className={style.item}>검사진행</span>
      <span className={style.item}>검사완료</span>
    </div>
  );
}

export default State;