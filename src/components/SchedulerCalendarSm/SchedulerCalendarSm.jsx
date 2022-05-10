import React, { useEffect, useState } from 'react';
import './SchedulerCalendarSm.css';
import moment from 'moment';
import calendarIcon from '../../images/calendarIcon.svg';

function SchedulerCalendarSm({ className }) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const startDay = value.clone().startOf('week');
  const endDay = value.clone().endOf('week');

  useEffect(() => {
    const day = startDay.clone().subtract(1, 'day');
    let a = [];
    while (day.isBefore(endDay, 'day')) {
      a = Array(7).fill(0).map(() => day.add(1, 'day').clone());
    }
    setCalendar(a);
  }, [value]);

  function dayClasses(day) {
    if (day.isBefore(new Date(), 'day')) return 'before calendar_day';
    if (value.isSame(day, 'day')) return 'selected calendar_day';
    if (day.isSame(new Date(), 'day')) return 'today calendar_day';
    return '';
  }


  function currentMonth() {
    return value.format('MMMM');
  }

  function prevMonth() {
    return value.clone().subtract(1, 'week');
  }

  function nextMonth() {
    return value.clone().add(1, 'week');
  }

  return (
    <div className={className}>
      <div>
        <div className="calendar_header d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <h5>Schedule Calendar</h5>
            <button>
              <i onClick={() => setValue(prevMonth())} className="fas fa-chevron-left" />
            </button>
            <button>
              <i onClick={() => setValue(nextMonth())} className="fas fa-chevron-right" />
            </button>
          </div>
          <div className="d-flex calendar_month align-items-center justify-content-around">
            <img src={calendarIcon} alt="" />
            {currentMonth()}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          {
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div className="sm_calendar_week">{d}</div>)
          }
        </div>
        <div className="calendar_body d-flex justify-content-between">
          {calendar.map((day) => {
            return (
              <div onClick={() => setValue(day)} className={dayClasses(day)}>
                <h6>{day.format('D').toString()}</h6>
                {/*<span className="calendar_day_red_reminder" />*/}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SchedulerCalendarSm;