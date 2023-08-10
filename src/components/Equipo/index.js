import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    //Destructuración es igual que hacer: 
    // const colorPrimario = props.datos.colorPrimario
    const { colorPrimario, colorSecundario, titulo } = props.datos
    return <section 
    className="equipo" 
    style={{ backgroundColor: colorSecundario}}>
        <h3 style={{borderColor: colorPrimario}}>
            {titulo} 
        </h3>
        <div className="colaboradores">
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
        </div>
    </section>
}

export default Equipo