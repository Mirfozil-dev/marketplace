import React from 'react';
import './SellerHome.css';
import searchIcon from '../../images/search_icon.png';
import sellerWelcome from '../../images/seller_welcome.png';
import giftIcon from '../../images/giftIcon.png';
import oneStar from '../../images/oneStar.png';
import twoStar from '../../images/twoStar.png';
import threeStar from '../../images/threeStar.png';
import fourStar from '../../images/fourStar.png';
import fiveStar from '../../images/fiveStar.png';
import inquiriesReport from '../../images/inquries_report.png';
import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx';
import ReportCard from '../../components/ReportCard/ReportCard.jsx';
import AddReportCard from '../../components/AddReportCard/AddReportCard.jsx';
import controllerIcon from '../../images/Controller.svg';
import scott from '../../images/Scott.png';
import settingsIcon from '../../images/SettingsIcon.svg';
import gearIcon from '../../images/Gear.svg';
import notificationIcon from '../../images/notificationIcon.svg';
import user from '../../images/user.png';
import storeIcon from '../../images/store_icon.svg';
import wishIcon from '../../images/like_icon.svg';
import headsetIcon from '../../images/headsetIcon.svg';
import MonthlyReportCard from '../../components/MonthlyReportCard/MonthlyReportCard.jsx';
import needHelpLady from '../../images/needHelpLady.png';
import LineGraph from '../../components/LineGraph/LineGraph.jsx';
import { NavLink } from 'react-router-dom';
import SchedulerCalendarSm from '../../components/SchedulerCalendarSm/SchedulerCalendarSm.jsx';

function SellerHome() {
  return (
    <div className="seller_home_wrapper">
      <div className="seller_home w-100 h-100 d-flex">
        <div className="seller_home_content">
          <div className="d-flex">
            <div className="seller_home_search_input d-flex">
              <input className="h-100" type="text" placeholder="Search Product" />
              <img src={searchIcon} alt="" />
            </div>
            <NavLink to="/buyer">
              <button className="switch_role_btn">
                Switch to buyer
              </button>
            </NavLink>
            <button className="switch_lang_btn d-flex align-items-center">
              English
              <i className="fas fa-chevron-down" />
            </button>
          </div>
          <div className="seller_home_welcome w-100 d-flex justify-content-between">
            <div className="seller_home_welcome_content">
              <h2>
                Good Morning,
                <span>
                Mr. Ali
              </span>
              </h2>
              <p className="seller_welcome_wish">Have a nice day on Uzbekmart platform</p>
              <p className="seller_welcome_tasks">
                Bu yorga Star olish uchun sellerga yuriqnoma kursatilib ketadi.
                Uwaga qarab seller rankingi kutariwlga harakat qiladi. Muxlisa
                Iwlarga omad :)
              </p>
            </div>
            <img src={sellerWelcome} alt="" />
          </div>
          <div className="seller_ranking_process w-100">
            <h2 className="w-100">
              Your Ranking Process
            </h2>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column align-items-center ranking_process_item">
                <img src={giftIcon} alt="" />
                <p>Post Products</p>
              </div>
              <ProgressBar className="progress_bar_wrapper" color="#009E74" progress={100} />
              <div className="d-flex flex-column align-items-center ranking_process_item">
                <img src={oneStar} alt="" />
                <p>One Star</p>
              </div>
              <ProgressBar className="progress_bar_wrapper" color="#009E74" progress={75} />
              <div className="d-flex flex-column align-items-center ranking_process_item">
                <img src={twoStar} alt="" />
                <p>Two Stars</p>
              </div>
              <ProgressBar className="progress_bar_wrapper" color="#009E74" progress={0} />
              <div className="d-flex flex-column align-items-center ranking_process_item">
                <img src={threeStar} alt="" />
                <p>Three Stars</p>
              </div>
              <ProgressBar className="progress_bar_wrapper" color="#009E74" progress={0} />
              <div className="d-flex flex-column align-items-center ranking_process_item">
                <img src={fourStar} alt="" />
                <p>Four Stars</p>
              </div>
              <ProgressBar className="progress_bar_wrapper" color="#009E74" progress={0} />
              <div className="d-flex flex-column align-items-center ranking_process_item">
                <img src={fiveStar} alt="" />
                <p>Five Stars</p>
              </div>
            </div>
          </div>
          <div className="seller_weekly_report">
            <h2 className="w-100">
              Weekly Report
            </h2>
            <div className="d-flex row">
              <ReportCard count={11} title="Inquiries" image={inquiriesReport} className="report_card_wrapper" />
              <ReportCard count={11} title="Inquiries" image={inquiriesReport} className="report_card_wrapper" />
              <ReportCard count={11} title="Inquiries" image={inquiriesReport} className="report_card_wrapper" />
              <ReportCard count={11} title="Inquiries" image={inquiriesReport} className="report_card_wrapper" />
              <ReportCard count={11} title="Inquiries" image={inquiriesReport} className="report_card_wrapper" />
              <AddReportCard className="report_card_wrapper" />
            </div>
          </div>
          <div className="seller_recommendation_quotations">
            <div className="d-flex w-100 seller_recommendation_quotations_header align-items-center">
              <h2>
                Recommended Quotations
              </h2>
              <p>
                Potential leads waiting for you to reply:
              </p>
            </div>
            <div className="recommendation_quotation_table w-100">
              <div className="quotation_table_head w-100 d-flex justify-content-around">
                <div className="quotation_table_name">
                  <div className="quotation_table_head_item d-flex align-items-center">
                    <p>Name</p>
                    <img src={controllerIcon} alt="" />
                  </div>
                </div>
                <div className="quotation_table_product">
                  <div className="quotation_table_head_item d-flex align-items-center">
                    <p>Product</p>
                    <img src={controllerIcon} alt="" />
                  </div>
                </div>
                <div className="quotation_table_quantity">
                  <div className="quotation_table_head_item d-flex align-items-center">
                    <p>Quantity</p>
                    <img src={controllerIcon} alt="" />
                  </div>
                </div>
                <div className="quotation_table_date">
                  <div className="quotation_table_head_item d-flex align-items-center">
                    <p>Date</p>
                    <img src={controllerIcon} alt="" />
                  </div>
                </div>
                <div className="quotation_table_time">
                  <div className="quotation_table_head_item d-flex align-items-center">
                    <p>Time</p>
                    <img src={controllerIcon} alt="" />
                  </div>
                </div>
                <div className="quotation_table_location">
                  <div className="quotation_table_head_item d-flex align-items-center">
                    <p>Location</p>
                    <img src={controllerIcon} alt="" />
                  </div>
                </div>
                <button className="quotation_table_settings_btn d-flex align-items-center">
                  <img src={settingsIcon} alt="" />
                </button>
              </div>
              <div className="quotation_table_row w-100 d-flex justify-content-around align-items-center">
                <div
                  className="quotation_table_name quotation_table_body_item d-flex align-items-center">
                  <div className="quotation_avatar">
                    <img className="w-100" src={scott} alt="" />
                  </div>
                  <p>Daniel Walter Scott</p>
                </div>
                <div
                  className="quotation_table_product quotation_table_body_item d-flex align-items-center">
                  <p>Wafer</p>
                </div>
                <div className="quotation_table_quantity quotation_table_body_item d-flex align-items-center">
                  <p>100 kg</p>
                </div>
                <div className="quotation_table_date quotation_table_body_item d-flex align-items-center">
                  <p>11 Jan 2021</p>
                </div>
                <div className="quotation_table_time quotation_table_body_item d-flex align-items-center">
                  <p>02:22 PM</p>
                </div>
                <div className="quotation_table_location quotation_table_body_item d-flex align-items-center">
                  <p>Irland</p>
                </div>
                <button className="quotation_table_more_btn d-flex align-items-center quotation_table_body_item">
                  <p>
                    <i className="fas fa-ellipsis-h" />
                  </p>
                </button>
              </div>
              <div className="quotation_table_row w-100 d-flex justify-content-around align-items-center">
                <div
                  className="quotation_table_name quotation_table_body_item d-flex align-items-center">
                  <div className="quotation_avatar">
                    <img className="w-100" src={scott} alt="" />
                  </div>
                  <p>Daniel Walter Scott</p>
                </div>
                <div
                  className="quotation_table_product quotation_table_body_item d-flex align-items-center">
                  <p>Wafer</p>
                </div>
                <div className="quotation_table_quantity quotation_table_body_item d-flex align-items-center">
                  <p>100 kg</p>
                </div>
                <div className="quotation_table_date quotation_table_body_item d-flex align-items-center">
                  <p>11 Jan 2021</p>
                </div>
                <div className="quotation_table_time quotation_table_body_item d-flex align-items-center">
                  <p>02:22 PM</p>
                </div>
                <div className="quotation_table_location quotation_table_body_item d-flex align-items-center">
                  <p>Irland</p>
                </div>
                <button className="quotation_table_more_btn d-flex align-items-center quotation_table_body_item">
                  <p>
                    <i className="fas fa-ellipsis-h" />
                  </p>
                </button>
              </div>
              <div className="quotation_table_row w-100 d-flex justify-content-around align-items-center">
                <div
                  className="quotation_table_name quotation_table_body_item d-flex align-items-center">
                  <div className="quotation_avatar">
                    <img className="w-100" src={scott} alt="" />
                  </div>
                  <p>Daniel Walter Scott</p>
                </div>
                <div
                  className="quotation_table_product quotation_table_body_item d-flex align-items-center">
                  <p>Wafer</p>
                </div>
                <div className="quotation_table_quantity quotation_table_body_item d-flex align-items-center">
                  <p>100 kg</p>
                </div>
                <div className="quotation_table_date quotation_table_body_item d-flex align-items-center">
                  <p>11 Jan 2021</p>
                </div>
                <div className="quotation_table_time quotation_table_body_item d-flex align-items-center">
                  <p>02:22 PM</p>
                </div>
                <div className="quotation_table_location quotation_table_body_item d-flex align-items-center">
                  <p>Irland</p>
                </div>
                <button className="quotation_table_more_btn d-flex align-items-center quotation_table_body_item">
                  <p>
                    <i className="fas fa-ellipsis-h" />
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="seller_home_sidebar">
          <div className="d-flex seller_home_sidebar_header justify-content-between">
            <div className="d-flex">
              <button>
                <img className="w-100" src={gearIcon} alt="" />
              </button>
              <button>
                <div />
                <img className="w-100" src={notificationIcon} alt="" />
              </button>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column align-items-end">
                <h5>Ali Safarov</h5>
                <p>View profile</p>
              </div>
              <div className="seller_avatar">
                <img src={user} alt="" />
              </div>
            </div>
          </div>
          <div className="seller_home_sidebar_nav d-flex justify-content-between">
            <button className="d-flex">
              <img src={storeIcon} alt="" />
              My Shop
            </button>
            <button className="d-flex">
              <img src={wishIcon} alt="" />
              My Favorite
            </button>
            <button className="d-flex">
              <img src={headsetIcon} alt="" />
              Account
              manager
            </button>
          </div>
          <SchedulerCalendarSm className="seller_home_calendar" />
          <div className="seller_home_monthly_report">
            <h2>Monthly Report</h2>
            <div className="d-flex justify-content-between monthly_report_card_row">
              <MonthlyReportCard type="events" count={22} className="monthly_report_card_wrapper" />
              <MonthlyReportCard type="view_products" count={1122} className="monthly_report_card_wrapper" />
              <MonthlyReportCard type="contacts" count={33} className="monthly_report_card_wrapper" />
            </div>
          </div>
          <div className="monthly_analytics">
            <h2>Quick Monthly Analytics</h2>
            <LineGraph />
          </div>
          <NavLink to="/seller/help">
            <button className="need_help_btn d-flex align-items-center justify-content-around">
              <img src={needHelpLady} alt="" />
              Need Help?
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SellerHome;