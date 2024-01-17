import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import style from './Navbar.module.css';
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

  const navVariants = {
    initial: {
      opacity: 0,
      y: '-100vh',
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 40,
        type: 'spring',
      },
    },
  };

  return (
    <motion.nav
      initial="initial"
      variants={navVariants}
      className={style.navbar}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={showNav ? 'animate' : 'initial'}
    >
      <ul>
        <Link
          to="about"
          spy={true}
          smooth={true}
          activeClass={style.navbar__active}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`hoverable ${isHovered ? style.hovered : ''}`}
        >
          <li>About,&nbsp;</li>
        </Link>
        <Link
          spy={true}
          to="skills"
          smooth={true}
          activeClass={style.navbar__active}
          className={`hoverable ${isHovered ? style.hovered : ''}`}
        >
          <li>Skills,&nbsp;</li>
        </Link>
        <Link
          spy={true}
          to="projects"
          smooth={true}
          activeClass={style.navbar__active}
          className={`hoverable ${isHovered ? style.hovered : ''}`}
        >
          <li>Projects,&nbsp;</li>
        </Link>
        <Link
          spy={true}
          to="contact"
          smooth={true}
          activeClass={style.navbar__active}
          className={`hoverable ${isHovered ? style.hovered : ''}`}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </motion.nav>
  );
}
