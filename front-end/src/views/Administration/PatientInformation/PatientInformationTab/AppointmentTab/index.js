import { AutoSizer, List } from "react-virtualized";
import {useState,useEffect} from "react";
import {getAppointmentList} from "../../../data";
import styles from "./AppointmentTab.module.css";

function AppointmentTab(props) {
  
  const staticAppointmentList = getAppointmentList();
  const filteredAppointmentList = staticAppointmentList.filter(appointment => (appointment.patient_id === props.patientId));
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    setAppointmentList(filteredAppointmentList);
    return (() => {
        console.log("예약탭 언마운트시 실행");
    });
  },[props]);
  

  const rowRenderer = ({index, key, style}) => {
    return (
      <div key={key} style={style} className={`${styles.appointment_row} border-bottom d-flex`}>
        <span className={styles.appointment_tab_item}>
        {appointmentList[index].appointment_date}
      </span>
      <span className={styles.appointment_tab_item}>
      {appointmentList[index].appointment_time}
      </span>
      <span className={styles.appointment_tab_item}>
      {appointmentList[index].staff_name}
      </span>
      <span className={styles.appointment_tab_item}>
      {appointmentList[index].appointment_kind}
      </span>
      <span className={styles.appointment_tab_item}>
      {appointmentList[index].appointment_state}
      </span>
      </div>
    );
  };

  return (
    <div className="card-appointment-tab">
      <div className="d-flex bg-light">
        <span className={styles.appointment_tab_border}>
          예약날짜
        </span>
        <span className={styles.appointment_tab_border}>
          예약시간
        </span>
        <span className={styles.appointment_tab_border}>
          담당의
        </span>
        <span className={styles.appointment_tab_border}>
          예약내용
        </span>
        <span className={styles.appointment_tab_border}>
          상태
        </span>
    </div>
    <AutoSizer disableHeight>
          {({width, height}) => {
            return (
              <List width={width} height={180} 
                    list={appointmentList} 
                    rowCount={appointmentList.length}
                    rowHeight={40}
                    rowRenderer={rowRenderer}
                    overscanRowCount={5}/> //* overscanRowCount: 미리 5개의 여유분을 만들어 놔서 스크롤 시 로딩을 줄여줌*/}
            );
          }}
        </AutoSizer>
    </div>
  );
}

export default AppointmentTab;