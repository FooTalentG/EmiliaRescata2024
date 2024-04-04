'use client'
import NotasPeriodisticas from '@/components/sobre-nosotros/notas periodisticas/NotasPeriodisticas'
import MisionHistoria from '@/components/sobre-nosotros/mision-historia/MisionHistoria'
import ComentSlider from '@/components/sobre-nosotros/comentSlider/ComentSlider'
import bannerSobreNosotros from '@/assets/bannerImg/banner-sobrenosotros.webp'
import Premios from '@/components/sobre-nosotros/premios/Premios'
import Banner from '@/components/banner/page'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const SobreNosotros = () => {
  return (
    <section className="mt-[110px] max-[640px]:mt-[80px]">
      <Banner imageUrl={bannerSobreNosotros} />
      <MisionHistoria />
      <ComentSlider />
      <Premios />
      <NotasPeriodisticas />
    </section>
  )
}

export default SobreNosotros
