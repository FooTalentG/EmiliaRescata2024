"use client"

export default function MapGoogle() {

  return (
    <div className="">
      <iframe
        src={process.env.NEXT_PUBLIC_MAPS_URL} width="100%" height={500} loading="lazy" className="flex w-full md:w-[300px]  lg:w-[380px]">
      </iframe>
    </div>
  )
}


