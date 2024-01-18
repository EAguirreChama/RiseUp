export default function Formulario() {
    return (
        <div className="flex flex-col items-center mt-5">
            <div className="text-5xl text-center text-white">
                ¿Necesitas elevar tu <br /> Presencia?
            </div>
            <div className="text-2xl text-center mt-12 text-white">
            Contanos sobre tu proyecto, para <br /> poder brindarte el mejor <br /> asesoramiento.
            </div>

            <form className="rounded-3xl mt-10 border border-white px-10 py-8 text-white">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <label>Nombre:</label>
                        <input type="text" className="text-black rounded-md"/>
                    </div>
                    <div className="flex flex-col mt-5">
                        <label>Nombre de la Empresa:</label>
                        <input type="text" className="text-black rounded-md"/>
                    </div>
                    <div className="flex flex-col mt-5">
                        <label>Número de Teléfono:</label>
                        <input type="text" className="text-black rounded-md"/>
                    </div>
                    <div className="flex flex-col mt-5">
                        <label>Email:</label>
                        <input type="text" className="text-black rounded-md"/>
                    </div>
                    <div className="flex flex-col mt-5">
                        <label>Contanos a que se dedica tu empresa</label>
                        <textarea name="" id="" cols="30" rows="10"className="text-black resize-none h-24 rounded-md"/>
                    </div>

                    <button className="text-white text-2xl bg-green-600 font-medium py-2 rounded-2xl justify-center mt-8">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}