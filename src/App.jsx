import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ListaPacientes from "./components/ListaPacientes";
import CadastroPacientes from "./components/CadastroPacientes";
import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pacientes" element={<ListaPacientes />} />
          <Route path="/pacientes/novo" element={<CadastroPacientes />} />
        </Routes>
      </main>
    </div>
  );
}
