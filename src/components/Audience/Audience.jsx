import './Audience.css';

function Audience() {
  const audienceItems = [
    {
      icon: "⚖️",
      title: "Assessores e Diretores Jurídicos",
      description: "Atualização sobre precedentes e boas práticas",
    },
    {
      icon: "📊",
      title: "Gestores e Auditores",
      description: "Controle, governança e tomada de decisão",
    },
    {
      icon: "👨‍💼",
      title: "Consultores e Advogados",
      description: "Networking e casos práticos",
    },
    {
      icon: "🏛️",
      title: "Procuradores",
      description: "Uniformização de entendimentos",
    },
  ];

  return (
    <section className="audience">
      <div className="container">
        <h2 className="audience__title">Para quem é o congresso?</h2>
        <div className="audience__grid">
          {audienceItems.map((item, index) => (
            <div key={index} className="audience__card">
              <div className="audience__icon">{item.icon}</div>
              <h3 className="audience__card-title">{item.title}</h3>
              <p className="audience__card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Audience;