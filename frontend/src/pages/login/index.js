import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, redirect } from 'react-router-dom';

const backgroundImage = "/loginBackground.jpg"; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // TODO: Enviar email e senha para o backend
    const bodyResquest = JSON.stringify({
      email,
      password,
    });

    console.log(bodyResquest);

    try {
      const response = await fetch('http://localhost:50000/api/v1/auth/login' ,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        setLoginStatus('Login realizado com sucesso!');        
        console.log('Login realizado com sucesso!');
        setTimeout(() => {
          window.location.href = '/Home';
        }, 1500); 
      } else {
        setLoginStatus('Erro ao realizar login:', response.status);        
        console.error('Teste:', response.status);
      }

    } catch (error) {
      setLoginStatus('Erro ao realizar login:', error);      
      console.log('teste:', error)
      console.error('Erro ao realizar login:', error);
    };
  };

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                padding: '20px',
                borderRadius: '5px',
                marginTop: '20px',
              }}
            >
              <h2>Login</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>           
            
                <Button variant="primary" type="submit">
                  Entrar
                </Button>
              </Form>
              {loginStatus && (
                <div style={{ marginTop: '10px', textAlign: 'center', color: loginStatus.includes('sucesso') ? 'green' : 'red' }}>
                  {loginStatus}
                </div>
              )}
              <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <Link to="/">Voltar</Link> {/* Link para voltar à página inicial */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
