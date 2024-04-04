"use client"
import React from 'react'
import Image from 'next/image'
import PlayVideo from './playvideo'
import Pata1 from "@/assets/vectorBgImg/patitas2.webp"


const AdopExito = () => {
  
  

  return (
    <div className=' bg-bgPrimary pb-6 lg:px-16 xl:px-32'>
      <div className='mx-4 pt-8'>
        <h2 className='mb-3  text-colorText font-bold text-xl border-l-2 border-colorText pl-2 py-0 md:text-2xl lg:text-3xl xl:text-4xl'>
          Adopciones exitosas
        </h2>
        <h3 className='text-sm text-blackColor mb-3 lg:text-xl xl:text-2xl'>
          Cada adopción es una celebración de amor y esperanza en nuestro refugio. Te mostramos algunos casos:
        </h3>
      </div>
      <Image
        src={Pata1}
        alt="imagen patitas"
        className="relative top-1 left-5 h-auto w-auto mb-5"
        width={55}
        height={50}
      />
      <PlayVideo />
      <Image
        src={Pata1}
        alt="imagen patitas"
        className="relative top-1 left-72 h-auto w-auto "
        width={55}
        height={50}
      />
    </div>
  )
}

export default AdopExito