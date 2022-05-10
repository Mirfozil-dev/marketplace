import React from 'react';
import './ConversationCard.css';
import avatar from '../../images/Ali.png';

function ConversationCard({ className, active, isOnline, messagesCount }) {
  return (
    <div className={className}>
      <div className={
        active ? 'd-flex w-100 justify-content-between align-items-center conversation_card active' :
          'd-flex w-100 justify-content-between align-items-center conversation_card'
      }>
        <div className="d-flex w-100">
          <div className="conversation_card_avatar">
            <img className="w-100" src={avatar} alt="" />
            {
              isOnline && <span />
            }
          </div>
          <h5 className="">Woo Doo Vall</h5>
        </div>
        {
          messagesCount &&
          <div className="messages_count d-flex align-items-center justify-content-center">
            {messagesCount}
          </div>
        }
      </div>
    </div>
  );
}

export default ConversationCard;