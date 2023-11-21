import style from './App.module.css';

import { Hero } from './components/hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import { About } from './components/about/About';
import { Vertical } from './components/name-vertical/Vertical';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <Vertical />
      <Hero />
      <div>
      <About className={style.app__about}/>
      <Skills/>
      </div>
      
    </div>
  );
}
export default App;
