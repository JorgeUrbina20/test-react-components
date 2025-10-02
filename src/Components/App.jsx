import Container from 'react-bootstrap/Container';
import React from "react";
import "../Styles/App.css"
import LT from "./lista-tarea.jsx";
import Navbar from "./navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';//Estilos para terminar de configurar y utilizar ReactBootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container fluid>
      <Navbar />
      </Container>
  )
}

export default App
