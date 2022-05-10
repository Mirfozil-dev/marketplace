import React from 'react';
import './BuyerHome.css';
import searchIcon from '../../images/search_icon.png';
import buyerWelcome from '../../images/seller_welcome.png';
import ReportCard from '../../components/ReportCard/ReportCard.jsx';
import inquiriesReport from '../../images/inquries_report.png';
import AddReportCard from '../../components/AddReportCard/AddReportCard.jsx';
import controllerIcon from '../../images/Controller.svg';
import settingsIcon from '../../images/SettingsIcon.svg';
import scott from '../../images/Scott.png';
import gearIcon from '../../images/Gear.svg';
import notificationIcon from '../../images/notificationIcon.svg';
import user from '../../images/user.png';
import wishIcon from '../../images/like_icon.svg';
import headsetIcon from '../../images/headsetIcon.svg';
import MonthlyReportCard from '../../components/MonthlyReportCard/MonthlyReportCard.jsx';
import needHelpLady from '../../images/needHelpLady.png';
import BuyerRecommendedCard from '../../components/BuyerRecommendedCard/BuyerRecommendedCard.jsx';
import menuIcon from '../../images/cabinetMenuIcon.svg';
import { NavLink } from 'react-router-dom';
import SchedulerCalendarSm from '../../components/SchedulerCalendarSm/SchedulerCalendarSm.jsx';

function BuyerHome() {
  function closeSideBar() {
    let sideBar = document.querySelectorAll('.buyer_mobile_sidebar')[0];
    sideBar.classList.remove('active');
  }

  function openSideBar() {
    let sideBar = document.querySelectorAll('.buyer_mobile_sidebar')[0];
    sideBar.classList.add('active');
  }


  return (
    <div className="buyer_home_wrapper">
      <div className="buyer_home w-100 h-100 d-flex">
        <div className="buyer_home_content">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="buyer_home_search_input d-flex">
                <input className="h-100" type="text" placeholder="Search Product" />
                <img src={searchIcon} alt="" />
              </div>
              <NavLink to="/seller">
                <button className="switch_role_btn">
                  Switch to seller
                </button>
              </NavLink>
              <button className="switch_lang_btn d-flex align-items-center">
                English
                <i className="fas fa-chevron-down" />
              </button>
            </div>
            <button onClick={openSideBar}
                    className="visible_md mobile_sidebar_open_btn d-flex align-items-center justify-content-center">
              <img className="w-100 h-100" src={menuIcon} alt="" />
            </button>
            <div className="buyer_mobile_sidebar">
              <div className="d-flex justify-content-end">
                <button onClick={closeSideBar} className="mobile_sidebar_close_btn">
                  <i className="fas fa-times" />
                </button>
              </div>
              <div className="d-flex buyer_home_sidebar_header justify-content-between">
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
                  <div className="buyer_avatar">
                    <img src={user} alt="" />
                  </div>
                </div>
              </div>
              <div className="buyer_home_sidebar_nav d-flex justify-content-between">
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
              <SchedulerCalendarSm className="buyer_home_calendar" />
              <div className="buyer_home_monthly_report">
                <h2>Monthly Report</h2>
                <div className="d-flex justify-content-between monthly_report_card_row">
                  <MonthlyReportCard type="events" count={22} className="monthly_report_card_wrapper" />
                  <MonthlyReportCard type="view_products" count={1122} className="monthly_report_card_wrapper" />
                  <MonthlyReportCard type="contacts" count={33} className="monthly_report_card_wrapper" />
                </div>
              </div>
              <div className="buyer_recommended">
                <h2>Recommended</h2>
                <div className="row">
                  <div className="col-4">
                    <BuyerRecommendedCard className="w-100 buyer_recommend_card_wrapper" />
                  </div>
                  <div className="col-4">
                    <BuyerRecommendedCard className="w-100 buyer_recommend_card_wrapper" />
                  </div>
                  <div className="col-4">
                    <BuyerRecommendedCard className="w-100 buyer_recommend_card_wrapper" />
                  </div>
                  <div className="col-4">
                    <BuyerRecommendedCard className="w-100 buyer_recommend_card_wrapper" />
                  </div>
                  <div className="col-4">
                    <BuyerRecommendedCard className="w-100 buyer_recommend_card_wrapper" />
                  </div>
                  <div className="col-4">
                    <BuyerRecommendedCard className="w-100 buyer_recommend_card_wrapper" />
                  </div>
                </div>
              </div>
              <button className="need_help_btn d-flex align-items-center justify-content-around">
                <img src={needHelpLady} alt="" />
                Need Help?
              </button>
            </div>
          </div>
          <div className="buyer_home_welcome w-100 d-flex justify-content-between">
            <div className="buyer_home_welcome_content">
              <h2>
                Good Morning,
                <span>
                Mr. Ali
              </span>
              </h2>
              <p className="buyer_welcome_wish">Have a nice day on Uzbekmart platform</p>
            </div>
            <img src={buyerWelcome} alt="" />
          </div>
          <div className="buyer_weekly_report">
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
          <div className="buyer_recommendation_quotations">
            <div className="d-flex w-100 buyer_recommendation_quotations_header align-items-center">
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
        <div className="buyer_home_sidebar">
          <div className="d-flex buyer_home_sidebar_header justify-content-between">
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
              <div className="buyer_avatar">
                <img src={user} alt="" />
              </div>
            </div>
          </div>
          <div className="buyer_home_sidebar_nav d-flex justify-content-between">
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
          <SchedulerCalendarSm className="buyer_home_calendar" />
          <div className="buyer_home_monthly_report">
            <h2>Monthly Report</h2>
            <div className="d-flex justify-content-between monthly_report_card_row">
              <MonthlyReportCard type="events" count={22} className="monthly_report_card_wrapper" />
              <MonthlyReportCard type="view_products" count={1122} className="monthly_report_card_wrapper" />
              <MonthlyReportCard type="contacts" count={33} className="monthly_report_card_wrapper" />
            </div>
          </div>
          <div className="buyer_recommended">
            <h2>Recommended</h2>
            <div className="row">
              <div className="col-4">
                <BuyerRecommendedCard className="w-100 buyer_recommend_card_wrapper" />
              </div>
              <div className="col-4">
                <BuyerRecommendedCard className="w-100 buyer_recommend_card_wrapper" />
              </div>
              <div className="col-4">
                <BuyerRecommendedCard className="w-100 buyer_recommend_card_wrapper" />
              </div>
              <div className="col-4">
                <BuyerRecommendedCard className="w-100 buyer_recommend_card_wrapper" />
              </div>
              <div className="col-4">
                <BuyerRecommendedCard className="w-100 buyer_recommend_card_wrapper" />
              </div>
              <div className="col-4">
                <BuyerRecommendedCard className="w-100 buyer_recommend_card_wrapper" />
              </div>
            </div>
          </div>
          <button className="need_help_btn d-flex align-items-center justify-content-around">
            <img src={needHelpLady} alt="" />
            Need Help?
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyerHome;