import React from 'react';
import './Category.css';
import CollectionCard from '../../components/CollectionCard/CollectionCard.jsx';
import CategoryProductCard from '../../components/CategoryProductCard/CategoryProductCard.jsx';
import CategoryBanner from '../../components/CategoryBanner/CategoryBanner.jsx';

function Category() {
  let subcategories = ['Badge', 'Garment Beads', 'Hook & Loop Tape', 'Other Garment Accessories',
    'Badge', 'Garment Beads', 'Hook & Loop Tape', 'Other Garment Accessories',
    'Badge', 'Garment Beads', 'Hook & Loop Tape', 'Other Garment Accessories',
    'Badge', 'Garment Beads', 'Hook & Loop Tape', 'Other Garment Accessories',
    'Badge', 'Garment Beads', 'Hook & Loop Tape', 'Other Garment Accessories',
    'Badge', 'Garment Beads', 'Hook & Loop Tape', 'Other Garment Accessories',
    'Badge', 'Garment Beads', 'Hook & Loop Tape', 'Other Garment Accessories'];
  return (
    <div className="category_page_wrapper">
      <CategoryBanner title="Apparel,Textiles & Accessories" />
      <div className="category_page_content custom_container d-flex">
        <div className="sub_categories_lg">
          <h1>Category</h1>
          <div className="sub_category_lg d-flex justify-content-between align-items-center w-100">
            <p>Garment & Processing Accessories</p>
            <i className="fas fa-chevron-right mt-1" />
            <div className="sub_category_dropdown_lg">
              {
                subcategories.map((item, index) => {
                  return (
                    <p key={index} className="font-weight-bold">{item}</p>
                  );
                })
              }
            </div>
          </div>
          <div className="sub_category_lg d-flex justify-content-between align-items-center w-100">
            <p>Garment & Processing Accessories</p>
            <i className="fas fa-chevron-right mt-1" />
            <div className="sub_category_dropdown_lg">
              {
                subcategories.map((item, index) => {
                  return (
                    <p key={index} className="font-weight-bold">{item}</p>
                  );
                })
              }
            </div>
          </div>
          <div className="sub_category_lg d-flex justify-content-between align-items-center w-100">
            <p>Garment & Processing Accessories</p>
            <i className="fas fa-chevron-right mt-1" />
            <div className="sub_category_dropdown_lg">
              {
                subcategories.map((item, index) => {
                  return (
                    <p key={index} className="font-weight-bold">{item}</p>
                  );
                })
              }
            </div>
          </div>
          <div className="sub_category_lg d-flex justify-content-between align-items-center w-100">
            <p>Garment & Processing Accessories</p>
            <i className="fas fa-chevron-right mt-1" />
            <div className="sub_category_dropdown_lg">
              {
                subcategories.map((item, index) => {
                  return (
                    <p key={index} className="font-weight-bold">{item}</p>
                  );
                })
              }
            </div>
          </div>
          <div className="sub_category_lg d-flex justify-content-between align-items-center w-100">
            <p>Garment & Processing Accessories</p>
            <i className="fas fa-chevron-right mt-1" />
            <div className="sub_category_dropdown_lg">
              {
                subcategories.map((item, index) => {
                  return (
                    <p key={index} className="font-weight-bold">{item}</p>
                  );
                })
              }
            </div>
          </div>
          <div className="sub_category_lg d-flex justify-content-between align-items-center w-100">
            <p>Garment & Processing Accessories</p>
            <i className="fas fa-chevron-right mt-1" />
            <div className="sub_category_dropdown_lg">
              {
                subcategories.map((item, index) => {
                  return (
                    <p key={index} className="font-weight-bold">{item}</p>
                  );
                })
              }
            </div>
          </div>
          <div className="sub_category_lg d-flex justify-content-between align-items-center w-100">
            <p>Garment & Processing Accessories</p>
            <i className="fas fa-chevron-right mt-1" />
            <div className="sub_category_dropdown_lg">
              {
                subcategories.map((item, index) => {
                  return (
                    <p key={index} className="font-weight-bold">{item}</p>
                  );
                })
              }
            </div>
          </div>
          <div className="sub_category_lg d-flex justify-content-between align-items-center w-100">
            <p>Garment & Processing Accessories</p>
            <i className="fas fa-chevron-right mt-1" />
            <div className="sub_category_dropdown_lg">
              {
                subcategories.map((item, index) => {
                  return (
                    <p key={index} className="font-weight-bold">{item}</p>
                  );
                })
              }
            </div>
          </div>
          <div className="sub_category_lg d-flex justify-content-between align-items-center w-100">
            <p>Garment & Processing Accessories</p>
            <i className="fas fa-chevron-right mt-1" />
            <div className="sub_category_dropdown_lg">
              {
                subcategories.map((item, index) => {
                  return (
                    <p key={index} className="font-weight-bold">{item}</p>
                  );
                })
              }
            </div>
          </div>
        </div>
        <div className="sub_categories_sm flex-wrap justify-content-between w-100">
          <div className="sub_category_sm">
            <p>Garment & Processing Accessories</p>
            <i className="sub_category_dropdown_icon fas fa-chevron-right mt-1" />
            <div className="sub_category_dropdown_sm">
              {
                subcategories.map((item, index) => {
                  return (
                    <p key={index} className="font-weight-bold">{item}</p>
                  );
                })
              }
            </div>
          </div>
          <div className="sub_category_sm">
            <p>Garment & Processing Accessories</p>
            <i className="sub_category_dropdown_icon fas fa-chevron-right mt-1" />
            <div className="sub_category_dropdown_sm">
              {
                subcategories.map((item, index) => {
                  return (
                    <p key={index} className="font-weight-bold">{item}</p>
                  );
                })
              }
            </div>
          </div>
          <div className="sub_category_sm">
            <p>Garment & Processing Accessories</p>
            <i className="sub_category_dropdown_icon fas fa-chevron-right mt-1" />
            <div className="sub_category_dropdown_sm">
              {
                subcategories.map((item, index) => {
                  return (
                    <p key={index} className="font-weight-bold">{item}</p>
                  );
                })
              }
            </div>
          </div>
          <div className="sub_category_sm">
            <p>Garment & Processing Accessories</p>
            <i className="sub_category_dropdown_icon fas fa-chevron-right mt-1" />
            <div className="sub_category_dropdown_sm">
              {
                subcategories.map((item, index) => {
                  return (
                    <p key={index} className="font-weight-bold">{item}</p>
                  );
                })
              }
            </div>
          </div>
        </div>
        <div className="category_page_main_content">
          <h1>Men’s Wear</h1>
          <div className="mobile_cards_row flex-wrap">
            <div className="collection_card_row w-100 d-flex justify-content-between">
              <CollectionCard className="collection_card_wrapper" />
              <CollectionCard className="collection_card_wrapper" />
            </div>
            <div className="category_product_cards_row d-flex justify-content-between flex-wrap">
              <CategoryProductCard className="category_product_card_wrapper" />
              <CategoryProductCard className="category_product_card_wrapper" />
              <CategoryProductCard className="category_product_card_wrapper" />
            </div>
            <div className="w-100 d-flex justify-content-end">
              <button className="category_more_btn">More</button>
            </div>
          </div>
          <h1>Men’s Wear</h1>
          <div className="mobile_cards_row flex-wrap">
            <div className="collection_card_row w-100 d-flex justify-content-between">
              <CollectionCard className="collection_card_wrapper" />
              <CollectionCard className="collection_card_wrapper" />
            </div>
            <div className="category_product_cards_row d-flex justify-content-between flex-wrap">
              <CategoryProductCard className="category_product_card_wrapper" />
              <CategoryProductCard className="category_product_card_wrapper" />
              <CategoryProductCard className="category_product_card_wrapper" />
            </div>
            <div className="w-100 d-flex justify-content-end">
              <button className="category_more_btn">More</button>
            </div>
          </div>
          <h1>Men’s Wear</h1>
          <div className="mobile_cards_row flex-wrap">
            <div className="collection_card_row w-100 d-flex justify-content-between">
              <CollectionCard className="collection_card_wrapper" />
              <CollectionCard className="collection_card_wrapper" />
            </div>
            <div className="category_product_cards_row d-flex justify-content-between flex-wrap">
              <CategoryProductCard className="category_product_card_wrapper" />
              <CategoryProductCard className="category_product_card_wrapper" />
              <CategoryProductCard className="category_product_card_wrapper" />
            </div>
            <div className="w-100 d-flex justify-content-end">
              <button className="category_more_btn">More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;