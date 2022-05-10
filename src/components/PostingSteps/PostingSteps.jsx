import React from 'react';
import './PostingSteps.css';

function PostingSteps({ className }) {
  return (
    <div className={className}>
      <h3>
        Steps
      </h3>
      <div className="d-flex">
        <div className="post_product_step_item d-flex align-items-center">
          <span>1</span>
          <p>Select Language Site & Category</p>
        </div>
        <div className="post_product_step_item d-flex align-items-center">
          <span>2</span>
          <p>Fill in the marketing information of product</p>
        </div>
        <div className="post_product_step_item d-flex align-items-center">
          <span>3</span>
          <p>Submit for approval</p>
        </div>
      </div>
    </div>
  );
}

export default PostingSteps;