// SignUp.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatchError('As senhas não correspondem.');
      return;
    }

    // Limpa a mensagem de erro se as senhas coincidirem
    setPasswordMatchError('');

    // passar para api
    try {
      const response = fetch('http://localhost:50000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      if (response.ok) {
        console.log('Usuário cadastrado com sucesso!');
      } else {
        console.error('Erro ao cadastrar usuário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }

    console.log('Nome:', firstName);
    console.log('Sobrenome:', lastName);
    console.log('Email:', email);
    console.log('Senha:', password);
    console.log('Confirmação de Senha:', confirmPassword);
  };

  return (
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
            <h2>Cadastro</h2>
            {passwordMatchError && (
              <Alert variant="danger">{passwordMatchError}</Alert>
            )}
            <Form onSubmit={handleSignUp} id="signup-form">
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu sobrenome"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Form.Group>

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

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirmação de Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Link to={{
                pathname: "/additionalInfo",
                state: {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: password,
                  confirmPassword: confirmPassword
                }
              }}>
                <Button variant="dark" type="submit" form="signup-form">
                  Próxima página
                </Button>
              </Link>

              
            </Form>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <Link to="/">Voltar</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
