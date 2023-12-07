// AdditionalInfo.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DayCard from '../../components/dayCard';
import '../../styles/dayCard.css';

const daysOfWeek = ['segunda-feira', 'terca-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado', 'domingo'];

const AdditionalInfo = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [trainingDays] = useState('');

  const handleAdditionalInfo = (e) => {
    e.preventDefault();
    // Adicione a lógica para salvar as informações adicionais aqui
    console.log('Altura:', height);
    console.log('Peso:', weight);
    console.log('Idade:', age);
    console.log('Sexo:', gender);
    console.log('Dias de Treino:', trainingDays);
  };

  const [selectedDay, setSelectedDay] = useState([]);

  const handleSelectDay = (day) => {
    if (selectedDay.includes(day)) {
      setSelectedDay(selectedDay.filter((d) => d !== day));
    } else {
      setSelectedDay([...selectedDay, day]);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fundo semitransparente para o formulário
              padding: '20px',
              borderRadius: '5px',
              marginTop: '20px',
            }}
          >
            <h2>Informações Adicionais</h2>
            <Form onSubmit={handleAdditionalInfo}>
              <Form.Group controlId="formBasicHeight">
                <Form.Label>Altura (cm)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Digite sua altura"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicWeight">
                <Form.Label>Peso (kg)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Digite seu peso"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicAge">
                <Form.Label>Idade</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Digite sua idade"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicGender">
                <Form.Label>Sexo</Form.Label>
                <Form.Control
                  as="select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                </Form.Control>
              </Form.Group>

              <div className="selected-days">
                <h2>Dias Selecionados</h2>
                {selectedDay.map(day => (
                  <div key={day} className="selected-day">
                    {day}
                  </div>
                ))}
              </div>

              <div className="days-container">
                {daysOfWeek.map(day => (
                  <DayCard
                    key={day}
                    day={day}
                    isSelected={day === selectedDay}
                    onSelect={handleSelectDay}
                  />
                ))}
              </div>              
              <Button variant="primary" type="submit">
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
  );
};

export default AdditionalInfo;
