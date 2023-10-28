import React from "react";
import CalendarHeader from "../components/CalendarHeader";
import Sidebar from "../components/Sidebar";
import Month from "../components/Month";
import { getMonth } from "../utils/TimeUtil";
import { useState } from "react";

function Event() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  return (
    <div className="flex flex-col">
      <CalendarHeader />
      <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth}/>
        </div>  
    </div>
  );
}

export default Event;
