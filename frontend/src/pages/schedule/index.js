import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
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
    {nome: 'Torax', imagem: 'https://barbend.com/wp-content/uploads/2023/07/pectoralis-major-barbend.com-2.jpg'},
    {nome: 'Costas', imagem: "https://barbend.com/wp-content/uploads/2023/06/bodybuilders-back-barbend.com-1.jpg"},
    {nome: 'Ombros', imagem: 'https://fitliferegime.com/wp-content/uploads/2022/06/one-arm-shoulder-press.jpg.webp'},
    {nome: 'Biceps', imagem: 'https://fitliferegime.com/wp-content/uploads/2023/01/Bodyweight-Biceps-Exercises-at-Home-to-Bigger-Arm.jpg.webp'},
    {nome: 'Triceps', imagem: 'https://fitliferegime.com/wp-content/uploads/2021/06/Best-Tricep-Execise-and-Workout.jpg.webp'},
    {nome : 'Quadriceps', imagem: 'https://facts.net/wp-content/uploads/2023/08/15-unbelievable-facts-about-quadriceps-1692974765.jpg'},
    {nome : 'Posteriores', imagem: 'https://fitliferegime.com/wp-content/uploads/2021/07/12-Best-Hamstring-Exercises-to-Build-Stronger-and-killer-Legs.jpg.webp'},
    {nome: 'Gluteos', imagem: 'https://cdn.mos.cms.futurecdn.net/umUz4ZtLxLFT4iyQ5JXXxZ-650-80.jpg.webp'},
  ];

  const handleSubmit = async (e) => {    
    e.preventDefault();

    console.log('Dia:', dia);
    console.log('Periodo:', periodo);
    console.log('Grupo Muscular:', grupoMuscular);

    const bodyResquest = JSON.stringify({
      gym_name:'Golds Gym',
      day:'monday',
      day_period:'morning',
      muscle_group:grupoMuscular
    });

    console.log(bodyResquest);

    // Enviar os dados para a API
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:50000/api/v1/schedule', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`,
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
  
  const customButtonStyle = {
    backgroundColor: '#5fafd0',
    marginTop: '20px',
    marginBottom: '40px',
    borderRadius: '8px', 
    color: '#f9fafa',
    fontSize: '20px',
    border: '1px solid #367',
    width: '300px'
  };

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
      {/* Barra lateral */}
      <div style={{ width: 'flex', backgroundColor: 'black', color: 'white', padding: '10px', position: 'fixed', top: 0, left: 0, height: '100%', zIndex: 1}}>
        <div style={{ padding: '20px' }}>
          {/* Avatar do usuário (substitua o src pelo seu caminho) */}
          <img
            src="/images/avatar.svg"
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
              <a href="/userProfile" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px'}}>
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

      {/* Conteúdo principal */}
      <div style={{ flex: 1, marginLeft: '300px', marginRight: '10px', top: 0, padding: '20px', zIndex: 0 }}>
      <div className="container mt-5">
      <h1 className="mb-4 text-center">Agendamento de Treino</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-center mx-auto" style={{ width: '300px' }}>
          <label htmlFor="academia" className="form-label">Academia:</label>
          <select className="form-select" id="academia" required>
            <option value="academia1">Academia 1</option>
            <option value="academia2">Academia 2</option>
            <option value="academia3">Academia 3</option>
          </select>
        </div>
        <div className="mb-3 text-center mx-auto" style={{ width: '300px' }}>
          <label htmlFor="dia" className="form-label">Escolha a Data:</label>
          <input type="date" className="form-control" id="dia" value={dia} onChange={(e) => setDia(e.target.value)} required />
        </div>
        <div className="mb-3 text-center mx-auto" style={{ width: '300px' }}>
          <label htmlFor="periodo" className="form-label">Período do Dia:</label>
          <select className="form-select" id="periodo" value={periodo} onChange={(e) => setPeriodo(e.target.value)} required>
            <option value="manha">Manhã</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
          </select>
        </div>
        <div className="mb-3 text-center mx-auto">
          <label className="form-label">Escolha o Grupo Muscular:</label>
        <Container className='mx-auto' style={{ maxWidth: '950px' }}>
          <Row xs={1} md={3} className="g-4">
            {gruposMusculares.map((grupo) => (
              <Col key={grupo.nome} className="mb-4">
                <div
                  style={{ width: '18rem' }}
                  className={`card ${grupoMuscular === grupo.nome ? 'selected' : ''}`}
                  onClick={() => setGrupoMuscular(grupo.nome)}
                >
                  <img src={grupo.imagem} className="card-img-top" alt={grupo.nome} />
                  <div className="card-body text-center">
                    <h5 className="card-title text-size">{grupo.nome}</h5>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        </div>
        <button type="submit" className="btn btn-primary mx-auto w-10" style={customButtonStyle}>Agendar Treino</button>
      </form>
      {mensagem && <p className="mt-3 alert alert-success">{mensagem}</p>}
    </div> 
      </div>
    </div>
    );
};

export default Schedule;
