import "./ListaOpciones.css"
import Formulario from "../Formulario/Formulario"

const ListaOpciones = (props) => {
    //No se utiliza foreach para recorrer 
    //Metodo map 
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select placeholder={props.placeholder}>
            <option value="" disabled selected hidden>Seleccionar Equipo</option>
            <option>Programación</option>
            <option>Front End</option>
            <option>Data Science</option>
            <option>DevOps</option>
            <option>Ux y Diseño</option>
            <option>Móvil</option>
            <option>Innovación y Gestión</option>
        </select>
    </div>
}

export default ListaOpciones