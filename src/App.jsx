import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Importar a Navbar
import Dashboard from './Components/Dashboard';
import Financeiro from './Components/Financeiro';
import Clientes from './Components/Clientes';
import Projetos from './Components/Projetos';
import Noticias from './Components/Noticias';
import HelpDesk from './Components/HelpDesk'; // Importar o HelpDesk.jsx
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/help-desk" element={<HelpDesk />} /> {/* Rota para HelpDesk */}
      </Routes>
    </Router>
  );
}

export default App;
