import React, { useState } from 'react'
import "./Home.css";
import { Button, MenuItem, TextField } from '@mui/material';
import Categories from '../../Data/categories';


export default function Home({name, setName, fetchQuestions}) {

  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);

  const history = useHistory 

  function handleSubmit() {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push('/quiz');
    }
  }

  return (
    <div className='content'>
      <div className='banner'>
        <p>Banner for quiz goes here</p>
        {/* <img 
        className='banner' 
        alt='quiz banner'
      ></img> */}
      </div>
      <div className='settings'>
        <span style={{fontSize: 40}}>Quiz Settings</span>
      </div>
      <div className='settings_selection'>
        <TextField 
          id="outlined-basic" 
          label="Username" 
          variant="outlined" 
          style={{marginBottom: 25}}
          required
          onChange={(e) => setName(e.target.value)} 
        /> 
        <TextField 
          select
          label='Choose Category'
          variant='outlined'
          style={{marginBottom: 25}}
          required 
          onChange={(e) => setCategory(e.target.value)} 
          value={category}
        >
          {Categories.map((cat) => {
            return (
            <MenuItem key={cat.category} val={cat.value} >
              {cat.category}
            </MenuItem>)
          })}
        </TextField>
        <TextField
           select
           label='Choose Difficulty'
           style={{marginBottom: 25}}
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
    </div>
  )
}
