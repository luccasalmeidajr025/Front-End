import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroPacientes.css";

export default function CadastroPacientes() {
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const tratarEnvio = (e) => {
    e.preventDefault();
    setMostrarMensagem(true);
    setTimeout(() => setMostrarMensagem(false), 3000);
  };

  const cancelarCadastro = () => {
    navigate("/pacientes");
  };

  const tratarEnter = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value.trim();
      if (value === "") return;
      e.preventDefault();
      if (!tags.includes(value)) setTags([...tags, value]);
      e.target.value = "";
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="cadastro-page">
      <h1 className="page-titulo">Cadastro de Paciente</h1>

      <div className="form-externo">
        <form className="form-container" onSubmit={tratarEnvio}>
          <section className="form-section">
            <h3>Identificação</h3>
            <div className="grid-2">
              <input type="text" placeholder="Nome completo" />
              <input type="date" placeholder="dd/mm/aaaa" />
            </div>
            <div className="grid-2">
              <input type="tel" placeholder="Telefone" />
              <input type="email" placeholder="E-mail" />
            </div>
            <input type="text" placeholder="Endereço" />
          </section>

          <section className="form-section">
            <h3>Saúde Geral</h3>
            <input type="text" placeholder="Condições médicas" />
            <input type="text" placeholder="Alergias" />
            <input type="text" placeholder="Medicação atual" />
          </section>

          <section className="form-section">
            <h3>Responsável</h3>
            <div className="grid-2">
              <input type="text" placeholder="Nome completo" />
              <input type="date" placeholder="dd/mm/aaaa" />
            </div>
            <div className="grid-2">
              <input type="tel" placeholder="Telefone" />
              <input type="email" placeholder="E-mail" />
            </div>
            <input type="text" placeholder="Endereço" />
          </section>

          <section className="form-section">
            <h3>Diagnóstico</h3>
            <textarea placeholder="Descreva o diagnóstico do paciente"></textarea>
          </section>

          <div className="form-section">
            <h3>Tags</h3>
            <div className="tags-container">
              {tags.map((tag, index) => (
                <div key={index} className="tag">
                  {tag}
                  <button
                    type="button"
                    className="remove-tag"
                    onClick={() => removeTag(index)}
                  >
                    ×
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Pressione Enter para adicionar"
                onKeyDown={tratarEnter}
                className="input-tag"
              />
            </div>
          </div>

          <div className="buttons">
            <button
              type="button"
              className="cancel"
              onClick={cancelarCadastro}
            >
              Cancelar
            </button>
            <button type="submit" className="submit">
              Finalizar
            </button>
          </div>
        </form>
      </div>

      {mostrarMensagem && (
        <div className="mensagem-sucesso">
          ✅ Paciente cadastrado com sucesso!
        </div>
      )}
    </div>
  );
}
