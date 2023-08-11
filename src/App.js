import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/header/header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo:"Front End",
    foto:"https://github.com/Noel1kt.png",
    nombre:"Noel Mazariegos",
    puesto:"Desarrollador"
  },
  {
  id: uuid(),
  equipo: "Front End",
  foto: "https://github.com/harlandlohora.png",
  nombre: "Harland Lohora",
  puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  const [equipos, actualizarEquipos] = useState([
      {
        id: uuid(),
        titulo:"Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9",
      },
      {
        id: uuid(),
        titulo:"Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF",
      },
      {
        id: uuid(),
        titulo:"Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2",
      },
      {
        id: uuid(),
        titulo:"Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8",
      },
      {
        id: uuid(),
        titulo:"UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5",
      },
      {
        id: uuid(),
        titulo:"Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9",
      },
      {
        id: uuid(),
        titulo:"Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF",
      }

  ]) 

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    console.log("nuevo", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }
//Actualizar Color de equipo
  const actualizarColor = (color, titulo) => {
    console.log("Actualizar: ",color,titulo)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

//Eliminar Colaborador

  const eliminarColaborador = () => {
    console.log("Eliminar Colaborador")
  }



  return (
    <div>
      <Header />
      { mostrarFormulario === true ? <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      /> : <div></div>}
    

      <MiOrg cambiarMostrar={cambiarMostrar} />
      { 
        equipos.map( (equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        />)
      }
    <Footer />

    </div>
  );
}

export default App;
