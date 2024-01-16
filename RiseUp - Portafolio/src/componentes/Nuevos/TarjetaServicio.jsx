// eslint-disable-next-line react/prop-types
export default function Tarjeta({ nombre, imagen }) {
    return (
        <div className="flex flex-col w-3/12">
            <span className="flex grow flex-col items-center w-full px-8 py-10 rounded-[37px] border-4 border-solid border-white border-opacity-60">
                <img
                    src={imagen}
                    className="aspect-[0.99] object-contain object-center w-[80px]"
                />
                <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-8">
                    {nombre}
                </div>
            </span>
        </div>
    )
}