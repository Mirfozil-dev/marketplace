import React from 'react';
import './MobileChat.css';
import avatar from '../../images/Ali.png';
import clipIcon from '../../images/clipIcon.svg';
import pictureIcon from '../../images/pictureIcon.svg';
import emojiIcon from '../../images/emojiIcon.svg';
import sendIcon from '../../images/sendIcon.svg';

function MobileChat() {
  return (
    <div className="mobile_chat_page_wrapper w-100 h-100">
      <div className="mobile_chat_page_body w-100">
        <div className="mobile_chat_page_body_blur w-100 h-100">
          <div className="messages_wrapper">
            <div className="partner_message_item">
              <div className="w-100 d-flex align-items-end">
                <div className="partner_message_avatar">
                  <img className="w-100" src={avatar} alt="" />
                </div>
                <div className="message_texts_wrapper">
                  <p className="partner_message_text">Lorem ipsum dolor</p>
                  <p className="partner_message_text">Lorem ipsum dolor sit amet consectetur adipiscing, elit aenean
                    inceptos
                    curabitur eget suscipit, rutrum scelerisque sociis natoque conubia. Cubilia natoque mattis eu,
                    suspendisse habitasse, conubia massa. Auctor donec bibendum gravida nulla luctus vivamus
                    habitasse
                    augue nibh dis sapien, tincidunt nisi curae penatibus fames eu potenti aliquet est habitant,
                    dictumst
                    a elementum integer quam orci cum dignissim rutrum </p>
                </div>
              </div>
              <p className="partner_message_date">2 weeks ago</p>
            </div>
            <div className="my_message_item">
              <div className="d-flex align-items-end">
                <div className="message_texts_wrapper d-flex flex-column align-items-end">
                  <p className="my_message_text">Lorem ipsum dolor sit amet consectetur adipiscing, elit aenean
                    inceptos
                    curabitur eget suscipit, rutrum scelerisque sociis natoque conubia. Cubilia natoque mattis eu,
                    suspendisse habitasse, conubia massa. Auctor donec bibendum gravida nulla luctus vivamus
                    habitasse
                    augue nibh dis sapien, tincidunt nisi curae penatibus fames eu potenti aliquet est habitant,
                    dictumst
                    a elementum integer quam orci cum dignissim rutrum </p>
                </div>
                <div className="my_message_avatar">
                  <img className="w-100" src={avatar} alt="" />
                </div>
              </div>
              <p className="my_message_date">2 weeks ago</p>
            </div>
            <div className="partner_message_item">
              <div className="w-100 d-flex align-items-end">
                <div className="partner_message_avatar">
                  <img className="w-100" src={avatar} alt="" />
                </div>
                <div className="message_texts_wrapper">
                  <p className="partner_message_text">Lorem ipsum dolor</p>
                  <p className="partner_message_text">Lorem ipsum dolor sit amet consectetur adipiscing, elit aenean
                    inceptos
                    curabitur eget suscipit, rutrum scelerisque sociis natoque conubia. Cubilia natoque mattis eu,
                    suspendisse habitasse, conubia massa. Auctor donec bibendum gravida nulla luctus vivamus
                    habitasse</p>
                </div>
              </div>
              <p className="partner_message_date">2 weeks ago</p>
            </div>
            <div className="my_message_item">
              <div className="d-flex align-items-end">
                <div className="message_texts_wrapper d-flex flex-column align-items-end">
                  <p className="my_message_text">Lorem ipsum dolor sit amet consectetur adipiscing, elit aenean
                    inceptos
                    curabitur eget suscipit, rutrum scelerisque sociis natoque conubia. Cubilia natoque mattis eu,
                    suspendisse habitasse, conubia massa. Auctor donec bibendum gravida nulla luctus vivamus
                    habitasse
                    augue nibh dis sapien, tincidunt nisi curae penatibus fames eu potenti aliquet est habitant,
                    dictumst
                    a elementum integer quam orci cum dignissim rutrum </p>
                </div>
                <div className="my_message_avatar">
                  <img className="w-100" src={avatar} alt="" />
                </div>
              </div>
              <p className="my_message_date">2 weeks ago</p>
            </div>
          </div>
          <div className="message_input_wrapper d-flex align-items-center">
            <button>
              <img src={clipIcon} alt="" />
            </button>
            <button>
              <img src={pictureIcon} alt="" />
            </button>
            <button>
              <img src={emojiIcon} alt="" />
            </button>
            <input placeholder="Type Message Here" className="w-100" type="text" />
            <button>
              <img src={sendIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileChat;