import React, { useEffect, useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDumbbell, faCalendarAlt, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const MyWorkouts = () => {
    const [workouts, setWorkouts] = useState({
        segunda: [],
        terca: [],
        quarta: [],
        quinta: [],
        sexta: [],
        sabado: [],
        domingo: []
    });

    useEffect(() => {
        fetchWorkouts();
    }, []);

    const fetchWorkouts = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:50000/api/v1/schedule?gym_name=Golds Gym&muscle_group=Biceps`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setWorkouts(data);
            } else {
                console.error('Falha ao buscar treinos');
            }
        } catch (error) {
            console.error('Erro ao buscar treinos:', error);
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Barra lateral */}
            <div style={{backgroundColor: 'black', color: 'white', padding: '10px', top: 0, left: 0, zIndex: 1, height: '100%', position: 'fixed' }}>
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
                            <a href="/userProfile" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px' }}>
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
            <div style={{ flex: 1, padding: '20px', marginLeft: '250px' }}>
                <h2 style={{ marginBottom: '3em', marginLeft: '8em' }}>Meus treinos</h2>
                <div class="container">
                    <div class="row">
                        {Object.keys(workouts).map((day, index) => (
                            <div class="col-lg-4" key={index}>
                                <div class="card card-margin">
                                    <div class="card-header no-border">
                                        <h5 class="card-title">{day.charAt(0).toUpperCase() + day.slice(1)}</h5>
                                    </div>
                                    <div class="card-body pt-0">
                                        <div class="widget-49">
                                            {workouts[day].map((workout, i) => (
                                                <ol class="widget-49-meeting-points" key={i}>
                                                    <li class="widget-49-meeting-item"><span>{workout}</span></li>
                                                </ol>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWorkouts;
