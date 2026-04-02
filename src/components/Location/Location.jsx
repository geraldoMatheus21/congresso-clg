import './Location.css';

function Location() {
  // Coordenadas de Maceió - AL (centro aproximado)
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126147.243255192!2d-35.772877!3d-9.649848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145e5cdb5e5b9%3A0x5e6f6c5b5b5b5b5b!2sMacei%C3%B3%2C%20AL!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr";

  return (
    <section className="location">
      <div className="location__container">
        <h2 className="location__title">Local do evento</h2>
        <p className="location__address">
          Maceió - AL | Centro de Convenções (exemplo)
        </p>
        <iframe
          title="Mapa do evento"
          className="location__map"
          src={mapSrc}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <button
          className="location__button"
          onClick={() => window.open(mapSrc, '_blank')}
        >
          Ver no mapa
        </button>
      </div>
    </section>
  );
}

export default Location;