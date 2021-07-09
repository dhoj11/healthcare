import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

function Calendar(props) {


  return(
    <div>
       <DatePicker
        onChange={(date) => props.changeDate(date)}
        inline
        dateFormat="yyyy-MM-dd"
        onMonthChange={(date) => props.changeDate(date)}
        selected={props.startDate}
      />
    </div>
  );
}
export default Calendar;