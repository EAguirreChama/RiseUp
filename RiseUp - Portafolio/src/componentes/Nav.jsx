export default function Nav() {
  return (
    <span className="bg-black flex flex-col pb-12">
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
      <span className="self-stretch flex w-full flex-col mt-40 px-16 items-end max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="justify-center text-white text-center text-5xl self-stretch max-md:max-w-full max-md:text-4xl">
          ¿Por qué <span className="font-medium">RiseUp</span>?
        </div>
        <div className="self-stretch mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0">
              <div className="justify-center text-white text-opacity-70 text-4xl leading-[60px] my-auto max-md:max-w-full max-md:mt-10">
                En <span className="text-white">RiseUp</span> fusionamos la
                creatividad del diseño con la excelencia en el desarrollo web
                para ofrecer soluciones digitales que no solo son visualmente
                impactantes, sino también funcionales y efectivas. Somos un
                equipo apasionado de diseñadores y desarrolladores que trabajan
                juntos para dar vida a tus ideas y destacar tu presencia en
                línea.
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
              <img
                src="../../public/letras con fondo/up2.png"
                className="aspect-[1.07] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="justify-center text-white text-center text-5xl whitespace-nowrap mr-6 mt-48 max-md:text-4xl max-md:mr-2.5 max-md:mt-10">
          <span className="font-semibold">¿Quiénes </span>somos?
        </div>
      </span>
      <div className="self-center w-full max-w-[1362px] mt-24 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
            <img
              src="../../public/letras con fondo/rise.png"
              className="aspect-[0.73] object-contain object-center w-full overflow-hidden mt-14 max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center text-white text-opacity-70 text-right text-4xl leading-[60px] max-md:max-w-full max-md:mt-10">
              Somos un equipo de mentes apasionadas y colaborativas, unidas por
              un propósito común:
              <br />
              transformar ideas en realidades digitales.
              <br />
              Cada uno de nosotros aporta una habilidad única y juntos formamos
              un equipo integral que aborda desafíos
              <br />
              con entusiasmo y creatividad.
              <br />
              En <span className="text-white">RiseUp</span> somos más que
              individuos; somos un equipo cohesionado, cada uno aportando su
              experiencia única para cumplir <br />
              con nuestra visión compartida.
              <br />
              Nos enorgullece nuestra diversidad de habilidades y estamos listos
              para abordar cualquier desafío que se nos presente.
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center text-white text-center text-5xl font-medium self-center mt-28 max-md:max-w-full max-md:text-4xl max-md:mt-10">
        Servicios que ofrecemos
      </div>
      <div className="self-center w-full max-w-[1355px] mt-28 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full px-9 py-11 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10 max-md:px-5">
              <img
                src="../../public/iconos svg/ia.svg"
                className="aspect-[0.99] object-contain object-center w-[78px] overflow-hidden max-w-full"
              />
              <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-8">
                Asistentes de IA
                <br />
                personalizados
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full px-4 py-11 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10">
              <img
                src="../../public/iconos svg/desarrollo-web.svg"
                className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full"
              />
              <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-8">
                Diseño y desarrollo
                <br />
                de páginas web
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full pl-3.5 pr-5 py-11 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10">
              <img
                src="../../public/iconos svg/procesando.svg"
                className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full"
              />
              <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-8">
                Automatización de <br />
                procesos
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full px-8 py-11 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10 max-md:px-5">
              <img
                src="../../public/iconos svg/megafono.svg"
                className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full"
              />
              <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-8">
                Imagen en redes
                <br />
                sociales
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="self-center w-[997px] max-w-full mt-20 px-5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full px-8 py-11 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10 max-md:px-5">
              <img
                src="../../public/iconos svg/configuraciones.svg"
                className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full"
              />
              <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-8">
                Tercerización de
                <br />
                herramientas
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full px-9 py-12 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10 max-md:px-5">
              <img
                src="../../public/iconos svg/anuncio-publicitario.svg"
                className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full"
              />
              <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-12 mb-3.5 max-md:mt-10">
                Anuncios con IA
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="bg-black bg-opacity-0 flex grow flex-col items-center w-full px-16 py-12 rounded-[37px] border-4 border-solid border-white border-opacity-60 max-md:mt-10 max-md:px-5">
              <img
                src="../../public/iconos svg/branding.svg"
                className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full"
              />
              <div className="justify-center text-white text-center text-3xl font-light self-stretch mt-11 mb-2 max-md:mt-10">
                Rebranding
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-zinc-300 self-center flex w-[916px] shrink-0 max-w-full h-0.5 flex-col mt-32 max-md:mt-10" />
      <div className="justify-center text-white text-center text-6xl self-center max-w-[816px] mt-24 max-md:max-w-full max-md:text-4xl max-md:mt-10">
        <span className="font-medium">¿Necesitas </span>
        <span className="font-medium">elevar tu presencia</span>
        <span className="font-medium">?</span>
        <br />
      </div>
      <span className="justify-center text-white text-center text-4xl font-medium w-[551px] shadow-sm bg-green-600 self-center max-w-full items-center mt-28 px-16 py-6 rounded-3xl max-md:mt-10 max-md:px-5">
        Contactanos
      </span>
      <div className="bg-zinc-300 self-center flex w-[814px] shrink-0 max-w-full h-0.5 flex-col mt-28 max-md:mt-10" />
      <img
        src="../../public/logo Riseup/logo png.png"
        className="aspect-[2] object-contain object-center w-[142px] overflow-hidden self-center max-w-full mt-16 max-md:mt-10"
      />
      <div className="self-center flex w-[207px] max-w-full items-stretch justify-between gap-5 mt-3.5 px-5">
        <img
          src="../../public/iconos svg/instagram (3).svg"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          src="../../public/iconos svg/linkedin.svg"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          src="../../public/iconos svg//facebook (2).svg"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
      </div>
      <div className="justify-center text-white text-center text-2xl font-light self-center mt-14 mb-8 max-md:mt-10">
        Copyright © 2024 RiseUp inc.
      </div>
    </span>
  );
}