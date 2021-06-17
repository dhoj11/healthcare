import {getReceptionList} from "../data";
import "./Reception.css";
import { AutoSizer, List } from "react-virtualized";
import {useState, useMemo} from "react";

function Reception(props) {
  let receptionList = [];
   receptionList = getReceptionList();

  const rowRenderer = ({index, key, style}) => {
    return (
      <div key={key} style={style} className="border-bottom d-flex reception-row">
        <span className="reception-item">
        {receptionList[index].order}
      </span>
      <span className="reception-item">
      {receptionList[index].time}
      </span>
      <span className="reception-item">
      {receptionList[index].name}
      </span>
      <span className="reception-item">
      {receptionList[index].treatmentComment}
      </span>
      <span className="reception-item">
      {receptionList[index].doctor}
      </span>
      {
        { 
           대기 : <span style={{color: "green"}}className="reception-item">{receptionList[index].state}</span>,
           진료 : <span style={{color: "red"}}className="reception-item">{receptionList[index].state}</span>,
           완료 : <span style={{color: "blue"}}className="reception-item">{receptionList[index].state}</span>
        }[receptionList[index].state]
      }
      </div>
    );
  };

  //const appointmentList = getReceptionList();
  return (
    <div className="reception">
    <div className="mb-1 ml-2">
      <img className="mr-3" src="/resources/svg/clipboard-check.svg"></img> <span className="mr-3">내원</span>
      <span style={{color : "#ffd43b"}}>전체 {receptionList.length} | </span>
      <a href="#">완료 3 | </a>
      <a href="#">진료 1 | </a>
      <a href="#">대기 4 | </a>
    </div>
    <div className="d-flex bg-light">
      <span className="border">
        순서
      </span>
      <span className="border">
        접수시간
      </span>
      <span className="border">
        이름
      </span>
      <span className="border">
        진료내용
      </span>
      <span className="border">
        담당의
      </span>
      <span className="border">
        상태
      </span>
    </div>
    <AutoSizer disableHeight>
          {({width, height}) => {
            return (
              <List width={width} height={300} 
                    list={receptionList} 
                    rowCount={receptionList.length}
                    rowHeight={40}
                    rowRenderer={rowRenderer}
                    overscanRowCount={5}/> //* overscanRowCount: 미리 5개의 여유분을 만들어 놔서 스크롤 시 로딩을 줄여줌*/}
            );
          }}
        </AutoSizer>


    {/* <div>
      <table className="table table-hover table-bordered">
        <thead>
          <tr className="table table-secondary text-center">
            <th>순서</th>
            <th>예약시간</th>
            <th>이름</th>
            <th>예약내용</th>
            <th>담당의</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
        {appointmentList.map(appointment=>(
              <tr className="text-center" key={appointment.order}>
                <th>{appointment.order}</th>
                <th>{appointment.time}</th>
                <td>{appointment.name}</td>
                <td>{appointment.treatmentComment}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.state}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div> */}
</div>
  );
}

export default Reception;