import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListaPacientes.css";

export default function ListaPacientes() {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);

  const [pacientes, setPacientes] = useState([
    { nome: "Paciente 1", responsavel: "Resp. 1", tags: "#tag1", data: "01/10/2025" },
    { nome: "Paciente 2", responsavel: "Resp. 2", tags: "#tag2", data: "02/10/2025" },
    { nome: "Paciente 3", responsavel: "Resp. 3", tags: "#tag3", data: "03/10/2025" },
  ]);

  const tratarEdicao = () => {
    navigate("/pacientes/novo");
  };

  const tratarExcluir = (paciente) => {
    setPacienteSelecionado(paciente);
    setMostrarConfirmacao(true);
  };

  const confirmarExclusao = () => {
    setPacientes(pacientes.filter((p) => p.nome !== pacienteSelecionado.nome));
    setMostrarConfirmacao(false);
    setMensagem(`Paciente "${pacienteSelecionado.nome}" excluído com sucesso!`);
    setTimeout(() => setMensagem(""), 3000);
  };

  const cancelarExclusao = () => {
    setMostrarConfirmacao(false);
  };

  return (
    <div className="lista-pacientes-page">
      <div className="card-externo">
        <div className="card-header">
          <h2>Lista de Pacientes</h2>
          <button
            className="btn-new"
            onClick={() => navigate("/pacientes/novo")}
            aria-label="Novo Paciente"
          >
            + Novo Paciente
          </button>
        </div>

        <div className="filtro-linha">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Responsável" />
          <input type="text" placeholder="Tags" />
          <input type="date" />
          <button className="btn-filtro">Filtrar</button>
        </div>

        <div className="tabela-externa">
          <table className="tabela-pacientes">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Responsável</th>
                <th>Tags</th>
                <th>Data de Cadastro</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((p, i) => (
                <tr key={i}>
                  <td>{p.nome}</td>
                  <td>{p.responsavel}</td>
                  <td>{p.tags}</td>
                  <td>{p.data}</td>
                  <td className="actions">
                    <button className="action-btn edit" onClick={tratarEdicao}>
                      ✏️
                    </button>
                    <button
                      className="action-btn del"
                      onClick={() => tratarExcluir(p)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
      {mensagem && <div className="mensagem-exclusao">{mensagem}</div>}

      
      {mostrarConfirmacao && (
        <div className="card-excluir">
          <div className="modal-confirmacao">
            <h3>Confirmar exclusão</h3>
            <p>Tem certeza que deseja excluir o paciente "{pacienteSelecionado.nome}"?</p>
            <div className="botoes-modal">
              <button className="btn-cancelar" onClick={cancelarExclusao}>
                Cancelar
              </button>
              <button className="btn-confirmar" onClick={confirmarExclusao}>
                Sim, excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
