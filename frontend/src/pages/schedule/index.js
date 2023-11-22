import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../../components/nav';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Schedule = () =>{
  const [dia, setDia] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [grupoMuscular, setGrupoMuscular] = useState('');
  const [mensagem, setMensagem] = useState('');

  const gruposMusculares = [
    {nome: 'Torax', imagem: 'peitolas.png'},
    {nome: 'Costas', imagem: 'costas.jpg'},
    {nome: 'Ombros', imagem: 'ombros.jpg'},
    {nome: 'Biceps', imagem: 'biceps.jpg'},
    {nome: 'Triceps', imagem: 'triceps.jpg'},
    {nome : 'Quadriceps', imagem: 'pernas.jpg'},
    {nome : 'Posteriores', imagem: 'pernas.jpg'},
    {nome: 'Gluteos', imagem: 'gluteos.jpg'},
  ];

  const handleSubmit = async (e) => {    
    e.preventDefault();

    console.log('Dia:', dia);
    console.log('Periodo:', periodo);
    console.log('Grupo Muscular:', grupoMuscular);

    // Enviar os dados para a API
    try {
      const response = await fetch(`http://localhost:8000/agendamento?dia=${dia}&periodo=${periodo}&grupo_muscular=${grupoMuscular}`);
      const data = await response.json();
      setMensagem(data.mensagem);
    } catch (error) {
      console.error('Erro ao agendar treino:', error);
      setMensagem('Erro ao agendar treino. Por favor, tente novamente.');
    }
  };

  // TODO: caso o usuario clique em qualquer lugar da tela, o card do grupo muscular selecionado é desmarcado
  

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Agendamento de Treino</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="dia" className="form-label">Dia:</label>
          <input type="date" className="form-control" id="dia" value={dia} onChange={(e) => setDia(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="periodo" className="form-label">Período do Dia:</label>
          <select className="form-select" id="periodo" value={periodo} onChange={(e) => setPeriodo(e.target.value)} required>
            <option value="manha">Manhã</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Grupo Muscular:</label>
          <div className="d-flex flex-sm-row flex-column justify-content-center">
            {gruposMusculares.map((grupo) => (
              <div className="col-md-4 mb-3 mx-3" key={grupo.nome} onClick={() => setGrupoMuscular(grupo.nome)} style={{ cursor: 'pointer' }}>
              <div className={`card custom-card-size ${grupoMuscular === grupo.nome ? 'bg-primary text-white' : ''}`}>
                <img src={`/images/${grupo.imagem}`} className="card-img-top custom-img-size" alt={grupo.nome} />
                <div className="card-body">
                  <h5 className="card-title text-size">{grupo.nome}</h5>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Agendar Treino</button>
      </form>
      {mensagem && <p className="mt-3 alert alert-info">{mensagem}</p>}
    </div>
  );
}



export default Schedule;
