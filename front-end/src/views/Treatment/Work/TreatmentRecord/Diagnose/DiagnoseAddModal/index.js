import style from "./DiagnoseAddModal.module.css";
import { Modal } from "react-bootstrap";
import data from "../../../../data/disease";
import { useState } from "react";

import { faPlus, faSearch, faCommentMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DiagnoseAddModal(props){

  const {isOpen, close} = props;

  const handleClose = () => {
    close();
  }

  const [searchItem, setSearchItem] = useState();
  const [diseases, setDiseases] = useState([]);

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  }

  const handleSearch = () => {
    const diseaseData = data;
    const newDiseases = diseaseData.filter( item => item.disease_name.includes(searchItem))
    setDiseases(newDiseases);
  }

  const addDiagnoses = (item) => {
    let diagnose = item;
    props.addDiagnoses(diagnose);
  }

  
  return(
    <>
    {isOpen? (
      <Modal
        show={isOpen}
        onHide={close}
        centered="true"
        keyboard={false}
        size="lg"
      >
        <Modal.Body className={style.body}>
          <div className={style.searchBody}>
            <div className={style.top}>
              <div className={style.search}>
                <span className={style.title}>
                  {/* <span><FontAwesomeIcon icon={faCommentMedical} className={style.titleIcon}/></span> */}
                  <span className={style.titleContent}>질병진단</span>
                </span>
                <input type="text" className={`form-control-lg form-rounded ${style.input}`}
                       value={searchItem || ''} 
                       onChange={handleChange} />
                <span className={style.searchButton} onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} className={style.searchIcon}/>검색</span>
              </div>
              <div className={style.searchResult}>
                <table className={`table table table-hover ${style.searchResultTable}`}>
                  <thead className={style.thead}>
                    <tr>
                      <th scope="col" className="col-1">코드</th>
                      <th scope="col" className="col-3">질병명</th>
                      <th scope="col" className="col-1"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      diseases.map((item, index)=>{
                        return(
                          <tr key={index}>
                            <td>{item.disease_code}</td>
                            <td>{item.disease_name}</td>
                            <td>
                              <FontAwesomeIcon icon={faPlus} className={style.plus} onClick={()=>{addDiagnoses(item)}}/>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              </div>
              <div className={style.bottom}>
              </div>
            </div>
        </Modal.Body>
      </Modal>
    ):null}
    </>
  );
}

export default DiagnoseAddModal;