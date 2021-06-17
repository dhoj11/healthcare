import { useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import {getPatientList} from "../data";
import "./SearchPatient.css";
import NewPatientModal from "./NewPatientModal";

function SearchPatient(props) {

  const [patientName, setPatientName] = useState("");
  const [patientList, setPatientList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const staticPatientList = getPatientList();   //나중에 db에서 가져올 정보

  const changePatientName = (event) => {
    setPatientName(event.target.value);
  };

  const search = () => {
    const searchPatientList = staticPatientList.filter(patient => patient.name === patientName);
   setPatientList(searchPatientList);
  }

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const rowRenderer = ({index, key ,style}) => {
    return (
      <div key={key} style={style} className="border-bottom d-flex search-patient-row">
        <span className="patient-item">
        {patientList[index].name}
      </span>
      <span className="patient-item-gender">
      {patientList[index].gender}
      </span>
      <span className="patient-item">
      {patientList[index].birth}
      </span>
      <span className="patient-item-tel">
      {patientList[index].tel}
      </span>
      <span className="patient-item">
      {patientList[index].recentVisit}
      </span>
      </div>
    );
  };

  return (
    <div className="search-patient">
      <div className="search-first-content row">
        <div className="search-second-content d-flex align-items-center">
          <div className="col-3"><img className="mr-3" src="/resources/svg/people.svg"></img><span>환자검색</span></div>
          <div className="input-group col-7 d-flex">
            <input type="text" className="form-control" placeholder="name" value={patientName} onChange={changePatientName} />
            <div>
              <button type="button" className="btn btn-secondary" onClick={search}>search</button>
            </div>
          </div>
          <div className="search-button col-2 d-flex justify-content-center">
            <button className="btn btn-outline-secondary" onClick={openModal}>new</button>
            <NewPatientModal isOpen={modalOpen} close={closeModal}/>
          </div>
        </div>
      </div>
      <div className="patient-list mt-3">
        <div className="d-flex bg-light">
          <span className="border search-border">
            환자이름
          </span>
          <span className="border search-border-gender">
            성별
          </span>
          <span className="border search-border">
            생년월일
          </span>
          <span className="border search-border-tel">
            전화번호
          </span>
          <span className="border search-border">
            최근내원일
          </span>
        </div>
        <AutoSizer disableHeight>
          {({width, height}) => {
            return (
              <List width={width} height={150} 
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