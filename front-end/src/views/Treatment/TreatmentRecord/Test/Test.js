import style from "./Test.module.css";

function Test(props){
  return(
    <div className={style.test}>
      <div className={style.title}>
        검사
      </div>
      <div className={style.testList}>
        <table className={`table table-sm ${style.testTable}`}>
              <thead>
                <tr>
                  <th scope="col" className="col-1"></th>
                  <th scope="col" className="col-4">검사처방코드</th>
                  <th scope="col" className="col-6">검사명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>L300101</td>
                  <td>Routine BC(순환기내과12종)</td>
                </tr>
              
              </tbody>
            </table>
      </div>
    </div>
  );
}

export default Test;