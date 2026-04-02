import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__logo">Grupo CLG</div>
          <p className="footer__description">
            Referência nacional em licitações e assessoria jurídica.
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-link" target="_blank" rel="noopener noreferrer">
              📘
            </a>
            <a href="#" className="footer__social-link" target="_blank" rel="noopener noreferrer">
              📷
            </a>
            <a href="#" className="footer__social-link" target="_blank" rel="noopener noreferrer">
              💼
            </a>
          </div>
          <div className="footer__contact">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              WhatsApp: (11) 99999-9999
            </a>
            <a href="mailto:contato@grupoclg.com.br">
              contato@grupoclg.com.br
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Grupo CLG - 2026 © Todos os Direitos Reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;