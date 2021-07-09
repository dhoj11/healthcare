import { useCallback, useEffect, useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import { getPatientList, getPatientListByName } from "../../../apis/appointment";
import styles from "./index.module.css";

function SearchPatient(props) {
  const [patientList, setPatientList]= useState([]);
  const [searchedName, setSearchedName] = useState("");
  const [select, setSelect] = useState("");

  const axiosPatientList= useCallback(async () => {
    try{
      const response = await getPatientList();
      setPatientList(response.data);
    } catch(error){
      throw error;
    }
  },[])


  useEffect(() => { 
    axiosPatientList();
  },[]);
  
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
  const changeName = (e) => {
    setSearchedName(e.target.value);
  } 
  const searchName = (e) => {
    (async function() {
      try{
        const response = await getPatientListByName(searchedName);
        setPatientList(response.data);
        selectPatient();
      } catch(error){
        throw error;
      }
    })(); 
    
    }
  
  const selectPatient =useCallback((e,id) => {
    setSelect(id);
    props.selectedPatientId(id);
  },[select])
  
    return(
    <div className={styles.Patient_contain}>
      <div className={styles.patientSearch}>
        <i className="fas fa-user-friends"></i>
        <span>환자 검색</span><input type="text"  placeholder="Name" onChange={changeName}/>
        <button className="btn btn-secondary btn-sm" onClick={searchName}>검색</button>
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