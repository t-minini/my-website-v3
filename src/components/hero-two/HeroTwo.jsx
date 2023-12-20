// import { Link } from 'react-scroll';
import { useRef } from 'react';
import style from './HeroTwo.module.css';
import imgBack from './../../assets/images/hero-back.png';
import imgFront from './../../assets/images/hero-front.png';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroTwo() {
  const parallaxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const h1Variant = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.04,
        type: 'spring',
        damping: 10,
      },
    },
  };

  const pVariant = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        type: 'spring',
        damping: 10,
      },
    },
  };

  return (
    <section ref={parallaxRef} id="hero" className={style.hero}>
      <div className={style.hero__container}>
        <motion.img
          style={{ y: backgroundY }}
          className={style.img__back}
          src={imgBack}
          alt="a black and white photograph of me siting on a bench, smiling, wearing a grey shirt, black trousers and a watch"
        />
        <div className={style.hero__text}>
          <motion.h1
            style={{ y: textY }}
            variants={h1Variant}
            initial="initial"
            whileInView="animate"
          >
            tulio minini
          </motion.h1>
          <motion.p variants={pVariant} initial="initial" whileInView="animate">
            a former designer who found his passion for <br />
            front-end development.
          </motion.p>
          <motion.img
            style={{ y: backgroundY }}
            className={style.img__front}
            src={imgFront}
            alt="a black and white photograph of me siting on a bench, smiling, wearing a grey shirt, black trousers and a watch"
          />
        </div>
        {/* <Link to="about" smooth={true} className={style.hero__arrow}>
            <span></span>
          </Link> */}
      </div>
    </section>
  );
}
