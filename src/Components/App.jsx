import React from "react";
import Container from 'react-bootstrap/Container';
import "../Styles/App.css";
import Navbar from "./navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';//Estilos para terminar de configurar y utilizar ReactBootstrap

function App() {
  return (
    <Container fluid>
      <Navbar />
      </Container>
  )
}

export default App
