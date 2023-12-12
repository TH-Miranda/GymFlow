// AdditionalInfo.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const backgroundImage = "/images/background.jpg";

const AdditionalInfo = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleAdditionalInfo = (e) => {
    e.preventDefault();
    // Adicione a lógica para salvar as informações adicionais aqui
    try {
      const token = localStorage.getItem('token');

      const response = fetch('http://localhost:50000/api/v1/user/additional-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          height,
          weight,
          age,
          gender,
        }),
      });

      if (response.status === 200) {
        alert('Informações adicionais salvas com sucesso!');
      } else {
        alert('Erro ao salvar informações adicionais!');
      }
    } catch (error) {
      console.log(error);
    }
  
    console.log('Altura:', height);
    console.log('Peso:', weight);
    console.log('Idade:', age);
    console.log('Sexo:', gender);    
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
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
    height: '550px',
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
        <Row className="justify-content-center">
          <Col md={6} className='mx-auto my-auto'>
            <div
              style={boxRegisterStyle}
            >
              <h2 
              style={titleStyle}
              >Informações Adicionais</h2>
              <Form onSubmit={handleAdditionalInfo}>
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

export default AdditionalInfo;
