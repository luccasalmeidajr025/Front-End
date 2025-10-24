import "./CadastroPacientes.css";

export default function CadastroPacientes() {
  return (
    <div className="cadastro-page">
      <h1 className="page-titulo">Cadastro de Paciente</h1>

      <div className="form-externo">
        <form className="form-container">
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

          <div className="buttons">
            <button type="button" className="cancel">Cancelar</button>
            <button type="submit" className="submit">Finalizar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
