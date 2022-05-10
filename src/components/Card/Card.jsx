import React, { useEffect, useState } from 'react';
import sofa from '../../images/Sofa.png';
import babyCar from '../../images/babyCar.png';
import './Card.css';
import { NavLink } from 'react-router-dom';


function Card({ className }) {

  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    {
      id: 1,
      img: sofa,
      price: 250.00,
    },
    {
      id: 2,
      img: babyCar,
      price: 250.00,
    },
    {
      id: 3,
      img: sofa,
      price: 250.00,
    },
    {
      id: 4,
      img: babyCar,
      price: 250.00,
    },
  ];

  useEffect(() => {
    setActiveSlide(images[0].id);
  }, []);

  return (
    <div className={className}>
      <div className="card d-flex flex-column align-items-center">
        <h5 className="card_title">Red Sofa</h5>
        <div className="card_imgs_wrapper d-flex align-items-center justify-content-center">
          {
            images.map((item) => {
              return (
                <div key={item.id}
                     className={item.id === activeSlide ? 'card_img__item active' : 'card_img__item'}>
                  <img className="card_img" src={item.img} alt="" />
                  <div className="card_price">
                    <p className="text-center">${item.price}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="mx-auto d-flex align-items-center">
          {
            images.map((item) => {
              return (
                <span key={item.id} onClick={() => setActiveSlide(item.id)}
                      className={activeSlide === item.id ? 'card_scroll_nav_item active' : 'card_scroll_nav_item'} />
              );
            })
          }
        </div>
        <div className="card_footer w-100 d-flex justify-content-center align-items-center">
          <NavLink to="/product">
            <button className="card_btn">
              More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Card;