import style from "./Prescription.module.css";
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from "@material-ui/lab";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/medicine";
import data2 from "../../data/prescriptions";
import { useState } from "react";


const getPrescriptions = (event) => {
  const prevPrescriptions = data2;
  return prevPrescriptions;
}

function Prescription(props){

  const [prescription, setPrescription] = useState({
    code:"", name:"", kind:"", type:"", comment:""
  },[]);

  const [prescriptions, setPrescriptions] = useState(getPrescriptions);

  const addPrescription = (event) => {
    const newPrescriptions = prescriptions.concat(prescription);
    setPrescriptions(newPrescriptions);
    setPrescription({});
  }

  const deletePrescription = (event, code) => {
    const newPrescriptions = prescriptions.filter(prescriptions => prescriptions.code !== code);
    setPrescriptions(newPrescriptions);
  }

  return(
    <div className={style.prescription}>
      <div className={style.title}>
        처방
      </div>
      <div className={style.prescriptionList}>
      <table className={`table table-sm ${style.prescriptionTable}`}>
            <thead>
              <tr>
                <th scope="col" className="col-1">약코드</th>
                <th scope="col" className="col-4">약명</th>
                <th scope="col" className="col-2">구분</th>
                <th scope="col" className="col-2">단위</th>
                <th scope="col" className="col-2">처방일수</th>
                <th scope="col" className="col-1"></th>
                

              </tr>
            </thead>
            <tbody>
              {
                prescriptions.map((item) => {
                  return (<tr key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{item.kind}</td>
                            <td>{item.type}</td>
                            <td>{item.comment}</td>
                            <td onClick={(event) => deletePrescription(event, item.code)}><FontAwesomeIcon icon={faMinus} className={style.minus}/></td>
                        </tr>);
                })
              }
            </tbody>
          </table>

          <div className={style.add}>
          <Autocomplete className={style.input}
                          options={data}
                          getOptionLabel={(option) => option.name}
                          onChange={(event, newValue) => {
                            setPrescription({
                             code:newValue.code,
                             name:newValue.name,
                             kind:newValue.kind,
                             type:newValue.type,
                             comment:0
                            });
                          }}
                          renderInput={(params) => <TextField {...params} variant="outlined" size="small"/>}
                          />
          <div className={style.comment}>
            <input type="number"
                   name="comment" value={prescription.comment||0}
                   onChange={(event, newValue) => {
                      setPrescription(
                        {
                          ...prescription,
                         [event.target.name]: event.target.value
                        })
                   }}>
            </input>
          </div>
          <div className={style.addButton} onClick={addPrescription}> 
              <FontAwesomeIcon icon={faPlus} className={style.plus}/>
          </div>

          </div>
      </div>
    </div>
  );
}

export default Prescription;