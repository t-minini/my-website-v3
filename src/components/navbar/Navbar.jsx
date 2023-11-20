import { Link } from 'react-scroll';
import style from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={style.navbar}>
      {/* <p>TM</p> */}
      <p>&lt;</p>
      <ul>
        <Link
          to="about"
          //   offset={-70}
          style={{ textDecoration: 'none', background: 'transparent' }}
          smooth={true}
          //   onClick={showNavbar}
        >
          <li>About,&nbsp;</li>
        </Link>
        <li>Skills,&nbsp;</li>
        <li>Projects,&nbsp;</li>
        <li>Contact</li>
      </ul>
      <p>&gt;</p>
    </nav>
  );
}
