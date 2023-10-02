import React from 'react';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  


export default function App() {
  return (   
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
