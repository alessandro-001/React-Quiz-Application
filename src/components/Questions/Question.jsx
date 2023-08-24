import React, { useState } from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Question.css';
import ReactMarkdown from 'react-markdown';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Question({
  currentQuestions, 
  setCurrentQuestions, 
  questions, 
  options, 
  correct, 
  score, 
  setScore, 
  setQuestions
}) {
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  function handleSelection(opt) {
    if (selected === opt && selected === correct) {
      return 'select';
    } else if (selected === opt && selected !== correct) {
      return 'wrong';
    } else if (opt === correct) {
      return 'select';
    }
  }

  function handleQuestControl(opt) {
    setSelected(opt);
    if (opt === correct) setScore(score +1);
    setError(false);
  }

  function handleGiveUp() {
    setCurrentQuestions(0);
    setQuestions();
  }

  function handleNext() {
    if (currentQuestions > 8) {
      navigate('/result', { method: 'push' });
    } else if (selected) {
      setCurrentQuestions(currentQuestions + 1);
      setSelected();
    } else {
      setError("Select option first");
    }
  }


  return (
    <div className='question'>
      <h1>Question {currentQuestions + 1}</h1>
      <div className='singleQuestion'>
      <ReactMarkdown className='questionText'>{questions[currentQuestions].question}</ReactMarkdown>
        <div className='options'>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options && options.map((opt) => {
            return (
            <button 
              onClick={() => handleQuestControl(opt)}
              className={`singleOpt ${selected && handleSelection(opt)}`}
              key={opt}
              disabled={selected}
            >{opt}</button>)
          })}
        </div>
        <div className='controllers'>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            style={{width: 140}}
            href='/'
            onClick={handleGiveUp}
          >Give up</Button>
          <Button
            variant='contained'
            color='primary'
            size='large'
            style={{width: 140}}
            onClick={handleNext}
          >Next</Button>
        </div>
      </div>
    </div>
  )
}

