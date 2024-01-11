export default function NavBar () {
    return (
        <div className="bg-zinc-950 self-stretch flex w-full items-stretch justify-between gap-5 pl-12 pr-20 py-2.5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <img
          src="../../public/logo Riseup/logo png.png"
          className="aspect-[3] object-contain object-center w-[196px] overflow-hidden shrink-0 max-w-full"
        />
        <span className="self-center flex items-start justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
          <div className="justify-center text-white text-center text-2xl self-start">
            Home
          </div>
          <div className="justify-center text-white text-center text-2xl self-stretch w-[275px]">
            ¿Quiénes somos?
          </div>
          <div className="justify-center text-white text-center text-2xl self-start">
            Contacto
          </div>
        </span>
      </div>
    )
}