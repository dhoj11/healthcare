import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRoomId } from "../../../apis/chat";
import { getStaffList } from "../../../apis/dashboard";
import styles from "./index.module.css";
/*
  Title : Chat_Staff
  Description : 채팅할 직원들 목록 리스트화면 (더블클릭시 채팅)

  Date : 2021-07-18
  Author : 조운호
*/
function Staff(props) {
  const {setRoomClick,setClickRoomId} = props;
  const staff_id = useSelector(state => state.authReducer.staff_id);
  const [staffList,setStaffList] = useState([]); //직원리스트
  const [loginStaff,setLoginStaff] = useState({});  //현재 로그인 정보

  const axiosStaffList = async() => {
    const response = await getStaffList();
    let temp = response.data;
    temp = temp.filter((data) => data.staff_id !==staff_id);
    setStaffList(temp);
    for(var staff of response.data){
      if(staff_id === staff.staff_id){
        setLoginStaff(staff);
      }
    }
  }
  const searchStaff = async(event) => {
    try{
      let searchName = event.target.value;
      const response = await getStaffList();
      let temp = response.data;
      temp = temp.filter((data) =>data.staff_name.includes(searchName) && data.staff_id !==staff_id);
      setStaffList(temp);
    } catch(error){
      throw error;
    }
    
  }
  const roomClickTrue = async(clickStaff_id) =>{
    try{
      const staffArr = [staff_id,clickStaff_id];
      const response = await getRoomId(staffArr);
      setClickRoomId(response.data);
      setRoomClick(true);
    } catch(error){
      throw error;
    }
    
  }
  useEffect(() => {
    axiosStaffList();
  },[])
  return(
    <div>
      <div className="mb-4">
        <div className={styles.title}>직원</div>
        <div><input type="test" placeholder="이름검색" onChange={searchStaff}></input></div>
      </div>

      <div className={styles.staff_List}>
        <div className={`d-flex ${styles.staff_item}`} onDoubleClick={()=>roomClickTrue(staff_id)}>
          <div className={styles.staff_img_contain}>
            <img src={`http://localhost:8080/dashboard/staff/downloadAttach/${loginStaff.staff_id}`} className={styles.staff_img} ></img>
          </div>
          <div className={styles.staff_content_contain}>
            <div className={styles.staff_name}>{loginStaff.staff_name}</div>
            <div className={styles.staff_authority}>{loginStaff.staff_authority}</div>
          </div>
        </div>
        <hr></hr>
        <div className={styles.staff_nunm}>
          <div className="mr-2">직원</div> 
          <div>{staffList.length}</div>
        </div>
        {
          staffList.map((staff,index) => {
              return(
                <div key={index} className={`d-flex ${styles.staff_item}`} onDoubleClick={()=>roomClickTrue(staff.staff_id)}>
                  <div className={styles.staff_img_contain}>
                    <img src={`http://localhost:8080/dashboard/staff/downloadAttach/${staff.staff_id}`} className={styles.staff_img} ></img>
                  </div>
                  <div className={styles.staff_content_contain}>
                    <div className={styles.staff_name}>{staff.staff_name}</div>
                    <div className={styles.staff_authority}>{staff.staff_authority}</div>
                  </div>
                </div>
              );            
          })
        }
      </div>
    </div>
    
  );
}
export default Staff;