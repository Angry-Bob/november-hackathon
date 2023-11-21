import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Proficiency.css';

const Proficiency = () => {
  const [reactProficiency, setReactProficiency] = useState(0);
  const [djangoProficiency, setDjangoProficiency] = useState(0);
  const [mongoProficiency, setMongoProficiency] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const navigate = useNavigate();

  const questions = [
    'What is your proficiency level on REACT?',
    'What is your proficiency level on Django?',
    'What is your proficiency level on MANGO?',
  ];

  const startMessages = ['Lets Start...', 'Next...', 'Next...'];

  const handleButtonClick = (value) => {
    switch (currentQuestion) {
      case 0:
        setReactProficiency(value);
        break;
      case 1:
        setDjangoProficiency(value);
        break;
      case 2:
        setMongoProficiency(value);
        break;
      default:
        break;
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);

    // If all questions are answered, navigate to the /proficiency2 route
    if (currentQuestion === questions.length - 1) {
      navigate('/proficiency2');
    }
  };

  const handleBack = () => {
    // Go back to the previous page
    navigate('proficiency');
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
            {[1, 2, 3, 4, 5].map((value) => (
              <button className='Proficiency' key={value} onClick={() => handleButtonClick(value)}>
                {value}
              </button>
            ))}
          </div>

          {currentQuestion > 0 && (
            <button className='Proficiency-Restart' onClick={handleBack}>Restart</button>
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
