import style from "./Xray.module.css";

function Xray(props){
  return(
    <div className={style.xray}>
      <div className={style.title}>
        방사선검사
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>L2116</td>
                  <td>경추</td>
                  <td>L2121</td>
                  <td>Spinal nerves</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>L2117</td>
                  <td>Vetebrae</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>L2117</td>
                  <td>Discs</td>
                </tr>
              </tbody>
            </table>
      </div>
      <div className={style.xrayResult}>

      </div>
  </div>
  );
}

export default Xray;