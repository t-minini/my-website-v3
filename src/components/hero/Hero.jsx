import style from './Hero.module.css';
import photo from './../../assets/images/photo.jpeg';

export function Hero() {
  return (
    <section className={style.heroContainer}>
      <div className={style.heroContainer__text}>
        <h1>Hello, I'm Tulio</h1>
        <p>a former designer who found his passion for frontend development</p>
      </div>
      <div className={style.heroContainer__img}>
        <img src={photo} alt="" />
      </div>
      <div id="hero" className={style.heroContainer__arrow}>
        <a href="#about">
          <span></span>
        </a>
      </div>
    </section>
  );
}
