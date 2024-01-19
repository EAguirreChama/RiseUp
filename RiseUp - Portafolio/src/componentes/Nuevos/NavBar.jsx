import { Link, useLocation } from "react-router-dom"

export default function NavBar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="bg-zinc-950 flex justify-between pr-5">
      <img
        src="../../public/logo Riseup/logo png.png"
        className="aspect-[3] object-contain w-[200px] mt-1 cursor-pointer"
      />
      <div className="flex justify-between gap-10">
        <Link to={isHome ? "/formulario" : "/"} className="text-white text-2xl cursor-pointer hover:text-yellow-300 mt-5">
          <button>
            {isHome ? 'Contacto' : 'Home'}
          </button>
        </Link>
        <a href="#quienesSomos" className="text-white text-2xl ml-2 cursor-pointer hover:text-yellow-300 mt-5">
            ¿Quiénes somos?
        </a>
      </div>
    </div>
  )
}