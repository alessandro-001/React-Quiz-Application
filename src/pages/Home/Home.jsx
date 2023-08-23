import React from 'react'
import "./Home.css";
import { TextField } from '@mui/material';


export default function Home() {
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

        />       
      </div>
    </div>
  )
}
