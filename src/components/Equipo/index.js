import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    //Destructuración es igual que hacer: 
    // const colorPrimario = props.datos.colorPrimario
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor} = props

    return<> 
        {
            colaboradores.length > 0 && 
            <section 
            className="equipo" 
            style={{ backgroundColor: colorSecundario}}>
                <input
                    type="color"
                    className="input-color"
                    value={colorSecundario}
                    onChange={(event) => {
                        actualizarColor(event.target.value,titulo)
                    }}
                
                />

                <h3 style={{borderColor: colorPrimario}}>
                    {titulo} 
                </h3>
                <div className="colaboradores">

                    {
                        colaboradores.map((colaborador,index) => <Colaborador datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        />)
                    }
                </div>
            </section>
        }
    </>
    
}

export default Equipo