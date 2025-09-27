import React from "react";
import "../Styles/App.css"
import img1 from "../Images/camisaVenta.webp"
import img2 from "../Images/gorraVenta.webp"
import img3 from "../Images/pantalonVenta.png"
import TP from "../Components/uso-props";
import Contador from "./contador.jsx";
import LT from "./lista-tarea.jsx";

function App() {
  return (
    <>
    {/* Componente de TarjetaProducto */}
      <div className="principal">
        <TP
            titulo="Elegante camisa"
            precio="20"
            descripcion="Hermosa Camisa color gris ideal para andar en casa"
            urlImage={img1} 
          />
          <TP
            titulo="Gorra para hombre"
            precio="5"
            descripcion="Gorra para hombres una buena convinacion con cualquier look"
            urlImage={img2} 
          />
        <TP
            titulo="Elegante pantalon"
            precio="23"
            descripcion="Pantalon Jim para hombre ideal para salidas casuales"
            urlImage={img3} 
          />
        </div>
        {/* Componente Contador */}
        <Contador />
        <hr />
        <br />
        {/* Componente de lista de tareas mas reloj renderizados juntos*/}
        <LT />
      </>
  )
}

export default App
