import './ProductImgs.css';
import React, { useState } from 'react';
import image1 from '../../images/category_product.png';
import image2 from '../../images/product_img2.png';
import image3 from '../../images/product_img3.png';
import LikeIcon from '../../images/like_icon_outline.svg';

function ProductImgs({ className }) {
  let [slide, setSlide] = useState(0);

  const images = [image1, image2, image3, image1];

  function updateSlide(index) {
    // setSlide(index);
    console.log(index);
  }


  return (
    <div className={className}>
      <div className="product_img_wrapper d-flex justify-content-center align-items-center">
        <button className="product_imgs_like_btn">
          <img className="w-100 h-100" src={LikeIcon} alt="" />
        </button>
        <img className="h-100" src={images[slide]} alt="" />
      </div>
      <div className="d-flex product_imgs_nav justify-content-between">
        {
          images.map((item, index) => {
            return (
              <div className="product_imgs_nav_item" key={index}>
                <img className="w-100 h-100" src={item} alt="" />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default ProductImgs;