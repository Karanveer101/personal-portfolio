import React from 'react';
import '../styles/Portfolio.css';
import 'animate.css';
import { AiFillGithub } from 'react-icons/ai';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <section className='portfolioHeader'>
        <h1 className='projectTitle'>PROJECTS</h1>
        <hr></hr>
      </section>
      <div className='projectContainer'>
        <div className='project'>
          <a
            href='https://youtubeclone1223.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='projectImg'
              src={require('../images/youtube.png')}
              alt='project'
            />
          </a>
          <div className='name'>
            <h3>Youtube Clone</h3>
            <div className='projectLinks'>
              <a
                href='https://github.com/Karanveer101/youtube-clone'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='githubButton' type='button'>
                  <AiFillGithub className='githubIcon' />
                </button>
              </a>
              <a
                href='https://youtubeclone1223.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='live'>LIVE</button>
              </a>
            </div>
          </div>
          <p className='projectDescription'>
            A responsive youtube application with a fully functional search
            feature where users can watch videos ad free. The app utilizes
            youtube data API to search and list popular videos.
          </p>
        </div>

        <div className='project'>
          <a
            href='https://clipshare12.netlify.app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='projectImg'
              src={require('../images/clipShare.png')}
              alt='project'
            />
          </a>
          <div className='name'>
            <h3>Clip Share</h3>
            <div className='projectLinks'>
              <a
                href='https://github.com/Karanveer101/tiktok-clone'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='githubButton' type='button'>
                  <AiFillGithub className='githubIcon' />
                </button>
              </a>
              <a
                href='https://clipshare12.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='live'>LIVE</button>
              </a>
            </div>
          </div>
          <p className='projectDescription'>
            A social media app where users can login to their profile and share
            videos. The app utilizes NoSQL database (firebase) to store and
            display user data.
          </p>
        </div>
        <div className='project'>
          <a
            href='https://tracklink.netlify.app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='projectImg'
              src={require('../images/projectTracker.png')}
              alt='project'
            />
          </a>
          <div className='name'>
            <h3>TrackLink</h3>
            <div className='projectLinks'>
              <a
                href='https://github.com/Karanveer101/Project-List-Tracker'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='githubButton' type='button'>
                  <AiFillGithub className='githubIcon' />
                </button>
              </a>
              <a
                href='https://tracklink.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='live'>LIVE</button>
              </a>
            </div>
          </div>
          <p className='projectDescription'>
            Users can add projects they are working on and list specific tasks
            for each project on the list. They can then see the number of tasks
            remaining to help them stay organized and on track for each project.
          </p>
        </div>

        <div className='project'>
          <a
            href='https://cerulean-monstera-d7c2c8.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='projectImg'
              src={require('../images/weather.png')}
              alt='project'
            />
          </a>
          <div className='name'>
            <h3>DISPLAY WEATHER APP</h3>
            <div className='projectLinks'>
              <a
                href='https://github.com/Karanveer101/Weather-App'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='githubButton' type='button'>
                  <AiFillGithub className='githubIcon' />
                </button>
              </a>
              <a
                href='https://cerulean-monstera-d7c2c8.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='live'>LIVE</button>
              </a>
            </div>
          </div>
          <p className='projectDescription'>
            Utilizes open weather map API integraion. Fetches weather report
            based on city name, app changes background depending on the time in
            a given location.
          </p>
        </div>

        <div className='project'>
          <a
            href='https://shoppingcart101.netlify.app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='projectImg'
              src={require('../images/Ecommerce.png')}
              alt='project'
            />
          </a>
          <div className='name'>
            <h3>Fruit Basket</h3>
            <div className='projectLinks'>
              <a
                href='https://github.com/Karanveer101/Shopping-Cart'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='githubButton' type='button'>
                  <AiFillGithub className='githubIcon' />
                </button>
              </a>
              <a
                href='https://shoppingcart101.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='live'>LIVE</button>
              </a>
            </div>
          </div>
          <p className='projectDescription'>
            A fruit basket is a shopping cart built with react, local storage
            and css. The total cost of items and quantity of items are
            dynamically updated at checkout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
