import { AutoSizer, List } from "react-virtualized";
import {useState, useEffect} from "react";
import { checkTreatmentList } from "../../../../../apis/administration";
import styles from "./TreatmentTab.module.css";

function TreatmentTab(props) {
  
  const { patientId } = props;
  const [treatmentList, setTreatmentList] = useState([]);
  let curr = 0;

  useEffect(() => {
    const work = async() => {
      try{
        const response = await checkTreatmentList(patientId);
        setTreatmentList(response.data);
      }catch(error) {
        console.log(error.message);
      }
   }
   work();
  },[props]);

  const rowRenderer = ({index, key, style}) => {
    if(index !== 0) {
      curr = treatmentList[index-1].treatment_id;
    } 
    return (
      <div key={key} style={style} className={`${styles.treatment_row} border-bottom d-flex`}>
      {treatmentList[index].treatment_id !== curr ? (
      <>
        <span className={styles.treatment_tab_item}>
          {treatmentList[index].treatment_date}
        </span>
        <span className={styles.treatment_tab_item}>
          {treatmentList[index].staff_name}
        </span>
        <span className={styles.treatment_tab_item_disease}>
          {treatmentList[index].disease_name}
        </span>
        </>)
      :(<>
          <span className={styles.treatment_tab_item}>
            
          </span>
          <span className={styles.treatment_tab_item}>
            
          </span>
          <span className={styles.treatment_tab_item_disease}>
            {treatmentList[index].disease_name}
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