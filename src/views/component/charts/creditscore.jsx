import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const CreditScoreProgressBar = () => {
  const creditScore = 800; // Replace with your actual credit score value
  const maxCreditScore = 850; // Replace with the maximum credit score value

  const progress = (creditScore / maxCreditScore) * 100;

  let status;
  let color;
  let pin = false;
  if (creditScore >= 800) {
    status = 'Excellent';
    color = 'green  ';
    pin = true;
  } else if (creditScore >= 700) {
    status = 'Good';
    color = 'info';
  } else if (creditScore >= 600) {
    status = 'Fair';
    color = 'warning';
  } else {
    status = 'Poor';
    color = 'danger';
  }


  const progressStyle = {
    "background": "url(/images/creditscore.png)",
    "background-size": "cover",
  };

  return (
    <>    <div class="d-flex justify-content-between pt-3">
        <div>
            <span class="title">Credit Score</span>
            <span class="p-2 text-success badge bg-green">{status}</span>
        </div>
        <h3 class="amount text-success">{creditScore}</h3>
    </div>
    <div className="progress-with-icon">

      <ProgressBar now={progress} className='progress-bar-container' variant={"transparent"} style={progressStyle} />
      <i className={`fa fa-light fa-circle-dot progress-icon text-${color}`} style={{left:progress+'%'}}></i>
    </div>
    </>
  );
};

export default CreditScoreProgressBar;