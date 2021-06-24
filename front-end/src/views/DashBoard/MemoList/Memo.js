import styles from "./Memo.module.css";
function Memo(props) {
  
  return(
    <div className={styles.memo}>
      <div className={styles.name}>
        <span>{props.memo.name}</span> 
        {
          props.memo.name === "로그인Id"
          ?
            <button className={styles.delete_btn} onClick={() => props.deleteMemo(props.memo.id)}>x</button>
          :
            null
        }
      </div>  
      <div className={styles.content}>{props.memo.content}</div>
    </div>
  );
}
export default Memo;