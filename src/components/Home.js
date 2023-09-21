import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../styles/Home.css';
import 'animate.css';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Nav from './Nav';
import { Link } from 'react-scroll';
const Home = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className='home'>
      <Nav />

      <div className='introduction'>
        <div className='container'>
          <h1 className='typed-out'>
            Hello, I'm{' '}
            <span style={{ color: '#e31b6d' }}> Karanveer Dhammu</span>.
          </h1>
        </div>
        <br></br>
        <div className='container2'>
          <h1 className='typed-out2'>I'm a Full Stack Developer.</h1>
        </div>
        <br></br>

        <Link to='portfolio' spy={true} smooth={true} duration={500}>
          <button className='portfolioBtn animate__animated animate__bounceInUp animate__delay-5s'>
            View my work <BsFillArrowRightCircleFill className='arrowIcon' />
          </button>
        </Link>
      </div>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        style={{ height: '100vh !important', position: 'none !important' }}
        options={{
          background: {
            color: {
              value: '#1e293b',
            },
          },
          fullScreen: false,
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: false,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Home;
