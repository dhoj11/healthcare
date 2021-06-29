import { useState } from "react";
import Barcode from "./Barcode";
import style from "./State.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode, faVial, faCheckCircle } from "@fortawesome/free-solid-svg-icons";


function State(props){

  const [barcodeModalOpen, setBarcodeModalOpen] = useState(false);

  const closeBarcodeModal = () => {
    setBarcodeModalOpen(false);
  }
  const printBarcode = () => {
    if(props.testList){
      setBarcodeModalOpen(true);
    }
  }

  /**
   * 선택한 검사의 검사진행상태를 변경한다.
   * 
   * param {변경하려는 상태} state
   * 
   * TODO : api 요청시 props.testList 검사번호의 상태를 함수의 파라미터로 전달받은 state 로 바꿔준다. 
   *        props.testList - undefined 일시 api 요청하지 않는다.
   */

  const handleChangeSate = (state) => {
    props.changeState(props.testList, state);
  }

  return(
    <div className={style.state}>
     <div>
        <span className={style.barcode} onClick={printBarcode}>
        <FontAwesomeIcon icon={faBarcode} className={style.Icon}/>바코드 출력</span>
      </div>
      <div>
        <span className={style.ing} onClick={()=>{handleChangeSate("진행중")}}>
        <FontAwesomeIcon icon={faVial} className={style.Icon}/>검사진행</span>
        <span className={style.complete} onClick={()=>{handleChangeSate("완료")}}>
        <FontAwesomeIcon icon={faCheckCircle} className={style.Icon}/>검사완료</span>
        <Barcode isOpen={barcodeModalOpen} close={closeBarcodeModal} testList={props.testList}/>
      </div>
    </div>
  );
}

export default State;