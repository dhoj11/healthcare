import styles from "./index.module.css"
import Login from "./Login";
import Notice from "./Notice";
import Poster from "./Poster";
import News from "./News";

function Home(props) {
  return (
    <div className={styles.home_content}>
      <div className={styles.login_area}>
        <Login />
      </div>
      <div className={styles.second_column}>
        <div className={styles.notice_area}>
          <Notice />
        </div>
        <div className={styles.poster_area}>
          <News />
        </div>
        <div className={styles.dz_tel}>
        TEL: 02.6233.3000 &nbsp;  FAX: 02.6233.3030 &nbsp;  고객센터 : 1688-6000 &nbsp;
        온라인 고객센터 : <a href="https://help.douzone.com/main/index.jsp" target="_blank">https://help.douzone.com/main/index.jsp</a>
        </div>
      </div>
    </div>
  );
}

export default Home;