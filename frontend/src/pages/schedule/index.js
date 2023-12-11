import React, { useEffect, useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Schedule = () =>{
  const [dia, setDia] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [grupoMuscular, setGrupoMuscular] = useState('');
  const [mensagem] = useState('');

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

    const bodyResquest = JSON.stringify({
      day:dia,
      period:periodo,
      muscleGroup:grupoMuscular
    });

    console.log(bodyResquest);

    // Enviar os dados para a API
    try {
      const response = await fetch('http://localhost:50000/api/v1/schedule', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: bodyResquest
      });

        if (response.ok) {
          console.log('Treino agendado com sucesso!');
        } else {
          console.error('Erro ao agendar treino:', response.statusText);
        }

    } catch (error) {
      console.error('Erro ao agendar treino:', error);
    };
  };
  
  // TODO: caso o usuario clique em qualquer lugar da tela, o card do grupo muscular selecionado é desmarcado
  

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
      {/* Barra lateral */}
      <div style={{ width: 'flex', backgroundColor: 'black', color: 'white', padding: '10px'}}>
        <div style={{ padding: '20px' }}>
          {/* Avatar do usuário (substitua o src pelo seu caminho) */}
          <img
            src="https://file.rendit.io/n/DsdAo7ATZAUNQObf6xge.svg"
            alt="Avatar"
            style={{ width: '150px', height: '150px', marginBottom: '40px' }}
          />

          {/* Lista de opções */}
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="/home" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px' }}>
              <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px', width: '2em' }} />Home
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/MyWorkouts" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px' }}>
              <FontAwesomeIcon icon={faDumbbell} style={{ marginRight: '5px', width: '2em'}} />Meus treinos
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/Schedule" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px'}}>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '5px', width: '2em' }} />Agendar treino
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/meus_treinos" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px'}}>
              <FontAwesomeIcon icon={faTrophy} style={{ marginRight: '5px', width: '2em' }} />Rank de treino
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/meus_treinos" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px'}}>
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px', width: '2em' }} />Perfil
              </a>
            </li>
          </ul>
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              cursor: 'pointer',
              paddingBottom: '3em'
            }}>
            <a href="/meus_treinos" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px'}}>
              <FontAwesomeIcon icon={faSignOutAlt} style={{marginRight: '5px', width:'2em'}}/>Logout
            </a>   
          </div>         
          
        </div>
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        <div className="container mt-5">
          <h1 className="mb-4 text-center">Agendamento de Treino</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="dia" className="form-label">Escolha a Data:</label>
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
              <label className="form-label">Escolha o Grupo Muscular:</label>
              <div className="d-flex flex-wrap justify-content-center">
                {gruposMusculares.map((grupo) => (
                <div key={grupo.nome} className={`card mb-3 mx-2 ${grupoMuscular === grupo.nome ? 'selected' : ''}`} onClick={() => setGrupoMuscular(grupo.nome)}>
                  <img src={`/images/${grupo.imagem}`} className="card-img-top" alt={grupo.nome} />
                  <div className="card-body text-center">
                    <h5 className="card-title text-size">{grupo.nome}</h5>
                  </div>
                </div>
                ))}
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Agendar Treino</button>
          </form>
          {mensagem && <p className="mt-3 alert alert-success">{mensagem}</p>}
        </div> 
      </div>
    </div>
    );
};

export default Schedule;
