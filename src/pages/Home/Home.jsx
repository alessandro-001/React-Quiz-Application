import React, { useState } from 'react'
import "./Home.css";
import { Button, MenuItem, TextField } from '@mui/material';
import Categories from '../../Data/Categories';

export default function Home() {

  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('')

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
        /> 
        <TextField 
          select
          label='Choose Category'
          variant='outlined'
          style={{marginBottom: 25}}
          required 
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
        >
          <MenuItem key="Easy" value="easy">Easy</MenuItem>
          <MenuItem key="Medium" value="medium">Medium</MenuItem>
          <MenuItem key="Hard" value="hard">Hard</MenuItem>
        </TextField>
        <Button 
          variant='contained'
          size='large'
        >
          Start Quiz
        </Button>    
      </div>
    </div>
  )
}
