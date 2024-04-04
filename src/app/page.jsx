import CarouselDogs from '@/components/carousel/CarouselDogs'
import CircleImage from '@/components/home/circleimage'
import InfoHome from '@/components/home/infohome'

export default function Home() {
  return (
    <main className="mt-[110px] max-[640px]:mt-[80px]">
      <CarouselDogs />
      <InfoHome />
      <CircleImage />
    </main>
  )
}
