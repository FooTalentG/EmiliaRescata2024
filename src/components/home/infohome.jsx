'use client'
import Image from 'next/image'
import QuieroAdoptar from './quieroAyudar'
import foto1 from '@/assets/homeImg/infohomefoto1.webp'
import foto2 from '@/assets/homeImg/infohomefoto2.webp'

const InfoHome = () => {
  return (
    <div>
      <div className="flex flex-col-reverse mx-2 mt-5 md:flex-row lg:mx-16 lg:my-24 xl:mx-32">
        <div className="md:mr-4 xl:mr-6 md:w-2/3">
          <h2 className=" text-xl text-blackColor border-l-2 border-blackColor pl-4 font-bold mt-5 mb-3 md:text-2xl md:mt-0 lg:mb-8 xl:text-4xl">
            Objetivos del Refugio
          </h2>
          <p className="mb-3 font-medium text-sm md:text-lg md:mb-5 lg:text-xl xl:text-2xl">
            Emilia Rescata se distingue por su <span className="font-bold ml-1">compromiso</span> en
            la lucha contra la <span className="font-bold ml-1">sobrepoblación</span> y el abandono
            de
            <span className="font-bold ml-1">perritos</span> a través de su refugio.
            <br />
            <br />
            Emilia contribuye activamente, con la ayuda de donaciones, para controlar la
            <span className="font-bold ml-1">proliferación animal</span>, abordando así, una de las
            principales causas de este problema.
            <br />
            <br />
            El refugio, además, brinda un <span className="font-bold ml-1">espacio seguro</span> a
            perritos dándoles una segunda oportunidad y trabajando incansablemente por su bienestar
            con la esperanza de que alguién se enamore de ellos y les brinde amor y un
            <span className="font-bold ml-1">hogar</span> para siempre.
          </p>
          <p className="font-bold  mt-4 text-colorText md:text-lg lg:mt-14 lg:text-xl xl:text-2xl">
            “Todos los perritos merecen estar en un hogar donde los amen.”
          </p>
        </div>
        <Image
          src={foto1}
          alt="Imagen de emilia rodeada de muchos perros del refugio"
          width="auto"
          height="auto"
          className="m-auto object-cover md:flex-1 md:max-w-[372px]"
          priority
        />
      </div>
      <QuieroAdoptar />
      <div className="flex flex-col mx-2 mt-5 md:flex-row lg:mx-16 lg:mt-24 xl:mx-32">
        <Image
          src={foto2}
          alt="Imagen de una persona acariciando a un perro"
          className="m-auto object-cover md:flex-1 md:max-w-[372px]"
          width="auto"
          height="auto"
          priority
        />

        <div className="md:ml-4 xl:ml-6 md:w-2/3">
          <h2 className="text-xl text-blackColor border-l-2 border-blackColor pl-4 font-bold mt-5 mb-3 md:text-2xl md:mt-0 lg:mb-8 xl:text-4xl ">
            Cuidado animal: cultivando un mundo más compasivo y solidario
          </h2>
          <p className="text-sm mb-3 font-medium md:text-lg lg:text-xl xl:text-2xl">
            El cuidado de nuestros perritos es muy importante para asegurarnos que estén saludables
            y felices. Una forma de cuidarlos es
            <span className="font-extrabold ml-1">esterilizándolos</span>. Esto ayuda a controlar la
            cantidad de animales sin hogar y también
            <span className="font-bold ml-1">previene enfermedades</span> y comportamientos no
            deseados. Otro aspecto muy importante es la vacunación. Las
            <span className="font-bold ml-1">vacunas </span>protegen a nuestras mascotas contra
            enfermedades graves como la rabia, el parvovirus y el moquillo.
            <br />
            <br />
            Además de la esterilización y la vacunación, el cuidado animal incluye darles
            <span className="font-bold ml-1">comidas adecuadas</span> y hacer que realicen
            suficiente
            <span className="font-bold ml-1">ejercicio</span>. También es importante llevarlos al
            <span className="font-bold ml-1">veterinario</span> regularmente para control y atención
            preventiva.
          </p>
        </div>
      </div>
      <div className="py-2 bg-blueDark md:mt-10  lg:mt-20 lg:pl-16 xl:pl-32">
        <h2 className=" font-bold ml-2 pl-2 border-l-2 border-TextWhite text-TextWhite text-sm md:text-lg lg:text-xl lg:ml-0 xl:text-2xl ">
          Conoce más sobre nuestras áreas de impacto y cómo puedes ser parte de esta transformación.
        </h2>
      </div>
    </div>
  )
}

export default InfoHome
