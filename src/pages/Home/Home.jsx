import React, { useState } from 'react';
import "./Home.css";
import { Button, MenuItem, TextField } from '@mui/material';
import Categories from '../../Data/categories';
import { useNavigate } from 'react-router-dom';


export default function Home({ username, setUserName, fetchQuestions, category, setCategory, difficulty, setDifficulty }) {
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function handleSubmit() {
    if (!category || !difficulty || !username || username.trim().length < 3) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate('/quiz', { method: 'push' });
    }
  }

  function handleUsernameChange(e) {
    setUserName(e.target.value);
    if (error && e.target.value.trim().length >= 3) {
      setError(false);
    }
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
    if (error && e.target.value) {
      setError(false);
    }
  }

  function handleDifficultyChange(e) {
    setDifficulty(e.target.value);
    if (error && e.target.value) {
      setError(false);
    }
  }

  return (
    <div className='content'>
      <div className='settings'>
        <span style={{ fontSize: 40 }}>Quiz Settings</span>
      </div>
      <div className='settings_selection'>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          style={{ marginBottom: 25, backgroundColor:'white', borderRadius: 5 }}
          required
          onChange={handleUsernameChange}
          error={error && (!username || username.trim().length < 3)}
          helperText={error && (!username || username.trim().length < 3) ? 'Username is required and must have at least three letters.' : ''}
        />
        <TextField
          select
          label='Choose Category'
          variant='outlined'
          style={{ marginBottom: 25, backgroundColor:'white', borderRadius: 5 }}
          required
          onChange={handleCategoryChange}
          value={category}
          error={error && !category}
          helperText={error && !category ? 'Category is required.' : ''}
        >
          {Categories.map((cat) => (
            <MenuItem key={cat.category} value={cat.value}>
              {cat.category}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label='Choose Difficulty'
          variant='outlined'
          style={{ marginBottom: 25, backgroundColor:'white', borderRadius: 5 }}
          required
          onChange={handleDifficultyChange}
          value={difficulty}
          error={error}
          helperText={error ? 'Difficulty is required.' : ''}
        >
          <MenuItem key="Easy" value="easy">Easy</MenuItem>
          <MenuItem key="Medium" value="medium">Medium</MenuItem>
          <MenuItem key="Hard" value="hard">Hard</MenuItem>
        </TextField>
        <Button
          variant='contained'
          size='large'
          onClick={handleSubmit}
        >Start Quiz</Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ alignSelf: "center", marginTop: 20 }}
          href="/leaderboard"
        >Leaderboard</Button>
      </div>
        {error && <div style={{ color: 'red', marginTop: '10px' }}>Please fill all the required fields</div>}
    </div>
  );
}

