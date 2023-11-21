import { Link } from 'react-scroll';
import style from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={style.navbar}>
      <p>&lt;</p>
      <ul>
        <Link
          to="about"
          spy={true}
          smooth={true}
          activeClass={style.navbar__active}
        >
          <li>About,&nbsp;</li>
        </Link>
        <Link
          to="skills"
          smooth={true}
        >
          <li>Skills,&nbsp;</li>
        </Link>
        <Link
          to="projects"
          smooth={true}
        >
          <li>Projects,&nbsp;</li>
        </Link>
        <Link
          to="contact"
          smooth={true}
        >
          <li>Contact</li>
        </Link>
      </ul>
      <p>&gt;</p>
    </nav>
  );
}
