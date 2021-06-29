import { useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import {getPatientList} from "../data";
import styles from "./SearchPatient.module.css";
import NewPatientModal from "./NewPatientModal";

function SearchPatient(props) {
  const staticPatientList = getPatientList();   //모든 환자리스트를 가져옴
  const [patientName, setPatientName] = useState("");   //input 창에 환자 이름을 입력할 때 사용되는 상태
  const [patientList, setPatientList] = useState(staticPatientList);    //모든 환자의 리스트를 초기 상태로 선언, 화면에 보여줄 환자리스트
  const [modalOpen, setModalOpen] = useState(false);    //신규회원등록 모달의 열림 상태를 초기엔 false로 선언
  const [newPatientList, setNewPatientList] = useState(staticPatientList);  //신규 등록한 회원(모든 회원)이 담긴 리스트
  const changePatientName = (event) => {  //event.target.name(input창에 입력한 내용)으로 patientName 상태를 세팅을 해줌
    setPatientName(event.target.value);
  };

  const search = () => {    //모든 환자리스트에 필터를 적용하여 patientName에 해당하는 환자리스트를 가지고 와서 patientList에 세팅을 해줌
    if(patientName === "") {
      setPatientList(newPatientList);
    } else {
      const searchPatientList = newPatientList.filter(patient => patient.patient_name === patientName);
      setPatientList(searchPatientList);
    }
  }

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const selectPatient = (patientId) => {
    const filteredPatient = patientList.filter(patient => patient.patient_id === patientId);
    props.selectedPatient(filteredPatient[0]);
  }

  const newPaitentList = (patient) => {
    //const newPatientList = staticPatientList.push(patient);
    const newList = newPatientList.concat(patient);
    setNewPatientList(newList);
    setPatientList(newList);
    console.log(patientList);
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
      <span className={styles.patient_item}>
      {patientList[index].patient_birth}
      </span>
      <span className={styles.patient_item_tel}>
      {patientList[index].patient_tel}
      </span>
      <span className={styles.patient_item}>
      {patientList[index].recentVisit}
      </span>
      </div>
    );
  };

  return (
    <div className={styles.search_patient}>
      <div className={`${styles.search_first_content} row`}>
        <div className={styles.search_second_content}>
          <div className="col-3"><img className="mr-3" src="/resources/svg/people.svg"></img><span>환자검색</span></div>
          <div className="input-group col-7 d-flex">
            <input type="text" className="form-control" placeholder="name" onChange={changePatientName} />
            <div>
              <button type="button" className="btn btn-secondary" onClick={search}>search</button>
            </div>
          </div>
          <div className="search-button col-2 d-flex justify-content-center">
            <button className="btn btn-outline-secondary" onClick={openModal}>new</button>
            <NewPatientModal isOpen={modalOpen} close={closeModal} newPaitentList={newPaitentList} />
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
          <span className={`border ${styles.search_border}`}>
            생년월일
          </span>
          <span className={`border ${styles.search_border_tel}`}>
            전화번호
          </span>
          <span className={`border ${styles.search_border}`}>
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