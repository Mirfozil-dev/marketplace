import React from 'react';
import CategoryBanner from '../../components/CategoryBanner/CategoryBanner.jsx';
import './Subcategory.css';
import CategoryProductCard from '../../components/CategoryProductCard/CategoryProductCard.jsx';

function Subcategory() {
  return (
    <div>
      <CategoryBanner title="Men’s Coat" />
      <div className="subcategory_page_content">
        <div className="custom_container">
          <h1>Men’s Coat</h1>
          <div className="row">
            <div className="subcategory_product_card_wrapper">
              <CategoryProductCard />
            </div>
            <div className="subcategory_product_card_wrapper">
              <CategoryProductCard />
            </div>
            <div className="subcategory_product_card_wrapper">
              <CategoryProductCard />
            </div>
            <div className="subcategory_product_card_wrapper">
              <CategoryProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subcategory;