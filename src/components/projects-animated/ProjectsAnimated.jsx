// import { useState } from 'react';
import { useRef } from 'react';
import style from './ProjectsAnimated.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const items = [
  {
    id: '001',
    img: '/images/portfolio-imgs/quiz-game.jpg',
    project: 'Quiz Game',
    github: 'https://github.com/t-minini/project-one-the-game',
    website: 'https://t-minini.github.io/quiz-game/',
    description:
      'My very first web project, which I crafted during an exciting bootcamp journey. This site was brought to life using a combination of HTML, CSS, and vanilla JavaScript, showcasing my early coding endeavors.',
  },
  {
    id: '002',
    img: '/images/portfolio-imgs/concerts-database.jpg',
    project: "Concert's Database",
    github: 'https://github.com/t-minini/concert-database',
    website: 'https://concert-database.netlify.app/',
    description:
      "Driven by my love for live music experiences, I designed this website to capture memories of the concerts I've attended. Crafted with a blend of HTML, CSS, and React and Material UI, it's a digital diary of my musical journey.",
  },
  {
    id: '003',
    img: '/images/portfolio-imgs/where-to-go.png',
    project: 'Where to Go?',
    github: 'https://github.com/t-minini/where-to-go-front',
    website: 'https://wheretogo-tm.netlify.app/',
    description:
      'For our bootcamp final project, two classmates and I created a full-stack e-commerce website using CSS, HTML, React, Ant Design, ExpressJS, MongoDB, and NodeJS.',
  },
  {
    id: '004',
    img: '/images/portfolio-imgs/tulio-minini-website-v1.jpg',
    project: 'My Website V1',
    github: 'https://github.com/t-minini/my-website',
    website: 'https://tulio-minini-v1.netlify.app/',
    description:
      'My very first website/portfolio featuring a mix of CSS, HTML, React, Bootstrap and some cool animations created with vanilla JavaScript and React.js.',
  },
  {
    id: '005',
    img: '/images/portfolio-imgs/skilled.png',
    project: 'Skilled e-learning',
    github: 'https://github.com/t-minini/skilled-elearning-landing-page',
    website: 'https://t-minini.github.io/skilled-elearning-landing-page/',
    description:
      'Frontend Mentor Challenge: I built this landing page using CSS, HTML, Flexbox, CSS Grid, CSS Variables, and a mobile-first workflow. The goal was to develop the website as closely as possible to the Figma design.',
  },
  {
    id: '006',
    img: '/images/portfolio-imgs/modern-art-gallery.jpg',
    project: 'Modern Art Gallery',
    github: 'https://github.com/t-minini/art-gallery-website',
    website: 'https://modern-art-gallery-tm.netlify.app/',
    description:
      'Frontend Mentor Challenge: I built this landing page using CSS, HTML, React, Flexbox, CSS Grid, CSS Variables, and a mobile-first workflow. The goal was to develop the website as closely as possible to the Figma design.',
  },
  {
    id: '007',
    img: '/images/portfolio-imgs/tulio-minini-website-v2.png',
    project: 'My Website V2',
    github: 'https://github.com/t-minini/my-website-v2',
    website: 'https://tuliominini.com/',
    description:
      'The second version of my website/portfolio was created with CSS, HTML, and React. It was also the project where I had my first experience using Figma for design practice.',
  },
  {
    id: '008',
    img: '/images/portfolio-imgs/calculator-app.jpg',
    project: 'Calculator App',
    github: 'https://github.com/t-minini/calculator-app',
    website: 'https://calculator-app-tm.netlify.app/',
    description:
      'Frontend Mentor Challenge: I built this calculator app using React, HTML, CSS, Flexbox and Grid, CSS Variables and Transitions. The goal was to develop the website as closely as possible to the Figma design.',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.imageContainer} ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className={style.textContainer} style={{ y }}>
            <div className={style.topWrapper}>
              <h2>{item.project}</h2>
              <a href={item.github} target={'_blank'} rel="noreferrer">
                Github
              </a>
              <a href={item.website} target={'_blank'} rel="noreferrer">
                Website
              </a>
            </div>
            <p>{item.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export function ProjectsAnimated() {
  return (
    <div className={style.portfolio} id="projects">
      {items.toReversed().map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}
