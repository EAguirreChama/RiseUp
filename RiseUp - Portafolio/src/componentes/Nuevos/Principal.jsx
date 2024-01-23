export default function Principal() {
  return (
    <div id="inicio" className="items-center flex-col relative flex">
      <img
        src="fondos/hombre-usando-tecnologia-inteligente-maqueta-psd-tableta-digital.jpg"
        className="absolute h-full w-full object-cover"
      />
      <div className="relative flex w-full max-w-screen-lg flex-col mt-10 mb-20 mx-auto">
        <img
          src="logo Riseup/logo png.png"
          className="aspect-[4] object-contain self-center"
        />
        <div className="justify-center text-white text-center text-3xl md:text-5xl lg:text-5xl font-medium">
          Elevamos tu presencia, multiplicamos tus ventas
        </div>
        <div className="justify-center text-white text-center text-xl md:text-2xl lg:text-3xl font-medium w-[300px] md:w-[392px] bg-green-600 self-center mt-8 md:mt-16 py-3 md:py-5 rounded-3xl cursor-pointer hover:bg-green-700">
          ¡Subir de nivel!
        </div>
      </div>
    </div>
  )
}