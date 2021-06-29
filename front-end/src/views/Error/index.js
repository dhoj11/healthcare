import styles from "./index.module.css";

function Error(props) {
  return (
    <>
      <div className={styles.error_wrapper}>
        <div className={styles.error_photo_wrapper}>
          <img className={styles.error_photo} src="../../resources/img/403Error.png"/>
        </div>
        <div className={styles.error_letter}><span>해당 계정으로 접근할 수 없는 페이지 입니다. 권한을 확인해주세요!</span></div>
      </div>
    </>
  );
}

export default Error;