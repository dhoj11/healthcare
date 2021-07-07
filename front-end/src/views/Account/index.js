import style from "./Account.module.css";
import StaffAdd from "./StaffAdd";
import StaffCard from "./StaffCard";
import StaffTable from "./StaffTable";
import { useEffect, useState } from "react";

import { getStaff, getStaffList } from "../../apis/account";

/**
 * 
 * 오른쪽 테이블에서 직원을 선택하여 왼쪽 직원카드에 정보를 표시한다.
 * 직원 테이블 컴포넌트에는 직원ID 상태를 변경하는 함수를 프롭으로 전달한다.
 * 직원ID를 통해 직원상태변수를 업데이트하여 직원카드 컴포넌트에게 프롭으로 전달한다.
 * 직원수정의 경우에도 직원 상태변수를 StaffAdd 컴포넌트에게 프롭으로 전달한다.  
 * 
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

  const handleAddStaff = (staffObject) => {
    const newStaffs = staffs.concat({staff_id: staffObject.staff_id, 
                                     staff_authority: staffObject.staff_authority, 
                                     staff_name: staffObject.staff_name, 
                                     staff_tel: staffObject.staff_tel, 
                                    });
    setStaffs(newStaffs);                                
  } 

  /**
   * 직원ID를 통해 직원상태변수를 초기화한다.
   * 
   * TODO : 직원ID로 직원정보를 요청하는 axois 요청 api 작성 (+) 2021.07.04 작성완료
   * 반환형태는  {staff_id: "", staff_authority: "", staff_name: "", staff_tel: "", staff_join:"",staff_attachoname:""},
   * 
   * 첨부가 없다면, 되도록 "" 형태로 받자 (-) : !!! 그럴 필요 없다. 왜 이 주석 남겼을까 다시 생각해보기  2021.07.04
   * staff_authority : "의사" || "간호" || "임상" !!! 한글로 할지 ROLE_DOCTOR로 할지 의논하기  2021.07.04
   */

  const setStaffItem = async() => {
    try{
      const response = await getStaff(staffId);
      setStaff(response.data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    setStaffItem();
  },[staffId]);

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