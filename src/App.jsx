import Hero from './components/Hero/Hero';
import Audience from './components/Audience/Audience';
import About from './components/About/About'
import Speakers from './components/Speakers/Speakers';
import Schedule from './components/Schedule/Schedule';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Audience />
      <About />
      <Speakers />
      <Schedule />
    </div>
  );
}

export default App;