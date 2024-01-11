export default function NavBar() {
  return (
    <div className="bg-zinc-950 flex justify-between pr-5">
      <img
        src="../../public/logo Riseup/logo png.png"
        className="aspect-[3] object-contain w-[200px] mt-1 cursor-pointer"
      />
      <div className="flex justify-between gap-10 mt-4">
        <div className="text-white text-2xl cursor-pointer hover:text-yellow-300">
          Home
        </div>
        <div className="text-white text-2xl ml-2 cursor-pointer hover:text-yellow-300">
          ¿Quiénes somos?
        </div>
        <div className="text-white text-2xl cursor-pointer hover:text-yellow-300">
          Contacto
        </div>
      </div>
    </div>
  )
}