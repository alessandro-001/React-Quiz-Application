import React, { useEffect, useState } from 'react';
import db from '../../../firebase.js';
import { collection, onSnapshot } from 'firebase/firestore';
import { Button } from '@mui/material';
import './Leaderboard.css';

export default function Leaderboard({username, category, difficulty, score}) {

  const [leaderboard, setLeaderboard] = useState();

  console.log("here bro",username, category, difficulty, score);

  useEffect(() => {
    onSnapshot(collection(db, 'leaderboard'), (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      data.sort((a, b) => b.score - a.score);
      
      const topTen = data.slice(0, 10)
      setLeaderboard(topTen);
    })
  }, [username]);

  

  return (
    <div className="leaderboard-container">
      <h1>Leaderboard:</h1>
      <div className="header-row">
        <div className="column">Username</div>
        <div className="column">Difficulty</div>
        <div className="column">Score</div>
      </div>
      <div className="scrollable-content">
        {leaderboard && leaderboard.map((board, index) => (
          <div key={index} className="rows">
            <div className="column">{board.username}</div>
            <div className="column">{board.difficulty}</div>
            <div className="column">{board.score}</div>
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className="ldr-back-button"
        href="/"
      >
      Back to home
      </Button>
    </div>
  );
}

