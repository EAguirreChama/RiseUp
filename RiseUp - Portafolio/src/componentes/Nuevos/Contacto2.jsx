export default function Contacto2() {
    return (
        <div className=" ">
            <div className="flex flex-col items-center">
                <div className="bg-zinc-300  w-[916px] shrink-0 max-w-full h-0.5 flex-col" />
                <h1 className="font-medium text-white text-center text-6xl my-16">¿Necesitas elevar tu <br /> presencia?</h1>
                <button className="text-white bg-green-600 px-16 py-6 w-[550px] rounded-3xl text-4xl font-medium mb-6">
                    Contactanos
                </button>
                <div className="flex w-[220px] gap-5 px-5 my-2">
                    <img src="../../public/iconos svg/instagram (3).svg" className="overflow-hidden flex-1"/>
                    <img src="../../public/iconos svg/linkedin.svg" className="overflow-hidden flex-1"/>
                    <img src="../../public/iconos svg//facebook (2).svg" className="overflow-hidden flex-1"/>
                </div>
                <img src="../../public/logo Riseup/logo png.png" className="w-[150px]"/>
                <div className="bg-zinc-300  w-[916px] shrink-0 max-w-full h-0.5 flex-col"/>
                <div className="mt-10 text-white text-2xl font-light">
                    Copyright © 2024 RiseUp inc.
                </div>
            </div>
        </div>
    )
}