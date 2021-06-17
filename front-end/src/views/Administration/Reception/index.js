import {getReceptionList} from "../data";
import styles from "./Reception.module.css";
import { AutoSizer, List } from "react-virtualized";
import {useState, useMemo} from "react";

function Reception(props) {
  let receptionList = [];
   receptionList = getReceptionList();

   const handleStateChange = (event, patientId) => {

   };

  const rowRenderer = ({index, key, style}) => {
    return (
      <div key={key} style={style} className={`${styles.reception_row} border-bottom d-flex`}>
        <span className={styles.reception_item}>
        {receptionList[index].order}
      </span>
      <span className={styles.reception_item}>
      {receptionList[index].time}
      </span>
      <span className={styles.reception_item}>
      {receptionList[index].name}
      </span>
      <span className={styles.reception_item}>
      {receptionList[index].treatmentComment}
      </span>
      <span className={styles.reception_item}>
      {receptionList[index].doctor}
      </span>
      {
        { 
          대기 : (<select style={{color: "green"}} value={receptionList[index].state} onChange={(event) =>handleStateChange(event, receptionList[index].patientId)}>
                    <option style={{color: "green"}} value="대기">대기</option>
                    <option style={{color: "red"}} value="진료">진료</option>
                    <option style={{color: "blue"}} value="완료">완료</option>
                  </select>),
          진료 : (<select style={{color: "red"}} value={receptionList[index].state} onChange={(event) =>handleStateChange(event, receptionList[index].patientId)}>
                    <option style={{color: "green"}} value="대기">대기</option>
                    <option style={{color: "red"}} value="진료">진료</option>
                    <option style={{color: "blue"}} value="완료">완료</option>
                  </select>),
          완료 : (<select style={{color: "blue"}} value={receptionList[index].state} onChange={(event) =>handleStateChange(event, receptionList[index].patientId)}>
                    <option style={{color: "green"}} value="대기">대기</option>
                    <option style={{color: "red"}} value="진료">진료</option>
                    <option style={{color: "blue"}} value="완료">완료</option>
                  </select>)
        }[receptionList[index].state]
      }
      </div>
    );
  };

  //const appointmentList = getReceptionList();
  return (
    <div className={styles.reception}>
    <div className="mb-1 ml-2">
      <img className="mr-3" src="/resources/svg/clipboard-check.svg"></img> <span className="mr-3">내원</span>
      <span style={{color : "#ffd43b"}}>전체 {receptionList.length} | </span>
      <a href="#">완료 3 | </a>
      <a href="#">진료 1 | </a>
      <a href="#">대기 4 | </a>
    </div>
    <div className="d-flex bg-light">
      <span className={`border ${styles.reception_border}`}>
        순서
      </span>
      <span className={`border ${styles.reception_border}`}>
        접수시간
      </span>
      <span className={`border ${styles.reception_border}`}>
        이름
      </span>
      <span className={`border ${styles.reception_border}`}>
        진료내용
      </span>
      <span className={`border ${styles.reception_border}`}>
        담당의
      </span>
      <span className={`border ${styles.reception_border}`}>
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