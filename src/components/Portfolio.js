import React from 'react';
import '../styles/Portfolio.css';
import 'animate.css';
import {
  AiFillGithub,
} from 'react-icons/ai';

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <section className='portfolioHeader'>

        <h1 className='projectTitle'>PROJECTS</h1>
        <hr></hr>
        </section>
      <div className='projectContainer'>
        <div className='project'>
        <a href='https://graceful-cocada-d7936c.netlify.app/' target="_blank" rel="noopener noreferrer">

          <img
            className='projectImg'
            src={require('../images/projectTracker.png')}
            alt='project'
          />

          </a>
          <div className='name'>
            <h3>PROJECT LIST TRACKER</h3>
            <div className='projectLinks'>

            <a href='https://github.com/Karanveer101/Project-List-Tracker' target="_blank" rel="noopener noreferrer">
            <button className='githubButton' type='button'>
              <AiFillGithub className='githubIcon' />
            </button>
          </a>   
          <a href='https://graceful-cocada-d7936c.netlify.app/' target="_blank" rel="noopener noreferrer">
       
            <button className='live'>LIVE</button>

            </a>
            </div>
          </div>
          <p className='projectDescription'>An advanced to do list application with vanilla javascript. Utilizes local storage, tracks the number of incomplete tasks, and deletes completed tasks.</p>
        </div>

        <div className='project'>
        <a href='https://cerulean-monstera-d7c2c8.netlify.app/' target="_blank" rel="noopener noreferrer">

          <img
            className='projectImg'
            src={require('../images/weather.png')}
            alt='project'
          />

          </a>
          <div className='name'>
            <h3>WEATHER APP</h3>
            <div className='projectLinks'>

            <a href='https://github.com/Karanveer101/Weather-App' target="_blank" rel="noopener noreferrer">
            <button className='githubButton' type='button'>
              <AiFillGithub className='githubIcon' />
            </button>
          </a>   
          <a href='https://cerulean-monstera-d7c2c8.netlify.app/' target="_blank" rel="noopener noreferrer">
       
            <button className='live'>LIVE</button>

            </a>
            </div>
          </div>
          <p className='projectDescription'>Utilizes open weather map API. Fetches weather report based on city name, app changes background depending on the time in a given location.</p>
        </div>

        
      </div>
    </div>
  );
};

export default Portfolio;
