import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__grid">
          {/* Texto – esquerda */}
          <div className="about__content">
            <h2 className="about__title">Sobre o congresso</h2>
            <p className="about__text">
              O <strong className="about__highlight">Grupo CLG</strong>, referência nacional em licitações 
              (<span className="about__mention">@jurisprudencia.tcu</span>), realiza o 
              <strong className="about__highlight"> III Congresso Nacional de Pareceristas e Assessores Jurídicos</strong>, 
              consolidado como um dos principais encontros do setor, reunindo professores renomados, ministros do TCU, 
              especialistas e profissionais de todo o país.
            </p>
            <p className="about__text">
              Após duas edições de sucesso no Rio de Janeiro, com mais de 300 presentes, o Congresso busca encontrar 
              seu público nacional, realizando sua primeira edição fora da capital fluminense, que ocorrerá em 
              <strong className="about__highlight"> Maceió (AL)</strong>, nos dias 
              <strong className="about__highlight"> 6, 7 e 8 de maio de 2026</strong>.
            </p>
            <p className="about__text">
              O congresso ocorre em um contexto de transformações trazidas pelas 
              <strong className="about__highlight"> Leis nº 14.133/2021 e 13.303/2016</strong>, com programação focada em 
              interpretação jurídica, gestão, governança e controle nas contratações públicas. O objetivo é promover 
              troca de experiências, uniformização de entendimentos e disseminação de boas práticas, reunindo professores, 
              ministros do TCU e profissionais do setor.
            </p>
          </div>

          {/* Grade de quadradinhos – direita */}
          <div className="about__gallery">
            <div className="about__square"></div>
            <div className="about__square"></div>
            <div className="about__square"></div>
            <div className="about__square"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;