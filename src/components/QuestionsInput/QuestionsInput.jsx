import React from 'react';
import './QuestionsInput.css';
import searchIcon from '../../images/search_icon.png';

function QuestionsInput({ className }) {
  return (
    <div className={className}>
      <div className="question_search_input d-flex align-items-center">
        <input className="w-100" type="text" placeholder="Enter Questions & Find More Solutions" />
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
}

export default QuestionsInput;