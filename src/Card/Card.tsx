import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div className="card-wrapper">
      <span>Viewing</span>
      <span>Wed</span>
      <div className="card-date-wrapper">
        <span className="date">August 26</span>
        <span className="time">17:00 - 18:00</span>
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
