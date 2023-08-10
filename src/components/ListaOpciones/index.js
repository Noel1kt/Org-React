import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    //No se utiliza foreach para recorrer 
    //Metodo map  
    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        props.actualizarEquipo(e.target.value)
        
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipos.map((equipo, index) => <option key={index}>{equipo}</option>
            ) }
        </select>
    </div>
}

export default ListaOpciones