import imgPremio1 from '@/assets/imgSobreNosotros/imgPremio1.webp'
import imgPremio2 from '@/assets/imgSobreNosotros/imgPremio2.webp'
import imgPremio from '@/assets/imgSobreNosotros/imgpremio.webp'
import video from '@/assets/videos/PremioEmilia.mp4'
import Slider from 'react-slick'
import Image from 'next/image'
import './styles.css'

const Premios = () => {
  const sliderSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <article className="bg-bgPrimary py-7">
      <div className="flex flex-col w-full md:justify-around md:flex-row md:p-8">
        <div className="flex flex-col w-full md:w-[50%]">
          <h2 className="m-4 font-bold text-xl border-l-4 border-black pl-2 md:text-3xl lg:text-4xl">
            Premios
          </h2>
          <div className="p-4 w-screen md:w-full">
            <h3 className="font-semibold text-lg mb-3 md:text-xl lg:text-3xl lg:font-bold">
              Premio ‘’Heroínas de Toledo 2024’’
            </h3>
            <p className="leading-loose p-5 md:text-lg lg:text-2xl">
              El Área de la Mujer de la Gerencia de Desarrollo e Inclusión Social de la
              Municipalidad de Huancayo otorgó el reconocimiento por su aporte al desarrollo social
              y regional a las mujeres destacadas con el premio ‘’Heroínas de Toledo 2024’’ en honor
              al Día Internacional de la Mujer. Entre las galardonadas se encontraba Emilia, cuyo
              labor ejemplar en el refugio fue celebrado por su dedicación incansable al cuidado y
              protección de perritos necesitados.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[40%] contentSlider">
          <Slider
            {...sliderSettings}
            className="flex gap-7 justify-center w-[300px] h-[400px] lg:w-[330px] lg:h-[450px]"
          >
            <div className="h-[300px] px-3 lg:h-[450px]">
              <Image
                src={imgPremio1}
                alt="imgagen de la entrega de premios a Emilia Rescata "
                width="auto"
                height="auto"
              />
            </div>
            <div className="h-[300px] px-3 lg:h-[450px]">
              <Image
                src={imgPremio2}
                alt="imgagen de la entrega de premios a Emilia Rescata "
                width="auto"
                height="auto"
              />
            </div>
            <div>
              <video
                src={video}
                controls
                className="w-[300px] h-[392px] lg:h-[434px]"
                muted
                playsInline
                autoPlay
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className="bg-vector2 bg-no-repeat w-full bg-cover flex mt-6 h-[50px] md:h-[90px] lg:h-[200px]"></div>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="flex flex-col items-center my-3 md:w-[40%]">
          <Image
            src={imgPremio}
            width="auto"
            height="auto"
            alt="img"
            className="w-[250px] lg:w-[300px]"
          />
        </div>
        <div className="p-4 md:w-[50%]">
          <h3 className="font-semibold text-lg mb-3 md:text-xl lg:text-3xl lg:font-bold">
            Reconocimiento de la Municipalidad Distrital de El Tambo año 2021
          </h3>
          <p className="leading-loose p-5 md:text-lg lg:text-2xl">
            En el año 2021, el Centro de Rehabilitación Canino ‘’Emilia Rescata’’ recibió un
            destacado reconocimiento de la Municipalidad Distrital de El Tambo en conmemoración del
            Bicentenario de Perú. El mismo, se otorgó en honor a su invaluable labor y contribución
            como uno de los Personajes Ilustres del Distrito de El Tambo por haber sobresalido y
            aportado desde sus distintos ámbitos al progreso, desarrollo e identidad de la región.
          </p>
        </div>
      </div>
    </article>
  )
}

export default Premios
