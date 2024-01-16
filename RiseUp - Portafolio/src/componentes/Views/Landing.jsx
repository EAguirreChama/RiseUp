import Contacto from "../Nuevos/Contacto";
import NavBar from "../Nuevos/NavBar";
import Preguntas from "../Nuevos/Preguntas";
import Principal from "../Nuevos/Principal";
import Servicios from "../Nuevos/Servicios";

export default function Landing() {
    return (
        <div>
            <NavBar />
            <Principal />
            <Preguntas />
            <Servicios />
            <Contacto />
        </div>
    )
}