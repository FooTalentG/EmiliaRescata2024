import BannerContacto from '@/assets/bannerImg/banner-contacto.webp'
import Banner from '@/components/banner/page'
import InfoContacto from './InfoContacto'
import ContactForm from './ContactForm'
import Divisor from './divisor'

const Contacto = () => {
  return (
    <div className="mt-[110px]  max-[640px]:mt-[80px]">
      <Banner imageUrl={BannerContacto} />
      <InfoContacto />
      <Divisor />
      <ContactForm />
    </div>
  )
}

export default Contacto
