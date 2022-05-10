import React from 'react';
import './QuestionCard.css';
import clockIcon from '../../images/clock_icon.png';
import questionIcon from '../../images/question_icon.png';

function QuestionCard({ className, type }) {
  return (
    <div className={className}>
      {
        type === 'online_service' &&
        <div className="question_card d-flex flex-column align-items-center justify-content-between">
          <img src={clockIcon} alt="" />
          <div className="text-center">
            <h5>Online Service</h5>
            <p>
              You can ask any problems
              from manager as online
            </p>
          </div>
          <button>Chat</button>
        </div>
      }
      {
        type === 'survey' &&
        <div className="question_card d-flex flex-column align-items-center justify-content-between">
          <img src={questionIcon} alt="" />
          <div className="text-center">
            <h5>Survey</h5>
            <p>
              You can ask any problems
              from manager as online
            </p>
          </div>
          <button>Mark</button>
        </div>
      }
    </div>
  );
}

export default QuestionCard;