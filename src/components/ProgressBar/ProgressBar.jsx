import React from 'react';
import './ProgressBar.css';

function ProgressBar({ className, progress, color }) {

  let result = '';
  if (progress === 100) {
    result = 'progress_line w-100';
  } else if (progress >= 75 && progress < 100) {
    result = 'progress_line w-75';
  } else if (progress >= 50 && progress < 75) {
    result = 'progress_line w-50';
  } else if (progress >= 25 && progress < 50) {
    console.log('iwlavomman');
    result = 'progress_line w-25';
  } else {
    result = 'progress_line w-0';
  }
  console.log(progress);

  return (
    <div className={className}>
      <div style={{ border: 'solid 1px' + color }} className="progress_bar">
        <div style={{ background: color }} className={result} />
      </div>
    </div>
  );
}

export default ProgressBar;