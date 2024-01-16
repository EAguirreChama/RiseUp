import NavBar from "./componentes/NavBar"
import Principal from "./componentes/Principal"
import Preguntas2 from "./componentes/Preguntas2"
// import Preguntas from "./componentes/Preguntas"
// import Servicios from "./componentes/Servicios"
import Servicios2 from "./componentes/Servicios2"
// import Contacto from "./componentes/Contacto"
// import Complete from "./componentes/Complete"

export default function App () {
  return (
    <div>
      <NavBar/>
      <Principal/>
      <Preguntas2/>
      {/* <Preguntas/> */}
      <Servicios2/>
      {/* <Servicios/> */}
      {/* <Contacto/>
      <Complete/> */}
    </div>
  )
}