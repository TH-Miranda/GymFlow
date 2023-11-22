// WelcomePage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const backgroundImage = "/images/background.jpg";
const logo = "/images/GymFlow.png";

const WelcomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="position-absolute p-3 mb-2 bg-black top-10 start-50 translate-middle rounded-circle">
        <img src={process.env.PUBLIC_URL + logo} alt="GymFlow logo" height="400px" />
      </div>
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <Container style={{marginTop: '200px'}}>
          <Row>
            <Col md={12}>
              <h3>Bem-vindo ao seu app de academia favorito</h3>
              <h3>Seu treino, suas regras</h3>
              <p>Faça login ou crie uma conta para começar</p>
              <Button variant="dark" size="lg" href="/login">
                Entrar
              </Button>{' '}
              <Button variant="dark" size="lg" href="/signup">
                Cadastre-se
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WelcomePage;
