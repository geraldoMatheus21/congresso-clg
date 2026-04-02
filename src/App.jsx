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
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import EventCountDown from './components/EventCountDown/EventCountDown';


function App() {
  return (
    <div className="app">
      <Hero />
      <EventCountDown />
      <About />
      <Audience />
      <Speakers />
      <Schedule />
      <Benefits />
      <Location />
      <Investment />
      <RegistrationForm />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;