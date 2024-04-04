import ImgAdop from "@/assets/imgDataLink/linkIAdop.webp"
import ImgHome from "@/assets/imgDataLink/linkIHome.webp"
import ImgSobre from "@/assets/imgDataLink/linkISobre.webp"
import ImgCont from "@/assets/imgDataLink/linkICont.webp"
import ImgDona from "@/assets/imgDataLink/linkIDona.webp"

const links = [
  {
    id: 1,
    name: 'Inicio',
    link: '/',
    image: ImgHome
  },
  {
    id: 2,
    name: 'Sobre nosotros',
    link: '/sobre-nosotros',
    image: ImgSobre
  },
  {
    id: 3,
    name: 'Adopciones',
    link: '/adopciones',
    image: ImgAdop
  },
  {
    id: 4,
    name: 'Donaciones',
    link: '/donaciones',
    image: ImgDona
  },
  {
    id: 5,
    name: 'Contacto',
    link: '/contacto',
    image: ImgCont
  }
]

export default links
