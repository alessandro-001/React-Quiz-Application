import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import './Result.css'
import { addDoc, collection } from 'firebase/firestore';
import db from './../../../firebase';

export default function Result({ username, score, difficulty, category }) {

  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate('/', { method: 'push' });
    }
  }, [username, history])
  
  const handleNew = async (e) => {
    e.preventDefault()
    const collectionRef = collection(db, 'leaderboard');
    const payload = {username: username, category: category, difficulty: difficulty, score: score}
    await addDoc(collectionRef, payload);
  }
  
  console.log(username, score, difficulty, category);

  return (
    <div className='result'>
      <p className='title'>Final Score: {score} points!</p>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >Back to home</Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/leaderboard"
      >Leaderboard</Button>
      <Button 
        variant="contained"
        color="primary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={handleNew}>Submit Score</Button>
      <p>See how you did! Submit your score and check the Leaderboard!</p>
    </div>
  )
}
