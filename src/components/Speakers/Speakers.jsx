import './Speakers.css';

function Speakers() {
  // Lista de palestrantes (13 itens – 5+5+3)
  const speakersList = [
    { name: "Palestrante 1", role: "Cargo", image: "" },
    { name: "Palestrante 2", role: "Cargo", image: "" },
    { name: "Palestrante 3", role: "Cargo", image: "" },
    { name: "Palestrante 4", role: "Cargo", image: "" },
    { name: "Palestrante 5", role: "Cargo", image: "" },
    { name: "Palestrante 6", role: "Cargo", image: "" },
    { name: "Palestrante 7", role: "Cargo", image: "" },
    { name: "Palestrante 8", role: "Cargo", image: "" },
    { name: "Palestrante 9", role: "Cargo", image: "" },
    { name: "Palestrante 10", role: "Cargo", image: "" },
    { name: "Palestrante 11", role: "Cargo", image: "" },
    { name: "Palestrante 12", role: "Cargo", image: "" },
    { name: "Palestrante 13", role: "Cargo", image: "" },
  ];

  // Dividir em linhas: 5, 5, 3
  const firstRow = speakersList.slice(0, 5);
  const secondRow = speakersList.slice(5, 10);
  const thirdRow = speakersList.slice(10, 13);

  return (
    <section className="speakers">
      <div className="speakers__container">
        <h2 className="speakers__title">Confira os palestrantes</h2>

        {/* Linha 1 – 5 cards */}
        <div className="speakers__row">
          {firstRow.map((speaker, index) => (
            <div key={index} className="speaker__card">
              <div className="speaker__image-placeholder"></div>
              <div className="speaker__info">
                <h3 className="speaker__name">{speaker.name}</h3>
                <p className="speaker__role">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Linha 2 – 5 cards */}
        <div className="speakers__row">
          {secondRow.map((speaker, index) => (
            <div key={index} className="speaker__card">
              <div className="speaker__image-placeholder"></div>
              <div className="speaker__info">
                <h3 className="speaker__name">{speaker.name}</h3>
                <p className="speaker__role">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Linha 3 – 3 cards centralizados */}
        <div className="speakers__row speakers__row--center">
          {thirdRow.map((speaker, index) => (
            <div key={index} className="speaker__card">
              <div className="speaker__image-placeholder"></div>
              <div className="speaker__info">
                <h3 className="speaker__name">{speaker.name}</h3>
                <p className="speaker__role">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;