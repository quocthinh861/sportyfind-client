import React, { useEffect, useState } from 'react';
import dayjs from "dayjs";

export function formatDate(date) {
  const options = {
    weekday: 'long', // Display the full day name
    day: '2-digit',  // Display the day as two digits
    month: '2-digit', // Display the month as two digits
    year: 'numeric', // Display the year
  };

  const formattedDate = date.toLocaleString('vi-VN', options);
  return `${formattedDate}`;
}

export function formatDateAndTime(dateTime) {
  const options = {
    weekday: 'long', // Display the full day name
    day: '2-digit',  // Display the day as two digits
    month: '2-digit', // Display the month as two digits
    hour: '2-digit',  // Display the hour as two digits
    minute: '2-digit', // Display the minute as two digits
  };

  const date = new Date(dateTime);
  const formattedDateAndTime = date.toLocaleString('vi-VN', options);
  return `${formattedDateAndTime}`;
}

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}


export const formatTimeDifference = (timestamp) => {
  const timestampDate = new Date(timestamp);
  const now = new Date();
  const timeDifference = now - timestampDate;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;

  if (timeDifference < minute) {
    return 'Bây giờ';
  } else if (timeDifference < hour) {
    const minutesAgo = Math.floor(timeDifference / minute);
    return `${minutesAgo} phút trước`;
  } else if (timeDifference < day) {
    const hoursAgo = Math.floor(timeDifference / hour);
    return `${hoursAgo} giờ trước`;
  } else if (timeDifference < week) {
    const daysAgo = Math.floor(timeDifference / day);
    return `${daysAgo} ngày trước`;
  } else if (timeDifference < month) {
    const weeksAgo = Math.floor(timeDifference / week);
    return `${weeksAgo} tuần trước`;
  } else {
    return 'Hơn 1 tháng trước';
  }
};

export function compareTimes(time1, time2) {
  // Parse time strings into Date objects
  const date1 = new Date('2000-01-01T' + time1);
  const date2 = new Date('2000-01-01T' + time2);

  // Get time in milliseconds
  const timeInMillis1 = date1.getTime();
  const timeInMillis2 = date2.getTime();

  // Compare the times
  if (timeInMillis1 < timeInMillis2) {
      return -1;
  } else if (timeInMillis1 > timeInMillis2) {
      return 1;
  } else {
      return 0; // Times are equal
  }
}