import style from "./PrescriptionAddModal.module.css";
import { Modal } from "react-bootstrap";
import data from "../../../../data/medicine";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DetailAddModal from "./DetailAddModal";

/**
 * 약을 검색하고 처방을 추가한다.
 * 
 * TODO : 검색된 약이름을 통해 약테이블에서 약데이터를 요청하는 API 작성
 * 요청데이터의 형태
 * {treatment_id: {num}, medicine_code: "", medicine_name: "", medicine_kind : "", medicine_type:	"",prescription_comment: {num}},
 */

function PrescriptionAddModal(props){

  const {isOpen, close} = props;

  const [searchItem, setSearchItem] = useState();
  const [prescriptions, setPrescriptions] = useState([]);
  const [medicine, setMedicine] = useState();

  const [addModalOpen, setAddModalOpen] = useState(false);

  const openAddModal = (item) => {
    setAddModalOpen(true);
  };

  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  }

  const handleSearch = () => {
    const medicineData = data;
    const newMedicines = medicineData.filter( item => item.medicine_name.includes(searchItem));
    setPrescriptions(newMedicines);
  }

  /**
   * 약 처방은 다음의 과정을 따른다.
   * 
   * 첫번째 모달에서 약 선택 후
   * 두번째 모달에서 복용날짜/ 1회 투약횟수를 지정하여 처방한다.
   * 
   * 이 컴포넌트에서는 약을 선택하는 모달로
   * 현재 선택된 약 정보를 상태로 저장하여, 부모컴포넌트의 상태변경함수와 함께 자식컴포넌트에게 전달한다.
   * 
   * 즉 할아버지 컴포넌트의 처방(배열)상태를 변경하는 함수가
   * 손자컴포넌트에게 전달된다.
   */
  
  const addPrescriptions = (item) => {
    setMedicine({medicine_code: item.medicine_code, 
                 medicine_name: item.medicine_name, 
                 medicine_kind: item.medicine_kind, 
                 medicine_type: item.medicine_type
                });

    if(item.medicine_kind==="주사약"){
      props.addPrescriptions(medicine);
    } else {
      openAddModal();
    }
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
                  <span className={style.titleContent}>약처방</span>
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
                      <th scope="col" className="col-1">약코드</th>
                      <th scope="col" className="col-3">약명</th>
                      <th scope="col" className="col-1">구분</th>
                      <th scope="col" className="col-1">타입</th>
                      <th scope="col" className="col-1"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      prescriptions.map((item, index)=>{
                        return(
                          <tr key={index}>
                            <td>{item.medicine_code}</td>
                            <td>{item.medicine_name}</td>
                            <td>{item.medicine_kind}</td>
                            <td>{item.medicine_type}</td>
                            <td>
                              <FontAwesomeIcon icon={faPlus} className={style.plus} onClick={() => {addPrescriptions(item)}}/>
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
    <DetailAddModal isOpen={addModalOpen} close={closeAddModal} addPrescriptions={props.addPrescriptions} medicine={medicine}/>
    </>
  );
}

export default PrescriptionAddModal;