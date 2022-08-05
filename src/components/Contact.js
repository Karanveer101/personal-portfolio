import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CgChevronDoubleUpR } from 'react-icons/cg';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai';
import '../styles/Contact.css';

function Contact(props) {
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  const form = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  const [formref, inView4] = useInView({ threshold: 0.3 }); //checks when element contact form is in view
  const variant = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -200, opacity: 0 },
  };

  const variant2 = {
    visible2: { x: 0, opacity: 1 },
    hidden: { x: 200, opacity: 0 },
  };

  const animation = useAnimation();
  useEffect(() => {
    if (inView4) {
      animation.start('visible');
      animation.start('visible2');
    }
  }, [animation, inView4]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1ile2qj',
        'template_akf90jk',
        form.current,
        'NPy2RLDxKkowMms6s'
      )
      .then(
        (result) => {
          e.target.reset();
          alert('Success! Email has been sent');
        },
        (error) => {
          alert('Woops! please try again!');
        }
      );
  };
  return (
    <div className='contact'>
      <section className='contactMe'>
        <motion.h1
          ref={formref}
          variants={variant}
          initial='hidden'
          animate={animation}
        >
          CONTACT
        </motion.h1>
        <motion.hr
          variants={variant}
          initial='hidden'
          animate={animation}
          transition={{ delay: 0.5 }}
          style={{ borderColor: 'white' }}
        ></motion.hr>
        <motion.p
          variants={variant2}
          initial='hidden'
          animate={animation}
          transition={{ delay: 0.7 }}
          style={{ color: '#04c2c9' }}
        >
          Have a question or want to work together?
        </motion.p>
        <motion.form
          variants={variant2}
          initial='hidden'
          animate={animation}
          transition={{ delay: 0.9 }}
          onSubmit={sendEmail}
          ref={form}
          className='contactForm'
        >
          <ul className='contactList'>
            <li>
              <input
                ref={ref1}
                name='user_name'
                type='text'
                id='name'
                placeholder='Name'
              />
            </li>
            <li>
              <input
                ref={ref2}
                name='user_email'
                type='email'
                id='email'
                placeholder='Enter Email'
                required
              />
            </li>
            <li>
              <input
                ref={ref3}
                type='text'
                id='subject'
                placeholder='Subject'
              />
            </li>
            <textarea
              ref={ref4}
              name='message'
              type='text'
              id='message'
              placeholder='Your Message'
            ></textarea>
            <button className='submitBtn'>Submit</button>
          </ul>
        </motion.form>
      </section>
      <footer>
        <button onClick={scrollToTop} className='up'>
          <CgChevronDoubleUpR className='upIcon' />
        </button>
        <div className='socialMedia'>

        <a href='https://www.linkedin.com/in/karanveer-dhammu-4955b113b/' target="_blank" rel="noopener noreferrer">

          <button>
            <AiFillLinkedin className='linkedInIcon' />
          </button>

          </a>
          <a href='https://github.com/Karanveer101' target="_blank" rel="noopener noreferrer">
            <button type='button'>
              <AiFillGithub className='githubIcon' />
            </button>
          </a>
        </div>
        <p>
          Karanveer Dhammu{' '}
          <AiOutlineCopyrightCircle style={{ color: '#db2777' }} />{' '}
          <span style={{ color: '#db2777' }}>2022</span>.
        </p>
      </footer>
    </div>
  );
}

export default Contact;
