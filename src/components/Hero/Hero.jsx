import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        {/* Logo */}
        <img 
          src="/logo-clg 1.svg" 
          alt="Grupo CLG" 
          className="hero__logo"
        />

        <div className="hero__brand">Grupo CLG</div>
        <h1 className="hero__title">
          3º Congresso Nacional de Pareceristas e Assessores Jurídicos
        </h1>
        <p className="hero__subtitle">
          Especialistas da assessoria jurídica e controle se reúnem para debater os impactos das Leis nº 14.133/2021 e 13.303/2016 nas contratações públicas.
        </p>
        <p className="hero__description">
          Serão 3 dias de palestras, painéis e debates práticos sobre governança, responsabilização e tomada de decisão. Um espaço para atualização profissional, networking qualificado e troca de boas práticas.
        </p>

        {/* DATA E LOCAL EM QUADRADOS LADO A LADO */}
        <div className="hero__info-cards">
          <div className="hero__info-card">
            <span className="hero__info-icon">📅</span>
            <span className="hero__info-text">06 a 08 de maio de 2026</span>
          </div>
          <div className="hero__info-card">
            <span className="hero__info-icon">📍</span>
            <span className="hero__info-text">Maceió - AL</span>
          </div>
        </div>

        <button className="hero__button">
          Garantir minha vaga →
        </button>
      </div>
    </section>
  );
}

export default Hero;