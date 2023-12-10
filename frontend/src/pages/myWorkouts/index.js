import React from "react";
import './style.css';
import SideBar from "../../components/sideBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const MyWorkouts = () => {
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
      <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">Segunda-feira</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                    <div class="widget-49-date-primary">
                                        <span class="widget-49-date-day">09</span>
                                        <span class="widget-49-date-month">apr</span>
                                    </div>                                    
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                                    <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                                    <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">Terça-feira</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                    <div class="widget-49-date-warning">
                                        <span class="widget-49-date-day">13</span>
                                        <span class="widget-49-date-month">apr</span>
                                    </div>
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span>Scheming module is removed</span></li>
                                    <li class="widget-49-meeting-item"><span>App design contract confirmed</span></li>
                                    <li class="widget-49-meeting-item"><span>Client request to send invoice</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">Quarta-feira</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                    <div class="widget-49-date-success">
                                        <span class="widget-49-date-day">22</span>
                                        <span class="widget-49-date-month">apr</span>
                                    </div>
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span>Scope is revised and updated</span></li>
                                    <li class="widget-49-meeting-item"><span>Time-line has been changed</span></li>
                                    <li class="widget-49-meeting-item"><span>Received approval to start wire-frame</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">Quinta-feira</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                    <div class="widget-49-date-success">
                                        <span class="widget-49-date-day">22</span>
                                        <span class="widget-49-date-month">apr</span>
                                    </div>
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span>Scope is revised and updated</span></li>
                                    <li class="widget-49-meeting-item"><span>Time-line has been changed</span></li>
                                    <li class="widget-49-meeting-item"><span>Received approval to start wire-frame</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">Sexta-feira</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                    <div class="widget-49-date-success">
                                        <span class="widget-49-date-day">22</span>
                                        <span class="widget-49-date-month">apr</span>
                                    </div>
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span>Scope is revised and updated</span></li>
                                    <li class="widget-49-meeting-item"><span>Time-line has been changed</span></li>
                                    <li class="widget-49-meeting-item"><span>Received approval to start wire-frame</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">Sábado</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                    <div class="widget-49-date-success">
                                        <span class="widget-49-date-day">22</span>
                                        <span class="widget-49-date-month">apr</span>
                                    </div>
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span>Scope is revised and updated</span></li>
                                    <li class="widget-49-meeting-item"><span>Time-line has been changed</span></li>
                                    <li class="widget-49-meeting-item"><span>Received approval to start wire-frame</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card card-margin">
                        <div class="card-header no-border">
                            <h5 class="card-title">Domingo</h5>
                        </div>
                        <div class="card-body pt-0">
                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                    <div class="widget-49-date-success">
                                        <span class="widget-49-date-day">22</span>
                                        <span class="widget-49-date-month">apr</span>
                                    </div>
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span>Scope is revised and updated</span></li>
                                    <li class="widget-49-meeting-item"><span>Time-line has been changed</span></li>
                                    <li class="widget-49-meeting-item"><span>Received approval to start wire-frame</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    );
};

export default MyWorkouts;


