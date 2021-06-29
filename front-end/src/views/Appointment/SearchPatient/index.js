import { useCallback, useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import { getPatientList } from "../TimeTable/data/data";
import styles from "./index.module.css";

function SearchPatient(props) {
  const [patientList, setPatientList]= useState(getPatientList);
  const [select, setSelect] = useState("");

  const rowRenderer = ({index, key,style}) => {
    return (
      
      <div key={key}
           style={style}
           className={
            select === patientList[index].patient_id? `${styles.tbodyClicked} ${styles.tbody}` : `${styles.tbodyDefault} ${styles.tbody}`
                      }
           onClick ={(e) =>selectPatient(e,patientList[index].patient_id)}
          >
          <span>
            {patientList[index].patient_name}
            </span>
            <span>
            {patientList[index].patient_birth}
            </span>
            <span>
            {patientList[index].patient_tel}
            </span>
      </div>
    );
  };
  const searchName = (e) => {
    const result= getPatientList().filter(data => data.patient_name.includes(e.target.value));
    setPatientList(result);
    if(e.target.value===""){
      setPatientList(getPatientList());
    }
  }
  const selectPatient =useCallback((e,id) => {
    setSelect(id);
    props.selectedPatientId(id);
  },[select])
  
    return(
    <div className={styles.Patient_contain}>
      <div className={styles.patientSearch}>
        <i class="fas fa-user-friends"></i>
        <span>환자 검색</span><input type="text"  placeholder="Name" onChange={searchName}/>
      </div>
        <div className={styles.patient_table}>
          <div className={styles.thead}>
            <span>이름</span><span>생년월일</span><span>전화번호</span>
          </div>
            <AutoSizer disableHeight>
              {({width, height}) => {
                return (
                  <List width={width} height={90} 
                        list={patientList} 
                        rowCount={patientList.length}
                        rowHeight={30}
                        rowRenderer={rowRenderer}
                        overscanRowCount={4}/> 
                );
              }}
            </AutoSizer>
        </div>
    </div>
  );
}
export default SearchPatient;