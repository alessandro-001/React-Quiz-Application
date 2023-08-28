import React, { useState } from 'react';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import './Quiz.css';
import Question from '../../components/Questions/Question';


export default function Quiz({ name, questions, score, setScore, setQuestions }) {
  
  const [options, setOptions] = useState();
  const [currentQuestions, setCurrentQuestions] = useState(0);

  useEffect(() => {

    setOptions(questions && handleMixQuest([
      questions[currentQuestions]?.correct_answer,
      ...questions[currentQuestions]?.incorrect_answers
    ]))
  }, [questions, currentQuestions]);

    console.log(options);

  function handleMixQuest(option) {
    return option.sort(() => Math.random() - 0.5);
  }

  return (
    <div className='quiz'>
      <h2 className="subtitle">Hello {name} !</h2>
      {questions ? (
        <>
          <div className='quizCategory'>
            <span>{questions[currentQuestions].category}</span>
            <span>Points: {score}</span>
          </div>
          <Question 
            currentQuestions={currentQuestions}
            setCurrentQuestions={setCurrentQuestions}
            questions={questions}
            options={options}
            correct={questions[currentQuestions]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
        ) : (
        <CircularProgress 
          style={{margin: 100}}
          thickness={22}
          size={110}
        />
        )}
    </div>
  )
}
