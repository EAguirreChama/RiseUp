export default function Contacto() {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="bg-zinc-300 self-center flex w-[916px] shrink-0 max-w-full h-0.5 flex-col mt-32 max-md:mt-10" />
            <div className="justify-center text-white text-center text-6xl self-center max-w-[816px] mt-24 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                <span className="font-medium">¿Necesitas </span>
                <span className="font-medium">elevar tu presencia</span>
                <span className="font-medium">?</span>
            </div>
            <span className="justify-center text-white text-center text-4xl font-medium w-[551px] shadow-sm bg-green-600 self-center max-w-full items-center mt-28 px-16 py-6 rounded-3xl max-md:mt-10 max-md:px-5">
                Contactanos
            </span>
            <div className="bg-zinc-300 self-center flex w-[814px] shrink-0 max-w-full h-0.5 flex-col mt-28 max-md:mt-10" />
            <img
                src="../../public/logo Riseup/logo png.png"
                className="aspect-[2] object-contain object-center w-[142px] overflow-hidden self-center max-w-full mt-16 max-md:mt-10"
            />
            <div className="self-center flex w-[207px] max-w-full items-stretch justify-between gap-5 mt-3.5 px-5">
                <img
                    src="../../public/iconos svg/instagram (3).svg"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
                <img
                    src="../../public/iconos svg/linkedin.svg"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
                <img
                    src="../../public/iconos svg//facebook (2).svg"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
            </div>
            <div className="justify-center text-white text-center text-2xl font-light self-center mt-14 mb-8 max-md:mt-10">
                Copyright © 2024 RiseUp inc.
            </div>
        </div>
    )
}