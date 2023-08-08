import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';

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
    </div>
  );
}

export default App;
