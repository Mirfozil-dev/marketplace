import React from 'react';
import './MostAskedQuestions.css';

function mostAskedQuestions({ className }) {
  return (
    <div className={className}>
      <div className="most_asked_questions d-flex justify-content-between flex-wrap">
        <h5>Most Asked Questions</h5>
        <button>Introduction</button>
        <button>My Account</button>
        <button>Product & Shop</button>
        <button>Marketing</button>
        <button>Negotiation</button>
        <button>Dispute</button>
      </div>
    </div>
  );
}

export default mostAskedQuestions;