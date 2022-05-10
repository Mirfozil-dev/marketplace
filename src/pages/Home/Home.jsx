import React, { useEffect, useState } from 'react';
import logo from '../../images/logo dark.png';
import plastic from '../../images/plastic.png';
import Card from '../../components/Card/Card.jsx';
import dollarIcon from '../../images/dollar_icon.png';
import shipIcon from '../../images/ship.png';
import cardIcon from '../../images/credit_card.png';
import securityDark from '../../images/security_dark.png';
import safeIcon from '../../images/safe_icon.png';
import chatIcon from '../../images/chat_icon.png';
import questionDialog from '../../images/question_dialog.png';
import circleStar from '../../images/circle_star.png';
import carouselImg1 from '../../images/home_carousel1.png';
import carouselImg2 from '../../images/home_carousel2.png';
import allCategoriesIcon from '../../images/allCategoriesIcon.svg'
import './Home.css';
import FullCard from '../../components/FullCard/FullCard.jsx';
import CompanyCard from '../../components/CompanyCard/CompanyCard.jsx';
import { NavLink } from 'react-router-dom';


function Home() {
  let [slide, setSlide] = useState(0);
  let [allSlides] = useState([carouselImg1, carouselImg2, carouselImg2]);

  function updateSlide() {
    let lastSlide = document.querySelectorAll('.nav_content_carousel_item.active');
    if (lastSlide.length > 0) {
      lastSlide[0].classList.remove('active');
    }
    let newSlide = document.querySelectorAll('.nav_content_carousel_item')[slide];
    if (newSlide) {
      newSlide.classList.add('active');
    }
    let newDot = document.querySelectorAll('.carousel_dot')[slide];
    let changer = document.querySelector('.slider_dots_changer')
    changer.style.setProperty('left', `${newDot.offsetLeft}px`);
  }

  useEffect(() => {
    updateSlide();
  });

  function leftSlide() {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  }

  function rightSlide() {
    let carouselItemsLength = document.querySelectorAll('.nav_content_carousel_item').length;
    if (slide < carouselItemsLength - 1) {
      setSlide(slide + 1);
    }
  }


  return (
    <div className="home_page_wrapper">
      <div className="home_title d-flex justify-content-center align-items-center py-4">
        <div className="custom_container d-flex justify-content-center align-items-center">
          <img className="mr-3" src={logo} alt="" />
          <div className="d-flex flex-column align-items-center">
            <h1>UZBEKMART</h1>
            <h2 className="text-center">THE BEST B2B PLATFORM IN UZBEKISTAN</h2>
          </div>
        </div>
      </div>
      <div className="w-100 home_wrapper custom_container">
        <div className="home_nav mx-auto d-flex">
          <div className="our_products d-flex flex-column justify-content-between">
            <h4>Our Products</h4>
            <div className="d-flex w-100 category_item">
              <div className="w-25">
                <img src={plastic} alt="" />
              </div>
              <div className="category_item_title w-100 d-flex justify-content-between align-items-center">
                <NavLink to="/category">
                  <div className="category_item__p d-flex justify-content-between w-100">
                    <p title="Test">Rubber & Plastics</p>
                    <i className="fas fa-chevron-right mt-1" />
                  </div>
                </NavLink>
                <div className="subcategories d-flex justify-content-around">
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex w-100 category_item">
              <div className="w-25">
                <img src={plastic} alt="" />
              </div>
              <div className="category_item_title w-100 d-flex justify-content-between align-items-center">
                <NavLink to="/category">
                  <div className="category_item__p d-flex justify-content-between w-100">
                    <p title="Test">Rubber & Plastics</p>
                    <i className="fas fa-chevron-right mt-1" />
                  </div>
                </NavLink>
                <div className="subcategories d-flex justify-content-around">
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex w-100 category_item">
              <div className="w-25">
                <img src={plastic} alt="" />
              </div>
              <div className="category_item_title w-100 d-flex justify-content-between align-items-center">
                <NavLink to="/category">
                  <div className="category_item__p d-flex justify-content-between w-100">
                    <p title="Test">Rubber & Plastics</p>
                    <i className="fas fa-chevron-right mt-1" />
                  </div>
                </NavLink>
                <div className="subcategories d-flex justify-content-around">
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex w-100 category_item">
              <div className="w-25">
                <img src={plastic} alt="" />
              </div>
              <div className="category_item_title w-100 d-flex justify-content-between align-items-center">
                <NavLink to="/category">
                  <div className="category_item__p d-flex justify-content-between w-100">
                    <p title="Test">Rubber & Plastics</p>
                    <i className="fas fa-chevron-right mt-1" />
                  </div>
                </NavLink>
                <div className="subcategories d-flex justify-content-around">
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex w-100 category_item">
              <div className="w-25">
                <img src={plastic} alt="" />
              </div>
              <div className="category_item_title w-100 d-flex justify-content-between align-items-center">
                <NavLink to="/category">
                  <div className="category_item__p d-flex justify-content-between w-100">
                    <p title="Test">Rubber & Plastics</p>
                    <i className="fas fa-chevron-right mt-1" />
                  </div>
                </NavLink>
                <div className="subcategories d-flex justify-content-around">
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex w-100 category_item">
              <div className="w-25">
                <img src={plastic} alt="" />
              </div>
              <div className="category_item_title w-100 d-flex justify-content-between align-items-center">
                <NavLink to="/category">
                  <div className="category_item__p d-flex justify-content-between w-100">
                    <p title="Test">Rubber & Plastics</p>
                    <i className="fas fa-chevron-right mt-1" />
                  </div>
                </NavLink>
                <div className="subcategories d-flex justify-content-around">
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex w-100 category_item">
              <div className="w-25">
                <img src={plastic} alt="" />
              </div>
              <div className="category_item_title w-100 d-flex justify-content-between align-items-center">
                <NavLink to="/category">
                  <div className="category_item__p d-flex justify-content-between w-100">
                    <p title="Test">Rubber & Plastics</p>
                    <i className="fas fa-chevron-right mt-1" />
                  </div>
                </NavLink>
                <div className="subcategories d-flex justify-content-around">
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                  <div>
                    <h6>Rubbers</h6>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                    <NavLink to="/sub-category">
                      <p>Plastic Products</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex w-100 category_item">
              <div className="w-25">
                <img src={allCategoriesIcon} alt="" />
              </div>
              <div className="category_item_title w-100 d-flex justify-content-between align-items-center">
                <NavLink to="/all-categories">
                  <div className="category_item__p d-flex justify-content-between w-100">
                    <p title="Test">All Categories</p>
                    <i className="fas fa-chevron-right mt-1" />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="home_nav_content d-flex flex-wrap">
            <div className="nav_content_btn d-flex flex-column justify-content-center align-items-center">
              <button onClick={leftSlide}>
                <i className="fas fa-chevron-left" />
              </button>
            </div>
            <div className="nav_content_body d-flex">
              <div className="w-50 d-flex flex-column justify-content-between nav_content_info_lg">
                <div>
                  <h2>
                    We connect <br />
                    Buyers and Sellers
                  </h2>
                  <p>
                    Uzbekmart is India’s largest online B2B
                    marketplace, connecting buyers with suppliers.
                  </p>
                </div>
                <div className="d-flex w-100">
                  <div className="d-flex flex-column align-items-center">
                    <img src={securityDark} alt="" />
                    <p className="text-center">Trusted platform</p>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <img src={circleStar} alt="" />
                    <p className="text-center">Safe & Secure</p>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <img src={questionDialog} alt="" />
                    <p className="text-center">Quick assistance</p>
                  </div>
                </div>
              </div>
              <div className="w-50 d-flex flex-column nav_content_carousel_wrapper">
                <div className="nav_content_carousel h-100">
                  {
                    allSlides.map((item, index) => {
                      return (
                        <div key={index} className="nav_content_carousel_item">
                          <img className="w-100 h-100" src={item} alt="" />
                          <div className="carousel_img_footer text-white">
                            <p className="text-white">
                              Uzbekmart is Uzbekistan’s largest online B2B
                              marketplace, connecting buyers with suppliers.
                            </p>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
              <div className="w-50 d-flex flex-column justify-content-between nav_content_info_sm">
                <div className="content_info_text">
                  <h2>
                    We connect <br />
                    <strong>Buyers</strong> and <strong>Sellers</strong>
                  </h2>
                  <p>
                    Uzbekmart is India’s largest online B2B
                    marketplace, connecting buyers with suppliers.
                  </p>
                </div>
                <div className="d-flex w-100 content_info_icons">
                  <div className="d-flex flex-column align-items-center">
                    <img src={securityDark} alt="" />
                    <p className="text-center">Trusted platform</p>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <img src={circleStar} alt="" />
                    <p className="text-center">Safe & Secure</p>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <img src={questionDialog} alt="" />
                    <p className="text-center">Quick assistance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav_content_btn d-flex flex-column justify-content-center align-items-center">
              <button onClick={rightSlide}>
                <i className="fas fa-chevron-right" />
              </button>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center home_carousel_control_lg">
              {
                allSlides.map((item, index) => {
                  return (
                    <span key={index} className="carousel_dot" />
                  );
                })
              }
              <div className="slider_dots_changer"/>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center align-items-center home_carousel_control_sm">
            <span className="active" />
            <span />
            <span />
          </div>
        </div>
        <div className="section_1">
          <div className="label d-flex align-items-center">
            <h1>New Added Products</h1>
            <span className="w-100" />
          </div>
          <div className="w-100 products_row d-flex">
            <Card className="home_card" />
            <Card className="home_card" />
            <Card className="home_card" />
            <Card className="home_card" />
            <Card className="home_card" />
          </div>
          <div className="w-100 d-flex justify-content-end">
            <button className="product_row_more_btn">More</button>
          </div>
        </div>
        <div className="section_2">
          <div className="label d-flex align-items-center">
            <h1>Most view</h1>
            <span className="w-100" />
          </div>
          <div className="w-100 products_row d-flex">
            <Card className="home_card" />
            <Card className="home_card" />
            <Card className="home_card" />
            <Card className="home_card" />
            <Card className="home_card" />
          </div>
          <div className="w-100 d-flex justify-content-end">
            <button className="product_row_more_btn">More</button>
          </div>
        </div>
        <div className="section_3">
          <div className="label d-flex align-items-center">
            <h1>Recommended for you</h1>
            <span className="w-100" />
          </div>
          <div className="w-100 products_row d-flex">
            <Card className="home_card" />
            <Card className="home_card" />
            <Card className="home_card" />
            <Card className="home_card" />
            <Card className="home_card" />
          </div>
          <div className="w-100 d-flex justify-content-end">
            <button className="product_row_more_btn">More</button>
          </div>
        </div>
        <FullCard className="full_card_wrapper" />
        <FullCard className="full_card_wrapper" />
        <FullCard className="full_card_wrapper" />
        <div className="section_4">
          <div className="label d-flex align-items-center">
            <h1>Request for Quotation</h1>
            <p>Customization Service</p>
            <span className="w-100" />
          </div>
          <div className="w-100 d-flex justify-content-between section_4_items_wrapper">
            <div className="section_4_item1">
              <div
                className="w-100 h-100 quotation_header text-white text-center d-flex flex-column justify-content-center align-items-center">
                <h6 className="w-100">Global Sourcing Marketplace</h6>
                <div className="d-flex w-100">
                  <div className="w-50">
                    <p className="quotation_title">10000+</p>
                    <p className="quotation_info">RFQs</p>
                  </div>
                  <div className="w-50 ">
                    <p className="quotation_title">20+</p>
                    <p className="quotation_info">Avg Quotation Duration</p>
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div className="w-50">
                    <p className="quotation_title">148000+</p>
                    <p className="quotation_info">Active Suppliers</p>
                  </div>
                  <div className="w-50">
                    <p className="quotation_title">278</p>
                    <p className="quotation_info">Industries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="label-tablet d-flex align-items-center">
              <p>Customization Service</p>
              <span className="w-100" />
            </div>
            <div className="section_4_item2 d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-white">One Request Multiple Options</h4>
              <hr color="white" />
              <div className="w-100 d-flex flex-wrap">
                <div className="quotation_form d-flex flex-column justify-content-center align-items-center">
                  <input className="quotation_input1" type="text" placeholder="What are you looking for" />
                  <div className="w-100 d-flex justify-content-center">
                    <input className="quotation_input2" type="text" placeholder="Quantity" />
                    <input className="quotation_input3" type="text" placeholder="Piece / Pieces" />
                  </div>
                  <div className="w-100 d-flex justify-content-center">
                    <button className="quotation_btn">Submit Request</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_5">
          <div className="label d-flex align-items-center">
            <div className="label_title_wrapper">
              <h1>OUR TRADE SERVICES ARE HERE FOR YOU</h1>
              <p>Uzbekmart.com’s trade services help ensure that your purchases are protected.</p>
            </div>
            <span className="w-100" />
          </div>
          <div className="w-100 section_5_content d-flex justify-content-between flex-wrap">
            <div className="section_5_card">
              <div className="section_5_card_img w-100 d-flex align-items-end">
                <div className="learn_more text-white">
                  <h4>Benefits</h4>
                  <ul>
                    <li>On - Time Shipping</li>
                    <li>On - Time Shipping</li>
                  </ul>
                  <hr className="m-0" width="20%" color="white" />
                  <button className="learn_more_btn text-white d-flex align-items-center">
                    <div className="text-white mb-1">
                      Learn more
                    </div>
                    <i className="fas fa-long-arrow-alt-right" />
                  </button>
                </div>
                <p className="text-white font-weight-bold">Trade Assurance is a free order protection service offered by
                  Uzbekmart</p>
              </div>
              <div className="section_5_card_footer d-flex justify-content-between align-items-center">
                <div>
                  <h4>Trade Insurance</h4>
                  <p>Order Protection</p>
                </div>
                <img src={dollarIcon} alt="" />
              </div>
            </div>
            <div className="section_5_card">
              <div className="section_5_card_img w-100 d-flex align-items-end">
                <div className="learn_more text-white">
                  <h4>Benefits</h4>
                  <ul>
                    <li>On - Time Shipping</li>
                    <li>On - Time Shipping</li>
                  </ul>
                  <hr className="m-0" width="20%" color="white" />
                  <button className="learn_more_btn text-white d-flex align-items-center">
                    <div className="text-white mb-1">
                      Learn more
                    </div>
                    <i className="fas fa-long-arrow-alt-right" />
                  </button>
                </div>
                <p className="text-white font-weight-bold">Trade Assurance is a free order protection service offered by
                  Uzbekmart</p>
              </div>
              <div className="section_5_card_footer d-flex justify-content-between align-items-center">
                <div>
                  <h4>Trade Insurance</h4>
                  <p>Order Protection</p>
                </div>
                <img src={dollarIcon} alt="" />
              </div>
            </div>
            <div className="section_5_card">
              <div className="section_5_card_img w-100 d-flex align-items-end">
                <div className="learn_more text-white">
                  <h4>Benefits</h4>
                  <ul>
                    <li>On - Time Shipping</li>
                    <li>On - Time Shipping</li>
                  </ul>
                  <hr className="m-0" width="20%" color="white" />
                  <button className="learn_more_btn text-white d-flex align-items-center">
                    <div className="text-white mb-1">
                      Learn more
                    </div>
                    <i className="fas fa-long-arrow-alt-right" />
                  </button>
                </div>
                <p className="text-white font-weight-bold">Trade Assurance is a free order protection service offered by
                  Uzbekmart</p>
              </div>
              <div className="section_5_card_footer d-flex justify-content-between align-items-center">
                <div>
                  <h4>Trade Insurance</h4>
                  <p>Order Protection</p>
                </div>
                <img src={dollarIcon} alt="" />
              </div>
            </div>
            <div className="section_5_card">
              <div className="section_5_card_img w-100 d-flex align-items-end">
                <div className="learn_more text-white">
                  <h4>Benefits</h4>
                  <ul>
                    <li>On - Time Shipping</li>
                    <li>On - Time Shipping</li>
                  </ul>
                  <hr className="m-0" width="20%" color="white" />
                  <button className="learn_more_btn text-white d-flex align-items-center">
                    <div className="text-white mb-1">
                      Learn more
                    </div>
                    <i className="fas fa-long-arrow-alt-right" />
                  </button>
                </div>
                <p className="text-white font-weight-bold">Trade Assurance is a free order protection service offered by
                  Uzbekmart</p>
              </div>
              <div className="section_5_card_footer d-flex justify-content-between align-items-center">
                <div>
                  <h4>Trade Insurance</h4>
                  <p>Order Protection</p>
                </div>
                <img src={dollarIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="section_6">
          <div className="label">
            <h1>Choose Company for Purchasing Products</h1>
            <p>It will be easier for keeping get in touch as well as purchasing quality products as sale</p>
          </div>
          <div className="w-100 d-flex flex-wrap company_card_row">
            <CompanyCard classname="company_card_wrapper" />
            <CompanyCard classname="company_card_wrapper" />
            <CompanyCard classname="company_card_wrapper" />
            <CompanyCard classname="company_card_wrapper" />
            <CompanyCard classname="company_card_wrapper" />
            <CompanyCard classname="company_card_wrapper" />
            <CompanyCard classname="company_card_wrapper" />
            <CompanyCard classname="company_card_wrapper" />
          </div>
        </div>
        <div className="section_7 w-100 d-flex">
          <div
            className="section_7_item w-25 d-flex flex-column align-items-center justify-content-center font-weight-bold text-center">
            <img className="section_7_item_img" src={shipIcon} alt="" />
            <div className="section_7_item_text">
              <div>Under Uzbekistan Export Association</div>
              <p>Everything is controlled</p>
            </div>
          </div>
          <div
            className="section_7_item w-25 d-flex flex-column align-items-center font-weight-bold text-center">
            <img className="section_7_item_img" src={cardIcon} alt="" />
            <div className="section_7_item_text">
              <div>Available Payment Methods</div>
              <p>Uzcard, Humo, Master/Visa card</p>
            </div>
          </div>
          <div
            className="section_7_item w-25 d-flex flex-column align-items-center font-weight-bold text-center">
            <img className="section_7_item_img" src={safeIcon} alt="" />
            <div className="section_7_item_text">
              <div>100% Confidential</div>
              <p>Secured by Association</p>
            </div>
          </div>
          <div
            className="section_7_item w-25 d-flex flex-column align-items-center font-weight-bold text-center">
            <img className="section_7_item_img" src={chatIcon} alt="" />
            <div className="section_7_item_text">
              <div>Experienced</div>
              <p>2 years experienced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;