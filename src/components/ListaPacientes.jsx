import { useNavigate } from "react-router-dom";
import "./ListaPacientes.css";

export default function ListaPacientes() {
  const navigate = useNavigate();

  const pacientes = [
    { nome: "Paciente 1", responsavel: "Resp. 1", tags: "#tag1", data: "01/10/2025" },
    { nome: "Paciente 2", responsavel: "Resp. 2", tags: "#tag2", data: "01/10/2025" },
    { nome: "Paciente 3", responsavel: "Resp. 3", tags: "#tag3", data: "01/10/2025" },
  ];

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

        <div className="filtro-linha" role="region" aria-label="Filtros">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Responsável" />
          <input type="text" placeholder="Tags" />
          <input type="date" aria-label="Data de Cadastro" />
          <button className="btn-filtro">Filtrar</button>
        </div>

        <div className="tabela-externa" role="table" aria-label="Tabela de Pacientes">
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
                    <button className="action-btn edit" title="Editar">✏️</button>
                    <button className="action-btn del" title="Excluir">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
