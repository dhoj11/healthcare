import { AutoSizer, List } from "react-virtualized";
import {useState} from "react";
import {getAppointmentList} from "../../data";
import styles from "./AppointmentTab.module.css";

function AppointmentTab(props) {
  
  const staticAppointmentList = getAppointmentList();
  const filteredAppointmentList = staticAppointmentList.filter(appointment => (appointment.patientId === props.patientId));
  const [appointmentList, setAppointmentList] = useState(filteredAppointmentList);

  const rowRenderer = ({index, key, style}) => {
    return (
      <div key={key} style={style} className={`${styles.appointment_row} border-bottom d-flex`}>
        <span className={styles.appointment_tab_item}>
        {appointmentList[index].date}
      </span>
      <span className={styles.appointment_tab_item}>
      {appointmentList[index].time}
      </span>
      <span className={styles.appointment_tab_item}>
      {appointmentList[index].doctor}
      </span>
      <span className={styles.appointment_tab_item}>
      {appointmentList[index].appointmentKind}
      </span>
      <span className={styles.appointment_tab_item}>
      {appointmentList[index].state}
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