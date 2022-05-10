import React from 'react';
import star from '../../images/star.png';
import './CompanyCard.css';
import companyImg from '../../images/Logo.png';


function showMore(e) {
  let card = e.target.closest('.company_card');
  card.classList.add('card_active');
  let img = card.querySelectorAll('.company_card_img img')[0];
  img.classList.add('img_active');
  let content = card.querySelectorAll('.card_content_wrapper')[0];
  content.classList.add('content_hidden');
  setTimeout(() => {
    let more_content = card.querySelectorAll('.more_content')[0];
    more_content.classList.remove('content_hidden');
    more_content.classList.add('active_content');
  }, 200);
}

function hideMore(e) {
  let card = e.target.closest('.company_card');
  card.classList.remove('card_active');
  let img = card.querySelectorAll('.company_card_img img')[0];
  img.classList.remove('img_active');
  let content = card.querySelectorAll('.card_content_wrapper')[0];
  content.classList.remove('content_hidden');
  let more_content = card.querySelectorAll('.more_content')[0];
  more_content.classList.remove('active_content');
  more_content.classList.add('content_hidden');
  setTimeout(() => {
    content.classList.remove('content_hidden');
  }, 200);
}

function CompanyCard({ classname }) {
  return (
    <div className={classname}>
      <div className="company_card d-flex flex-column align-items-center">
        <div className="card_content_wrapper d-flex flex-column align-items-center w-100 h-100">
          <div className="company_card_img w-100 d-flex justify-content-center align-items-center">
            <img className="w-100" src={companyImg} alt="" />
          </div>
          <h3>Uzbekmart</h3>
          <p>Visionary zero tolerance service-desk</p>
          <div className="company_card_body d-flex w-100 justify-content-between">
            <div className="company_card_body_item text-center">
              <h5>Products</h5>
              <p>7884</p>
            </div>
            <div className="company_card_body_item text-center">
              <h5>Sold</h5>
              <p>2350</p>
            </div>
            <div className="company_card_body_item text-center">
              <h5>Avg Price</h5>
              <p>$683</p>
            </div>
          </div>
          <div className="company_card_rating d-flex justify-content-between">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <button onClick={showMore} className="company_card_btn">More</button>
        </div>
        <div className="more_content content_hidden d-flex flex-column align-items-center">
          <div className="company_card_img w-100 d-flex justify-content-center align-items-center">
            <img className="w-100" src={companyImg} alt="" />
          </div>
          <h3 className="text-center">About Uzbekmart</h3>
          <p className="text-center">Visionary zero tolerance service-desk Visionary zero tolerance
            service-deskVisionary zero tolerance
            service-desk</p>
          <button onClick={hideMore} className="company_card_btn mt-3">Hide</button>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;