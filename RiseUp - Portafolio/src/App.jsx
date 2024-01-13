import NavBar from "./componentes/NavBar"
import Principal from "./componentes/Principal"
import Preguntas2 from "./componentes/Preguntas2"
// import Preguntas from "./componentes/Preguntas"
// import Contacto from "./componentes/Contacto"
// import Servicios from "./componentes/Servicios"
// import Complete from "./componentes/Complete"

export default function App () {
  return (
    <div>
      <NavBar/>
      <Principal/>
      <Preguntas2/>
      {/* <Preguntas/> */}
      {/* <Servicios/>
      <Contacto/>
      <Complete/> */}
    </div>
  )
}