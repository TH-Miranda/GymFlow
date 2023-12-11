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
      <div style={{ position: 'fixed', height: '100%', width: 'flex', backgroundColor: 'black', color: 'white', padding: '10px', top: 0, left: 0, zIndex: 1}}>
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
      <div style={{ flex: 1, padding: '20px', paddingLeft: '15em' }}>
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
                      <a href="#" class="btn-link text-semibold media-heading box-inline">R. Cariani</a>
                      <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i> - From Mobile - 11 min ago</p>
                    </div>
                    <p>🏋️‍♂️ Desperte o Gigante Interior: Transformação na Academia! 🏋️‍♀️

                          Você já pensou em dar um passo ousado em direção à sua melhor versão? 💪 Na academia, encontramos mais do que máquinas e pesos; descobrimos o poder de desafiar nossos limites e cultivar uma mentalidade imparável.

                          É hora de quebrar barreiras e abraçar o processo de transformação física e mental. A jornada na academia não é apenas sobre esculpir músculos, mas também sobre construir resiliência, disciplina e autoconfiança.

                          Não importa se você está começando ou aprimorando sua rotina, cada repetição conta uma história de superação. A persistência é a chave, e cada gota de suor é um investimento no seu bem-estar.

                          Na academia, você se torna o arquiteto do seu próprio corpo. Cada levantamento de peso é um tijolo, moldando uma estrutura mais forte e resistente. Não se trata apenas do resultado final, mas da jornada que o leva até lá.

                          Além dos ganhos físicos, a academia é um terreno fértil para novas amizades e uma comunidade de apoio. Juntos, compartilhamos triunfos e incentivamos uns aos outros nos momentos desafiadores.

                          Então, desperte o gigante interior que reside dentro de você! Venha se juntar a nós na jornada de autodescoberta e conquista na academia. 💥 Que cada treino seja uma celebração do seu potencial ilimitado. 💥 #TransformaçãoNaAcademia #DesperteOGiganteInterior #VidaSaudável #AcademiaViva</p>
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
                            <a href="#" class="btn-link text-semibold media-heading box-inline">J. Balestrini</a>
                            <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i> - From Mobile - 7 min ago</p>
                          </div>
                          <p>Muito legal, obrigado pela dose de motivação ! 💪 </p>
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
                            <a href="#" class="btn-link text-semibold media-heading box-inline">Lisa D.</a>
                            <p class="text-muted text-sm"><i class="fa fa-globe fa-lg"></i> - From Web - 3 min ago</p>
                          </div>
                          <p>Inspirador! 💪✨ Cada palavra ressoa profundamente. A academia é mais que um espaço de treino; é um terreno de superação e crescimento. Estou pronto para despertar meu gigante interior e abraçar a jornada! 🏋️‍♂️ #Motivado #AcademiaLife</p>
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
                    <p>"Desafie-se a cada repetição. 💪 Supere limites, conquiste metas. O treino é a jornada, e a força está em cada movimento. 👊 #FocoNoTreino #ForçaInterior"</p>
                    <img class="img-responsive thumbnail" src="/images/treino.jpg" alt="Image"/>
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
