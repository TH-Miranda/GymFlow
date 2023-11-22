// DayCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/dayCard.css';

const DayCard = ({ day, isSelected, onSelect }) => {
    const handleClick = () => {
        if(isSelected) {
            onSelect(null);
        } else {
            onSelect(day);
        }
    };

    return (
        <Card
        className={`text-center day-card ${isSelected ? 'selected' : ''}`}
        onClick={handleClick}
        >
        <Card.Body>
            <Card.Title>{day}</Card.Title>
            <Card.Text>{isSelected ? 'Selecionado' : 'Clique para selecionar'}</Card.Text>
        </Card.Body>
        </Card>
    );
};

export default DayCard;
