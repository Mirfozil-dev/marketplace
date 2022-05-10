import React from 'react';
import './BreadCrumbs.css';

function BreadCrumbs({ className, items }) {
  return (
    <div className={className}>
      <div className="d-flex custom-breadcrumbs align-items-center">
        <p>Home</p>
        {
          items.map((item, index) => {
            return (
              <div key={index} className="d-flex align-items-center">
                <i className="fas fa-chevron-right" />
                <p>{item}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default BreadCrumbs;