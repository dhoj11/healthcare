import { useEffect, useState } from "react";
import Barcode from "./Barcode";
import style from "./State.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode, faVial, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { changeTestListState } from "../../../apis/test";


function State(props){

  const [barcodeModalOpen, setBarcodeModalOpen] = useState(false);
  const [testList, setTestList] = useState();

  const closeBarcodeModal = () => {
    setBarcodeModalOpen(false);
  }
  const printBarcode = () => {
    if(props.testList){
      setBarcodeModalOpen(true);
    }
  }

  useEffect(()=>{
    setTestList(props.testList);
  },[props.testList])

  /**
   * 선택한 검사의 검사진행상태를 변경한다.
   */
  const handleChangeSate = async (state) => {
    if(testList){
      try{
        await changeTestListState(testList, state)
        props.changeState(testList, state);
      }catch(error){
        console.log(error);
      }
    }
  }

  return(
    <div className={style.state}>
     <div>
        <span className={style.barcode} onClick={printBarcode}>
        <FontAwesomeIcon icon={faBarcode} className={style.Icon}/>바코드 출력</span>
      </div>
      <div>
        <span className={style.ing} onClick={()=>{handleChangeSate("진행")}}>
        <FontAwesomeIcon icon={faVial} className={style.Icon}/>검사진행</span>
        <span className={style.complete} onClick={()=>{handleChangeSate("완료")}}>
        <FontAwesomeIcon icon={faCheckCircle} className={style.Icon}/>검사완료</span>
        <Barcode isOpen={barcodeModalOpen} close={closeBarcodeModal} testList={props.testList}/>
      </div>
    </div>
  );
}

export default State;