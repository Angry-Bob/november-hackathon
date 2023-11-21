import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Proficiency.css';

const Proficiency = () => {
  const [codingTime, setCodingTime] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const navigate = useNavigate();

  const questions = [
    'How much time have you invested into coding?',
  ];

  const startMessages = ['Finally...'];

  const handleButtonClick = (value) => {
    switch (currentQuestion) {
      case 0:
        setCodingTime(value);
        break;
      default:
        break;
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);

    // If all questions are answered, navigate to the /matches route
    if (currentQuestion === questions.length - 1) {
      navigate('/matches');
    }
  };

  const handleBack = () => {
    // Go back to the /proficiency2 route
    navigate('/proficiency');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100; // Calculate progress percentage

  return (
    <div>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <h4>{startMessages[currentQuestion]}</h4>

      {currentQuestion < questions.length ? (
        <div>
          <h3>{questions[currentQuestion]}</h3>
          <div>
            {['A few weeks', '1-3 months', '3-6 months ', '6-12 months ','1+ years' ].map((value) => (
              <button key={value} onClick={() => handleButtonClick(value)}>
                {value}
              </button>
            ))}
          </div>
          
          {currentQuestion > 0 && (
            <button onClick={handleBack}>Back</button>
          )}
        </div>
      ) : (
        <div>
          <h4>Thank you for submitting your answers!</h4>
        </div>
      )}
    </div>
  );
};

export default Proficiency;
