
import { useEffect, useState } from "react";
import { getStaffList } from "../../../apis/dashboard";
import styles from "./index.module.css"
function Staff(props) {
  // const staffList = getStaffList();
  const [staffList,setStaffList] = useState([]);
  const [clickAuthority,setClickAuthority] = useState("전체");
  useEffect(() => {
    (async function() {
      const response = await getStaffList();
      setStaffList(response.data);
    })();
  },[])

  const selectAuthority = (e) => {
    console.log(e.target.innerHTML);
    setClickAuthority(e.target.innerHTML);
  }
  return(
    
    <div className={styles.staff_contain}>
      <div className={styles.classify}>
        <div onClick={selectAuthority} className ={clickAuthority ==="전체" ? styles.bg :  null}>전체</div>|
        <div onClick={selectAuthority} className ={clickAuthority ==="의사" ? styles.bg :  null}>의사</div>|
        <div onClick={selectAuthority} className ={clickAuthority ==="간호" ? styles.bg :  null}>간호</div>|
        <div onClick={selectAuthority} className ={clickAuthority ==="임상" ? styles.bg :  null}>임상</div>
      </div>

    <div className={styles.staff_table}>
      <div className={styles.staff_header}>
          <div>이름</div>
          <div>직책</div>
          <div>전화번호</div>
        </div>
      </div>
      <div className={styles.body}>

      {staffList.map((data,index) => {
       if(clickAuthority === "전체"){
        return(
            <div key={index} className={styles.staff_body}>
              <div className={styles.staff_name}>
                <div 
                className={styles.staff_img}
                >
                  <img src={`http://localhost:8080/dashboard/staff/downloadAttach/${data.staff_id}`} className={styles.staff_img_img}></img>
                </div>
                  <span>{data.staff_name}</span>
              </div>
              <div>
                <div className={
                                data.staff_authority === "의사"? 
                                  `${styles.authority} ${styles.doctor_bg}` 
                                  : 
                                  (data.staff_authority === "간호" ? `${styles.authority} ${styles.nurse_bg}` : `${styles.authority} ${styles.clinic_bg}`)
                                }
                >{data.staff_authority}</div>
              </div>
              <div className={styles.tel}>{data.staff_tel}</div>
            </div>
        );
       } else {
         if(data.staff_authority === clickAuthority){
          return(
              <div key={index} className={styles.staff_body}>
                <div className={styles.staff_name}>
                  <div 
                  className={styles.staff_img}
                  >
                    <img src={`http://localhost:8080/dashboard/staff/downloadAttach/${data.staff_id}`} className={styles.staff_img_img}></img>
                  </div>
                    <span>{data.staff_name}</span>
                </div>
                <div>
                  <div className={
                                  data.staff_authority === "의사" ? 
                                    `${styles.authority} ${styles.doctor_bg}` 
                                    : 
                                    (data.staff_authority === "간호" ? `${styles.authority} ${styles.nurse_bg}` : `${styles.authority} ${styles.clinic_bg}`)
                                  }
                  >{data.staff_authority}</div>
                </div>
                <div className={styles.tel}>{data.staff_tel}</div>
              </div>
          );
         } else{
           return null;
         }
       }        
      })}
      </div>
    </div>
      
  );
}
export default Staff;