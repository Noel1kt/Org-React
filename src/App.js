import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';

function App() {
  const  [mostrarFormulario, actualizarMostrar] = useState(true)

  return (
    <div>
      <Header />
      { mostrarFormulario === true ? <Formulario /> : <div></div>}

      <MiOrg />
    </div>
  );
}

export default App;
