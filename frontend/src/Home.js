import React from 'react';
import { Link } from 'react-router-dom';
import NavbarComponent from './components/nav';

const Home = () =>{
  return (
    <div>
      <NavbarComponent /> 
      <h1>Página Inicial</h1> 
    </div>
  );
}

export default Home;