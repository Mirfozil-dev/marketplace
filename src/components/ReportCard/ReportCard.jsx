import React from 'react';
import './ReportCard.css';

function ReportCard({ className, image, title, count }) {
  return (
    <div className={className}>
      <div className="report_card d-flex flex-column align-items-center justify-content-between">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default ReportCard;