import React, { useEffect } from "react";
import { SiFastly } from "react-icons/si";
import { FaRocket, FaMobile } from "react-icons/fa";
import { BsFillLightbulbFill } from "react-icons/bs";
import "../styles/About.css";
import "animate.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import mernStack from "../images/mern-stack.png";
import html from "../images/html.png";
import mysql from "../images/mysql.svg";

function About(props) {
    const variant = {
        visible: { x: 0, opacity: 1 },
        hidden: { x: -200, opacity: 0 },
    };

    const photoVariant = {
        visible4: { x: 0, opacity: 1 },
        hidden: { x: 200, opacity: 0 },
    };

    const iconVariant = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    // const htmlVariant = {
    //     visible2: { width: "70%" },
    //     hidden: { width: 0 },
    // };

    // const reactVariant = {
    //     visible2: { width: "65%" },
    //     hidden: { width: 0 },
    // };
    // const javascriptVariant = {
    //     visible2: { width: "60%" },
    //     hidden: { width: 0 },
    // };
    // const designVariant = {
    //     visible2: { width: "40%" },
    //     hidden: { width: 0 },
    // };
    // const cssVariant = {
    //     visible2: { width: "70%" },
    //     hidden: { width: 0 },
    // };

    // const percentVariant = {
    //     visible3: { opacity: 1 },
    //     hidden: { opacity: 0 },
    // };

    const animation = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 }); //checks when element about is in view
    const [ref2, inView2] = useInView({ threshold: 0.3 }); //checks when element skills is in view
    const [ref3, inView3] = useInView({ threshold: 0.3 }); //checks when element skills is in view

    useEffect(() => {
        if (inView) {
            animation.start("visible");
        }
    }, [animation, inView]);

    useEffect(() => {
        if (inView2) {
            animation.start("visible");
            animation.start("visible");
        }
    }, [animation, inView2]);

    useEffect(() => {
        if (inView3) {
            animation.start("visible4");
        }
    }, [animation, inView3]);

    console.log(inView2);
    return (
        <div className='about'>
            <section className='aboutHeader'>
                <motion.h1
                    ref={ref}
                    variants={variant}
                    initial='hidden'
                    animate={animation}
                >
                    ABOUT
                </motion.h1>

                <motion.hr
                    variants={variant}
                    initial='hidden'
                    animate={animation}
                    transition={{ delay: 0.3 }}
                ></motion.hr>
            </section>
            <div className='icons'>
                <motion.div
                    variants={iconVariant}
                    initial='hidden'
                    animate={animation}
                    transition={{ delay: 0.7 }}
                >
                    <SiFastly className='icon' />
                    <h3>Fast</h3>
                    <p>
                        Fast load times and lag free interaction, my highest
                        priority.
                    </p>
                </motion.div>
                <motion.div
                    variants={iconVariant}
                    initial='hidden'
                    animate={animation}
                    transition={{ delay: 0.9 }}
                >
                    <FaMobile className='icon' />
                    <h3>Responsive</h3>
                    <p>My layouts will work on any device, big or small.</p>
                </motion.div>
                <motion.div
                    variants={iconVariant}
                    initial='hidden'
                    animate={animation}
                    transition={{ delay: 1.1 }}
                >
                    <FaRocket className='icon' />
                    <h3>Dynamic</h3>
                    <p>
                        Websites don't have to be static, I love making pages
                        come to life.
                    </p>
                </motion.div>

                <motion.div
                    variants={iconVariant}
                    initial='hidden'
                    animate={animation}
                    transition={{ delay: 1.3 }}
                >
                    <BsFillLightbulbFill className='icon' />
                    <h3>Intuitive</h3>
                    <p>Strong preference for easy to use, intuitive UX/UI.</p>
                </motion.div>
            </div>
            <div className='flex'>
                <div className='technologies'>
                    <motion.img
                        variants={iconVariant}
                        initial='hidden'
                        animate={animation}
                        transition={{ delay: 0.8 }}
                        src={mysql}
                        alt='technologies'
                        id='mysql'
                        ref={ref2}
                    ></motion.img>

                    <motion.img
                        variants={iconVariant}
                        initial='hidden'
                        animate={animation}
                        transition={{ delay: 1.2 }}
                        src={mernStack}
                        alt='technologies'
                        id='mernStackImg'
                        ref={ref2}
                    ></motion.img>

                    <motion.img
                        variants={iconVariant}
                        initial='hidden'
                        animate={animation}
                        transition={{ delay: 1.4 }}
                        src={html}
                        alt='technologies'
                        id='html'
                        ref={ref2}
                    ></motion.img>
                </div>

                {/* <section className='skills' ref={ref2}>
          <ul className='skillsList'>
            <li className='skill'>
              <p>CSS</p>
              <motion.div
                variants={cssVariant}
                initial='hidden'
                animate={animation}
                transition={{ duration: 1.5, delay: 0.5 }}
                className='bar'
              ></motion.div>
              <motion.span
                variants={percentVariant}
                initial='hidden'
                animate={animation}
                transition={{ delay: 1.5 }}
              >
                90%
              </motion.span>
            </li>
            <li className='skill'>
              <p>HTML</p>
              <motion.div
                variants={htmlVariant}
                initial='hidden'
                animate={animation}
                transition={{ duration: 1.5, delay: 0.6 }}
                className='bar'
              ></motion.div>
              <motion.span
                variants={percentVariant}
                initial='hidden'
                animate={animation}
                transition={{ delay: 1.6 }}
              >
                90%
              </motion.span>
            </li>
            <li className='skill'>
              <p>REACT</p>
              <motion.div
                variants={reactVariant}
                initial='hidden'
                animate={animation}
                transition={{ duration: 1.5, delay: 0.7 }}
                className='reactBar'
              ></motion.div>
              <motion.span
                variants={percentVariant}
                initial='hidden'
                animate={animation}
                transition={{ delay: 1.7 }}
              >
                85%
              </motion.span>
            </li>
            <li className='skill'>
              <p>JAVASCRIPT</p>
              <motion.div
                variants={javascriptVariant}
                initial='hidden'
                animate={animation}
                transition={{ duration: 1.5, delay: 0.8 }}
                className='javascriptBar'
              ></motion.div>
              <motion.span
                variants={percentVariant}
                initial='hidden'
                animate={animation}
                transition={{ delay: 1.8 }}
              >
                80%
              </motion.span>
            </li>
            <li className='skill'>
              <p>UI Design</p>
              <motion.div
                variants={designVariant}
                initial='hidden'
                animate={animation}
                transition={{ duration: 1.5, delay: 0.9 }}
                className='designBar'
              ></motion.div>
              <motion.span
                variants={percentVariant}
                initial='hidden'
                animate={animation}
                transition={{ delay: 1.9 }}
              >
                60%
              </motion.span>
            </li>
          </ul>
        </section> */}
                <motion.section
                    ref={ref3}
                    variants={photoVariant}
                    initial='hidden'
                    animate={animation}
                    transition={{ delay: 1.5 }}
                    className='me'
                >
                    <img
                        src={require("../images/myPhoto.jpeg")}
                        alt='person'
                    ></img>
                    <h3>Who am I?</h3>
                    <p>
                        Creative, detail-oriented, software engineer with a deep
                        interest in AI. Proven track record of creating and
                        implementing successful front and back end web
                        applications.
                    </p>
                    <br />
                    <Link to='contact' spy={true} smooth={true} duration={500}>
                        {" "}
                        <a href='#contact'>Let's create something special.</a>
                    </Link>{" "}
                </motion.section>
            </div>
        </div>
    );
}

export default About;
