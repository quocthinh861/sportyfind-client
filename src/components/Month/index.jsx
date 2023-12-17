import React, { useEffect, useState } from "react";
import Day from "../Day";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useSelector } from "react-redux";

export default function Month({ month }) {
  const axiosPrivate = useAxiosPrivate();
  const [dayEvents, setDayEvents] = useState([]);
  const [isShowAllDayEvent, setIsShowAllDayEvent] = useState(false);
  const user = useSelector((state) => state.user);
  const userId = user.data?.user?.id;

  useEffect(() => {
    try {
      axiosPrivate.get(`/event/getAllEvent?userId=${userId}`).then((res) => {
        if (res.status === 200) {
          const events = res.data.result;
          setDayEvents(events);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day
              day={day}
              key={idx}
              rowIdx={i}
              filteredEvents={dayEvents.filter(
                (evt) => evt.data.bookingDate === day.format("DD/MM/YYYY")
              )}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
