import "./TestList.css";
import {getTestPatientList, getTestCodeList} from "../data";
import { AutoSizer, List } from "react-virtualized";
import { useState } from "react";

function TestList(props) {

  const staticTestPatientList = getTestPatientList();
  const staticTestCodeList = getTestCodeList();
  const [testCodeList, setTestCodeList] = useState([]);
  const [testPatientList, setTestPatientList] = useState(staticTestPatientList);

  const showTestList = (patientId) => {
    const testList = staticTestCodeList.filter(testCode => testCode.patientId === patientId);
    setTestCodeList(testList);
  }

  const patientRowRenderer = ({index, key, style}) => {
    return (
      <div key={key} style={style} onClick={()=> showTestList(testPatientList[index].patientId)} className="border-bottom d-flex patient-row">
        <span className="test-patient-item">
        {testPatientList[index].order}
      </span>
      <span className="test-patient-item">
        {testPatientList[index].time}
      </span>
      <span className="test-patient-item">
        {testPatientList[index].name}
      </span>
      <span className="test-patient-item">
        {testPatientList[index].doctor}
      </span>
      {
        { 
           대기 : <span style={{color: "green"}}className="appointment-item">{testPatientList[index].state}</span>,
           진행중 : <span style={{color: "red"}}className="appointment-item">{testPatientList[index].state}</span>,
           완료 : <span style={{color: "blue"}}className="appointment-item">{testPatientList[index].state}</span>
        }[testPatientList[index].state]
      }
      </div>
    );
  };

  const testCodeRowRenderer = ({index, key, style}) => {
    return (
      <div key={key} style={style} className="border-bottom d-flex code-row">
        <span className="test-code-item">
          <input className="mr-1" type="checkbox" value={testCodeList[index].code}/>
          {testCodeList[index].code}
        </span>
        <span className="test-code-item">
          {testCodeList[index].codeName}
        </span>
        <span className="test-code-item">
          {testCodeList[index].inspector}
        </span>
        {
          { 
            대기 : <span style={{color: "green"}}className="test-code-item">{testCodeList[index].state}</span>,
            진행중 : <span style={{color: "red"}}className="test-code-item">{testCodeList[index].state}</span>,
            완료 : <span style={{color: "blue"}}className="test-code-item">{testCodeList[index].state}</span>
          }[testCodeList[index].state]
        }
      </div>
    );
  };

  return (
    <div className="test-list">
      <div className="test-patient-list">
          <div className="mb-2 ml-2">
            <img className="mr-3" src="/resources/svg/clipboard-data.svg"></img><span className="mr-3">검사</span>
            <span style={{color : "#ffd43b"}}>전체 {testPatientList.length} | </span>
            <a href="#">완료 0 | </a>
            <a href="#">진행중 2 | </a>
            <a href="#">대기 4 | </a>
          </div>
          <div className="d-flex bg-light">
          <span className="border test-border">
            순서
          </span>
          <span className="border test-border">
            접수시간
          </span>
          <span className="border test-border">
            이름
          </span>
          <span className="border test-border">
            담당의
          </span>
          <span className="border test-border">
            상태
          </span>
        </div>
        <AutoSizer disableHeight>
          {({width, height}) => {
            return (
              <List width={width} height={300} 
                    list={testPatientList} 
                    rowCount={testPatientList.length}
                    rowHeight={40}
                    rowRenderer={patientRowRenderer}
                    overscanRowCount={5}/> //* overscanRowCount: 미리 5개의 여유분을 만들어 놔서 스크롤 시 로딩을 줄여줌*/}
            );
          }}
        </AutoSizer>
      </div>
      <div className="test-code-list">
        <div className="mb-1 ml-2 d-flex">
          <img className="mr-3" src="/resources/svg/card-list.svg"></img>
          <span className="mr-2">검사 목록</span>
          <div className="test-button">
            <button type="button" className="btn btn-sm btn-outline-secondary mr-2">검사예약</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">검사요청</button>
          </div>
        </div>
        <div className="d-flex bg-light">
          <span className="border test-code-border">
            묶음코드
          </span>
          <span className="border test-code-border">
            검사명
          </span>
          <span className="border test-code-border">
            검사담당자
          </span>
          <span className="border test-code-border">
            상태
          </span>
      </div>
          <AutoSizer disableHeight>
          {({width, height}) => {
            return (
              <List width={width} height={300} 
                    list={testCodeList} 
                    rowCount={testCodeList.length}
                    rowHeight={40}
                    rowRenderer={testCodeRowRenderer}
                    overscanRowCount={5}/> //* overscanRowCount: 미리 5개의 여유분을 만들어 놔서 스크롤 시 로딩을 줄여줌*/}
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
}

export default TestList;