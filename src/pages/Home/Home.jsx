import React, { useState } from 'react';
import "./Home.css";
import { Button, MenuItem, TextField } from '@mui/material';
import Categories from '../../Data/categories';
import { useNavigate } from 'react-router-dom';

export default function Home({ name, setName, fetchQuestions }) {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function handleSubmit() {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate('/quiz', { method: 'push' });
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
          style={{ marginBottom: 25 }}
          required
          onChange={(e) => setName(e.target.value)}
          error={error && !name}
          helperText={error && !name ? 'Username is required.' : ''}
        />
        <TextField
          select
          label='Choose Category'
          variant='outlined'
          style={{ marginBottom: 25 }}
          required
          onChange={(e) => setCategory(e.target.value)}
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
          style={{ marginBottom: 25 }}
          required
          onChange={(e) => {
            setDifficulty(e.target.value);
            setError(false);
          }}
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
        >
          Start Quiz
        </Button>
      </div>
      {error && <div style={{ color: 'red', marginTop: '10px' }}>Please fill all the required fields</div>}
    </div>
  );
}

/**
 
import React, { useState } from 'react';
import "./Home.css";
import { Button, MenuItem, TextField } from '@mui/material';
import Categories from '../../Data/categories';
import { useNavigate } from 'react-router-dom';

export default function Home({ name, setName, fetchQuestions }) {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function handleSubmit() {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate('/quiz', { method: 'push' });
    }
  }

  return (
    <div className='content'>
      <div className='banner'>
        <p>Banner for quiz goes here</p>
      </div>
      <div className='settings'>
        <span style={{ fontSize: 40 }}>Quiz Settings</span>
      </div>
      <div className='settings_selection'>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          style={{ marginBottom: 25 }}
          required
          onChange={(e) => setName(e.target.value)}
          error={error && !name}
          helperText={error && !name ? 'Username is required.' : ''}
        />
        <TextField
          select
          label='Choose Category'
          variant='outlined'
          style={{ marginBottom: 25 }}
          required
          onChange={(e) => setCategory(e.target.value)}
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
          style={{ marginBottom: 25 }}
          required
          onChange={(e) => setDifficulty(e.target.value)}
          value={difficulty}
        >
          <MenuItem key="Easy" value="easy">Easy</MenuItem>
          <MenuItem key="Medium" value="medium">Medium</MenuItem>
          <MenuItem key="Hard" value="hard">Hard</MenuItem>
        </TextField>
        <Button
          variant='contained'
          size='large'
          onClick={handleSubmit}
        >
          Start Quiz
        </Button>
      </div>
      {error && <div style={{ color: 'red', marginTop: '10px' }}>Please fill all the required fields</div>}
    </div>
  );
}

 */