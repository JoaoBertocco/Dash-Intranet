import React, { useState } from 'react';
import './Clientes.css';

const Clientes = () => {
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');
  const [tempoContrato, setTempoContrato] = useState('');
  const [clientes, setClientes] = useState([]);

  const handleAddCliente = () => {
    if (nome && cnpj.length === 14 && endereco && tempoContrato) {
      const novoCliente = { nome, cnpj, endereco, tempoContrato: parseInt(tempoContrato) };
      setClientes([...clientes, novoCliente]);
      setNome('');
      setCnpj('');
      setEndereco('');
      setTempoContrato('');
      alert("Cliente adicionado!");
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  };

  return (
    <div className="clientes-container">
      <h2>Adicionar novo cliente</h2>
      <form className="form-clientes" onSubmit={(e) => e.preventDefault()}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <label>
          CNPJ:
          <input
            type="text"
            value={cnpj}
            onChange={(e) => {
              const cnpj = e.target.value.replace(/\D/g, '');
              setCnpj(cnpj);
            }}
            required
            maxLength="14"
            minLength="14"
          />
        </label>
        <label>
          Endereço:
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </label>
        <label>
          Tempo de Contrato (anos):
          <input
            type="number"
            value={tempoContrato}
            onChange={(e) => setTempoContrato(e.target.value)}
            required
            min="1"
          />
        </label>
        <button type="button" onClick={handleAddCliente}>Adicionar Cliente</button>
      </form>
      <div className="clientes-list">
        <h3>Lista de Clientes</h3>
        <ul>
          {clientes.map((cliente, index) => (
            <li key={index}>
              <strong>Nome:</strong> {cliente.nome}, <strong>CNPJ:</strong> {cliente.cnpj}, <strong>Endereço:</strong> {cliente.endereco}, <strong>Tempo de Contrato:</strong> {cliente.tempoContrato} anos
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Clientes;
