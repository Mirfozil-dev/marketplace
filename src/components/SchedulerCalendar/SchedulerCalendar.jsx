import React, { useEffect, useState } from 'react';
import './SchedulerCalendar.css';
import schedulerCalendarIcon from '../../images/schedularCalendarIcon.svg';
import moment from 'moment';

function SchedulerCalendar({ className, light }) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const startDay = value.clone().startOf('month').startOf('week');
  const endDay = value.clone().endOf('month').endOf('week');

  useEffect(() => {
    const day = startDay.clone().subtract(1, 'day');
    const a = [];
    while (day.isBefore(endDay, 'day')) {
      a.push(
        Array(7).fill(0).map(() => day.add(1, 'day').clone()),
      );
    }
    setCalendar(a);
  }, [value]);

  function dayClasses(day) {
    if (day.isBefore(new Date(), 'day')) return light ? 'before light' : 'before';
    if (value.isSame(day, 'day')) return light ? 'selected light' : 'selected';
    if (day.isSame(new Date(), 'day')) return light ? 'today light' : 'today';
    return '';
  }

  function currentMonth() {
    return value.format('MMMM');
  }

  function currentYear() {
    return value.format('YYYY');
  }

  function prevMonth() {
    return value.clone().subtract(1, 'month');
  }

  function nextMonth() {
    return value.clone().add(1, 'month');
  }

  return (
    <div className={className}>
      <div className="scheduler_calendar">
        <div
          className={light ? `header light d-flex justify-content-between` : `header d-flex justify-content-between`}>

          <div className="d-flex align-items-center">
            <img className="h-100 mr-1" src={schedulerCalendarIcon} alt="" />
            {currentMonth()} {currentYear()}
          </div>
          <div>
            <i onClick={() => setValue(prevMonth())} className="fas fa-chevron-left" />
            <i onClick={() => setValue(nextMonth())} className="fas fa-chevron-right" />
          </div>
        </div>
        <div className="body">
          <div className="day-names">
            {
              ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div className="week">{d}</div>)
            }
          </div>
          {
            calendar.map((week) => (
              <div key={week}>{week.map((day) => (
                <div key={day} onClick={() => setValue(day)} className={light ? 'day light' : 'day'}>
                  <div className={dayClasses(day)}>
                    {day.format('D').toString()}
                  </div>
                </div>
              ))}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default SchedulerCalendar;