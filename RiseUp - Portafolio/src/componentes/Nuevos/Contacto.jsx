export default function Contacto() {
    return (
        <div className="flex flex-col items-center mt-10">
            <div className="bg-zinc-300 w-[960px] h-0.5" />
            <h1 className="font-medium text-white text-center text-6xl my-16">¿Necesitas elevar tu <br /> presencia?</h1>
            <button className="text-white bg-green-600 px-16 py-6 w-[550px] rounded-3xl text-4xl font-medium mb-6">
                Contactanos
            </button>
            <div className="flex w-[220px] gap-5 px-5 my-2">
                <img src="../../public/iconos svg/instagram (3).svg" className="overflow-hidden flex-1 cursor-pointer" />
                <img src="../../public/iconos svg/linkedin.svg" className="overflow-hidden flex-1 cursor-pointer" />
                <img src="../../public/iconos svg//facebook (2).svg" className="overflow-hidden flex-1 cursor-pointer" />
            </div>
            <a href="#inicio">
                <img src="../../public/logo Riseup/logo png.png" className="w-[150px]" />
            </a>
            <div className="bg-zinc-300 w-[960px] h-0.5" />
            <div className="mt-10 text-white text-2xl font-light">
                Copyright © 2024 RiseUp inc.
            </div>
        </div>
    )
}