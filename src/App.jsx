import Hero from './components/Hero/Hero';
import Audience from './components/Audience/Audience';
import About from './components/About/About'
import Speakers from './components/Speakers/Speakers';
import Schedule from './components/Schedule/Schedule';
import Benefits from './components/Benefits/Benefits';
import Location from './components/Location/Location';
import Investment from './components/Investment/Investment';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
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
      <Investment />
    </div>
  );
}

export default App;