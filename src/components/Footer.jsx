import React from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import axioslogo from '../assets/Axios.png'

export default function Footer() {
  return (
    <div className='footer'>
      <p className='tech-title'>Built with :</p>
      <div className='logo-container'>
        <a href="https://vitejs.dev" target="_blank">
          <img 
            src={viteLogo} 
            className="logo" 
            alt="Vite logo" 
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img 
            src={reactLogo} 
            className="logo react" 
            alt="React logo" />
        </a>
        <a href="https://mui.com/">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
          className="material-ui-logo"
          alt="Material UI logo"
        />
        </a>
        <a href="https://axios-http.com/docs/intro">
        <img
          src={axioslogo}
          className="axios-logo"
          alt="Axios logo"
        />
        </a>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          className="css-logo"
          alt="Css3 logo"
        />
      </div>
      <div className='credits'>
        <a href='https://alessandrofrondini.netlify.app/' className="credit-link">
          <p>Created by Alessandro Frondini © 2023</p>
        </a>
        <a href="https://www.linkedin.com/in/alefrondini/" className="credit-link">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn logo"
            className="credit-icon"
          />
        </a>
        <a href="https://github.com/alessandro-001" className="credit-link">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="Github logo"
            className="credit-icon"
          />
        </a>
      </div>
    </div>
  );
}
