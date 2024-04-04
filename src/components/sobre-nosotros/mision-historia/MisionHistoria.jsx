import historia from '@/assets/mision-historia/historia.svg'
import mision from '@/assets/mision-historia/mision.svg'
import paw1 from '@/assets/mision-historia/bg-paw1.svg'
import paw2 from '@/assets/mision-historia/bg-paw2.svg'
import Image from 'next/image'

const MisionHistoria = () => {
  return (
    <div className="bg-white relative overflow-hidden min-h-screen">
      <div className="flex justify-center">
        <div className="lg:w-[70%] w-full mx-auto">
          <div className="flex flex-col justify-center xl:flex-row pt-10 xl:items-start items-center">
            <div className="xl:w-1/2 w-full">
              <div className="absolute top-0 left-0 h-auto w-[50%] sm:w-[30%]">
                <Image
                  src={paw1}
                  width="auto"
                  height="auto"
                  alt="imagen background de una pata de perrito"
                  priority
                />
              </div>

              <h2 className="m-4 font-bold text-xl border-l-4 border-black pl-2 md:text-3xl lg:text-4xl">
                Nuestra misión
              </h2>
              <p className="leading-loose p-5 md:text-lg lg:text-2xl">
                En el refugio ‘’Emilia Rescata’’ ubicado en Huancayo, Perú tenemos como objetivo
                poner
                <span className="font-bold ml-1">fin al sufrimiento animal</span>. A través de
                recaudación de fondos
                <span className="font-bold ml-1">esterilizamos</span> entre 40 y 50 perritos por mes
                con la esperanza de alcanzar un número mayor. Además nos dedicamos a educar a la
                comunidad sobre el
                <span className="font-bold ml-1">cuidado responsable</span> de los perritos
                ofreciendo charlas informativas. Juntos, estamos trabajando para crear un futuro
                donde todos los animales sean tratados con
                <span className="font-bold ml-1">compasión y respeto</span>.
              </p>
            </div>

            <div className="md:h-1/2-screen md:pl-10 pr-5 pl-5">
              <Image
                src={mision}
                className="flex w-auto h-auto"
                width={500}
                height={300}
                alt="Emilia en el albergue, rodeada de perritos"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-center xl:flex-row-reverse pt-10 sm:pt-28 pb-10 xl:items-start items-center">
            <div className="xl:w-1/2 w-full">
              <div className="absolute bottom-0 right-0 h-auto w-[50%] sm:w-[30%]">
                <Image
                  src={paw2}
                  width="auto"
                  height="auto"
                  alt="imagen background de una pata de perrito"
                  priority
                />
              </div>
              <h2 className="m-4 font-bold text-xl border-l-4 border-black pl-2 md:text-3xl lg:text-4xl">
                Nuestra historia
              </h2>
              <p className="leading-loose p-5 md:text-lg lg:text-2xl">
                Emilia es una
                <span className="font-bold ml-1">rescatista independiente</span> cuyo compromiso con
                la causa animal surgió después que su perrita fuera atropellada. Al buscar ayuda
                para su mascota, se encontró con páginas y personas dedicadas al rescate y cuidados
                de animales necesitados. Esta experiencia la llevó a involucrarse plenamente con la
                protección de perritos, convirtiéndose en una fuente de
                <span className="font-bold ml-1">esperanza</span> para aquellos que no tiene voz.
              </p>
            </div>
            <div className="md:h-1/2-screen md:pr-10 hidden md:block">
              <Image
                src={historia}
                className="flex w-auto h-auto"
                width={500}
                height={300}
                alt="Emilia rodeada de perritos mientras levanta a un cachorro"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MisionHistoria
