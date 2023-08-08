import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {
    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejando el envío",e)
        
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre"/>
            <CampoTexto titulo="Puesto"placeholder="Ingresar Puesto"/>
            <CampoTexto titulo="Foto"placeholder="Ingresar enlace de Foto"/>
            <ListaOpciones placeholder="Seleccionar Equipo"/>
            <Boton>
                Crear colaborador
            </Boton>
        </form>
    </section>
}


export default Formulario