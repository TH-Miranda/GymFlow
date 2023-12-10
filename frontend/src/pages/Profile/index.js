// UserProfilePage.jsx
import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const UserProfilePage = () => {
  const initialUserData = {
    firstName: 'João',
    lastName: 'Silva',
    email: 'joao.silva@example.com',
    age: 25,
    weight: 70,
    height: 175,
    favoriteGyms: [
      { name: 'Academia A', rank: 1 },
      { name: 'Academia B', rank: 2 },
      { name: 'Academia C', rank: 3 },
    ],
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Adicione aqui a lógica para salvar os dados editados no backend
  };

  const handleChangePassword = () => {
    setIsChangingPassword(true);
  };

  const handleSavePassword = () => {
    // Adicione aqui a lógica para salvar a nova senha no backend
    console.log('Senha antiga:', oldPassword);
    console.log('Nova senha:', newPassword);
    setOldPassword('');
    setNewPassword('');
    setIsChangingPassword(false);
  };

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

      {/* Conteúdo principal */}
      <div style={{ flex: 1, padding: '20px' }}>
      <div className="page-container">
      <div className="content-container">
        <h1>{`Olá, ${userData.firstName}`}</h1>
        <div className="user-info">
          <p><strong>Nome:</strong> {isEditing ? <input type="text" name="firstName" value={userData.firstName} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} /> : userData.firstName} {isEditing ? <input type="text" name="lastName" value={userData.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} /> : userData.lastName}</p>
          <p><strong>Email:</strong> {isEditing ? <input type="text" name="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} /> : userData.email}</p>
          <p><strong>Idade:</strong> {isEditing ? <input type="number" name="age" value={userData.age} onChange={(e) => setUserData({ ...userData, age: e.target.value })} /> : userData.age} anos</p>
          <p><strong>Peso:</strong> {isEditing ? <input type="number" name="weight" value={userData.weight} onChange={(e) => setUserData({ ...userData, weight: e.target.value })} /> : userData.weight} kg</p>
          <p><strong>Altura:</strong> {isEditing ? <input type="number" name="height" value={userData.height} onChange={(e) => setUserData({ ...userData, height: e.target.value })} /> : userData.height} cm</p>
        </div>
        <div className="favorite-gyms">
          <h2>Ranking de Academias Favoritas</h2>
          <ul>
            {userData.favoriteGyms.map((gym, index) => (
              <li key={index}>{`${gym.rank}. ${gym.name}`}</li>
            ))}
          </ul>
        </div>
        <div className="edit-buttons">
          {isEditing ? (
            <button onClick={handleSaveClick}>Salvar</button>
          ) : (
            <button onClick={handleEditClick}>Editar</button>
          )}
          <button onClick={handleChangePassword}>Alterar Senha</button>
        </div>
        {isChangingPassword && (
          <div className="change-password-form">
            <label>Senha Antiga:
              <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
            </label>
            <label>Nova Senha:
              <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </label>
            <button onClick={handleSavePassword}>Salvar Senha</button>
          </div>
        )}
      </div>
    </div>  
      </div>
    </div>
  );
};

export default UserProfilePage;
