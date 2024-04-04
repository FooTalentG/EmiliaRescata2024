import { TestimonialCard } from '@/components/cards/page'
import { testimonialData } from '@/data/dataCards'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import './styles.css'

const ComentSlider = () => {
    const sliderSettings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        className: 'display: flex, justify-content-center',
        responsive: [
          {
            breakpoint: 1170,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              autoplay: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false
            }
          }
        ]
      }
  return (
    <article className='pt-7'>
        <div className="p-2">
          <h2 className="mb-4 font-bold text-xl border-l-4 border-black pl-2 lg:text-4xl lg:mb-8">
            Comentarios sobre el refugio
          </h2>
        </div>
        <div className="m-auto mb-10 px-7">
          <Slider
            {...sliderSettings}
            className="flex justify-center"
          >
            {testimonialData.map((card) => (
              <TestimonialCard
                key={card.id}
                {...card}
              />
            ))}
          </Slider>
        </div>
        <div className="flex justify-center items-center m-auto mb-10 w-full">
          <p className="font-medium text-lg text-center">
            Para seguir leyendo, visita nuestra página de
            <Link
              href="https://www.facebook.com/Emiliarescata/reviews"
              target="_blank"
              className="ml-1 text-blueLight"
            >
              Facebook
            </Link>
          </p>
        </div>
      </article>
  )
}

export default ComentSlider