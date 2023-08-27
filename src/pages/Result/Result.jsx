import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import './Result.css'

export default function Result({ name, score }) {

  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate('/', { method: 'push' });
    }
  }, [name, history])
  


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
    </div>
  )
}
