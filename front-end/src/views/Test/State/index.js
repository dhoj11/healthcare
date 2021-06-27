import { useState } from "react";
import Barcode from "./Barcode";
import style from "./State.module.css"

function State(props){

  const [barcodeModalOpen, setBarcodeModalOpen] = useState(false);

  const openBarcodeModal = () => {
    setBarcodeModalOpen(true);
  };

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
   * param {변경하려는 상태} stat
   * 
   * TODO : api 요청시 props.testList 검사번호의 상태를 함수의 파라미터로 전달받은 state 로 바꿔준다. 
   */

  const handleChangeSate = (state) => {
    props.changeState(props.testList, state);
  }

  return(
    <div className={style.state}>
      <span className={style.item} onClick={printBarcode}>바코드 출력</span>
      <span className={style.item} onClick={()=>{handleChangeSate("진행중")}}>검사진행</span>
      <span className={style.item} onClick={()=>{handleChangeSate("완료")}}>검사완료</span>
      <Barcode isOpen={barcodeModalOpen} close={closeBarcodeModal} testList={props.testList}/>
    </div>
  );
}

export default State;