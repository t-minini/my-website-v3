import style from './Hero.module.css';
import { useRef, useState } from 'react';
import imgBack from './../../assets/images/hero-back.png';
import imgFront from './../../assets/images/hero-front.png';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const parallaxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const h1Variants = {
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

  const pVariants = {
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

  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const hiddenMask = `
  linear-gradient(to bottom,  rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%),
  linear-gradient(to top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%)
`;

const visibleMask = `
  linear-gradient(to top, rgba(0,0,0, 1) 51%, rgba(0,0,0,0) 0%),
  linear-gradient(to bottom, rgba(0,0,0, 1) 51%, rgba(0,0,0,0) 0%)
`;

  return (
    <section ref={parallaxRef} id="hero" className={style.hero}>
      <div className={style.hero__container}>
        <motion.img
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 2, delay: 2 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          style={{ y: backgroundY }}
          className={style.img__back}
          src={imgBack}
          alt="a black and white photograph of me siting on a bench, smiling, wearing a grey shirt, black trousers and a watch"
        />
        <div className={style.hero__text}>
          <motion.h1
            style={{ y: textY }}
            variants={h1Variants}
            initial="initial"
            whileInView="animate"
          >
            tulio&#xa0;minini
          </motion.h1>
          <motion.p variants={pVariants} initial="initial" whileInView="animate">
            a former designer who found his passion for <br />
            front-end development.
          </motion.p>
          <motion.img
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 2, delay: 2 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
            onLoad={() => setIsLoaded(true)}
            style={{ y: backgroundY }}
            className={style.img__front}
            src={imgFront}
            alt="a black and white photograph of me siting on a bench, smiling, wearing a grey shirt, black trousers and a watch"
          />
        </div>
      </div>
    </section>
  );
}
