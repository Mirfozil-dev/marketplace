import React from 'react';
import './HelpManager.css';
import helpManager from '../../images/help_manager.png';
import MostAskedQuestions from '../../components/MostAskedQuestions/MostAskedQuestions.jsx';
import QuestionsInput from '../../components/QuestionsInput/QuestionsInput.jsx';
import QuestionCard from '../../components/QuestionCard/QuestionCard.jsx';

function HelpManager() {
  return (
    <div className="help_manager_page_wrapper">
      <div className="help_manager_page">
        <MostAskedQuestions />
        <div className="help_manager_page_content_wrapper d-flex w-100">
          <div className="w-50 help_manager_page_content">
            <h1>
              We are here to <br />
              help you Ali
            </h1>
            <h6>
              We’ll walk you through fixing most things here, or <br /> connect you to someone if you need more help.
            </h6>
            <QuestionsInput className="help_manager_question_input" />
            <div className="d-flex w-75 justify-content-around help_manager_question_card_row_lg">
              <QuestionCard className="help_manager_question_card" type="online_service" />
              <QuestionCard className="help_manager_question_card" type="survey" />
            </div>
          </div>
          <div className="d-none w-75 justify-content-around help_manager_question_card_row_sm">
            <QuestionCard className="help_manager_question_card" type="online_service" />
            <QuestionCard className="help_manager_question_card" type="survey" />
          </div>
          <div className="w-50 d-flex align-items-center">
            <img className="w-100 help_manager_img" src={helpManager} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpManager;