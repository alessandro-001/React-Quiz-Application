import React, { useState } from 'react'

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

  console.log(currentQuestions);

  return (
    <div>
      <h1>Question {currentQuestions + 1}</h1>
    </div>
  )
}

