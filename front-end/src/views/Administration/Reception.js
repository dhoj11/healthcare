import {getReceptionList} from "./data";
import "./Reception.css";
import { AutoSizer, List } from "react-virtualized";
import {useState, useMemo} from "react";

function Reception(props) {
  let receptionList = [];
   receptionList = getReceptionList();

  const rowRenderer = ({index, key}) => {
    return (
      <div key={key} className="border-bottom d-flex">
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
      <span className="reception-item">
      {receptionList[index].state}
      </span>
      </div>
    );
  };

  //const appointmentList = getReceptionList();
  return (
    <div className="reception">
    <div>
      내원
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