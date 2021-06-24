import styles from "./TestTab.module.css";
import { AutoSizer, List } from "react-virtualized";
import {useState, useEffect} from "react";
import {getTestList} from "../../../data";

function TestTab(props) {
  const staticTestList = getTestList();
  const filteredTestList = staticTestList.filter(test => (test.patientId === props.patientId));
  const [testList, setTestList] = useState([]);
  let curr = 0;

  useEffect(() => {
    setTestList(filteredTestList);
    return (() => {
        console.log("테스트탭 언마운트시 실행");
    });
  },[props]);

  const rowRenderer = ({index, key, style}) => {
    if(index !== 0) {
      curr = testList[index-1].treatmentId;
    } 
    return (
      <div key={key} style={style} className={`${styles.treatment_row} border-bottom d-flex`}>
      {testList[index].treatmentId !== curr ? (
      <>
        <span className={styles.treatment_tab_item}>
          {testList[index].treatmentDate}
        </span>
        <span className={styles.treatment_tab_item}>
          {testList[index].doctor}
        </span>
        <span className={styles.treatment_tab_item_disease}>
          {testList[index].testCodeName}
        </span>
        </>)
      :(<>
          <span className={styles.treatment_tab_item}>
          </span>
          <span className={styles.treatment_tab_item}>
          </span>
          <span className={styles.treatment_tab_item_disease}>
            {testList[index].testCodeName}
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
          검사명
        </span>
    </div>
    <AutoSizer disableHeight>
          {({width, height}) => {
            return (
              <List width={width} height={180} 
                    list={testList} 
                    rowCount={testList.length}
                    rowHeight={40}
                    rowRenderer={rowRenderer}
                    overscanRowCount={5}/> //* overscanRowCount: 미리 5개의 여유분을 만들어 놔서 스크롤 시 로딩을 줄여줌*/}
            );
          }}
        </AutoSizer>
    </div>
  );
}

export default TestTab;