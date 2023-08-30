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
      setLeaderboard(snapshot.docs.map((doc) => doc.data()))
      //console.log(snapshot.docs);
    })
  }, [username]);

  

  return (
    <div className="leaderboard-container">
      <h1>Leaderboard:</h1>
      <div className="scrollable-content">
        {leaderboard && leaderboard.map((board, index) => (
          <div key={index} className="entry">
            <p>{board.username}</p>
            <p>{board.category}</p>
            <p>{board.difficulty}</p>
            <p>{board.score}</p>
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
