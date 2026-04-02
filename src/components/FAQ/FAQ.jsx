import { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Como posso me inscrever?",
      answer: "Você pode fazer sua pré-inscrição através do formulário em nossa página. Após o envio, nossa equipe entrará em contato para confirmar e orientar sobre o pagamento."
    },
    {
      question: "O evento será transmitido online?",
      answer: "Sim, oferecemos a modalidade remota com transmissão ao vivo e acesso gravado por 30 dias."
    },
    {
      question: "Qual a carga horária total?",
      answer: "O congresso tem carga horária total de 21 horas, distribuídas em três dias de evento."
    },
    {
      question: "Receberei certificado?",
      answer: "Sim, todos os participantes receberão certificado individual com a carga horária completa."
    },
    {
      question: "O que está incluído no investimento?",
      answer: "Para a modalidade presencial: acesso a todas as palestras, coffee breaks, material de apoio, kit de brindes e certificado. Para remoto: transmissão ao vivo, acesso gravado, material digital e certificado."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__container">
        <h2 className="faq__title">Perguntas Frequentes</h2>
        <div className="faq__list">
          {faqItems.map((item, index) => (
            <div key={index} className="faq__item">
              <button
                className="faq__question"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className="faq__icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`faq__answer ${openIndex === index ? 'faq__answer--open' : ''}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;