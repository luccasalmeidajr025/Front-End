import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">Acompanhamento TEA</h2>
      <nav>
        <ul>
          <li><NavLink to="/" end>🏠 Home</NavLink></li>
          <li><NavLink to="/pacientes">👥 Pacientes</NavLink></li>
          <li><NavLink to="/terapeutas">🧑‍⚕️ Terapeutas</NavLink></li>
          <li><NavLink to="/tarefas">🗒️ Tarefas</NavLink></li>
          <li><NavLink to="/configuracoes">⚙️ Configurações</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
