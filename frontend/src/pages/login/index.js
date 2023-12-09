import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const backgroundImage = "/loginBackground.jpg"; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Enviar email e senha para o backend
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  const backgroundImage = "/images/background.jpg";

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign : 'center',
    color: '#444',
    marginTop: '10px',
  };

  const boxRegisterStyle = {
    backgroundColor: 'rgba(10, 10, 10, 0.1)',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px',
    width: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '400px',
  };

  const customInputStyle = {
    backgroundColor: 'rgba(256, 256, 256, 0.2)',
    borderRadius: '8px', 
    color: '#134',
    border: '1px solid #134',
  };

  const customButtonStyle = {
    backgroundColor: '#5fafd0',
    marginTop: '40px',
    borderRadius: '8px', 
    color: '#f9fafa',
    fontSize: '16px',
    border: '1px solid #367',
  };

  const labelStyle = {
    color: '#e0e8f0',
    fontWeight: 'bold',
    fontSize: '16px',
  };

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
      <Container>
        <Row className="mx-auto justify-content-center align-items-center">
          <Col md={6} className="mx-auto my-auto">
            <div
              style={boxRegisterStyle}
            >
              <h2
              style={titleStyle}>
                Login
              </h2>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label
                  style={labelStyle}>
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={customInputStyle}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label
                  style={labelStyle}>
                    Senha
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={customInputStyle}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100"
                style={customButtonStyle}>
                  Entrar
                </Button>
              </Form>
              <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <Link style={{ color: '#000'}} to="/">Voltar</Link> {/* Link para voltar à página inicial */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
