import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    console.log("Datos:", props)
    const [valor, actualizarValor] = useState("")

    const manejarCambio = (e) => {
        console.log("Cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
        placeholder={props.placeholder} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto