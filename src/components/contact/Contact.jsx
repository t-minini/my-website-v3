import style from './Contact.module.css';
// import skilled from './../../assets/images/concerts-database.jpg';

// export function Contact() {
//     return (
//         <section className={style.contact}>
//             <h2>CONTACT</h2>
//         </section>
//     )
// }

// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const Contact = () => (
//   <Parallax strength={800} >
    <section className={style.contact}>
    <div className={style.contact__first}>
      <a href="https://www.linkedin.com/in/tulio-minini/">linkedin</a>
      <a href="https://github.com/t-minini">github</a>
    </div>
    <h2>Let's connect</h2>
    <div className={style.contact__second}>
      <a href="https://www.linkedin.com/in/tulio-minini/">e-mail</a>
      <a href="https://github.com/t-minini">curriculum</a>
    </div>
    </section>
//   </Parallax>
);
