import { useState, useEffect } from 'react';
import './Countdown.css';

function Countdown() {
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
    <div className="countdown">
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.days}</div>
        <div className="countdown-label">dias</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.hours}</div>
        <div className="countdown-label">horas</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.minutes}</div>
        <div className="countdown-label">minutos</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.seconds}</div>
        <div className="countdown-label">segundos</div>
      </div>
    </div>
  );
}

export default Countdown;