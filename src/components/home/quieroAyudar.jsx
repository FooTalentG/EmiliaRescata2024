import React from 'react'
import ButtonPages from '../button/page'


const QuieroAyudar = () => {

  const buttonHome =
  {
    style: "flex justify-center content-center py-2 mb-5 w-[50%] md:w-[35%] text-sm bg-blueLight rounded-xl  text-TextWhite  hover:scale-110 hover:-translate-y-1 duration-300 md:text-lg lg:text-2xl",
    ref: "/contacto",
    title: "Quiero ser voluntario"
  }

  return (
    <div className="bg-image1 flex  bg-no-repeat bg-cover max-w-full my-10 bg-center ">
      <div className="opacidad bg-gray-950 bg-opacity-50 px-2 md:py-10 lg:px-16 xl:px-32">
        <h2 className="text-xl text-TextWhite border-l-2 border-TextWhite pl-4 font-bold mt-5 mb-3 md:mb-7 md:text-2xl xl:text-4xl ">
          Caminando juntos: voluntariado con perritos
        </h2>
        <p className="text-sm mb-3 text-TextWhite md:mb-7 md:text-lg lg:text-xl xl:text-2xl">
          En el refugio, nos esforzamos por brindar un hogar temporal a perritos en situación de
          calle. Pero para lograrlo, necesitamos la ayuda de
          <span className="font-extrabold">
            personas que estén dispuestas a compartir su tiempo y amor
          </span>
          con ellos.
          <br />
          <br />
          Necesitamos voluntarios que estén dispuestos a
          <span className="font-extrabold">sacarlos a pasear</span>, jugar con ellos, y sobre
          todo, darles el cariño que tanto merecen. Tu ayuda puede marcar una diferencia en la
          vida de estos perritos, hagamos del mundo un mejor lugar para ellos.
        </p>
        <ButtonPages data={buttonHome}/>
      </div>
    </div>
  )
}

export default QuieroAyudar