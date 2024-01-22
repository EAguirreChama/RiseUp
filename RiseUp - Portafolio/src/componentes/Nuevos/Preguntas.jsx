export default function Preguntas() {
    return (
      <div className="flex flex-col items-center mt-10" id="quienesSomos">
        <div className="bg-zinc-300 w-[960px] h-0.5" />
        <div>
          <h1 className="justify-center text-white text-center text-3xl md:text-5xl pt-2 pb-3 mt-5">
            ¿Por qué <span className="font-medium">RiseUp</span>?
          </h1>
          <div className="flex flex-col md:flex-row m-5 gap-1 items-center md:items-start">
            <div className="w-full md:w-3/5 text-white text-lg md:text-4xl text-opacity-70 text-center md:text-left">
              En <span className="text-white">RiseUp</span> fusionamos la creatividad del diseño con la excelencia en el desarrollo web para ofrecer soluciones digitales que no solo son visualmente impactantes, sino también funcionales y efectivas.
              <br />
              <br />
              Somos un equipo apasionado de diseñadores y desarrolladores que trabajan juntos para dar vida a tus ideas y destacar tu presencia en línea.
            </div>
            <img
              src="../../public/letras con fondo/up2.png"
              className="object-contain object-center overflow-x-auto grow w-full md:w-2/5 hidden md:block"
            />
          </div>
        </div>
        <div className="mt-10">
          <h1 className="justify-center text-white text-center text-3xl md:text-5xl pt-2 pb-3">
            <span className="font-medium">Sobre</span> nosotros
          </h1>
          <div className="flex flex-col md:flex-row m-5 gap-1 items-center md:items-start">
            <img
              src="../../public/letras con fondo/rise.png"
              className="object-contain object-center overflow-x-auto grow w-full md:w-2/5 hidden md:block"
            />
            <div className="w-full md:w-3/5 text-white text-lg md:text-4xl text-opacity-70 text-center md:text-right">
              Somos un equipo de mentes apasionadas y colaborativas, unidas por un propósito común
              <br />
              <br />
              Transformar ideas en realidades digitales. Cada uno de nosotros aporta una habilidad única y juntos formamos un equipo integral que aborda desafíos con entusiasmo y creatividad.
            </div>
          </div>
        </div>
      </div>
    );
  }  