import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getRoomId } from "../../../../apis/chat";
import { getStaffList } from "../../../../apis/dashboard";
import styles from "./index.module.css";
function ComName(props) {
  const staff_id = useSelector(state => state.authReducer.staff_id);
  const [staffList,setStaffList] = useState([]); //직원리스트
  const [selectStaffList,setSelectStaffList] = useState([staff_id]);
  const {setRoomClick,setClickRoomId, CreateChatModalClose} = props;

  const axiosStaffList = async() => {
    const response = await getStaffList();
    let temp = response.data;
    temp = temp.filter((data) => data.staff_id !==staff_id);
    setStaffList(temp);
  }
  useEffect(() => {
    axiosStaffList();
  },[]);

  const selectStaff = (event) => {
    console.log(event.target.value);
    if(event.target.checked){
      setSelectStaffList(prevSelectStaffList => (prevSelectStaffList.concat(event.target.value)));
    }else{
      setSelectStaffList(prevSelectStaffList => (prevSelectStaffList.filter(staffId => staffId!==event.target.value)));
    }
  }
  const roomClickTrue = async() => {
    if(selectStaffList.length !==1){
      try{
        const response = await getRoomId(selectStaffList);
        setClickRoomId(response.data);
        setRoomClick(true);
      } catch(error){
        throw error;
      }
    } else{
      alert("대화 상대를 선택해주세요.");
    }
    
  }
  console.log(selectStaffList);
  return(
    <>
    <Modal.Header closeButton>
            <div className={styles.title}>대화 상대 선택</div>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          {
            staffList.map((staff) => {
              return(
                <div className={`d-flex justify-content-between ${styles.staff_item}`}>
                  <div className="d-flex">
                    <div className={styles.staff_img_contain}>
                      <img src={`${process.env.REACT_APP_URL}/dashboard/staff/downloadAttach/${staff.staff_id}`} className={styles.staff_img} ></img>
                    </div>
                    <div className={styles.staff_content_contain}>
                      <div className={styles.staff_name}>{staff.staff_name}</div>
                      <div className={styles.staff_authority}>{staff.staff_authority}</div>
                    </div>
                  </div>
                  
                  <div className={styles.chkBox}>
                    <input type="checkbox" name="staffChk" value={staff.staff_id} onChange={selectStaff}/>
                  </div>
                </div>
              );
            })
          }
        </Modal.Body>
        <Modal.Footer>
         <button onClick={roomClickTrue} className={styles.confirm}>확인</button>
         <button className={styles.cancel} onClick={CreateChatModalClose}>취소</button>
    </Modal.Footer>
    </>
  );
}
export default ComName;