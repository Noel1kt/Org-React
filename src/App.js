import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';

function App() {
  const  [mostrarFormulario, actualizarMostrar] = useState(false)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      { mostrarFormulario === true ? <Formulario /> : <div></div>}

      <MiOrg cambiarMostrar={cambiarMostrar} />
      <Equipo equipo="Programación"/>
      <Equipo equipo="Front End"/>
      <Equipo equipo="Data Science"/>
      <Equipo equipo="DevOps"/>
      <Equipo equipo="Ux y Diseño"/>
    </div>
  );
}

export default App;
