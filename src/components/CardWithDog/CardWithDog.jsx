import React from 'react';
import './CardWithDog.css';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import dog from '../../images/dog.png';

function CardWithDog({ className }) {
  return (
    <div className={className}>
      <div className="dog_card">
        <div className="dog_card_skewed" />
        <span className="d-flex flex-column align-items-center">
                <h5>Total </h5>
                <p>57 222 111</p>
                <ProgressBar progress={50} color="#00D86C" className="dog_card_progress_bar_wrapper" />
                <img src={dog} alt="" />
              </span>

      </div>
    </div>
  );
}

export default CardWithDog;