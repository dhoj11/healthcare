import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./TimeTable.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientSearch from "./PatientSearch";
function TimeTable(props) {
  const [timetables,setTimetables]= useState([
    {"시간":"10:00", "김의사":null,"나의사":4,"박의사":2,"정의사":null, "검사실":null},
    {"시간":"10:30", "김의사":null,"나의사":1,"박의사":2,"정의사":null, "검사실":4},
    {"시간":"11:00", "김의사":null,"나의사":1,"박의사":2,"정의사":null, "검사실":3},
    {"시간":"12:00", "김의사":null,"나의사":1,"박의사":2,"정의사":null, "검사실":3},
    {"시간":"13:00", "김의사":null,"나의사":null,"박의사":null,"정의사":null, "검사실":null},
    {"시간":"14:00", "김의사":null,"나의사":1,"박의사":2,"정의사":null, "검사실":3},
    {"시간":"14:30", "김의사":null,"나의사":1,"박의사":2,"정의사":null, "검사실":3},
    {"시간":"15:00", "김의사":null,"나의사":1,"박의사":2,"정의사":null, "검사실":3},
    {"시간":"15:30", "김의사":null,"나의사":1,"박의사":2,"정의사":null, "검사실":3},
    {"시간":"16:00", "김의사":null,"나의사":1,"박의사":2,"정의사":null, "검사실":3},
    {"시간":"16:30", "김의사":null,"나의사":1,"박의사":2,"정의사":null, "검사실":3},
    {"시간":"17:00", "김의사":null,"나의사":1,"박의사":2,"정의사":null, "검사실":3}
  ]);
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
                  return (
                      <td key={index} onClick={() => appoint(data.시간,index,value)} className="{value}" >{value}</td>
                  )
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