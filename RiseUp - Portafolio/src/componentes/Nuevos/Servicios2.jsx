import Tarjeta from "./TarjetaServicio"

export default function Servicios2() {

    const TarjetaData = [
        { nombre: 'Asistentes de IA Personalizados', imagen: '../../public/iconos svg/ia.svg' },
        { nombre: 'Diseño y Desarrollo de Páginas Web', imagen: '../../public/iconos svg/desarrollo-web.svg' },
        { nombre: 'Automatización de Procesos', imagen: '../../public/iconos svg/procesando.svg' },
        { nombre: 'Imagen en Redes Sociales', imagen: '../../public/iconos svg/megafono.svg' },
        { nombre: 'Terciarización de Herramientas', imagen: '../../public/iconos svg/configuraciones.svg' },
        { nombre: 'Anuncios con IA', imagen: '../../public/iconos svg/anuncio-publicitario.svg' },
        { nombre: 'Rebranding', imagen: '../../public/iconos svg/branding.svg' },
    ]

    return (
        // Contenedor
        <div className="">
            <div className="justify-center text-white text-center text-5xl font-medium mt-5">
                Servicios que ofrecemos
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-5">
                {TarjetaData.map((card, index) => (
                    <Tarjeta key={index} nombre={card.nombre} imagen={card.imagen} />
                ))}
            </div>
        </div>
    )
} 