'use client'
import Image from 'next/image'

const Banner = ({ imageUrl, title }) => {
  return (
    <div className="relative bg-contain bg-center">
      <div className="absolute bg-[#f1f1f0] opacity-5"></div>
      <Image
        src={imageUrl}
        width="auto"
        height="auto"
        priority
        alt="Banner"
        className="w-full h-full object-contain"
      />
      <div className="absolute inset-0 flex items-center pl-6 md:pl-36">
        <p className="text-colorTextBanner text-3xl font-bold lg:text-6xl">{title}</p>
      </div>
    </div>
  )
}

export default Banner
