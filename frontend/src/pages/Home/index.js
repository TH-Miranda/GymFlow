import React from 'react';
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
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
              <a href="/rank" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '25px'}}>
              <FontAwesomeIcon icon={faTrophy} style={{ marginRight: '5px', width: '2em' }} />Rank de treino
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
      <div style={{ flex: 1, padding: '20px' }}>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
        <div class="container bootdey">
          <div class="col-md-12 bootstrap snippets">
            <div class="panel">
              <div class="panel-body">
                <textarea class="form-control" rows="2" placeholder="What are you thinking?"></textarea>
                <div class="mar-top clearfix">
                  <button class="btn btn-sm btn-primary pull-right" type="submit"><i class="fa fa-pencil fa-fw"></i> Share</button>
                  <a class="btn btn-trans btn-icon fa fa-video-camera add-tooltip" href="#"></a>
                  <a class="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#"></a>
                  <a class="btn btn-trans btn-icon fa fa-file add-tooltip" href="#"></a>
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-body">
                <div class="media-block">
                  <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar1.png"/></a>
                  <div class="media-body">
                    <div class="mar-btm">
                      <a href="#" class="btn-link text-semibold media-heading box-inline">Lisa D.</a>
                      <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i> - From Mobile - 11 min ago</p>
                    </div>
                    <p>consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    <div class="pad-ver">
                      <div class="btn-group">
                        <a class="btn btn-sm btn-default btn-hover-success" href="#"><i class="fa fa-thumbs-up"></i></a>
                        <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i class="fa fa-thumbs-down"></i></a>
                      </div>
                      <a class="btn btn-sm btn-default btn-hover-primary" href="#">Comment</a>
                    </div>

                    <div>
                      <div class="media-block">
                        <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar2.png"/></a>
                        <div class="media-body">
                          <div class="mar-btm">
                            <a href="#" class="btn-link text-semibold media-heading box-inline">Bobby Marz</a>
                            <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i> - From Mobile - 7 min ago</p>
                          </div>
                          <p>Good!</p>
                          <div class="pad-ver">
                            <div class="btn-group">
                              <a class="btn btn-sm btn-default btn-hover-success" href="#"><i class="fa fa-thumbs-up"></i> You Like It</a>
                              <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i class="fa fa-thumbs-down"></i></a>
                            </div>
                            <a class="btn btn-sm btn-default btn-hover-primary" href="#">Comment</a>
                          </div>
                        </div>
                      </div>

                      <div class="media-block">
                        <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar3.png"/></a>
                        <div class="media-body">
                          <div class="mar-btm">
                            <a href="#" class="btn-link text-semibold media-heading box-inline">Carl P.</a>
                            <p class="text-muted text-sm"><i class="fa fa-globe fa-lg"></i> - From Web - 3 min ago</p>
                          </div>
                          <p>Hi Lisa, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                          <div class="pad-ver">
                            <div class="btn-group">
                              <a class="btn btn-sm btn-default btn-hover-success" href="#"><i class="fa fa-thumbs-up"></i></a>
                              <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i class="fa fa-thumbs-down"></i></a>
                            </div>
                            <a class="btn btn-sm btn-default btn-hover-primary" href="#">Comment</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="media-block pad-all">
                  <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar4.png"/></a>
                  <div class="media-body">
                    <div class="mar-btm">
                      <a href="#" class="btn-link text-semibold media-heading box-inline">Anthony K.</a>
                      <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i> - From Mobile - 3 min ago</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                    <img class="img-responsive thumbnail" src="https://bootdey.com/image/400x300" alt="Image"/>
                    <div class="pad-ver">
                      <span class ="tag tag-sm"><i class="fa fa-heart text-danger"></i>250 likes</span>
                      <div class="btn-group">
                        <a class="btn btn-sm btn-default btn-hover-success" href="#"><i class="fa fa-thumbs-up"></i></a>
                        <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i class="fa fa-thumbs-down"></i></a>
                      </div>
                      <a class="btn btn-sm btn-default btn-hover-primary" href="#">Comment</a>
                    </div>
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

export default Home;
