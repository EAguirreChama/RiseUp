export default function Preguntas() {
    return (
            <div className="flex flex-col">
                <div className="justify-center text-white text-center text-5xl bg-zinc-950 pt-2 pb-3">
                    ¿Por qué <span className="font-medium">RiseUp</span>?
                </div>
                <div className="mt-12">
                    <div className="gap-5 flex">
                        <div className="flex flex-col items-stretch w-[64%]">
                            <div className="justify-center text-white text-opacity-70 text-3xl leading-[60px] my-auto">
                                En <span className="text-white">RiseUp</span> fusionamos la
                                creatividad del diseño con la excelencia en el desarrollo web
                                para ofrecer soluciones digitales que no solo son visualmente
                                impactantes, sino también funcionales y efectivas. Somos un
                                equipo apasionado de diseñadores y desarrolladores que trabajan
                                juntos para dar vida a tus ideas y destacar tu presencia en
                                línea.
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[36%] ml-5">
                            <img
                                src="../../public/letras con fondo/up2.png"
                                className="aspect-[1.07] object-contain object-center w-full overflow-hidden grow"
                            />
                        </div>
                    </div>
                </div>
                <div className="justify-center text-white text-center text-5xl whitespace-nowrap mr-6 mt-48">
                    <span className="font-semibold">¿Quiénes </span>somos?
                </div>
                <div className="self-center w-full max-w-[1362px] mt-24 px-5">
                    <div className="gap-5 flex">
                        <div className="flex flex-col items-stretch w-[43%]">
                            <img
                                src="../../public/letras con fondo/rise.png"
                                className="aspect-[0.73] object-contain object-center w-full overflow-hidden mt-14"
                            />
                        </div>
                        <div className="flex flex-col items-stretch w-[57%] ml-5">
                            <div className="justify-center text-white text-opacity-70 text-right text-4xl leading-[60px]">
                                Somos un equipo de mentes apasionadas y colaborativas, unidas por
                                un propósito común:
                                <br />
                                transformar ideas en realidades digitales.
                                <br />
                                Cada uno de nosotros aporta una habilidad única y juntos formamos
                                un equipo integral que aborda desafíos
                                <br />
                                con entusiasmo y creatividad.
                                <br />
                                En <span className="text-white">RiseUp</span> somos más que
                                individuos; somos un equipo cohesionado, cada uno aportando su
                                experiencia única para cumplir <br />
                                con nuestra visión compartida.
                                <br />
                                Nos enorgullece nuestra diversidad de habilidades y estamos listos
                                para abordar cualquier desafío que se nos presente.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}