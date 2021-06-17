import style from "./Blood.module.css";

function Blood(props){
  return(
      <div className={style.blood}>
        <div className={style.title}>
          진단검사
        </div>
        <div className={style.testList}>
          <table className={`table table-sm ${style.prescriptionTable}`}>
              <thead>
                <tr>
                  <th scope="col" className="col-1"></th>
                  <th scope="col" className="col-1">그룹코드</th>
                  <th scope="col" className="col-3">그룹명</th>
                  <th scope="col" className="col-1">처방코드</th>
                  <th scope="col" className="col-3">처방명</th>
                  <th scope="col" className="col-1">하한치</th>
                  <th scope="col" className="col-1">상한치</th>
                  <th scope="col" className="col-2">결과값</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>L2116</td>
                  <td>Factor Assay(8종)*(11366036)SCL</td>
                  <td>L2121</td>
                  <td>X응고인자정량*(11366036)SCL</td>
                  <td>60</td>
                  <td>140</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>L2117</td>
                  <td>IX응고인자정량*(11366036)SCL</td>
                  <td>60</td>
                  <td>140</td>
                  <td></td>
                </tr>
              
              </tbody>
            </table>
        </div>
      </div>
  );
}

export default Blood;