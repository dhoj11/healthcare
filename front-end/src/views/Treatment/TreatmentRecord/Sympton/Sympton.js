import style from "./Sympton.module.css";

function Sympton(props){
  return(
    <div className={style.sympton}>
      <div className={`alert alert-success ${style.title}`}>
        증상/내원사유
      </div>
      <div className={`alert alert-light ${style.content}`}>
        코딩스트레스
      </div>
    </div>
  );
}

export default Sympton;