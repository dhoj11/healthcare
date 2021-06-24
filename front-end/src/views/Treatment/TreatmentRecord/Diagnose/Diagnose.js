import { useState } from "react";

import style from "./Diagnose.module.css";
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from "@material-ui/lab";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*질병 샘플 데이터*/
import data from "../../data/disease";
/*과거 진단 샘플 데이터*/
import data2 from "../../data/diagnoses";



const getDiagnose = (event) => {
  const prevDiagnoses = data2;
  return prevDiagnoses;
};

function Diagnose(props){

  const [diagnose, setDiagnose] = useState();
  const [diagnoses, setDiagnoses] = useState(getDiagnose);

  const addDiagnose = (event) => {
    const newDiagnoses = diagnoses.concat(diagnose);
    setDiagnoses(newDiagnoses);
    setDiagnose("");  
  }
      
  const deleteDiagnose = (event, code) => {
    const newDiagnoses = diagnoses.filter(diagnose => diagnose.code !== code);
    setDiagnoses(newDiagnoses);
  }

  return(
    <div className={style.diagnose}>
      <div className={style.title}>
        진단
      </div>
      <div className={style.diagnoseList}>
       <table className={`table table-sm ${style.diagnoseTable}`}>
            <thead>
              <tr>
                <th scope="col" className="col-2">질병코드</th>
                <th scope="col" className="col-5">질병명</th>
                <th scope="col" className="col-1"></th>
              </tr>
            </thead>
            <tbody>
            {
              diagnoses.map((item) => { 
                return (<tr key={item.code}> 
                          <td>{item.code}</td> 
                          <td>{item.name}</td>
                          <td onClick={(event) => deleteDiagnose(event, item.code)}><FontAwesomeIcon icon={faMinus} className={style.minus}/></td>
                        </tr>); })
            }
            </tbody>
          </table>

          <div className={style.add}>
            <Autocomplete className={style.input}
                          options={data}
                          getOptionLabel={(option) => option.name || option.code}
                          onChange={(event, newValue) => {
                            setDiagnose(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} variant="outlined" size="small"/>}
                          />
            <div className={style.addButton} onClick={addDiagnose}> 
              <FontAwesomeIcon icon={faPlus} className={style.plus}/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Diagnose;