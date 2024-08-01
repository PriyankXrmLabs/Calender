import React from 'react'
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Calendar.css'

function Calendar (props) {
        const { headerColor, gridColor, todayColor } = props
        const [currentDate, setCurrentDate] = useState(new Date());
        const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
        const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
      
        useEffect(() => {
          setCurrentDate(new Date(currentYear, currentMonth, 1));
        }, [currentMonth, currentYear]);
      
        const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();
      
        const generateCalendar = () => {
          const days = [];
          const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
          const firstDay = firstDayOfMonth(currentMonth, currentYear);
      
          for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
          }
      
          for (let day = 1; day <= daysInCurrentMonth; day++) {
            const isToday = 
              day === new Date().getDate() &&
              currentMonth === new Date().getMonth() &&
              currentYear === new Date().getFullYear();
            days.push(
              <div key={day} className={`calendar-day ${isToday ? 'today' : ''}`} style={{ backgroundColor: isToday ? todayColor : gridColor }}>
                {day}
              </div>
            );
          }
      
          return days;
        };
      
        const prevMonth = () => {
          if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear((prevYear) => prevYear - 1);
          } else {
            setCurrentMonth((prevMonth) => prevMonth - 1);
          }
        };
      
        const nextMonth = () => {
          if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear((prevYear) => prevYear + 1);
          } else {
            setCurrentMonth((prevMonth) => prevMonth + 1);
          }
        };

  return (
    <section>
    <div className="calendar-card">
    <div className="calendar">
      <div className="calendar-header" style={{ backgroundColor: headerColor }}>
        <button onClick={prevMonth}>&lt;</button>
        <div>{currentDate.toLocaleString('default', { month: 'long' })} {currentYear}</div>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        <div className="calendar-day-name">Sun</div>
        <div className="calendar-day-name">Mon</div>
        <div className="calendar-day-name">Tue</div>
        <div className="calendar-day-name">Wed</div>
        <div className="calendar-day-name">Thu</div>
        <div className="calendar-day-name">Fri</div>
        <div className="calendar-day-name">Sat</div>
        {generateCalendar()}
      </div>
    </div>
    </div>
    </section>
  );
};


export default Calendar
