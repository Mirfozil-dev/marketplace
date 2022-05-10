import React from 'react';
import './AddReportCard.css';

function AddReportCard({ className }) {
  return (
    <div className={className}>
      <div className="w-100 h-100 d-flex justify-content-center align-items-center add_report_card">
        <button>+</button>
      </div>
    </div>
  );
}

export default AddReportCard;