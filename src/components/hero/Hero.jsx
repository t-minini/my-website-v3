import style from './Hero.module.css';

export function Hero() {
  return (
    <section classStyle={style.heroContainer}>
      <h1>Hello, I'm Tulio</h1>
      <p>a former designer who found hsi passion for frontend development</p>
    </section>
  );
}
