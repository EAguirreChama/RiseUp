import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isFormulario = location.pathname === "/formulario";

  const [menuVisible, setMenuVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-zinc-950 flex justify-between pr-5">
      <Link to="/">
        <img
          src="../../public/logo Riseup/logo png.png"
          className="aspect-[3] object-contain w-[200px] mt-1 cursor-pointer"
        />
      </Link>

      <div className="flex items-center md:hidden">
        <button
          id="menu-toggle"
          className="text-white text-2xl cursor-pointer hover:text-yellow-300"
          onClick={toggleMenu}
        >
          {menuVisible ? 'Cerrar' : 'Menú'}
        </button>
      </div>
      <div className={`md:flex md:items-center gap-10 ${menuVisible ? 'md:flex fixed inset-y-0 right-0 bg-black bg-opacity-75 z-50 text-right' : 'hidden'}`}>
        {isSmallScreen && (
          <button
            className="text-white text-2xl cursor-pointer hover:text-yellow-300 mr-5 mt-5"
            onClick={toggleMenu}
          >
            Cerrar
          </button>
        )}
        <div className={`md:flex md:items-end md:gap-5 md:p-0 ${menuVisible ? 'p-5 flex flex-col' : 'hidden'}`}>
          {isHome && (
            <>
              <Link
                to="/formulario"
                className="text-white text-2xl cursor-pointer hover:text-yellow-300"
              >
                Contacto
              </Link>
              <a
                href="#quienesSomos"
                className="text-white text-2xl cursor-pointer hover:text-yellow-300"
              >
                ¿Quiénes somos?
              </a>
            </>
          )}
          {isFormulario && (
            <Link
              to="/"
              className="text-white text-2xl cursor-pointer hover:text-yellow-300"
            >
              Home
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
