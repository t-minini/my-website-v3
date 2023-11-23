import { Link } from 'react-scroll';
import style from './Navbar.module.css';

export function Navbar() {

  // const toValues = ["projects", "projects-two", "projects-three"]
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
          spy={true}
          smooth={true}
          activeClass={style.navbar__active}
        >
          <li>Skills,&nbsp;</li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          activeClass={style.navbar__active}
        >
          <li>Projects,&nbsp;</li>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          activeClass={style.navbar__active}
        >
          <li>Contact</li>
        </Link>
      </ul>
      <p>&gt;</p>
    </nav>
  );
}
