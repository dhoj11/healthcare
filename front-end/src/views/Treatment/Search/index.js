import style from "./Search.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from 'react-select'
import { useEffect, useState } from "react";
import { getSearchPatients } from "../../../apis/treatment";
import { useDispatch, useSelector } from "react-redux";
import { createSetPatientAction, createSetTreatmentAction } from "../../../redux/treatment-reducer";

function Search(props){

  const patient = useSelector(state => state.treatmentReducer.patient);

  const [patients, setPatients] = useState([{}]);
  const [search, setSearched] = useState();

  const dispatch = useDispatch();

  const handleChange = value => {
    setSearched(value); 
  }

  const getPatient = async () => {
   try{
    const response = await getSearchPatients(search)
    setPatients(response.data);
   }catch(error){
    console.log(error)
   }
  }

  useEffect(() => {
    if(search!=="") getPatient();
  },[search])

  useEffect(()=>{
    dispatch(createSetTreatmentAction(""));
  },[patient])


  const getOptionLabel = option => `${option.patient_name}: ${option.patient_birth}`;
  const getOptionValue = option => option.patient_id;

  const Option = props => {
    const { innerProps, innerRef, data } = props;
    return (
      <article ref={innerRef} {...innerProps} className ={style.item}>
        <span className={style.patientName}>{data.patient_name}</span>
        <span className={style.patientBirth}>{data.patient_birth}</span>
      </article>
    );
  };

  const handleChangeSelectPatient = (pateint) => {
    dispatch(createSetPatientAction(pateint.patient_id));
    setSearched("");
  }


  return(
    <div className={style.searchbox}>
      <div className={style.search}>
        <span className={style.wrap}>
          <FontAwesomeIcon icon={faSearch} className={style.searchIcon}/>
          <span className={style.title}></span>
        </span>
      </div>
    <div className={style.input}>
      <Select options={patients} 
              placeholder="환자이름을 입력하세요."
              components={{ Option }}
              onInputChange={handleChange}
              getOptionValue={getOptionValue}
              getOptionLabel={getOptionLabel}
              onChange={handleChangeSelectPatient}
              />
    </div>
  </div>
  );
}

export default Search;