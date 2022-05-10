import React from 'react';
import './AllCategories.css';
import CategoryCard from '../../components/CategoryCard/CategoryCard.jsx';
import CategoryTitleCard from '../../components/CategoryTitleCard/CategoryTitleCard.jsx';
import SubCategoriesCard from '../../components/SubCategoriesCard/SubCategoriesCard.jsx';

function AllCategories() {
  return (
    <div className="all_categories_page_wrapper">
      <div className="all_categories_banner w-100 d-flex justify-content-center align-items-center">
        <h1>All Category</h1>
      </div>
      <div className="products_by_category w-100">
        <div className="custom_container">
          <h3>Products by Category</h3>
          <div className="category_cards_row">
            <CategoryCard className="category_card_wrapper" />
            <CategoryCard className="category_card_wrapper" />
            <CategoryCard className="category_card_wrapper" />
            <CategoryCard className="category_card_wrapper" />
            <CategoryCard className="category_card_wrapper" />
            <CategoryCard className="category_card_wrapper" />
            <CategoryCard className="category_card_wrapper" />
            <CategoryCard className="category_card_wrapper" />
            <CategoryCard className="category_card_wrapper" />
            <CategoryCard className="category_card_wrapper" />
            <CategoryCard className="category_card_wrapper" />
            <CategoryCard className="category_card_wrapper" />
          </div>
        </div>
      </div>
      <div className="custom_container">
        <CategoryTitleCard className="category_title_card_wrapper" />
        <div className="subcategories_card_row w-100">
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
        </div>
        <CategoryTitleCard className="category_title_card_wrapper" />
        <div className="subcategories_card_row w-100">
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
        </div>
        <CategoryTitleCard className="category_title_card_wrapper" />
        <div className="subcategories_card_row w-100">
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
        </div>
        <CategoryTitleCard className="category_title_card_wrapper" />
        <div className="subcategories_card_row w-100">
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
        </div>
        <CategoryTitleCard className="category_title_card_wrapper" />
        <div className="subcategories_card_row w-100">
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
        </div>
        <CategoryTitleCard className="category_title_card_wrapper" />
        <div className="subcategories_card_row w-100">
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
          <SubCategoriesCard className="subcategories_card_wrapper" />
        </div>
      </div>
    </div>
  );
}

export default AllCategories;