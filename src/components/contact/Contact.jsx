import style from './Contact.module.css';
import { useState } from 'react'; // Import useState

export function Contact() {
  const [isHovered, setIsHovered] = useState(false); // Add state for hover
  return (
    <footer
      id="contact"
      className={style.contact}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style.contact__container}>
        <h2>
          Let's <br />
          connect<span>.</span>
          <span>.</span>
          <span>.</span>
        </h2>
        <div className={style.contact__links}>
          <a
            href="https://www.linkedin.com/in/tulio-minini/"
            target={'_blank'}
            rel="noreferrer"
            className={`hoverable ${isHovered ? style.hovered : ''}`}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/t-minini"
            target={'_blank'}
            rel="noreferrer"
            className={`hoverable ${isHovered ? style.hovered : ''}`}
          >
            Github
          </a>
          <a
            href="mailto:tulio.mminini@gmail.com"
            target={'_blank'}
            rel="noreferrer"
            title="Send me an e-mail"
            className={`hoverable ${isHovered ? style.hovered : ''}`}
          >
            E-mail
          </a>
        </div>
      </div>
      <div className={style.copyright}>
        <p>
          Copyright <br />
          <span>&#169;Tulio Minini 2024</span>
        </p>
      </div>
    </footer>
  );
}