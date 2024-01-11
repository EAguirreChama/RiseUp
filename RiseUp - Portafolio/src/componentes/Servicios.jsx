export default function Servicios() {
    return (
        <div>
            <div className="justify-center text-white text-center text-5xl font-medium self-center mt-28 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                Servicios que ofrecemos
            </div>
            <div className="self-center w-full max-w-[1355px] mt-28 px-5 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                        <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full px-9 py-11 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10 max-md:px-5">
                            <img
                                src="../../public/iconos svg/ia.svg"
                                className="aspect-[0.99] object-contain object-center w-[78px] overflow-hidden max-w-full"
                            />
                            <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-8">
                                Asistentes de IA
                                <br />
                                personalizados
                            </div>
                        </span>
                    </div>
                    <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                        <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full px-4 py-11 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10">
                            <img
                                src="../../public/iconos svg/desarrollo-web.svg"
                                className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full"
                            />
                            <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-8">
                                Diseño y desarrollo
                                <br />
                                de páginas web
                            </div>
                        </span>
                    </div>
                    <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                        <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full pl-3.5 pr-5 py-11 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10">
                            <img
                                src="../../public/iconos svg/procesando.svg"
                                className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full"
                            />
                            <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-8">
                                Automatización de <br />
                                procesos
                            </div>
                        </span>
                    </div>
                    <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                        <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full px-8 py-11 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10 max-md:px-5">
                            <img
                                src="../../public/iconos svg/megafono.svg"
                                className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full"
                            />
                            <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-8">
                                Imagen en redes
                                <br />
                                sociales
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="self-center w-[997px] max-w-full mt-20 px-5 max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                        <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full px-8 py-11 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10 max-md:px-5">
                            <img
                                src="../../public/iconos svg/configuraciones.svg"
                                className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full"
                            />
                            <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-8">
                                Tercerización de
                                <br />
                                herramientas
                            </div>
                        </span>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                        <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full px-9 py-12 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10 max-md:px-5">
                            <img
                                src="../../public/iconos svg/anuncio-publicitario.svg"
                                className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full"
                            />
                            <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-12 mb-3.5 max-md:mt-10">
                                Anuncios con IA
                            </div>
                        </span>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                        <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full px-16 py-12 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10 max-md:px-5">
                            <img
                                src="../../public/iconos svg/branding.svg"
                                className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full"
                            />
                            <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-11 mb-2 max-md:mt-10">
                                Rebranding
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}