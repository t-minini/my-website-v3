import style from './App.module.css';

import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Navbar } from './components/navbar/Navbar';
import { Skills } from './components/skills/Skills';
import { Cursor } from './components/cursor/Cursor';
import { Contact } from './components/contact/Contact';
import { Projects } from './components/projects/Projects';
import { Vertical } from './components/name-vertical/Vertical';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    <div className={style.app}>
      <Cursor />
      <Navbar />
      <Vertical />
      <Hero />
      <div>
        <About className={style.app__about} />
        <Skills />
      </div>
      {/* <Parallax pages={2}> */}
      <Projects />
      {/* <ParallaxLayer offset={0} */}
      {/* speed={8}> */}
      {/* </ParallaxLayer> */}
      {/* <ParallaxLayer offset={1} */}
      {/* speed={1}> */}
      <Contact />
      {/* </ParallaxLayer> */}
      {/* </Parallax> */}
      {/* <ProjectsTwo /> */}
      {/* <ProjectsThree /> */}
    </div>
  );
}
export default App;
