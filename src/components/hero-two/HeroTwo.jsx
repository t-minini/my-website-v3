import { Link } from 'react-scroll';
import style from './HeroTwo.module.css';
import imgBack from './../../assets/images/hero-back.png';
import imgFront from './../../assets/images/hero-front.png';

export function HeroTwo() {
  return (
    <section id="hero" className={style.hero}>
      <div className={style.hero__imgs}>
        <img
          className={style.img__back}
          src={imgBack}
          alt="a black and white photograph of me siting on a bench, smiling, wearing a grey shirt, black trousers and a watch"
        />
        <div className={style.hero__text}>
          <h1>tulio minini</h1>
          <p>
            a former designer who found his passion for <br />
            front-end development.
          </p>
          <img
            className={style.img__front}
            src={imgFront}
            alt="a black and white photograph of me siting on a bench, smiling, wearing a grey shirt, black trousers and a watch"
          />
        </div>
      </div>
      <Link to="about" smooth={true} className={style.hero__arrow}>
        <span></span>
      </Link>
    </section>
  );
}
