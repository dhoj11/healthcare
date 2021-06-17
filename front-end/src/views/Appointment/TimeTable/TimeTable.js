import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./TimeTable.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientSearch from "./PatientSearch";
import { getTimeTables } from "../data";
function TimeTable(props) {
  const [timetables,setTimetables]= useState(getTimeTables);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const prevDate = () => {
    let date = new Date(props.startDate);
    date.setDate(date.getDate()-1);
    props.changeDate(date);
  }
  const nextDate = () => {
    let date = new Date(props.startDate);
    date.setDate(date.getDate()+1);
    props.changeDate(date);
  }
  
  const appoint = (time,index,value) => {
    if(index!==0 && value==null){
      setShow(true);
    }
    
    console.log(time,index,value);
  }
  return(
    <div className="TimeTable_contain">
      <div className="date_contain"><button className="btn" onClick={prevDate}>{`<`}</button><div className="date">{props.startDate.getFullYear()}-{props.startDate.getMonth()+1}-{(props.startDate.getDate())}</div> <button className="btn" onClick={nextDate}>{`>`} </button></div>
        <table className="TimeTable table">
          <thead>
            <tr>
              {Object.keys(timetables[0]).map(data => {
                return (
                  <th key={data}>{[data]}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {timetables.map(data => {
              return (
              <tr key={data.시간}>
                {Object.values(data).map((value,index) => {
                  if (value==="진료완료" || value==="검사완료") return (
                      <td key={index} onClick={() => appoint(data.시간,index,value)} style={{backgroundColor:"#fff3bf"}}>{value}</td>
                  );
                  if (value==="예약") return (
                    <td key={index} onClick={() => appoint(data.시간,index,value)} style={{backgroundColor:"#e7f5ff"}}>{value}</td>
                  );
                  if (value==="취소") return (
                    <td key={index} onClick={() => appoint(data.시간,index,value)} style={{backgroundColor:"#ffc9c9"}}>{value}</td>
                  );
                  else return (<td key={index} onClick={() => appoint(data.시간,index,value)} >{value}</td>);
                  // return <td key={index} onClick={() => appoint(data.시간,index,value)} >{value}</td>
                })}
              </tr>
              )
            })}
          </tbody>
        </table>
        <Modal
          show={show} 
          onHide={handleClose}
          size="lg"
          centered="true"
          className="modal"
          >
            <PatientSearch handleClose={handleClose}></PatientSearch>
        </Modal>
    </div>
    
    
  );
}
export default TimeTable;