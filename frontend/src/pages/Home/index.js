import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaCalendar, FaDumbbell, FaTrophy, FaSignOutAlt, FaUser } from 'fontawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Barra lateral */}
      <div style={{ width: 'auto', backgroundColor: 'black', color: 'white', padding: '10px'}}>
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
              <a style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px' }}>
                Meus treinos
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px'}}>
                Agendar treino
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px'}}>
                Rank de treino
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px'}}>
                Perfil
              </a>
            </li>
          </ul>
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              cursor: 'pointer',
            }}>
            <a style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px'}}>
              Logout
            </a>   
          </div>         
          
        </div>
      </div>

      {/* Conteúdo principal */}
      <div style={{ flex: 1, padding: '20px' }}>
        {/* Seu conteúdo principal aqui */}
      </div>
    </div>
  );
};

export default Home;
