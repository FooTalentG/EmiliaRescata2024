import testimonio1 from '@/assets/imgTestimonial/ilus1.webp'
import testimonio2 from '@/assets/imgTestimonial/ilus2.webp'
import testimonio3 from '@/assets/imgTestimonial/ilus3.webp'
import testimonio4 from '@/assets/imgTestimonial/ilus4.webp'
import testimonio5 from '@/assets/imgTestimonial/ilus5.webp'
import cart1 from '@/assets/imgDonaciones/cart1.webp'
import cart2 from '@/assets/imgDonaciones/cart2.webp'
import cart3 from '@/assets/imgDonaciones/cart3.webp'
import cart4 from '@/assets/imgDonaciones/cart4.webp'
import cart5 from '@/assets/imgDonaciones/cart5.webp'
import cart6 from '@/assets/imgDonaciones/cart6.webp'

const planMembresia = [
  {
    id: 1,
    membershipId: process.env.NEXT_PUBLIC_PLAN_ID,
    image: cart1,
    title: 'Membresia 1',
    description: 'Apadrina a nuestros cachorritos rescatados para asegurar su bienestar.',
    btnText: 'USD 5'
  },
  {
    id: 2,
    membershipId: process.env.NEXT_PUBLIC_PLAN_ID2,
    image: cart2,
    title: 'Membresia 2',
    description:
      'Apadrina a nuestros viejitos para brindarles el cuidado y amor que necesitan en esta etapa de sus vidas.',
    btnText: 'USD 10'
  },
  {
    id: 3,
    membershipId: process.env.NEXT_PUBLIC_PLAN_ID3,
    image: cart3,
    title: 'Membresia 3',
    description:
      'Apadrina a perritos con enfermedades para garantizarles atención médica y cuidado.',
    btnText: 'USD 15'
  }
]

const planFijo = [
  {
    id: 1,
    image: cart4,
    title: 'Ayudanos con sus alimentos',
    description:
      'Con tu generosidad, garantizamos que ninguna pancita quede vacía y que sus ladridos sean de felicidad.',
    btnText: 'USD 5',
    href: 'DCUYPZ7ZGAGEG'
  },
  {
    id: 2,
    image: cart5,
    title: 'Ayudanos con sus esterilizaciones',
    description:
      'Tu colaboración esteriliza perritos y promueve la responsabilidad sobre su cuidado.',
    btnText: 'USD 10',
    href: '62C7KAVEAQNYN'
  },
  {
    id: 3,
    image: cart6,
    title: 'Ayudanos con sus gastos veterinarios',
    description: 'Tu donación garantiza la salud y el bienestar de nuestros perritos rescatados.',
    btnText: 'USD 15',
    href: 'TH488ZSCZH9UW'
  }
]

const testimonialData = [
  {
    id: 1,
    name: 'Jess',
    text: '“Una extraordinaria persona que ama a los animalitos y vela por más de 150 peludos en abandono toda mi admiración hacia usted señora Emilia”.',
    image: testimonio1
  },
  {
    id: 2,
    name: 'Oriflame',
    text: '“Apoya a los que no tienen voz a los más indefensos merece mucho apoyo”.',
    image: testimonio2
  },
  {
    id: 3,
    name: 'Karen',
    text: '“Realiza una gran labor rescatando a muchos peluditos”.',
    image: testimonio3
  },
  {
    id: 4,
    name: 'Rosita',
    text: '“Emilia he visto tu página que labor tan admirable, estoy muy agradecida y orgullosa de ti, gracias por tener ese buen corazón y fortaleza para que sigas día a día por estos pequeños, hoy recién vi tus publicaciones, ten presente que tbn te apoyaré en lo que pueda siempre, ya tienes una seguidora más que admira tu valentía y bondad, gracias”.',
    image: testimonio4
  },
  {
    id: 5,
    name: 'Jess',
    text: '“Una extraordinaria persona que ama a los animalitos y vela por más de 150 peludos en abandono toda mi admiración hacia usted señora Emilia”.',
    image: testimonio5
  }
]

export { planFijo, planMembresia, testimonialData }
