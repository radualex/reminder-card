import React, { useState } from "react";
import moment from "moment";

import "./Card.css";

interface CardProps {
  date: Date;
}

export default function Card(props: CardProps) {
  const momentDate = moment(props.date);
  const nextHour = moment(momentDate).add(1, "hour");

  const [dayOfWeek] = useState(momentDate.format("ddd"));
  const [month] = useState(momentDate.format("MMMM"));
  const [day] = useState(momentDate.format("DD"));
  const [currentTime] = useState(momentDate.format("HH:mm"));
  const [oneHourFromCurrentTime] = useState(nextHour.format("HH:mm"));

  return (
    <div className="card-wrapper">
      <span className="title">Viewing</span>
      <span className="day">{dayOfWeek}</span>
      <div className="card-date-wrapper">
        <span className="date">
          {month} {day}
        </span>
        <span className="time">
          {currentTime} - {oneHourFromCurrentTime}
        </span>
      </div>
      <div className="card-add-to-calendar-wrapper">
        <span className="material-icons">add</span>
        <span className="text">Add to calendar</span>
      </div>
      <div className="note">
        <span className="text">
          Remember to read the complete sales statement before viewing.
        </span>
      </div>
    </div>
  );
}
