import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">Sobre o congresso</h2>
        <p className="about__text">
          O <span className="about__highlight">Grupo CLG</span>, referência nacional em licitações, realiza o 
          <span className="about__highlight"> III Congresso Nacional de Pareceristas e Assessores Jurídicos</span>, 
          consolidado como um dos principais encontros do setor, reunindo professores renomados, ministros do TCU, 
          especialistas e profissionais de todo o país.
        </p>
        <p className="about__text" style={{ marginTop: '1rem' }}>
          Após duas edições de sucesso no Rio de Janeiro, com mais de 300 presentes, o Congresso busca encontrar 
          seu público nacional, realizando sua primeira edição fora da capital fluminense, que ocorrerá em 
          <span className="about__highlight"> Maceió (AL)</span>, nos dias 
          <span className="about__highlight"> 6, 7 e 8 de maio de 2026</span>.
        </p>
        <p className="about__text" style={{ marginTop: '1rem' }}>
          O congresso ocorre em um contexto de transformações trazidas pelas 
          <span className="about__highlight"> Leis nº 14.133/2021 e 13.303/2016</span>, com programação focada em 
          interpretação jurídica, gestão, governança e controle nas contratações públicas. O objetivo é promover 
          troca de experiências, uniformização de entendimentos e disseminação de boas práticas.
        </p>
      </div>
    </section>
  );
}

export default About;