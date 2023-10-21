import React from "react";
import "../styles/Portfolio.css";
import "animate.css";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <section className='portfolioHeader'>
                <h1 className='projectTitle'>RECENT PROJECTS</h1>
                <hr></hr>
            </section>
            <div className='projectContainer'>
                <div className='project'>
                    <a
                        href='https://wagging-hearts-client.onrender.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='projectImg'
                            src={require("../images/wagging-hearts.png")}
                            alt='project'
                        />
                    </a>
                    <div className='name'>
                        <h3>Wagging Hearts</h3>
                        <div className='projectLinks'>
                            <a
                                href='https://github.com/Karanveer101/wagging-hearts'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='githubButton' type='button'>
                                    <AiFillGithub className='githubIcon' />
                                </button>
                            </a>
                            <a
                                href='https://wagging-hearts-client.onrender.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='live'>LIVE</button>
                            </a>
                        </div>
                    </div>
                    <p className='projectDescription'>
                        Searching for your ideal canine companion? Discover the
                        perfect dog that matches your criteria. Mark favorites,
                        identify top matches, and manage your adoption inquiries
                        seamlessly through an interactive dashboard.
                    </p>
                </div>

                <div className='project'>
                    <a
                        href='https://finddog.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='projectImg'
                            src={require("../images/findDog.png")}
                            alt='project'
                        />
                    </a>
                    <div className='name'>
                        <h3>Find-the-Dog</h3>
                        <div className='projectLinks'>
                            <a
                                href='https://github.com/Karanveer101/find-the-dog'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='githubButton' type='button'>
                                    <AiFillGithub className='githubIcon' />
                                </button>
                            </a>
                            <a
                                href='https://finddog.netlify.app/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='live'>LIVE</button>
                            </a>
                        </div>
                    </div>
                    <p className='projectDescription'>
                        Unleash your inner dog whisperer and sniff out as many
                        furry friends as you can in just two minutes!
                    </p>
                </div>

                <div className='project'>
                    <a
                        href='https://youtubeclone1223.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='projectImg'
                            src={require("../images/youtube.png")}
                            alt='project'
                        />
                    </a>
                    <div className='name'>
                        <h3>Ad Free Youtube</h3>
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
                        Tired of ads on youtube? Enjoy your favorite videos,
                        channels, and playlists without annoying ads. Dive into
                        a seamless entertainment experience today!
                    </p>
                </div>
                {/* 
                <div className='project'>
                    <a
                        href='https://playrock-paper-scissors.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='projectImg'
                            src={require("../images/rock-paper-scissors.png")}
                            alt='project'
                        />
                    </a>
                    <div className='name'>
                        <h3>Rock-Paper-Scissors</h3>
                        <div className='projectLinks'>
                            <a
                                href='https://github.com/Karanveer101/rock-paper-scissors'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='githubButton' type='button'>
                                    <AiFillGithub className='githubIcon' />
                                </button>
                            </a>
                            <a
                                href='https://playrock-paper-scissors.netlify.app/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='live'>LIVE</button>
                            </a>
                        </div>
                    </div>
                    <p className='projectDescription'>
                        A rock paper scissors game using javascript and advanced
                        css animations.
                    </p>
                </div> */}

                {/* <div className='project'>
                    <a
                        href='https://nimble-baklava-d3673f.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='projectImg'
                            src={require("../images/project-tracker-app.png")}
                            alt='project'
                        />
                    </a>
                    <div className='name'>
                        <h3>Project Time Tracker</h3>
                        <div className='projectLinks'>
                            <a
                                href='https://github.com/Karanveer101/project-tracker'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='githubButton' type='button'>
                                    <AiFillGithub className='githubIcon' />
                                </button>
                            </a>
                            <a
                                href='https://nimble-baklava-d3673f.netlify.app/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='live'>LIVE</button>
                            </a>
                        </div>
                    </div>
                    <p className='projectDescription'>
                        A fun little personal app that I built for myself to
                        estimate and track how much time it takes me to complete
                        my projects.
                    </p>
                </div> */}

                {/* <div className='project'>
                    <a
                        href='https://clipshare12.netlify.app'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='projectImg'
                            src={require("../images/clipShare.png")}
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
                        A social media app where users can login to their
                        profile and share videos. The app utilizes NoSQL
                        database (firebase) to store and display user data.
                    </p>
                </div> */}

                <div className='project'>
                    <a
                        href='https://tracklink.netlify.app'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='projectImg'
                            src={require("../images/projectTracker.png")}
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
                        Stay on top of your projects effortlessly! Add tasks,
                        track progress, and conquer your to-do list. Your
                        ultimate project organizer is here!
                    </p>
                </div>

                {/* <div className='project'>
                    <a
                        href='https://cerulean-monstera-d7c2c8.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='projectImg'
                            src={require("../images/weather.png")}
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
                        Utilizes open weather map API integraion. Fetches
                        weather report based on city name, app changes
                        background depending on the time in a given location.
                    </p>
                </div> */}

                {/* <div className='project'>
                    <a
                        href='https://shoppingcart101.netlify.app'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='projectImg'
                            src={require("../images/Ecommerce.png")}
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
                        A fruit basket is a shopping cart built with react,
                        local storage and css. The total cost of items and
                        quantity of items are dynamically updated at checkout.
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default Portfolio;
