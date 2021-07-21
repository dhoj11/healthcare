import React from "react";
import style from "./DiagnoseAddModal.module.css";
import { Modal } from "react-bootstrap";
import { useCallback, useState } from "react";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSearchDiseases } from "../../../../../../apis/treatment";

/**
 * 질병을 검색하고 진단을 추가한다.
 */

function DiagnoseAddModal(props){

  const {isOpen, close} = props;

  const [searchItem, setSearchItem] = useState();
  const [diseases, setDiseases] = useState([]);

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  }

  const handleSearch = useCallback( async() => {
    try{
      const response = await getSearchDiseases(searchItem);
      setDiseases(response.data);
    } catch(error){
      console.log(error)
    }
  },[searchItem])

  /**
   * 진단을 추가한다.
   * 
   * 선택된 질병은 부모컴포넌트의 함수를 통해, 부모컴포넌트의 진단(배열)상태를 업데이트 한다. 
   */
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
                {/* <span className={style.title}>
                  <span className={style.titleContent}>질병진단</span>
                </span> */}
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

                  { diseases && diseases.length > 0  ?
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
                      :
                      <>
                        <tr className={style.nosearch}>
                          <td className={style.no}></td>
                          <td className={style.no}></td>
                          <td className={style.no}></td>
                        </tr>
                        <tr className={style.nosearch}>
                          <td className={style.no}></td>
                          <td className={style.no}>질병을 검색해주세요.</td>
                          <td className={style.no}></td>
                        </tr>
                      </>
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

export default React.memo(DiagnoseAddModal);