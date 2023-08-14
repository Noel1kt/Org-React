import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const [titulo,actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejando el envío")
        var datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo,colorPrimario: color})
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar Nombre"
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre}/>
            <Campo 
            titulo="Puesto"
            placeholder="Ingresar Puesto" 
            required
            valor={puesto} 
            actualizarValor={actualizarPuesto}/>
            <Campo 
            titulo="Foto"
            placeholder="Ingresar enlace de Foto" 
            required
            valor={foto} 
            actualizarValor={actualizarFoto}/>
            <ListaOpciones
            equipos={props.equipos}
            valor={equipo} 
            actualizarEquipo={actualizarEquipo}

            />
            <Boton>
                Crear colaborador
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <Campo 
            titulo="Título" 
            placeholder="Ingresar Título"
            required 
            valor={titulo} 
            actualizarValor={actualizarTitulo}/>
            <Campo 
            titulo="Color"
            placeholder="Ingresar Color en hexadecimal" 
            required
            valor={color} 
            actualizarValor={actualizarColor}
            type="color"
            />
        <Boton>
                Registrar Equipo
        </Boton>    
        </form>
        
    </section>
}


export default Formulario