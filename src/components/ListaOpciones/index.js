import "./ListaOpciones.css"

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
        <select>
            { equipos.map((equipo, index) => <option key={index}>{equipo}</option>
            ) }
        </select>
    </div>
}

export default ListaOpciones