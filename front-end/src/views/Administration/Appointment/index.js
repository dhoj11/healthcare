import {getAppointmentList} from "../data";
import { AutoSizer, List } from "react-virtualized";
import "./Appointment.css";
import { useState } from "react";

function Appointment(props) {

  const staticAppointmentList = getAppointmentList();
  const todayAppointmentList = staticAppointmentList.filter(today => today.date === "2021.06.16");  //오늘 날짜의 예약만 
  const [appointmentList, setAppointmentList] = useState(todayAppointmentList);

  
  const rowRenderer = ({index, key, style}) => {
    return (
      <div key={key} style={style} className="border-bottom d-flex appointment-row">
        <span className="appointment-item">
        {appointmentList[index].order}
      </span>
      <span className="appointment-item">
      {appointmentList[index].time}
      </span>
      <span className="appointment-item">
      {appointmentList[index].name}
      </span>
      <span className="appointment-item">
      {appointmentList[index].appointmentKind}
      </span>
      <span className="appointment-item">
      {appointmentList[index].doctor}
      </span>
      {
        { 
           예약 : <span style={{color: "black"}}className="appointment-item">{appointmentList[index].state}</span>,
           내원 : <span style={{color: "green"}}className="appointment-item">{appointmentList[index].state}</span>,
           취소 : <span style={{color: "red"}}className="appointment-item">{appointmentList[index].state}</span>,
           완료 : <span style={{color: "blue"}}className="appointment-item">{appointmentList[index].state}</span>
        }[appointmentList[index].state]
      }
      </div>
    );
  };

  return (
    <div className="appointment">
        <div className="mb-1 ml-2">
          <img className="mr-3" src="/resources/svg/person-check.svg"></img><span className="mr-3">예약</span>
          <span style={{color : "#ffd43b"}}>전체 {appointmentList.length} | </span>
          <a href="#">예약 0 | </a>
          <a href="#">내원 2 | </a>
          <a href="#">완료 4 | </a>
          <a href="#">취소 0</a>
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
          예약내용
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
                    list={appointmentList} 
                    rowCount={appointmentList.length}
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
                    <td>{appointment.appointmentKind}</td>
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

export default Appointment;