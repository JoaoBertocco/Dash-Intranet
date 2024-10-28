import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid justify-content-center">
        <Link className="navbar-brand" to="/">
          <img 
            src="/images/logo.png"  // Caminho da imagem
            alt="Logo"
            style={{ width: '310px', height: '60px', padding: '1px', marginLeft: '10px' }}  // Ajuste o tamanho conforme necessário
          />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/financeiro">Financeiro</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/clientes">Clientes</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/noticias">Notícias</Link>
            </li>
            {/* Novo link para Help-Desk */}
           </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
