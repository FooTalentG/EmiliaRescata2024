import nota1 from '@/assets/notas-periodisticas/nota1.webp'
import nota2 from '@/assets/notas-periodisticas/nota2.webp'
import nota3 from '@/assets/notas-periodisticas/nota3.webp'
import nota4 from '@/assets/notas-periodisticas/nota4.webp'
import ImageTV from './ImageTV'

const NotasPeriodisticas = () => {
  return (
    <div className="flex justify-center pt-10 items-center">
      <div className="md:w-[70%] mx-auto">
        <div className="flex flex-col justify-center">
          <h2 className="m-4 font-bold text-xl border-l-4 border-black pl-2 md:text-3xl lg:text-4xl">
            Notas periodísticas
          </h2>
          <p className=" p-5 leading-loose md:text-lg lg:text-2xl">
            Bienvenidos a nuestro espacio de noticias donde recopilamos algunas notas que hemos
            tenido en los medios de comunicación. La difusión de nuestras actividades es esencial
            para cumplir nuestra misión y objetivos.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-10 pt-9 pb-8">
          <div className="w-full md:flex-1 md:min-w-[calc(50%-2rem)]">
            <ImageTV
              src={nota1}
              alt="Imagen de emilia dando una nota en canal 21 de huancayo"
              linkText="‘’Canal 21 Huancayo’’"
              linkUrl="https://www.youtube.com/watch?v=gt8IFlEayv4"
            />
          </div>
          <div className="w-full md:flex-1 md:min-w-[calc(50%-2rem)]">
            <ImageTV
              src={nota2}
              alt="Imagen de emilia dando una nota en El dominical de Panamericana"
              linkText="“El dominical de Panamericana”"
              linkUrl="https://www.facebook.com/watch/?v=614377880875828&extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C&ref=sharing&mibextid=Nif5oz"
            />
          </div>
          <div className="w-full md:flex-1 md:min-w-[calc(50%-2rem)]">
            <ImageTV
              src={nota3}
              alt="Imagen de emilia dando una nota en Parada Urbana"
              linkText="‘’Parada Urbana’’"
              linkUrl="https://www.youtube.com/watch?v=KyP9j6s7E1Q"
            />
          </div>
          <div className="w-full md:flex-1 md:min-w-[calc(50%-2rem)]">
            <ImageTV
              src={nota4}
              alt="Imagen de emilia dando una nota en Patitas en Acción"
              linkText="‘’Patitas en Acción’’"
              linkUrl="https://www.youtube.com/watch?v=7oKMVp57W6E"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotasPeriodisticas
