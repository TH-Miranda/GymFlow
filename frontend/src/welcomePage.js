// WelcomePage.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const backgroundImage = "/images/gymBackground.jpg";

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
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fundo semitransparente para o texto
          padding: '20px',
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        <Container>
          <Row>
            <Col md={12}>
                <h1>GymFlow</h1>
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
