import { Link } from 'react-scroll';
import style from './Hero.module.css';
// import { useRef, useState } from "react";
import photo from './../../assets/images/photo.jpeg';

export function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.hero__text}>
        <h1>Hello, I'm Tulio</h1>
        <p>a former designer who found his passion for frontend development</p>
      </div>
      <div className={style.hero__img}>
        <img
          src={photo}
          alt="a black and white photograph of me siting on a bench, smiling, wearing a grey shirt, black trousers and a watch"
        />
      </div>
      <Link
        to="about"
        //   offset={-70}

        smooth={true}
        className={style.hero__arrow}
        //   onClick={showNavbar}
      >
        <span></span>
      </Link>
    </section>
  );
}
