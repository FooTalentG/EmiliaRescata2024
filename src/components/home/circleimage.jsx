'use client'
import circle from '@/assets/homeImg/circleimage0.webp'
import circle2 from '@/assets/homeImg/circleimage2.webp'
import circle3 from '@/assets/homeImg/circleimage3.webp'
import './styles/circleimage.css'
import Image from 'next/image'

const CircleImage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full container-circleimage flex flex-col justify-between mb-10 mt-8 md:flex-row  md:gap-28 md:mx-4 lg:gap-32 xl:px-20">
        <div>
          <Image
            src={circle3}
            alt="img"
            width="auto"
            height="auto"
            className=" w-auto h-auto md:mb-36"
          />
        </div>
        <div>
          <Image
            src={circle2}
            alt="img"
            width="auto"
            height="auto"
            className=" w-auto h-auto md:mt-40"
          />
        </div>
        <div>
          <Image
            src={circle}
            alt="img"
            width="auto"
            height="auto"
            className=" w-auto h-auto md:mb-36 "
          />
        </div>
      </div>
    </div>
  )
}

export default CircleImage
