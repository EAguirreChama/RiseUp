import NavBar from "./componentes/NavBar"
import Principal from "./componentes/Principal"
import Preguntas from "./componentes/Preguntas"
// import Contacto from "./componentes/Contacto"
// import Servicios from "./componentes/Servicios"
// import Complete from "./componentes/Complete"
import Preguntas2 from "./componentes/Preguntas2"

export default function App () {
  return (
    <div>
      <NavBar/>
      <Principal/>
      <Preguntas/>
      {/* <Servicios/>
      <Contacto/>
      <Complete/> */}
      <Preguntas2/>
    </div>
  )
}