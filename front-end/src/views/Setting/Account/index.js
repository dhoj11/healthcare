import style from "./Account.module.css";
import StaffAdd from "./StaffAdd";
import StaffCard from "./StaffCard";
import StaffTable from "./StaffTable";
import { useCallback, useEffect, useState } from "react";

import { getStaff, getStaffList } from "../../../apis/account";

/**
 * 직원관리
 * 
 * 직원을 추가하거나 직원리스트에서 직원정보를 확인, 수정한다.
*/

function Account(props){

  const [staffId, setStaffId] = useState();
  const [staff, setStaff] = useState();
  const [staffs, setStaffs] = useState([]);

  const getStaffs = async() => {
    try{
      const response = await getStaffList();
      setStaffs(response.data);
    } catch (error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getStaffs();
  },[])

  const handleChangeStaffId = (id) => {
    setStaffId(id);
  }

  /** 
  * 직원 추가시 리스트에 추가하기 위함
  * 아래 상태변경 함수를 직원 추가 컴포넌트의 props으로 전달하여 직원 추가시 부모컴포넌트의 직원리스트 상태가 업데이트 
  */
  const handleAddStaff = (staffObject) => {
    const newStaffs = staffs.concat({staff_id: staffObject.staff_id, 
                                     staff_authority: staffObject.staff_authority, 
                                     staff_name: staffObject.staff_name, 
                                     staff_tel: staffObject.staff_tel, 
                                    });
    setStaffs(newStaffs);                                
  } 

  /**
   * 직원ID를 통해 직원정보상태를 초기화한다.
   */
  const setStaffItem = useCallback(async() => {
    try{
      const response = await getStaff(staffId);
      setStaff(response.data);
    }
    catch(error){
      console.log(error);
    }
  },[staffId])

  useEffect(()=>{
    setStaffItem();
  },[setStaffItem]);

  return(
    <div className={style.account}>
      <div className={style.top}>
        <StaffAdd staff={staff} handleAddStaff={handleAddStaff}/>
      </div>
      <div className={style.body}>
        <StaffCard staff={staff}/>
        <StaffTable handleChangeStaffId={handleChangeStaffId} staffs={staffs}/>
      </div>
    </div>
  );
}

export default Account;