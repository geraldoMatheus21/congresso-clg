import './Speakers.css';

function Speakers() {
  const speakersList = [
    {
      name: "Ministro Augusto Nardes",
      role: "TCU",
      image: "https://via.placeholder.com/300?text=Ministro",
    },
    {
      name: "Profa. Dra. Mariana Pinto",
      role: "Especialista em Licitações",
      image: "https://via.placeholder.com/300?text=Profa",
    },
    {
      name: "Dr. Rafael Carvalho",
      role: "Advogado e Consultor",
      image: "https://via.placeholder.com/300?text=Dr.",
    },
    {
      name: "Jorge Ulisses",
      role: "Presidente do Grupo CLG",
      image: "https://via.placeholder.com/300?text=Jorge",
    },
    // Adicione mais palestrantes conforme necessário
  ];

  return (
    <section className="speakers">
      <div className="speakers__container">
        <h2 className="speakers__title">Confira os palestrantes</h2>
        <div className="speakers__grid">
          {speakersList.map((speaker, index) => (
            <div key={index} className="speaker__card">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="speaker__image"
              />
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