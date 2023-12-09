import React from 'react';
import SideBar from '../../components/sideBar';

const Home = () => {
  return (
    <div>
      {/* Barra lateral */}
      <SideBar />
      {/* Conteúdo principal */}
      <div style={{ flex: 1, padding: '20px' }}>
        {/* Seu conteúdo principal aqui */}
      </div>
    </div>
  );
};

export default Home;
