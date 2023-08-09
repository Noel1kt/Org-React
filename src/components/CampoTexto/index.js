import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const [valor, actualizarValor] = useState("")

    const manejarCambio = (e) => {
        console.log("Cambio", e.target.value)
        actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
        placeholder={props.placeholder} 
        required={props.required} 
        value={valor}
        onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto