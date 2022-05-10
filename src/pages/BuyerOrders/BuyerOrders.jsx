import React from 'react';
import './BuyerOrders.css';
import WeatherHeader from '../../components/WeatherHeader/WeatherHeader.jsx';
import productImg from '../../images/seller_product.png';
import Calculator from '../../components/Calculator/Calculator.jsx';
import CardWithDog from '../../components/CardWithDog/CardWithDog.jsx';
import menuIcon from '../../images/cabinetMenuIcon.svg';
import SchedulerCalendar from '../../components/SchedulerCalendar/SchedulerCalendar.jsx';

function BuyerOrders() {
  function closeSideBar() {
    let sideBar = document.querySelectorAll('.buyer_orders_mobile_sidebar')[0];
    sideBar.classList.remove('active');
  }

  function openSideBar() {
    let sideBar = document.querySelectorAll('.buyer_orders_mobile_sidebar')[0];
    sideBar.classList.add('active');
  }

  return (
    <div className="buyer_orders_wrapper">
      <div className="buyer_orders_page d-flex justify-content-between flex-wrap">
        <div className="w-100 d-flex justify-content-end">
          <button onClick={openSideBar}
                  className="visible_md mobile_sidebar_open_btn d-flex align-items-center justify-content-center">
            <img className="w-100 h-100" src={menuIcon} alt="" />
          </button>
          <div className="buyer_orders_mobile_sidebar">
            <div className="d-flex justify-content-end">
              <button onClick={closeSideBar} className="mobile_sidebar_close_btn">
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="buyer_orders_calendar w-100">
            </div>
            <Calculator className="buyer_orders_calculator" />
            <div className="buyer_purchased_products">
              <h5>My Purchased Products</h5>
              <CardWithDog className="w-100 h-100" />
            </div>
          </div>
        </div>
        <div className="buyer_orders_main_content">
          <WeatherHeader className="buyer_orders_weather_header w-100" />
          <div className="buyer_orders">
            <h5>Orders</h5>
            <div className="buyer_orders_table_head d-flex w-100">
              <div className="buyer_orders_product">
                <p>Product Name</p>
              </div>
              <div className="buyer_orders_price">
                <p>Price</p>
              </div>
              <div className="buyer_orders_owner">
                <p>Owner</p>
              </div>
              <div className="buyer_orders_purchased">
                <p>Last purchased</p>
              </div>
              <div className="buyer_orders_level">
                <p>Product Level</p>
              </div>
              <div className="buyer_orders_status">
                <p>Status</p>
              </div>
              <div className="buyer_orders_action">
                <p>Action</p>
              </div>
            </div>
            <div className="buyer_orders_table_item d-flex w-100">
              <div className="buyer_orders_product d-flex align-items-center">
                <img src={productImg} alt="" />
                <p>New-Broccoli-Green-Quantity-
                  Box-Crop-KOSHER</p>
              </div>
              <div className="buyer_orders_price d-flex align-items-center">
                <p>US $1.10 / Acre</p>
              </div>
              <div className="buyer_orders_owner d-flex align-items-center">
                <p>Ali Safarov</p>
              </div>
              <div className="buyer_orders_purchased d-flex align-items-center">
                <p>31/01/2021</p>
              </div>
              <div className="buyer_orders_level d-flex align-items-center">
                <p>High-quality Posting</p>
              </div>
              <div className="buyer_orders_status d-flex align-items-center">
                <p>Approval Pending</p>
              </div>
              <div className="buyer_orders_action d-flex align-items-center">
                <button>
                  <i className="fas fa-trash-alt" />
                </button>
                <button>
                  <i className="fas fa-th-large" />
                </button>
              </div>
            </div>
            <div className="buyer_orders_table_item d-flex w-100">
              <div className="buyer_orders_product d-flex align-items-center">
                <img src={productImg} alt="" />
                <p>New-Broccoli-Green-Quantity-
                  Box-Crop-KOSHER</p>
              </div>
              <div className="buyer_orders_price d-flex align-items-center">
                <p>US $1.10 / Acre</p>
              </div>
              <div className="buyer_orders_owner d-flex align-items-center">
                <p>Ali Safarov</p>
              </div>
              <div className="buyer_orders_purchased d-flex align-items-center">
                <p>31/01/2021</p>
              </div>
              <div className="buyer_orders_level d-flex align-items-center">
                <p>High-quality Posting</p>
              </div>
              <div className="buyer_orders_status d-flex align-items-center">
                <p>Approval Pending</p>
              </div>
              <div className="buyer_orders_action d-flex align-items-center">
                <button>
                  <i className="fas fa-trash-alt" />
                </button>
                <button>
                  <i className="fas fa-th-large" />
                </button>
              </div>
            </div>
            <div className="buyer_orders_table_item d-flex w-100">
              <div className="buyer_orders_product d-flex align-items-center">
                <img src={productImg} alt="" />
                <p>New-Broccoli-Green-Quantity-
                  Box-Crop-KOSHER</p>
              </div>
              <div className="buyer_orders_price d-flex align-items-center">
                <p>US $1.10 / Acre</p>
              </div>
              <div className="buyer_orders_owner d-flex align-items-center">
                <p>Ali Safarov</p>
              </div>
              <div className="buyer_orders_purchased d-flex align-items-center">
                <p>31/01/2021</p>
              </div>
              <div className="buyer_orders_level d-flex align-items-center">
                <p>High-quality Posting</p>
              </div>
              <div className="buyer_orders_status d-flex align-items-center">
                <p>Approval Pending</p>
              </div>
              <div className="buyer_orders_action d-flex align-items-center">
                <button>
                  <i className="fas fa-trash-alt" />
                </button>
                <button>
                  <i className="fas fa-th-large" />
                </button>
              </div>
            </div>
            <div className="buyer_orders_table_item d-flex w-100">
              <div className="buyer_orders_product d-flex align-items-center">
                <img src={productImg} alt="" />
                <p>New-Broccoli-Green-Quantity-
                  Box-Crop-KOSHER</p>
              </div>
              <div className="buyer_orders_price d-flex align-items-center">
                <p>US $1.10 / Acre</p>
              </div>
              <div className="buyer_orders_owner d-flex align-items-center">
                <p>Ali Safarov</p>
              </div>
              <div className="buyer_orders_purchased d-flex align-items-center">
                <p>31/01/2021</p>
              </div>
              <div className="buyer_orders_level d-flex align-items-center">
                <p>High-quality Posting</p>
              </div>
              <div className="buyer_orders_status d-flex align-items-center">
                <p>Approval Pending</p>
              </div>
              <div className="buyer_orders_action d-flex align-items-center">
                <button>
                  <i className="fas fa-trash-alt" />
                </button>
                <button>
                  <i className="fas fa-th-large" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="buyer_orders_sidebar visible_lg">
          <div className="buyer_orders_calendar w-100">
            <SchedulerCalendar className="w-100" />
          </div>
          <Calculator className="buyer_orders_calculator" />
          <div className="buyer_purchased_products">
            <h5>My Purchased Products</h5>
            <CardWithDog />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerOrders;