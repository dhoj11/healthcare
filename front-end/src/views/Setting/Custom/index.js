import React from "react";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOptime, updateOptime } from "../../../apis/account";
import style from "./Custom.module.css";

function Custom(props){

  const hospital_code = useSelector(state => state.authReducer.hospital_code);

  const[opTime, setOptime] = useState({
    officehour_start:"",
    officehour_end:"",
    officehour_interval:"",
    lunch_start:"",
    lunch_end:""
  })

  const handleChange = (event) =>{
    setOptime({...opTime,
               [event.target.name]: event.target.value
              })
  }

  const getOp = async() => {
    try{
      const response = await getOptime(hospital_code);
      setOptime(response.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getOp();
  },[])

  const updateOp = async() => {
    try{
      const hospitalObj = {...opTime, hospital_code : hospital_code}
      console.log(hospitalObj);
      await updateOptime(hospitalObj);
    }catch(error){
      console.log(error);
    }
  }

  return(
    <div className={style.custom}>
      <div className={style.top}>
        <span className={style.title}>병원진료 시간</span>
        <span className={style.save} onClick={updateOp}>저장</span>
      </div>
      <div className={style.input}>
          <span className={style.optime}>진료시작</span>
          <input type="time" name="officehour_start" className={`form-control ${style.time}`} value={opTime.officehour_start} onChange={handleChange}/>
          <span className={style.optime}>진료마감</span>
          <input type="time" name="officehour_end" className={`form-control ${style.time}`} value={opTime.officehour_end} onChange={handleChange}/>
          <span className={style.optime}>진료시간</span>
          <input type="number" name="officehour_interval" className={`form-control ${style.interval}`} value={opTime.officehour_interval}  onChange={handleChange}/>
          <span className={style.optime}>점심시작</span>
          <input type="time" name="lunch_start" className={`form-control ${style.time}`} value={opTime.lunch_start} onChange={handleChange}/>
          <span className={style.optime}>점심끝</span>
          <input type="time" name="lunch_end" className={`form-control ${style.time}`} value={opTime.lunch_end} onChange={handleChange}/>
      </div>
    </div>
  );
}

export default React.memo(Custom);