import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import GlobalContext from "../../context/GlobalContext";

const MAX_SHOW_EVENT = 3;

export default function Day({ day, rowIdx, filteredEvents }) {
  const axiosPrivate = useAxiosPrivate();
  const {
    setDaySelected,
    setShowEventModal,
    setSelectedEvent,
  } = useContext(GlobalContext);

  const [isShowAllDayEvent, setIsShowAllDayEvent] = useState(false);

  //   useEffect(() => {
  //     const events = filteredEvents.filter(
  //       (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
  //     );
  //     setDayEvents(events);
  //   }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        style={{ minHeight: "100px" }}
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {
          // only show 2 latest events, and show a +x more
          // if there are more than 2 events
        }
        {filteredEvents
          .slice(0, isShowAllDayEvent ? 999 : MAX_SHOW_EVENT)
          .map((evt, idx) => (
            <div
              id={idx}
              key={idx}
              className={`type-booking p-1 mr-3 text-gray-600 text-sm rounded mb-1 position-relative`}
            >
              <span>{evt.title}</span>
              <span className="d-block">
                {evt.data.startTime} - {evt.data.endTime}
              </span>
            </div>
          ))}
        {filteredEvents.length > MAX_SHOW_EVENT && !isShowAllDayEvent && (
          <div
            className="type-booking p-1 text-gray-600 text-sm mb-1 truncate"
            onClick={() => setIsShowAllDayEvent(true)}
          >
            <span>{`+${filteredEvents.length - MAX_SHOW_EVENT} more`}</span>
          </div>
        )}
      </div>
    </div>
  );
}
