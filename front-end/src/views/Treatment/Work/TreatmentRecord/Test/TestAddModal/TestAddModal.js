import style from "./TestAddModal.module.css";
import { Modal } from "react-bootstrap";
import data from "../../../../data/test";
import { useState } from "react";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * 검사를 검색하고 검사를 추가한다.
 * 
 * TODO : 검색된 검사이름을 통해 testList테이블에서 검사데이터를 요청하는 API 작성
 * 요청데이터의형태
 * {test_code: "", test_name:	""},
 */

function TestAddModal(props){

  const {isOpen, close} = props;

  const [searchItem, setSearchItem] = useState();
  const [tests, setTests] = useState([]);

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  }

  const handleSearch = () => {
    const testData = data;
    const newTests = testData.filter( item => item.test_name.includes(searchItem));
    setTests(newTests);
  }

  const addTests = (item) => {
    let test = item;
    props.addTests(test);
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
                  <span className={style.titleContent}>검사의뢰</span>
                </span>
                <input type="text" className={`form-control-lg form-rounded ${style.input}`}
                       onChange={handleChange} />
                <span className={style.searchButton} onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} className={style.searchIcon}/>검색</span>
              </div>
              <div className={style.searchResult}>
                <table className={`table table table-hover ${style.searchResultTable}`}>
                  <thead className={style.thead}>
                    <tr>
                      <th scope="col" className="col-1">검사코드</th>
                      <th scope="col" className="col-3">검사명</th>
                      <th scope="col" className="col-1"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tests.map((item, index)=>{
                        return(
                          <tr key={index}>
                            <td>{item.test_code}</td>
                            <td>{item.test_name}</td>
                            <td>
                              <FontAwesomeIcon icon={faPlus} className={style.plus} onClick={()=>{addTests(item)}}/>
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

export default TestAddModal;