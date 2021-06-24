import TodayAppointment from "./TodayAppointment/index.";
import "./index.css"
import Calendar from "./Calendar";
import TimeTable from "./TimeTable";
import { useEffect, useState } from "react";
import { getTAppoint, getTestAppointment } from "./TimeTable/data/data";


function Appointment(props) {

  const [startDate, setStartDate] = useState(new Date());
  const [tAppointment,setTAppointment] = useState(getTAppoint());
  const changeDate = (date) => {
    setStartDate(date);
  }

  const changeShow = (value) => {
    if(value === "TreatmentAppoint") {
      setTAppointment(getTAppoint());
    } else {
      setTAppointment(getTestAppointment());
    }
  };


  

  return(
    <div className="contain">
      <div>
        <Calendar startDate={startDate} changeDate={changeDate}></Calendar>
        <TodayAppointment></TodayAppointment>
      </div>
      <TimeTable startDate={startDate} changeDate={changeDate} tAppointment={tAppointment} changeShow={changeShow}></TimeTable>
    </div>
  );
}
export default Appointment;