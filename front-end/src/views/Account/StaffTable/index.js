import staffData from "../data/staffs";
import style from "./StaffTable.module.css";

/**
 * 테이블에서 선택된 직원을 알기 위함
 * 부모로부터 전달받은 상태변경함수를 통해 부모컴포넌트의 staffId 상태를 변경시킨다.
 * 
 * TODO : 직원목록 요청 api 작성 
 *        staffs 에는 DB에서 staffs, enalble 1인 직원 가져오기
 *        응답받는 데이터의 형태는 
 *        {staff_id: "", staff_authority: "의사", staff_name: "박선명", staff_tel: "010-1234-2345", staff_join:"2019-08-13"}
 *        staff_authority : "의사" || "간호" || "임상      
 */

function StaffTable(props){

  const staffs = staffData;

  const handleChangeStaff = (id) => {
    props.handleChangeStaffId(id);
  }

  return(
    <div className={style.staffTable}>
    {
    staffs.map((item, index) => {
        return(
            <div className={style.staffItem} onClick={ () => { handleChangeStaff(item.staff_id)} }>
              <span className={style.no}>{index+1}</span>
              <span className={ item.staff_authority === "의사" ? `${style.doctor}` : 
               item.staff_authority === "간호" ? `${style.nurse}` :
               item.staff_authority === "임상" ? `${style.tester}`:null               
              }>{item.staff_authority}</span>
              <span className={style.name}>{item.staff_name}</span>
            </div>
        )
      })
    }
    </div>
  );
}
export default StaffTable;