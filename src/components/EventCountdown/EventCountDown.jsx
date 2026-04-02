import { useState, useEffect } from 'react';
import './EventCountdown.css';

function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('May 6, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="event-countdown">
      <div className="event-countdown__container">
        <h2 className="event-countdown__title">O evento começa em</h2>
        <div className="event-countdown__timer">
          <div className="event-countdown__item">
            <span className="event-countdown__number">{timeLeft.days}</span>
            <span className="event-countdown__unit">DIAS</span>
          </div>
          <div className="event-countdown__item">
            <span className="event-countdown__number">{timeLeft.hours}</span>
            <span className="event-countdown__unit">HORAS</span>
          </div>
          <div className="event-countdown__item">
            <span className="event-countdown__number">{timeLeft.minutes}</span>
            <span className="event-countdown__unit">MINUTOS</span>
          </div>
          <div className="event-countdown__item">
            <span className="event-countdown__number">{timeLeft.seconds}</span>
            <span className="event-countdown__unit">SEGUNDOS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventCountdown;