import TodayAppointment from "./TodayAppointment/index.";
import "./index.css"
import Calendar from "./Calendar";
import TimeTable from "./TimeTable";
import { useState } from "react";


function Appointment(props) {

  const [startDate, setStartDate] = useState(new Date());
  const changeDate = (date) => {
    setStartDate(date);
    console.log(date);
  }

  return(
    <div className="contain">
      <div>
        <Calendar startDate={startDate} changeDate={changeDate}></Calendar>
        <TodayAppointment></TodayAppointment>
      </div>
        <TimeTable startDate={startDate} changeDate={changeDate}></TimeTable>
        
    </div>
  );
}
export default Appointment;