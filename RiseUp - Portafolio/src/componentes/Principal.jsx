export default function Principal () {
    return (
        <div className="flex-col overflow-hidden self-stretch relative flex min-h-[837px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <img
          src="../../public/fondos/hombre-usando-tecnologia-inteligente-maqueta-psd-tableta-digital.jpg"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <span className="relative flex w-[624px] max-w-full flex-col items-stretch mt-36 mb-16 max-md:my-10">
          <img
            src="../../public/logo Riseup/logo png.png"
            className="aspect-[2] object-contain object-center w-[507px] overflow-hidden self-center max-w-full"
          />
          <div className="justify-center text-white text-center text-6xl font-medium max-md:max-w-full max-md:text-4xl">
            Elevamos tu presencia, multiplicamos tus ventas
          </div>
          <span className="justify-center text-white text-center text-4xl font-medium w-[392px] shadow-sm bg-green-600 self-center max-w-full items-center mt-16 px-16 py-5 rounded-3xl max-md:mt-10 max-md:px-5">
            ¡Subir de nivel!
          </span>
        </span>
      </div>
    )
}