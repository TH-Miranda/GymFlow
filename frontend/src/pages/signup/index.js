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
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSignUp = async (e) => {
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
          'email': email,
          'password': password,
          'first_name': firstName,
          'second_name': lastName,
          'height': height,
          'weight': weight,
          'age': age,
          'gender': gender,
        }),
      });

      if ((await response).status === 200) {
        alert('Usuário cadastrado com sucesso!');
        setTimeout(() => {
          window.location.href = '/login';
        }, 1500);
        console.log('Usuário cadastrado com sucesso!');
      } else {
        alert('Erro ao cadastrar usuário!');
        console.error('Erro ao cadastrar usuário:', response.statusText);
      }
    } catch (error) {
      alert('Erro ao cadastrar usuário!');
      console.error('Erro ao cadastrar usuário:', error);
    }

    console.log('Nome:', firstName);
    console.log('Sobrenome:', lastName);
    console.log('Email:', email);
    console.log('Senha:', password);
    console.log('Confirmação de Senha:', confirmPassword);
    console.log('Altura:', height);
    console.log('Peso:', weight);
    console.log('Idade:', age);
    console.log('gender:', gender)

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
    <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
              <div
                style={boxRegisterStyle}
              >
                <h2 style={titleStyle}>Cadastro</h2>
                {passwordMatchError && (
                  <Alert variant="danger">{passwordMatchError}</Alert>
                )}
                <Form onSubmit={handleSignUp} id="signup-form">
                  <Form.Group controlId="formBasicFirstName">
                    <Form.Label
                    style={labelStyle}>
                      Nome
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite seu nome"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      style={customInputStyle}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicLastName">
                    <Form.Label
                    style={labelStyle}>
                      Sobrenome
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite seu sobrenome"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      style={customInputStyle}
                    />
                  </Form.Group>

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

                  <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label 
                    style={labelStyle} >
                      Confirmação de Senha
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirme sua senha"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      style={customInputStyle}
                    />
                  </Form.Group>                                     
                </Form>
              </div>

              <div
                style={boxRegisterStyle}
              >
                <h2 
                style={titleStyle}
                >Informações Adicionais</h2>
                <Form onSubmit={handleSignUp}>
                  <Form.Group controlId="formBasicHeight">
                    <Form.Label
                      style={labelStyle}
                    >Altura (cm)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Digite sua altura"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required
                      style={customInputStyle}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicWeight">
                    <Form.Label
                      style={labelStyle}
                    >Peso (kg)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Digite seu peso"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                      style={customInputStyle}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicAge">
                    <Form.Label
                      style={labelStyle}
                    >Idade</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Digite sua idade"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                      style={customInputStyle}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicGender">
                    <Form.Label
                      style={labelStyle}
                    >Sexo</Form.Label>
                    <Form.Control
                      as="select"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                      style={customInputStyle}
                    >
                      <option value="">Selecione</option>
                      <option value="male">Masculino</option>
                      <option value="female">Feminino</option>
                      <option value="other">Outro</option>
                    </Form.Control>
                  </Form.Group>

                  <Button variant="primary" type="submit" style={customButtonStyle}>
                    Salvar
                  </Button>
                </Form>
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                  <Link to="/">Voltar</Link>
              </div>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
