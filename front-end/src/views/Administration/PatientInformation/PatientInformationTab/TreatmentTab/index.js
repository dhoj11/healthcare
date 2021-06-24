import { AutoSizer, List } from "react-virtualized";
import {useState, useEffect} from "react";
import {getTreatmentList} from "../../../data";
import styles from "./TreatmentTab.module.css";

function TreatmentTab(props) {
  const staticTreatmentList = getTreatmentList();
  const filteredTreatmentList = staticTreatmentList.filter(treatment => (treatment.patientId === props.patientId));
  const [treatmentList, setTreatmentList] = useState(filteredTreatmentList);
  let curr = 0;

  useEffect(() => {
    setTreatmentList(filteredTreatmentList);
    return (() => {
        console.log("진료탭 언마운트시 실행");
    });
  },[props]);

  const rowRenderer = ({index, key, style}) => {
    if(index !== 0) {
      curr = treatmentList[index-1].treatmentId;
    } 
    return (
      <div key={key} style={style} className={`${styles.treatment_row} border-bottom d-flex`}>
      {treatmentList[index].treatmentId !== curr ? (
      <>
        <span className={styles.treatment_tab_item}>
          {treatmentList[index].treatmentDate}
        </span>
        <span className={styles.treatment_tab_item}>
          {treatmentList[index].doctor}
        </span>
        <span className={styles.treatment_tab_item_disease}>
          {treatmentList[index].disease}
        </span>
        </>)
      :(<>
          <span className={styles.treatment_tab_item}>
            
          </span>
          <span className={styles.treatment_tab_item}>
            
          </span>
          <span className={styles.treatment_tab_item_disease}>
            {treatmentList[index].disease}
          </span>
        </>)}
      </div>
    );
  };

  return (
    <div className="card-appointment-tab">
      <div className="d-flex bg-light">
        <span className={styles.treatment_tab_border}>
          진료날짜
        </span>
        <span className={styles.treatment_tab_border}>
          담당의
        </span>
        <span className={styles.treatment_tab_border_disease}>
          진료내용
        </span>
    </div>
    <AutoSizer disableHeight>
          {({width, height}) => {
            return (
              <List width={width} height={180} 
                    list={treatmentList} 
                    rowCount={treatmentList.length}
                    rowHeight={40}
                    rowRenderer={rowRenderer}
                    overscanRowCount={5}/> //* overscanRowCount: 미리 5개의 여유분을 만들어 놔서 스크롤 시 로딩을 줄여줌*/}
            );
          }}
        </AutoSizer>
    </div>
  );
}

export default TreatmentTab;