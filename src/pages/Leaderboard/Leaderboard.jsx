import React, { useEffect, useState } from 'react';
import db from '../../../firebase.js';
import { collection, onSnapshot } from 'firebase/firestore';
import { Button } from '@mui/material';


export default function Leaderboard() {

  const [leaderboard, setLeaderboard] = useState();

  useEffect(() => {
    onSnapshot(collection(db, 'leaderboard'), (snapshot) => {
      setLeaderboard(snapshot.docs.map((doc) => doc.data()))
      console.log(snapshot.docs);
    })
  })

  return (
    <>
      <h1>Leaderboard:</h1>
      {leaderboard && leaderboard.map((board) => {
        return (
          <>
            <p>{board.username}</p>
            <p>{board.category}</p>
            <p>{board.score}</p>
            <p>{board.difficulty}</p>
          </>

        )
      })}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >Back to home</Button>
    </>
  )
}
