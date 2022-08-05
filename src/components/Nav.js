import { Link, animateScroll as scroll } from 'react-scroll';
import '../styles/nav.css';
import React, { useState, useEffect } from 'react';
import { debounce } from '../utilities/helpers';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineCancel} from 'react-icons/md'

function Nav(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false); //adds class 'expanded' to nav if true
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  
  
  
  return (
    <div>
      <nav className={isNavExpanded ? 'menuExpanded' : 'menu'} style={{ top: visible ? '0' : '-40vh' }}>
      <div className='flexBtnRight'>
      <button onClick={() => setIsNavExpanded(!isNavExpanded)} className='hamburger'>{isNavExpanded ?  <MdOutlineCancel className='navIcon' /> : <GiHamburgerMenu className='navIcon' /> }</button>
      </div>
        <ul className='menuItems'>
          <li>
            <Link
              activeClass='isActive'
              to='home'
              spy={true}
              smooth={true}
              duration={500}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              activeClass='isActive'
              to='about'
              spy={true}
              smooth={true}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              activeClass='isActive'
              to='portfolio'
              spy={true}
              smooth={true}
              duration={500}
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              activeClass='isActive'
              to='contact'
              spy={true}
              smooth={true}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
     

        </ul>
      </nav>
    </div>
  );
}

export default Nav;
