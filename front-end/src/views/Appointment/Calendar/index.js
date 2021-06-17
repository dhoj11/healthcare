import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

function Calendar(props) {
  // const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate);
  // const changedate= (date) => {
  //   setStartDate(date);
  // }

  return(
    <div>
       <DatePicker
        onChange={(date) => props.changeDate(date)}
        inline
        onMonthChange={(date) => props.changeDate(date)}
        selected={props.startDate}
      />
    </div>
  );
}
export default Calendar;