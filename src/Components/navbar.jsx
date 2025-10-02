/*
Retos nuevo con  ReactBootstrap
-> Crear un navbar para simular una pagina web comun, pero esta no sera 
    MPA (Multi Page Application) sino que sera una SPA (Single Page Application)
    ademas cada vez que se toque un boton en el navbar sera nombrado segun el nombre 
    del proyecto, ejemplo, contador, targeta1, targeta2, reloj + lista tarea.

-> Mostrar cada uno de los items en el NavBar ahi simulara el SPA sin actualizarse 
    la pagina web. Solo mostrara lo que el usuario ha tocado.

-> Objetivo: Familiarizarse con REACTBOOTSTRAP y aprender a usar sus componente
            crear aplicaciones responsivas en forma de SPA con React. 
 */ 

import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import TargetaProduc from "../Components/index-TP.jsx";
import Contador from "./contador.jsx";
import ListaTarea from "./lista-tarea.jsx";
import SetCard from "./index-card.jsx";
import Inicio from './Inicio.jsx';

function Navbar() {

    const [barraActiva, setBarraActiva]=useState("Inicio")
  return (
      <>
{/* Donde Key es el nombre de cualquier variable como e o event que le pasa el valor
 de eventKey automaticamente, es de reactBootstrap no de React nativo */}
        <Nav 
            variant="tabs"
            activeKey={barraActiva}
            onSelect={(key)=>setBarraActiva(key)}  
            className='fs-5'
        >
            <Nav.Item>
                <Nav.Link eventKey="Inicio">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Tarjeta_1">Tarjeta 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Targeta_2">Targeta 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Contador">Contador</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Lista_Tarea">Lista Tarea</Nav.Link>
            </Nav.Item>
        </Nav>

        <Container className='mt-4'>
            {barraActiva==="Inicio" && <Inicio />}
            {barraActiva==="Tarjeta_1" && <TargetaProduc />}
            {barraActiva==="Targeta_2" && < SetCard/>}
            {barraActiva==="Contador" && <Contador />}
            {barraActiva==="Lista_Tarea" && <ListaTarea />}
        </Container>
    </>
  );
}

export default Navbar;