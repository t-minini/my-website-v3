import style from './App.module.css';

import { Hero } from './components/hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import { About } from './components/about/About';
import { Vertical } from './components/name-vertical/Vertical';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
// import { ProjectsTwo } from './components/projects-two/ProjectsTwo';
// import { ProjectsThree } from './components/projects-three/ProjectsThree';
// import { Cursor } from './components/cursor/Cursor';

function App() {
  return (
    <div className={style.app}>
      {/* <Cursor /> */}
      <Navbar />
      <Vertical />
      <Hero />
      <div>
        <About className={style.app__about} />
        <Skills />
      </div>
      <Projects />
      {/* <ProjectsTwo /> */}
      {/* <ProjectsThree /> */}
    </div>
  );
}
export default App;
