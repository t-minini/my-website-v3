import { useState } from 'react';
import style from './Contact.module.css';

export function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <footer
      id="contact"
      className={style.contact}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style.contact__text}>
        <p className={style.contact__tm}>tm</p>
        <div className={style.text__container}>
          <h2>
            Let's <br />
            connect.
          </h2>
          <p>
            I'm currently up for some exciting <br />
            projects. Hit me up if you're on <br /> the lookout for a front-end
            <br /> developer.
          </p>
        </div>
        <div className={style.contact__links}>
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://www.linkedin.com/in/tulio-minini/"
            className={`hoverable ${isHovered ? style.hovered : ''}`}
          >
            LinkedIn
          </a>
          <a
            rel="noreferrer"
            target={'_blank'}
            title="Send me an e-mail"
            href="mailto:tulio.mminini@gmail.com"
            className={`hoverable ${isHovered ? style.hovered : ''}`}
          >
            E-mail
          </a>
          <a
            rel="noreferrer"
            target={'_blank'}
            href="https://github.com/t-minini"
            className={`hoverable ${isHovered ? style.hovered : ''}`}
          >
            Github
          </a>
        </div>
        <div className={style.copyright}>
          <p>
            Copyright <br />
          </p>
          <span>&#169; Tulio Minini 2024</span>
        </div>
      </div>
    </footer>
  );
}
