import React from 'react';
import './WeatherHeader.css';
import rainyIcon from '../../images/rainyIcon.svg';
import cloudySunIcon from '../../images/cloudySunIcon.svg';
import cloudyIcon from '../../images/cloudyIcon.svg';

function WeatherHeader({ className }) {
  return (
    <div className={className}>
      <div className="analytics_header w-100 d-flex justify-content-between">
        <div className="d-flex flex-column h-100 justify-content-between">
          <h5 className="analytics_my_country text-white">Uzbekistan</h5>
          <div className="d-flex align-items-end">
            <h5 className="analytics_day text-white">
              3rd
              <span>
                    , thu
                  </span>
            </h5>
          </div>
        </div>
        <div className="d-flex">
          <div className="analytics_weather_degree d-flex flex-column align-items-center justify-content-center">
            <h5 className="text-white">+25</h5>
            <div>
              <p>
                partially
                cloudy
              </p>
            </div>
          </div>
          <div className="analytics_weather d-flex flex-column justify-content-around">
            <div className="weather_yesterday d-flex">
              <img src={rainyIcon} alt="" />
              <p>Yesterday</p>
            </div>
            <div className="weather_today d-flex">
              <img src={cloudySunIcon} alt="" />
              <p className="text-white">Today</p>
            </div>
            <div className="weather_tomorrow d-flex">
              <img src={cloudyIcon} alt="" />
              <p>Tomorrow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherHeader;