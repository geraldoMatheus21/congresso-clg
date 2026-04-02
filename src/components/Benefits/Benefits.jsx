import './Benefits.css';

function Benefits() {
  const benefitsList = [
    { icon: "🏆", text: "Ganho de autoridade profissional" },
    { icon: "🎓", text: "Capacitação e contato direto com grandes nomes nacionais" },
    { icon: "💻", text: "Modalidade de participação remota disponível" },
    { icon: "📜", text: "Emissão de certificado individual" },
    { icon: "🤝", text: "Networking e trocas de experiências" },
    { icon: "📁", text: "Acesso exclusivo a modelos, já de acordo com a nova lei de licitações" },
    { icon: "💬", text: "Grupo no WhatsApp para atualização permanente central de dúvidas" },
    { icon: "🎁", text: "Brindes e kit de suporte" },
    { icon: "⏰", text: "Carga Horária: 21 Horas" },
  ];

  return (
    <section className="benefits">
      <div className="benefits__container">
        <h2 className="benefits__title">Vantagens em participar dessa experiência</h2>
        <div className="benefits__grid">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="benefit__card">
              <div className="benefit__icon">{benefit.icon}</div>
              <p className="benefit__text">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;