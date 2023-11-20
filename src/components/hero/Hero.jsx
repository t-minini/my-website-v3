import style from './Hero.module.css';
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
      <div id="hero" className={style.hero__arrow}>
        <a href="#about">
          <span></span>
        </a>
      </div>
    </section>
  );
}
