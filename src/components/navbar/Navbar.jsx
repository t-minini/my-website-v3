// import React from 'react';
import { Link } from 'react-scroll';
import { useState, React } from 'react';
import style from './Navbar.module.css';

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className={style.navbar}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul>
        <Link
          to="about"
          spy={true}
          smooth={true}
          activeClass={style.navbar__active}
          className={`hoverable ${isHovered ? style.hovered : ''}`}
        >
          <li>About,&nbsp;</li>
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          activeClass={style.navbar__active}
          className={`hoverable ${isHovered ? style.hovered : ''}`}
        >
          <li>Skills,&nbsp;</li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          activeClass={style.navbar__active}
          className={`hoverable ${isHovered ? style.hovered : ''}`}
        >
          <li>Projects,&nbsp;</li>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          activeClass={style.navbar__active}
          className={`hoverable ${isHovered ? style.hovered : ''}`}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
