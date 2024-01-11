export default function Preguntas() {
    return (
        <div>
            <span className="self-stretch flex w-full flex-col mt-40 px-16 items-end max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="justify-center text-white text-center text-5xl self-stretch max-md:max-w-full max-md:text-4xl">
                    ¿Por qué <span className="font-medium">RiseUp</span>?
                </div>
                <div className="self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0">
                            <div className="justify-center text-white text-opacity-70 text-4xl leading-[60px] my-auto max-md:max-w-full max-md:mt-10">
                                En <span className="text-white">RiseUp</span> fusionamos la
                                creatividad del diseño con la excelencia en el desarrollo web
                                para ofrecer soluciones digitales que no solo son visualmente
                                impactantes, sino también funcionales y efectivas. Somos un
                                equipo apasionado de diseñadores y desarrolladores que trabajan
                                juntos para dar vida a tus ideas y destacar tu presencia en
                                línea.
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
                            <img
                                src="../../public/letras con fondo/up2.png"
                                className="aspect-[1.07] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                            />
                        </div>
                    </div>
                </div>
                <div className="justify-center text-white text-center text-5xl whitespace-nowrap mr-6 mt-48 max-md:text-4xl max-md:mr-2.5 max-md:mt-10">
                    <span className="font-semibold">¿Quiénes </span>somos?
                </div>
            </span>
            <div className="self-center w-full max-w-[1362px] mt-24 px-5 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
                        <img
                            src="../../public/letras con fondo/rise.png"
                            className="aspect-[0.73] object-contain object-center w-full overflow-hidden mt-14 max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="justify-center text-white text-opacity-70 text-right text-4xl leading-[60px] max-md:max-w-full max-md:mt-10">
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