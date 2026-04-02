import { useState } from 'react';
import './Schedule.css';

function Schedule() {
  const [activeDay, setActiveDay] = useState('06');

  const scheduleData = {
    '06': [
      { time: '09h - 11h30', title: 'ASSESSORIA JURÍDICA: PRERROGATIVAS, PAPEL E RESPONSABILIZAÇÃO', panel: 'PAINEL 1' },
      { time: '11h30 - 12h50', title: 'LGPD', panel: 'PAINEL 2' },
      { time: '12h50 - 14h30', title: 'Intervalo para almoço', panel: '' },
      { time: '14h30 - 15h50', title: 'ASSESSORIA JURÍDICA, CONCESSÕES, PPPs E O USO DE BENS PÚBLICOS', panel: 'PAINEL 3' },
      { time: '15h50 - 16h20', title: 'Coffee Break', panel: '' },
      { time: '16h20 - 17h40', title: 'NOVAS TECNOLOGIAS E IMPACTOS NA ATUAÇÃO DO ASSESSOR JURÍDICO', panel: 'PAINEL 4' },
    ],
    '07': [
      { time: '08h30 - 10h20', title: 'ASSESSORIA JURÍDICA E CONTRATAÇÕES DIRETAS', panel: 'PAINEL 5' },
      { time: '10h40 - 12h20', title: 'O CONTROLE DAS CONTRATAÇÕES PÚBLICAS', panel: 'PAINEL 6' },
      { time: '12h20 - 14h', title: 'Intervalo para almoço', panel: '' },
      { time: '14h - 15h50', title: 'A ATUAÇÃO DA ASSESSORIA JURÍDICA NA FASE PREPARATÓRIA', panel: 'PAINEL 7' },
      { time: '15h50 - 16h10', title: 'Coffee Break', panel: '' },
      { time: '16h10 - 17h20', title: 'ASSESSORIA JURÍDICA NAS EMPRESAS ESTATAIS', panel: 'PAINEL 8' },
      { time: '17h20 - 18h', title: 'ESG - GOVERNANÇA', panel: 'PAINEL 9' },
    ],
    '08': [
      { time: '08h - 10h10', title: 'ASSESSORIA JURÍDICA, CONTRATOS E EXECUÇÃO', panel: 'PAINEL 10' },
      { time: '10h40 - 12h', title: 'OBRAS E SERVIÇOS DE ENGENHARIA', panel: 'PAINEL 11' },
      { time: '12h - 13h', title: 'ENCERRAMENTO', panel: 'PAINEL 12' },
    ],
  };

  return (
    <section className="schedule">
      <div className="schedule__container">
        <h2 className="schedule__title">Programação completa</h2>
        <div className="schedule__tabs">
          {['06', '07', '08'].map((day) => (
            <button
              key={day}
              className={`schedule__tab ${activeDay === day ? 'schedule__tab--active' : ''}`}
              onClick={() => setActiveDay(day)}
            >
              {day} de Maio
            </button>
          ))}
        </div>
        <div className="schedule__content">
          {scheduleData[activeDay].map((item, idx) => (
            <div key={idx} className="schedule__item">
            <div className="schedule__header">
            <span className="schedule__time">{item.time}</span>
            {item.panel && <span className="schedule__panel">{item.panel}</span>}
            </div>
            <div className="schedule__title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;