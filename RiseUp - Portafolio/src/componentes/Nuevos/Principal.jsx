export default function Principal() {
  return (
    <div id="inicio" className="items-center flex-col relative flex">
      <img
        src="../../public/fondos/hombre-usando-tecnologia-inteligente-maqueta-psd-tableta-digital.jpg"
        className="absolute h-full w-full"
      />

      <div className="relative flex w-[625px] max-w-full flex-col mt-10 mb-20">
        <img
          src="../../public/logo Riseup/logo png.png"
          className="aspect-[3] object-contain"
        />
        <div className="justify-center text-white text-center text-5xl font-medium">
          Elevamos tu presencia, multiplicamos tus ventas
        </div>

        <div className="justify-center text-white text-center text-4xl font-medium w-[392px] bg-green-600 self-center mt-16 py-5 rounded-3xl cursor-pointer hover:bg-green-700">
          ¡Subir de nivel!
        </div>
      </div>
    </div>
  )
}