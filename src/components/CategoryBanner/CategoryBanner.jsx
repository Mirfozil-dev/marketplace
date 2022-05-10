import React from 'react';

function CategoryBanner({ className, title }) {
  return (
    <div className={className}>
      <div className="category_banner">
        <div className="category_banner_blur w-100 h-100 text-center d-flex align-items-center">
          <div className="custom_container">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;