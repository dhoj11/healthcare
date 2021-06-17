import { AutoSizer, List } from "react-virtualized";
import { getPatientList } from "../data";
import "./PatientSearch.css";
function PatientSearch(props) {
  const patientList = getPatientList();

  const rowRenderer = ({index, key,style}) => {
    console.log(key,index);
    return (
      <div key={key} style={style} className="tbody">
          <span>
          {patientList[index].patient_name}
          </span>
          <span>
          {patientList[index].patient_gender}
          </span>
          <span>
          {patientList[index].patient_birth}
          </span>
          <span>
          {patientList[index].patient_tel}
          </span>
          <span>
          {patientList[index].date}
          </span>        
      </div>
    );
  };

  return(
    <>
    <div className="modal_body">
              <div className="search"><input type="text" class="search__input" placeholder="Search" onChange/></div>
              <div className="patient_table">
                <div className="thead"><span>이름</span><span>성별</span><span>생년월일</span><span>전화번호</span><span>최근내원일</span></div>
                <AutoSizer disableHeight>
                  {({width, height}) => {
                    return (
                      <List width={width} height={250} 
                            list={patientList} 
                            rowCount={patientList.length}
                            rowHeight={50}
                            rowRenderer={rowRenderer}
                            overscanRowCount={4}/> 
                    );
                  }}
                </AutoSizer>
              </div>
            </div>
            <div className="modal_footer">
              <button className="btn cancel_btn" onClick={props.handleClose}>취소</button>
              <button className="btn appoint_btn" onClick={props.handleClose}>예약</button>
            </div>
    </>
  );
}
export default PatientSearch;