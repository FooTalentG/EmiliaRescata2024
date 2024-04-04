"use client"
import Vector from "@/assets/imgadopciones/Vector2.webp"
import Pata from "@/assets/vectorBgImg/Patitas.webp"
import Image from 'next/image'

const Divisor = () => {
  return (
    <div className='flex'>
      <Image
        src={Vector}
        alt="divisor"
        className="flex w-full mt-0 "
        width="auto"
        height="auto"
      />
      <div className='size-9 absolute'>
        <Image
          src={Pata}
          alt="imagen patitas"
          className="relative top-1 left-72 h-auto w-auto"
          width={4}
          height={3}
        />
        <Image
          src={Pata}
          alt="imagen patitas"
          className="relative top-[-10px] left-[0px] h-auto w-auto"
          width={4}
          height={3}
        />
      </div>
      
    </div>
  )
}

export default Divisor