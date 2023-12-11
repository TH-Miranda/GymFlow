// UserProfilePage.jsx
import React, { useEffect, useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// Defina a classe UserData com os atributos necessários
class UserData {
  constructor(firstName, lastName, age, height, weight, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
  }
}

const UserProfilePage = () => {
  const [userData, setUserData] = useState(new UserData('', '', 0, 0, 0, ''));
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:50000/api/v1/user/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userDataFromServer = await response.json();
          setUserData(new UserData(
            userDataFromServer.first_name,
            userDataFromServer.second_name,
            userDataFromServer.age,
            userDataFromServer.height,
            userDataFromServer.weight,
            userDataFromServer.gender
          ));
          console.log(userData);
        } else {
          console.error('Erro ao carregar dados do usuário:', response.status);
        }
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);

    try {
      const token = localStorage.getItem('token');
      const body = JSON.stringify({
        'first_name': userData.firstName,
        'second_name': userData.lastName,
        'age': userData.age,
        'height': userData.height,
        'weight': userData.weight,
        'gender': 'male'
      });
      const response = await fetch('http://localhost:50000/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: body,
      });

      if (response.ok) {
        alert('Dados alterados com sucesso!');
      } else {
        alert('Erro ao alterar dados!');
      }
    } catch (error) {
      console.error('Erro ao alterar dados:', error);
    }
  };

  const handleChangePassword = () => {
    setIsChangingPassword(true);
  };

  const handleSavePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      alert('A nova senha e a confirmação da nova senha não são iguais!');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:50000/api/v1/user/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          'current_password': oldPassword,
          'new_password': newPassword,
        }),
      });

      if (response.ok) {
        alert('Senha alterada com sucesso!');
      } else {
        alert('Erro ao alterar senha!');
      }
    } catch (error) {
      console.error('Erro ao alterar senha:', error);
    }

    setTimeout(() => {
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
      setIsChangingPassword(false);
    }, 1000);
  };

  return (
    <div style={{ background: 'images/background.jpg', display: 'flex', height: '100vh' }}>
      {/* Barra lateral */}
      <div style={{ width: 'flex', backgroundColor: 'black', color: 'white', padding: '10px', position: 'fixed', top: 0, left: 0, zIndex: 1, height:'100%' }}>
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
                <FontAwesomeIcon icon={faDumbbell} style={{ marginRight: '5px', width: '2em' }} />Meus treinos
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/Schedule" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px' }}>
                <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '5px', width: '2em' }} />Agendar treino
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/meus_treinos" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px' }}>
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
            <a href="/meus_treinos" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px' }}>
              <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '5px', width: '2em' }} />Logout
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
              <p><strong>Idade:</strong> {isEditing ? <input type="number" name="age" value={userData.age} onChange={(e) => setUserData({ ...userData, age: e.target.value })} /> : userData.age} anos</p>
              <p><strong>Peso:</strong> {isEditing ? <input type="number" name="weight" value={userData.weight} onChange={(e) => setUserData({ ...userData, weight: e.target.value })} /> : userData.weight} kg</p>
              <p><strong>Altura:</strong> {isEditing ? <input type="number" name="height" value={userData.height} onChange={(e) => setUserData({ ...userData, height: e.target.value })} /> : userData.height} cm</p>
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
                <label>Confirmar Nova Senha:
                  <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
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

