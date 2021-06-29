import styles from "./PrescriptionTab.module.css";
import { AutoSizer, List } from "react-virtualized";
import {useState} from "react";
import {getPrescriptionList} from "../../../data";
import { useEffect } from "react";

function PrescriptionTab(props) {
  const staticPrescription = getPrescriptionList();
  const filteredPrescriptionList = staticPrescription.filter(prescription => (prescription.patient_id === props.patientId));
  const [prescriptionList, setPrescriptionList] = useState(filteredPrescriptionList);
  let curr = 0;

  useEffect(() => {
    setPrescriptionList(filteredPrescriptionList);
    return (() => {
        console.log("처방탭 언마운트시 실행");
    });
  },[props]);

  const rowRenderer = ({index, key, style}) => {
    if(index !== 0) {
      curr = prescriptionList[index-1].treatment_id;
    } 
    return (
      <div key={key} style={style} className={`${styles.prescription_row} border-bottom d-flex`}>
      {prescriptionList[index].treatment_id !== curr ? (
      <>
        <span className={styles.prescription_tab_item_date}>
          {prescriptionList[index].treatment_date}
        </span>
        <span className={styles.prescription_tab_item}>
          {prescriptionList[index].staff_name}
        </span>
        <span className={styles.prescription_tab_item_medicine}>
          {prescriptionList[index].medicine_name}
        </span>
        <span className={styles.prescription_tab_item}>
          {prescriptionList[index].medicine_kind}
        </span>
        <span className={styles.prescription_tab_item}>
          {prescriptionList[index].prescription_comment}
        </span>
      </>)
      :(<>
          <span className={styles.prescription_tab_item}>
          </span>
          <span className={styles.prescription_tab_item}>
          </span>
          <span className={styles.prescription_tab_item_medicine}>
            {prescriptionList[index].medicine_name}
          </span>
          <span className={styles.prescription_tab_item}>
            {prescriptionList[index].medicine_kind}
          </span>
          <span className={styles.prescription_tab_item}>
            {prescriptionList[index].prescription_comment}
          </span>
        </>)}
      </div>
    );
  };

  return (
    <div className="card-appointment-tab">
      <div className="d-flex bg-light">
        <span className={styles.prescription_tab_border}>
          진료날짜
        </span>
        <span className={styles.prescription_tab_border}>
          담당의
        </span>
        <span className={styles.prescription_tab_border_medicine}>
          약명
        </span>
        <span className={styles.prescription_tab_border}>
          구분
        </span>
        <span className={styles.prescription_tab_border}>
          처방일수
        </span>
    </div>
    <AutoSizer disableHeight>
          {({width, height}) => {
            return (
              <List width={width} height={180} 
                    list={prescriptionList} 
                    rowCount={prescriptionList.length}
                    rowHeight={40}
                    rowRenderer={rowRenderer}
                    overscanRowCount={5}/> //* overscanRowCount: 미리 5개의 여유분을 만들어 놔서 스크롤 시 로딩을 줄여줌*/}
            );
          }}
        </AutoSizer>
    </div>
  );
}

export default PrescriptionTab;