import React, { useState } from 'react';

const Proficiency = () => {
  const [reactProficiency, setReactProficiency] = useState(0);
  const [djangoProficiency, setDjangoProficiency] = useState(0);
  const [mongoProficiency, setMongoProficiency] = useState(0);
  const [codingTime, setCodingTime] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    'What is your proficiency level on REACT?',
    'What is your proficiency level on Django?',
    'What is your proficiency level on MANGO?',
    'How much time have you invested into coding?',
  ];

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
      case 3:
        setCodingTime(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // Handle the submitted answer here if needed

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <h4>Lets Start...</h4>

      {currentQuestion < questions.length ? (
        <div>
          <h3>{questions[currentQuestion]}</h3>
          <div>
            {[1, 2, 3, 4, 5].map((value) => (
              <button key={value} onClick={() => handleButtonClick(value)}>
                {value}
              </button>
            ))}
          </div>

          <button onClick={handleSubmit}>Submit</button>
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
