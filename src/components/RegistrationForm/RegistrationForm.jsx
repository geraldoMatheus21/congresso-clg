import { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    orgao: '',
    cargo: '',
    modalidade: 'Presencial',
    contratacao: 'Órgão Público',
    quantidade: '',
    ciente: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.ciente) {
      alert('Você precisa estar ciente da condição de pré-inscrição.');
      return;
    }
    // Aqui você pode enviar os dados para uma API ou serviço
    console.log('Dados enviados:', formData);
    alert('Pré-inscrição enviada! Entraremos em contato em breve.');
    // Limpar formulário? Opcional
    // setFormData({ ...initialState });
  };

  return (
    <section className="registration">
      <div className="registration__container">
        <h2 className="registration__title">Pré-inscrição</h2>
        <p className="registration__subtitle">
          Preencha o formulário para realizar sua pré-inscrição! Em seguida, nossa equipe entrará em contato com você.
        </p>
        <form className="registration__form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label className="form__label">Nome Completo</label>
            <input
              type="text"
              name="nome"
              className="form__input"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group">
            <label className="form__label">Whatsapp (com DDD)</label>
            <input
              type="tel"
              name="whatsapp"
              className="form__input"
              value={formData.whatsapp}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group">
            <label className="form__label">Seu melhor e-mail</label>
            <input
              type="email"
              name="email"
              className="form__input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group">
            <label className="form__label">Nome do Órgão/Empresa em que trabalha</label>
            <input
              type="text"
              name="orgao"
              className="form__input"
              value={formData.orgao}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label className="form__label">Cargo / Função</label>
            <input
              type="text"
              name="cargo"
              className="form__input"
              value={formData.cargo}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label className="form__label">Modalidade da Participação</label>
            <select
              name="modalidade"
              className="form__select"
              value={formData.modalidade}
              onChange={handleChange}
            >
              <option>Presencial</option>
              <option>Remoto</option>
            </select>
          </div>
          <div className="form__group">
            <label className="form__label">Modalidade de Contratação</label>
            <select
              name="contratacao"
              className="form__select"
              value={formData.contratacao}
              onChange={handleChange}
            >
              <option>Órgão Público</option>
              <option>Empresa Privada</option>
              <option>Profissional Autônomo</option>
            </select>
          </div>
          <div className="form__group">
            <label className="form__label">
              Quantos procuradores/assessores jurídicos/advogados trabalham com você?
            </label>
            <input
              type="number"
              name="quantidade"
              className="form__input"
              value={formData.quantidade}
              onChange={handleChange}
              placeholder="Ex: 5"
            />
          </div>
          <div className="form__checkbox-group">
            <input
              type="checkbox"
              name="ciente"
              id="ciente"
              className="form__checkbox"
              checked={formData.ciente}
              onChange={handleChange}
              required
            />
            <label htmlFor="ciente" className="form__checkbox-label">
              Estou ciente que esta pré-inscrição não confirma a participação no Congresso.
            </label>
          </div>
          <button type="submit" className="form__button">
            Quero fazer minha inscrição
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegistrationForm;