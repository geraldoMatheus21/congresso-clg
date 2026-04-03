import './Investment.css';

function Investment() {
  const plans = [
    {
      name: "Presencial",
      price: "R$ 3.497,00",
      period: "2º lote",
      features: [
        "Acesso a todas as palestras e painéis",
        "Material de apoio exclusivo",
        "Coffee breaks inclusos",
        "Certificado de participação (21h)",
        "Kit de brindes",
        "Networking presencial",
      ],
      featured: false,
    },
    {
      name: "Remoto",
      price: "R$ 1.997,00",
      period: "2º lote",
      features: [
        "Transmissão ao vivo",
        "Acesso gravado por 30 dias",
        "Material digital",
        "Certificado de participação (21h)",
        "Participação por chat ao vivo",
        "Grupo exclusivo no WhatsApp",
      ],
      featured: true,
    },
  ];

  return (
    <section className="investment">
      <div className="investment__container">
        <h2 className="investment__title">Investimento</h2>
        <div className="investment__grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`investment__card ${plan.featured ? 'investment__card--featured' : ''}`}
            >
              <div className="investment__header">
                <h3>{plan.name}</h3>
              </div>
              <ul className="investment__features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              {/* Preço movido para baixo da lista */}
              <div className="investment__price">
                {plan.price} <small>{plan.period}</small>
              </div>
              <button className="investment__button">Garantir minha vaga</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Investment;