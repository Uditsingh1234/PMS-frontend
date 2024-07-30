import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './component.css'; // Make sure to add your CSS styles here

function CalendarWidget() {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };

  const getDaysInMonth = (month, year) => {
    const daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysOfMonth[month];
  };

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [days, setDays] = useState([]);

  useEffect(() => {
    generateCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(month, year);
    const currDate = new Date();

    const daysArray = [];
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null); // Empty slots for days before the first day of the month
    }
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push({
        day: i,
        isCurrentDay: i === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth(),
      });
    }

    setDays(daysArray);
  };

  const handlePrevYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const handleNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  const handleMonthClick = (index) => {
    setCurrentMonth(index);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <span className="month-picker" id="month-picker">
          {monthNames[currentMonth]}
        </span>
        <div className="year-picker">
          <span className="year-change" id="prev-year" onClick={handlePrevYear}>
            <FaChevronLeft />
          </span>
          <span id="year">{currentYear}</span>
          <span className="year-change" id="next-year" onClick={handleNextYear}>
            <FaChevronRight />
          </span>
        </div>
      </div>
      <div className="calendar-body">
        <div className="calendar-week-day">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="calendar-days">
          {days.map((day, index) => (
            <div key={index} className={day?.isCurrentDay ? 'calendar-day-hover curr-date' : 'calendar-day-hover'}>
              {day ? day.day : ''}
              {day && <span></span>}
              {day && <span></span>}
              {day && <span></span>}
              {day && <span></span>}
            </div>
          ))}
        </div>
      </div>
      <div className="month-list">
        {monthNames.map((month, index) => (
          <div key={index} onClick={() => handleMonthClick(index)}>
            {month}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarWidget;
