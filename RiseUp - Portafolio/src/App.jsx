import NavBar from "./componentes/Nuevos/NavBar"
import Principal from "./componentes/Nuevos/Principal"
import Preguntas from "./componentes/Nuevos/Preguntas"
import Servicios from "./componentes/Nuevos/Servicios"
import Contacto from "./componentes/Nuevos/Contacto"

export default function App () {
  return (
    <div>
      <NavBar/>
      <Principal/>
      <Preguntas/>
      <Servicios/>
      <Contacto/>
    </div>
  )
}