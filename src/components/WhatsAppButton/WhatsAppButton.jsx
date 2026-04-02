import './WhatsAppButton.css';

function WhatsAppButton() {
  const phoneNumber = "5511999999999"; // substitua pelo número real no formato internacional sem +
  const message = "Olá! Gostaria de mais informações sobre o Congresso CLG.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-button">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg
          className="whatsapp-icon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm0 18.23c-1.5 0-2.97-.4-4.26-1.16l-.3-.18-3.12.82.83-3.04-.2-.31c-.83-1.32-1.27-2.83-1.27-4.37 0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.56.12-.16.24-.64.8-.78.96-.14.16-.28.18-.52.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.1-.5.12-.12.25-.31.37-.46.12-.16.16-.27.24-.45.08-.18.04-.34-.02-.48-.06-.14-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43-.14 0-.31-.02-.47-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.57.18 1.09.15 1.5.09.46-.06 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.46-.28z"/>
        </svg>
      </a>
    </div>
  );
}

export default WhatsAppButton;