import Hero from './components/Hero/Hero';
import Audience from './components/Audience/Audience';
import About from './components/About/About'
import Speakers from './components/Speakers/Speakers';
import Schedule from './components/Schedule/Schedule';
import Benefits from './components/Benefits/Benefits';
import Location from './components/Location/Location';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Audience />
      <About />
      <Speakers />
      <Schedule />
      <Benefits />
      <Location />
    </div>
  );
}

export default App;