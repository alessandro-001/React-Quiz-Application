import React, { useEffect, useState } from 'react';
import db from '../../../firebase.js';
import { collection, onSnapshot } from 'firebase/firestore';
import { Button } from '@mui/material';
import './Leaderboard.css';

export default function Leaderboard() {

  const [leaderboard, setLeaderboard] = useState();

  useEffect(() => {
    onSnapshot(collection(db, 'leaderboard'), (snapshot) => {
      setLeaderboard(snapshot.docs.map((doc) => doc.data()))
      console.log(snapshot.docs);
    })
  }, []) // Ensure useEffect runs only once on component mount

  return (
    <div className="leaderboard-container">
      <h1>Leaderboard:</h1>
      <div className="scrollable-content">
        {leaderboard && leaderboard.map((board, index) => (
          <div key={index} className="entry">
            <p>{board.username}</p>
            <p>{board.category}</p>
            <p>{board.score}</p>
            <p>{board.difficulty}</p>
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className="back-button"
        href="/"
      >
        Back to home
      </Button>
    </div>
  );
}
