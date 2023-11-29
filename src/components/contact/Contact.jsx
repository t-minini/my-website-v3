import style from './Contact.module.css';
import { useState } from 'react'; // Import useState

export function Contact() {
  const [isHovered, setIsHovered] = useState(false); // Add state for hover
  return (
    <section
      id="contact"
      className={style.contact}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style.contact__container}>
        <h2>
          Let's connect<span>.</span>
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
          <span>&#169;2024 Tulio Minini</span> All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// export const Contact = () => (
//   <Parallax strength={800}>
//     <section id="contact" className={style.contact}>
//       <div className={style.contact__first}>
//         <a href="https://www.linkedin.com/in/tulio-minini/">linkedin</a>
//         <a href="https://github.com/t-minini">github</a>
//       </div>
//       <h2>Let's connect</h2>
//       <div className={style.contact__second}>
//         <a href="https://www.linkedin.com/in/tulio-minini/">e-mail</a>
//         <a href="https://github.com/t-minini">curriculum</a>
//       </div>
//     </section>
//   </Parallax>
// );
