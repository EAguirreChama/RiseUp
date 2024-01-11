export default function Nav() {
  return (
    <div className="bg-zinc-950 self-stretch flex w-full items-stretch justify-between gap-5 pl-12 pr-20 py-2.5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <span className="self-center flex items-start justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
        <div className="justify-center text-white text-center text-2xl self-start">
          Home
        </div>
        <div className="justify-center text-white text-center text-2xl self-stretch w-[275px]">
          ¿Quiénes somos?
        </div>
        <div className="justify-center text-white text-center text-2xl self-start">
          Portfolio
        </div>
        <div className="justify-center text-white text-center text-2xl self-start">
          Contacto
        </div>
      </span>
    </div>
  );
}