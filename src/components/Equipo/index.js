import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    //Destructuración es igual que hacer: 
    // const colorPrimario = props.datos.colorPrimario
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const {colaboradores} = props
    return <section 
    className="equipo" 
    style={{ backgroundColor: colorSecundario}}>
        <h3 style={{borderColor: colorPrimario}}>
            {titulo} 
        </h3>
        <div className="colaboradores">

            {
                colaboradores.map((colaborador) => <Colaborador datos={colaborador}/>)
            }
        </div>
    </section>
}

export default Equipo