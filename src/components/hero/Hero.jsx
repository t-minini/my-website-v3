import style from './Hero.module.css';
import { useRef, useState } from 'react';
import imgBack from './../../assets/images/back.jpg';
import imgFront from './../../assets/images/front.png';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const parallaxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['end end', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const h1Variants = {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.04,
        damping: 10,
        type: 'spring',
      },
    },
  };

  const pVariants = {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        damping: 10,
        type: 'spring',
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
      <div className={style.img__container}>
        <motion.img
          src={imgFront}
          viewport={{ once: true }}
          style={{ y: backgroundY }}
          className={style.img__front}
          onLoad={() => setIsLoaded(true)}
          transition={{ duration: 2, delay: 2 }}
          onViewportEnter={() => setIsInView(true)}
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          alt="a black and white photograph of me siting on a bench, smiling, wearing a grey shirt, black trousers and a watch"
        />
      </div>
      <div className={style.img__container}>
        <motion.img
          src={imgBack}
          loading="lazy"
          viewport={{ once: true }}
          style={{ y: backgroundY }}
          className={style.img__back}
          onLoad={() => setIsLoaded(true)}
          transition={{ duration: 2, delay: 2 }}
          onViewportEnter={() => setIsInView(true)}
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          alt="a black and white photograph of me siting on a bench, smiling, wearing a grey shirt, black trousers and a watch"
        />
      </div>
      <div className={style.hero__text}>
        <motion.h1
          initial="initial"
          style={{ y: textY }}
          whileInView="animate"
          variants={h1Variants}
        >
          tulio&#xa0;minini
        </motion.h1>
        <motion.p initial="initial" whileInView="animate" variants={pVariants}>
          a former designer who found his passion for <br />
          front-end development.
        </motion.p>
      </div>
    </section>
  );
}
