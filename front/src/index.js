import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Calendar from './MyCalendar'

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
      <Calendar />,
      document.body.appendChild(document.createElement('div'))
    )
  
  })
  