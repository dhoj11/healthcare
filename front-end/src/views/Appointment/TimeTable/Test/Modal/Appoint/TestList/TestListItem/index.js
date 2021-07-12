import { useEffect, useState } from "react";
import { getTestByCode } from "../../../../../../../../apis/appointment";
import styles from "./index.module.css";
function TestListItem(props) {
  const {testItem} = props;
  const [test,setTest]=useState(null);
  useEffect(() => {
    (async function(){
      try{
        const response = await getTestByCode(testItem.test_code);
        console.log(response.data);
        setTest(response.data);
      } catch(error){
        throw error;
      }
    })();
  },[props]);
  return(
      test ?
        <div className={styles.thead}>
        <div className={styles.code}>
          <input type="checkbox" className="mr-2"></input>
          <span>{test.test_code}</span>
        </div>
        <div className={styles.testname}>{test.test_name}</div>
      </div>
      :
      null
    
  );
}
export default TestListItem;