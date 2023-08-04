import React, { useEffect, useState } from 'react';

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
