import React from 'react';
import './HelpManager2.css';
import MostAskedQuestions from '../../components/MostAskedQuestions/MostAskedQuestions.jsx';
import QuestionsInput from '../../components/QuestionsInput/QuestionsInput.jsx';
import QuestionCard from '../../components/QuestionCard/QuestionCard.jsx';

function HelpManager2() {
  return (
    <div className="help_manager_page2_wrapper">
      <div className="help_manager_page2">
        <MostAskedQuestions />
        <div className="w-100 d-flex help_manager_page2_content">
          <div className="w-50 help_manager_page2_search">
            <QuestionsInput className="help_manager2_question_input" />
            <div className="d-flex w-75 justify-content-around help_manager2_question_card_row">
              <QuestionCard className="help_manager2_question_card" type="online_service" />
              <QuestionCard className="help_manager2_question_card" type="survey" />
            </div>
          </div>
          <div className="w-50 answer_cards_column">
            <div className="answer_card w-100">
              <h3>How can I apply for Gold Supplier Membership?</h3>
              <p>To apply for global gold supplier you may send an email to premium member in Uzbekmart.com to get help
                and ask questions. We would contact you on details.You may also check this page out to know more about
                Global Gold supplier.</p>
            </div>
            <div className="answer_card w-100">
              <h3>How can I apply for Gold Supplier Membership?</h3>
              <p>To apply for global gold supplier you may send an email to premium member in Uzbekmart.com to get help
                and ask questions. We would contact you on details.You may also check this page out to know more about
                Global Gold supplier.</p>
            </div>
            <div className="answer_card w-100">
              <h3>How can I apply for Gold Supplier Membership?</h3>
              <p>To apply for global gold supplier you may send an email to premium member in Uzbekmart.com to get help
                and ask questions. We would contact you on details.You may also check this page out to know more about
                Global Gold supplier.</p>
            </div>
            <div className="answer_card w-100">
              <h3>How can I apply for Gold Supplier Membership?</h3>
              <p>To apply for global gold supplier you may send an email to premium member in Uzbekmart.com to get help
                and ask questions. We would contact you on details.You may also check this page out to know more about
                Global Gold supplier.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpManager2;