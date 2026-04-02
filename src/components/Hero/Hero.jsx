import Countdown from '../Countdown/Countdown';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">
          3º Congresso Nacional de Pareceristas e Assessores Jurídicos
        </h1>
        <p className="hero__subtitle">
          Especialistas da assessoria jurídica e controle se reúnem para debater os impactos das Leis nº 14.133/2021 e 13.303/2016 nas contratações públicas.
        </p>

        <Countdown />

        <button className="hero__button">
          Garantir minha vaga
        </button>
        <p className="hero__date">06 a 08 de maio de 2026 | Maceió - AL</p>
      </div>
    </section>
  );
}

export default Hero;