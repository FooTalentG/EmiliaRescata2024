"use client"
import React from 'react'
import Image from 'next/image'
import Foto1 from "../../../assets/imgadopciones/adopciones-foto-1.webp"
import Link from 'next/link'
import ButtonPages from '@/components/button/page'

const InfoAdoM = () => {

  const buttonAdop =
  {
    style: " flex justify-center content-center bg-colorText text-2xl text-TextWhite font-semibold w-full mt-7 mb-10 py-3 rounded-xl hover:scale-110 hover:-translate-y-1 duration-300",
    ref: "https://docs.google.com/forms/d/e/1FAIpQLScHEohB9ejWm6yKkDnHEGjm1-myaN8jXKIytwVZHroGsFryYw/viewform?usp=sf_linkhttps://docs.google.com/forms/d/e/1FAIpQLScHEohB9ejWm6yKkDnHEGjm1-myaN8jXKIytwVZHroGsFryYw/viewform?usp=sf_link",
    title: "Quiero adoptar"
  }

  return (
    <div className='mx-3 mt-4    md:mt-14 lg:mx-16 md:flex lg:my-24 xl:mx-32'>
      <div className='md:w-2/4 md:pr-9'>
        <h2 className='font-bold text-xl border-l-2 border-blackColor pl-2 py-0 md:text-2xl lg:text-3xl xl:text-4xl'>
          Adopta y salva una vida
        </h2>
        <p className='text-base text-blackColor my-4  lg:text-xl xl:text-2xl'>
          La adopción de mascotas es la responsabilidad que toma una persona de cuidar y brindar un hogar permanente a un animal que ha sido abandonado. Al adoptar, se le ofrece una segunda oportunidad de vida a perritos, proporcionándoles <span className='font-bold '>amor</span>, <span className='font-bold'>cuidados</span> y un <span className='font-bold '>ambiente seguro</span> donde se puedan <span className='font-bold '>desarrollar</span> plenamente.
        </p>
        <Image
          src={Foto1}
          alt=""
          className="flex w-full h-auto md:hidden"
          width={362}
          height={488}
          priority
        />
        <p className='text-lg text-blackColor mt-4  lg:text-xl xl:text-2xl'>
          En nuestro refugio encontrarás muchos perritos en adopción, desde <span className='font-bold'>cachorros</span> juguetones hasta <span className='font-bold'>perritos mayores</span> que solo buscan un lugar tranquilo para pasar sus días. Cada uno tiene su propia historia y personalidad única, pero todos comparten el mismo deseo: <span className='font-bold'>ser parte de una familia.</span>
        </p>
        <br />
        <p className='font-semibold text-base text-colorText  lg:text-xl xl:text-2xl'>
          Al adoptar, no solo ganas un compañero fiel que te brindará un amor incondicional, también salvas una vida y das lugar a otros perritos rescatados en el refugio.
        </p>
        <ButtonPages data={buttonAdop}/>
      </div>
      <div className='flex w-2/4'>
        <Image
          src={Foto1}
          alt=""
          className="flex w-full h-[550px]  lg:h-[85%] max-md:hidden md:pr-0"
          width={362}
          height={488}
          priority
        />
      </div>
    </div>
  )
}

export default InfoAdoM




