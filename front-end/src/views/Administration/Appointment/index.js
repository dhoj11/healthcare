import {getAppointmentList} from "../data";
import { AutoSizer, List } from "react-virtualized";
import styles from "./Appointment.module.css";
import { useState } from "react";
import classnames from "classnames/bind";

function Appointment(props) {

  const staticAppointmentList = getAppointmentList();
  const todayAppointmentList = staticAppointmentList.filter(today => today.date === "2021.06.16");  //오늘 날짜의 예약만 
  const [appointmentList, setAppointmentList] = useState(todayAppointmentList);

  const getAllLength = () => {
    return todayAppointmentList.length;
  }

  const listAll = () => {
    setAppointmentList(todayAppointmentList);
  };

  const listWithState = (appointmentState) => {
    const filteredAppointmentList = todayAppointmentList.filter(appointment => appointment.state === appointmentState);
    setAppointmentList(filteredAppointmentList);
  };

  const handleStateChange = (event, patientId) => {
    // setAppointmentList({
    //   ...appointmentList,
    //   appointmentList[index].state = event.target.value
    // })

    //백엔드에서 예약리스트에서 patientId로 찾은 튜플의 state를 event.target.value로 바꿔줌

    console.log(event.target.value);
  };

  const rowRenderer = ({index, key, style}) => {
    return (
      <div key={key} style={style} className={classnames(styles.appointmentRow, "border-bottom d-flex")} >
        <span className={styles.appointmentItem}>
        {appointmentList[index].order}
      </span>
      <span className={styles.appointmentItem}>
      {appointmentList[index].time}
      </span>
      <span className={styles.appointmentItem}>
      {appointmentList[index].name}
      </span>
      <span className={styles.appointmentItem}>
      {appointmentList[index].appointmentKind}
      </span>
      <span className={styles.appointmentItem}>
      {appointmentList[index].doctor}
      </span>
      {
        { 
           예약 : (<select style={{color: "black"}} value={appointmentList[index].state} onChange={(event) =>handleStateChange(event, appointmentList[index].patientId)}>
                    <option style={{color: "black"}} value="예약">예약</option>
                    <option style={{color: "green"}} value="내원">내원</option>
                    <option style={{color: "blue"}} value="완료">완료</option>
                    <option style={{color: "red"}} value="취소">취소</option>
                  </select>),
           내원 : (<select style={{color: "green"}} value={appointmentList[index].state} onChange={(event) =>handleStateChange(event, appointmentList[index].patientId)}>
                    <option style={{color: "black"}} value="예약">예약</option>
                    <option style={{color: "green"}} value="내원">내원</option>
                    <option style={{color: "blue"}} value="완료">완료</option>
                    <option style={{color: "red"}} value="취소">취소</option>
                  </select>),
           취소 : (<select style={{color: "red"}} value={appointmentList[index].state} onChange={(event) =>handleStateChange(event, appointmentList[index].patientId)}>
                    <option style={{color: "black"}} value="예약">예약</option>
                    <option style={{color: "green"}} value="내원">내원</option>
                    <option style={{color: "blue"}} value="완료">완료</option>
                    <option style={{color: "red"}} value="취소">취소</option>
                  </select>),
           완료 : (<select style={{color: "blue"}} value={appointmentList[index].state} onChange={(event) =>handleStateChange(event, appointmentList[index].patientId)}>
                    <option style={{color: "black"}} value="예약">예약</option>
                    <option style={{color: "green"}} value="내원">내원</option>
                    <option style={{color: "blue"}} value="완료">완료</option>
                    <option style={{color: "red"}} value="취소">취소</option>
                  </select>)
        }[appointmentList[index].state]
      }
      </div>
    );
  };

  return (
    <div className={styles.appointment}>
        <div className="mb-1 ml-2 d-flex">
          <img className="mr-3" src="/resources/svg/person-check.svg"></img><span className="mr-3">예약</span>
          <div className="mr-2" onClick={listAll} style={{color : "#ffd43b"}}>전체 {getAllLength()} | </div>
          <div className="mr-2" onClick={()=> listWithState("예약")}>예약  | </div>
          <div className="mr-2" onClick={()=> listWithState("내원")}>내원  | </div>
          <div className="mr-2" onClick={()=> listWithState("완료")}>완료  | </div>
          <div className="mr-2" onClick={()=> listWithState("취소")}>취소  </div>
        </div>
      <div className="d-flex bg-light">
        <span className={`border ${styles.appointment_border}`}>
          순서
        </span>
        <span className={`border ${styles.appointment_border}`}>
          접수시간
        </span>
        <span className={`border ${styles.appointment_border}`}>
          이름
        </span>
        <span className={`border ${styles.appointment_border}`}>
          예약내용
        </span>
        <span className={`border ${styles.appointment_border}`}>
          담당의
        </span>
        <span className={`border ${styles.appointment_border}`}>
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