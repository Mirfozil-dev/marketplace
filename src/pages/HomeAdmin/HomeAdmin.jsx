import React from 'react';
import './HomeAdmin.css';
import search_icon from '../../images/admin_search_icon.svg';
import settings_icon from '../../images/admin_settings_icon.svg';
import notification_icon from '../../images/admin_notification_icon.svg';
import admin_home_welcome from '../../images/admin_home_welcome.svg';
import SchedulerCalendar from '../../components/SchedulerCalendar/SchedulerCalendar.jsx';

function HomeAdmin() {
  return (
    <div className="admin_home__wrapper">
      <div className="admin_home__header d-flex justify-content-between">
        <div className="admin_home__search d-flex align-items-center justify-content-between">
          <input type="text" placeholder="Search Product" />
          <img src={search_icon} alt="" />
        </div>
        <div className="admin_header__data d-flex align-items-center justify-content-between">
          <h3>+23 °C</h3>
          <h3>Wen, Feb 3</h3>
          <h3>8:41 PM</h3>
        </div>
        <div className="admin_header__control">
          <button>
            <img className="w-100 h-100" src={settings_icon} alt="" />
          </button>
          <button>
            <img className="w-100 h-100" src={notification_icon} alt="" />
          </button>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <div className="admin_home_content">
          <div className="admin_home_welcome w-100 d-flex justify-content-between">
            <div className="admin_home_welcome_content">
              <h2>
                Good Morning,
              </h2>
              <p className="admin_welcome_wish">Have a nice day on Uzbekmart platform</p>
              <p className="admin_welcome_tasks">
                Bu yorga Star olish uchun adminga yuriqnoma kursatilib ketadi.
                Uwaga qarab admin rankingi kutariwlga harakat qiladi. Muxlisa
                Iwlarga omad :)
              </p>
            </div>
            <img src={admin_home_welcome} alt="" />
          </div>
          <div className="d-flex justify-content-between">
            <div className="admin_home_ranking d-flex justify-content-between">
              <div className="ranking_item d-flex flex-column justify-content-center">
                <h3>
                  2000
                  <span>
              +2.2%
            </span>
                </h3>
                <p>
            <span>
              This Week
            </span><br />
                  Ranking Companies
                </p>
              </div>
              <div className="ranking_item d-flex flex-column justify-content-center">
                <h3>
                  2000
                  <span>
              +2.2%
            </span>
                </h3>
                <p>
            <span>
              This Week
            </span><br />
                  Ranking Companies
                </p>
              </div>
            </div>
            <div className="admin_home_advertisement d-flex justify-content-between">
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="admin_home_topsold d-flex justify-content-between">
            </div>
            <div className="admin_home_ranking d-flex justify-content-between">
              <div className="ranking_item d-flex flex-column justify-content-center">
                <h3>
                  2000
                  <span>
              +2.2%
            </span>
                </h3>
                <p>
            <span>
              This Week
            </span><br />
                  Ranking Companies
                </p>
              </div>
              <div className="ranking_item d-flex flex-column justify-content-center">
                <h3>
                  2000
                  <span>
              +2.2%
            </span>
                </h3>
                <p>
            <span>
              This Week
            </span><br />
                  Ranking Companies
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="admin_home_sidecontent">
          <div className="admin_home_calendar w-100">
            <SchedulerCalendar light={true} className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;