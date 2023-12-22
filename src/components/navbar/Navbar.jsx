import { Link } from 'react-scroll';
import style from './Navbar.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  // show navbar when scroll
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const showNavbar = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;
        setShowNav(aboutSectionTop <= 0);
      }
    };

    window.addEventListener('scroll', showNavbar);

    return () => {
      window.removeEventListener('scroll', showNavbar);
    };
  }, []);

  // animation
  const navVariants = {
    initial: {
      y: '-100vh',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 40,
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate={showNav ? 'animate' : 'initial'}
      className={style.navbar}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul>
        <Link
          to="about"
          spy={true}
          activeClass={style.navbar__active}
          className={`hoverable ${isHovered ? style.hovered : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <li>About,&nbsp;</li>
        </Link>
        <Link
          to="skills"
          spy={true}
          activeClass={style.navbar__active}
          className={`hoverable ${isHovered ? style.hovered : ''}`}
        >
          <li>Skills,&nbsp;</li>
        </Link>
        <Link
          to="projects"
          spy={true}
          activeClass={style.navbar__active}
          className={`hoverable ${isHovered ? style.hovered : ''}`}
        >
          <li>Projects,&nbsp;</li>
        </Link>
        <Link
          to="contact"
          spy={true}
          activeClass={style.navbar__active}
          className={`hoverable ${isHovered ? style.hovered : ''}`}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </motion.nav>
  );
}
