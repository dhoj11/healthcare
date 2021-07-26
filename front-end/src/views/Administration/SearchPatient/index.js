import { useState, useEffect } from "react";
import { AutoSizer, List } from "react-virtualized";
import styles from "./SearchPatient.module.css";
import NewPatientModal from "./NewPatientModal";
import {addNewPatient, getPatientList, searchPatient} from "../../../apis/administration";

function SearchPatient(props) {
  const [patientName, setPatientName] = useState("");   //input 창에 환자 이름을 입력할 때 사용되는 상태
  const [patientList, setPatientList] = useState([]);    //모든 환자의 리스트를 초기 상태로 선언, 화면에 보여줄 환자리스트
  const [modalOpen, setModalOpen] = useState(false);    //신규회원등록 모달의 열림 상태를 초기엔 false로 선언
  
  useEffect(() => {
    //비동기 통신
    const work = async () => {
      try {
        const response = await getPatientList();
        setPatientList(response.data);
      } catch (error) {
        console.log(error.message);
        //history.push("./error"); 에러 컴포넌트로 이동
      }
    };
    work();
  },[]);

  const changePatientName = (event) => { 
    setPatientName(event.target.value);
  };
  
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const search = async() => {    //모든 환자리스트에 필터를 적용하여 patientName에 해당하는 환자리스트를 가지고 와서 patientList에 세팅을 해줌
    try{
      if(patientName === "") {
        const response = await getPatientList();
        setPatientList(response.data);
      } else {
        const response = await searchPatient(patientName);
        setPatientList(response.data);
      }
    }
    catch(error) {
      console.log(error.message);
    }
  }

  const selectPatient = (patientId) => {
    props.selectedPatient(patientId);
  }

  const addNewPaitent = async(newPatient) => {
    try{
      await addNewPatient(newPatient);
      const response = await getPatientList();
      setPatientList(response.data);
    }catch(error) {
      console.log(error.message);
    }
  }

  const rowRenderer = ({index, key ,style}) => {
    return (
      <div key={key} style={style} className={`${styles.search_patient_row} border-bottom d-flex`} onClick={() => selectPatient(patientList[index].patient_id)}>
        <span className={styles.patient_item}>
        {patientList[index].patient_name}
      </span>
      <span className={styles.patient_item_gender}>
      {patientList[index].patient_gender}
      </span>
      <span className={styles.patient_item_birth}>
      {patientList[index].patient_birth}
      </span>
      <span className={styles.patient_item_tel}>
      {patientList[index].patient_tel}
      </span>
      <span className={styles.patient_item_visit}>
      {patientList[index].patient_recent_visit}
      </span>
      </div>
    );
  };

  return (
    <div className={styles.search_patient}>
      <div className={`${styles.search_first_content} row`}>
        <div className={styles.search_second_content}>
          <div className="col-3"><img className="mr-3" src="/resources/svg/people.svg"></img><span className={styles.title}>환자검색</span></div>
          <div className="input-group col-7 d-flex">
            <input type="text" className="form-control" placeholder="name" onChange={changePatientName} />
            <div>
              <button type="button" className="btn btn-secondary" onClick={search}>검색</button>
            </div>
          </div>
          <div className="search-button col-2 d-flex justify-content-center">
            <button className="btn btn-outline-secondary ml-5" onClick={openModal}>new</button>
            <NewPatientModal isOpen={modalOpen} close={closeModal} addNewPaitent={addNewPaitent} />
          </div>
        </div>
      </div>
      <div className="patient-list mt-3">
        <div className="d-flex bg-light">
          <span className={`border ${styles.search_border}`}>
            환자이름
          </span>
          <span className={`border ${styles.search_border_gender}`}>
            성별
          </span>
          <span className={`border ${styles.search_border_birth}`}>
            생년월일
          </span>
          <span className={`border ${styles.search_border_tel}`}>
            전화번호
          </span>
          <span className={`border ${styles.search_border_visit}`}>
            최근내원일
          </span>
        </div>
        <AutoSizer disableHeight>
          {({width, height}) => {
            return (
              <List width={width} height={120} 
                    list={patientList} 
                    rowCount={patientList.length}
                    rowHeight={40}
                    rowRenderer={rowRenderer}
                    overscanRowCount={5}/> //* overscanRowCount: 미리 5개의 여유분을 만들어 놔서 스크롤 시 로딩을 줄여줌*/}
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
}

export default SearchPatient;