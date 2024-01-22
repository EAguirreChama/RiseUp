import { Link } from "react-router-dom";

export default function Contacto() {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="bg-zinc-300 w-full h-0.5" />
      <h1 className="font-medium text-white text-center text-4xl sm:text-5xl lg:text-6xl my-8 sm:my-16">¿Necesitas elevar tu <br /> presencia?</h1>
      <Link to="/formulario">
        <button className="text-white bg-green-600 px-8 sm:px-16 py-4 sm:py-6 w-full lg:w-[550px] rounded-3xl text-xl sm:text-2xl lg:text-4xl font-medium mb-4 sm:mb-6">
          Contactanos
        </button>
      </Link>
      <div className="flex w-full lg:w-[220px] gap-4 sm:gap-5 px-2 sm:px-5 my-2 justify-center">
        <img src="../../public/iconos svg/instagram (3).svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
        <img src="../../public/iconos svg/linkedin.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
        <img src="../../public/iconos svg//facebook (2).svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
      </div>
      <a href="#inicio">
        <img src="../../public/logo Riseup/logo png.png" className="w-[100px] lg:w-[150px]" />
      </a>
      <div className="bg-zinc-300 w-full h-0.5" />
      <div className="mt-6 text-white text-xl sm:text-2xl lg:text-4xl font-light">
        Copyright © 2024 RiseUp inc.
      </div>
    </div>
  );
}
