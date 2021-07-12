import React from "react";

import style from "./StaffTable.module.css";

/**
 * 부모로부터 전달받은 상태변경함수를 통해 부모컴포넌트의 staffId 상태를 변경시킨다.
 */

function StaffTable(props){

  const staffs = props.staffs;

  const handleChangeStaff = (id) => {
    props.handleChangeStaffId(id);
  }

  return(
    <div className={style.staffTable}>
      <div className={style.list}>
        {
        staffs.map((item, index) => {
            return(
                <div key={index} className={style.staffItem} onClick={ () => { handleChangeStaff(item.staff_id)} }>
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
    </div>
  );
}
export default React.memo(StaffTable);