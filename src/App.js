import style from './App.module.css';

import { Hero } from './components/hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import { Vertical } from './components/name-vertical/Vertical';

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <Vertical />
      <Hero />
    </div>
  );
}
export default App;
