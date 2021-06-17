import style from "./Comment.module.css";

function Comment(props){
  return(
    <div className={style.comment}>
      <div className={style.title}>
        특이사항
      </div>
      <textarea className={`form-control ${style.write}`} rows="10"></textarea>
    </div>
  );
}

export default Comment;