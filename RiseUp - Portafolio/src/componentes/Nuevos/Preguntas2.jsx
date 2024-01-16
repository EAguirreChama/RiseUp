export default function Preguntas2() {
    return (
        // Contenedor Total
        <div className="flex flex-col">
            {/* Contenedor 1 */}
            <div>
                {/* TItulo 1 */}
                <h1
                    className="justify-center text-white text-center text-5xl bg-zinc-950 pt-2 pb-3"
                >¿Por qué <span className="font-medium">RiseUp</span>?</h1>
                {/* Respuesta 1 */}
                <div className="flex m-5 gap-1">
                    <div className="w-[80%] text-white text-4xl  text-opacity-70">
                        En <span className="text-white">RiseUp</span> fusionamos la creatividad del diseño con la excelencia en el desarrollo web para ofrecer soluciones digitales que no solo son visualmente impactantes, sino también funcionales y efectivas.
                        <br /> 
                        <br />
                        Somos un equipo apasionado de diseñadores y desarrolladores que trabajan juntos para dar vida a tus ideas y destacar tu presencia en línea.
                    </div>
                    <img
                        src="../../public/letras con fondo/up2.png"
                        className="object-contain object-center overflow-x-auto grow w-[40%]"
                    />
                </div>
            </div>

            {/*Contenedor 2 */}
            <div>
                {/* Titulo 2 */}
                <h1
                    className="justify-center text-white text-center text-5xl bg-zinc-950 pt-2 pb-3"
                >¿<span className="font-medium">Quiénes</span> somos?</h1>
                {/* Respuesta 2 */}
                <div className="flex m-5 gap-1">
                    <img
                        src="../../public/letras con fondo/rise.png"
                        className="object-contain object-center overflow-x-auto grow w-[50%]"
                    />
                    <div className="w-[100%] text-white text-4xl  text-opacity-70 text-right">
                        Somos un equipo de mentes apasionadas y colaborativas, unidas por
                        un propósito común
                        <br />
                        <br />
                        Transformar ideas en realidades digitales. Cada uno de nosotros aporta una habilidad única y juntos formamos un equipo integral que aborda desafíos con entusiasmo y creatividad.
                    </div>
                </div>
            </div>
        </div>
    )
}