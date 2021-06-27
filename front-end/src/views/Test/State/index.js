import style from "./State.module.css"

function State(props){


  const printBarcode = () => {
    console.log(props.testList);
    alert(props.testList + "바코드 출력완료");
  }


  /**
   * 선택한 검사의 검사진행상태를 변경한다.
   * 
   * param {변경하려는 상태} stat
   * 
   * TODO : api 요청시 props.testList 검사번호의 상태를 함수의 파라미터로 전달받은 state 로 바꿔준다. 
   */

  const handleChangeSate = (state) => {
    // 
  }


  return(
    <div calssName={style.state}>
      <span className={style.item} onClick={printBarcode}>바코드 출력</span>
      <span className={style.item} onClick={()=>{handleChangeSate("진행중")}}>검사진행</span>
      <span className={style.item} onClick={()=>{handleChangeSate("완료")}}>검사완료</span>
    </div>
  );
}

export default State;