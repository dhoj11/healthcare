import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRoomId, getStaffListByName } from "../../../apis/chat";
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
  const [searchedName, setSearchedName] = useState("");

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
  const searchName = async(event) => {
    try{
      const response = await getStaffListByName(searchedName,staff_id);
      setStaffList(response.data);
    } catch(error){
      throw error;
    }
  }
  const changeName = (e) => {
    setSearchedName(e.target.value);
  } 
  const roomClickTrue = async(clickStaff_id) =>{
    try{
      let staffArr = [];
      staffArr = [staff_id,clickStaff_id];
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
        <div className="d-flex">
          <div><input type="test" placeholder="이름검색" onChange={changeName} className={styles.searchStaff}></input></div>
          <button className="btn btn-secondary btn-sm" onClick={searchName}>검색</button>
        </div>
        
      </div>

      <div className={styles.staff_List}>
        <div className={`d-flex`}>
          <div className={styles.staff_img_contain}>
            <img src={`${process.env.REACT_APP_URL}/dashboard/staff/downloadAttach/${loginStaff.staff_id}`} className={styles.staff_img} ></img>
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
                    <img src={`${process.env.REACT_APP_URL}/dashboard/staff/downloadAttach/${staff.staff_id}`} className={styles.staff_img} ></img>
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