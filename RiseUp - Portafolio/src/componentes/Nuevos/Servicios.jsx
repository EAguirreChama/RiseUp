import Tarjeta from "./TarjetaServicio";

export default function Servicios() {
  const TarjetaData = [
    { nombre: 'Asistentes de IA Personalizados', imagen: 'iconos svg/ia.svg' },
    { nombre: 'Diseño y Desarrollo de Páginas Web', imagen: 'iconos svg/desarrollo-web.svg' },
    { nombre: 'Automatización de Procesos', imagen: 'iconos svg/procesando.svg' },
    { nombre: 'Imagen en Redes Sociales', imagen: 'iconos svg/megafono.svg' },
    { nombre: 'Terciarización de Herramientas', imagen: 'iconos svg/configuraciones.svg' },
    { nombre: 'Anuncios con IA', imagen: 'iconos svg/anuncio-publicitario.svg' },
    { nombre: 'Rebranding', imagen: 'iconos svg/branding.svg' },
  ];

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="bg-zinc-300 w-[960px] h-0.5" />
      <div className="justify-center text-white text-center text-4xl md:text-5xl font-medium my-10">
        Servicios que ofrecemos
      </div>
      <div className="flex flex-wrap justify-center gap-5 mx-4 sm:gap-10 mt-5">
        {TarjetaData.map((card, index) => (
          <Tarjeta key={index} nombre={card.nombre} imagen={card.imagen} />
        ))}
      </div>
    </div>
  );
}
