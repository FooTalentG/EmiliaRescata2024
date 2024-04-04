import { planMembresia, planFijo } from '@/data/dataCards'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className="rounded w-full flex flex-col gap-6 items-center max-w-[500px] md:justify-evenly md:flex-row md:max-w-full ">
      {planMembresia.map((card) => (
        <div
          key={card.id}
          className="flex flex-col border-2 border-borderCardMembresia p-5  rounded-lg md:w-[30%] md:h-[450px] md:justify-between lg:min-h-[35rem] xl:h-auto"
        >
          <Image
            className="w-full object-cover rounded-lg "
            src={card.image}
            alt={card.title}
            width="auto"
            height="auto"
            priority
          />
          <h2 className="font-bold text-xl my-2 text-colorButtonPFijo">{card.title}</h2>
          <p className="text-gray-700 text-base mb-2 overflow-y-auto overflow-custom">
            {card.description}
          </p>
          <Link href={`/membership/${card.membershipId}`}>
            <button className="w-full mb-0 text-TextWhite bg-donationsButton rounded-lg py-2.5 shadow-slate-500 shadow-[0px_2px_4px_0px]">
              {card.btnText}
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}

const CardFijo = () => {
  const linkPaypal = 'https://www.paypal.com/ncp/payment'
  return (
    <div className="rounded w-full flex flex-col gap-6 items-center max-w-[500px] md:justify-evenly md:flex-row md:max-w-full">
      {planFijo.map((card) => (
        <div
          key={card.id}
          className="flex flex-col border-2 p-5 rounded-lg md:w-[30%] md:h-[450px] md:justify-between lg:min-h-[35rem] xl:h-auto"
        >
          <Image
            className="w-full object-cover rounded-lg"
            src={card.image}
            alt={card.title}
            height="auto"
            width="auto"
            priority
          />
          <h2 className="font-bold text-xl my-2 text-donationsButton">{card.title}</h2>
          <p className="text-gray-700 text-base mb-2 overflow-y-auto overflow-custom">
            {card.description}
          </p>
          <Link href={`${linkPaypal}/${card.href}`} target='_blank' >
            <button className="w-full text-TextWhite bg-colorButtonPFijo rounded-lg py-2.5 shadow-slate-500 shadow-[0px_2px_4px_0px]">
              {card.btnText}
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}

const TestimonialCard = (card) => {
  return (
    <div
      key={card.id}
      className="flex flex-col gap-3 justify-start items-center w-[270px] min-h-[350px] border rounded-3xl shadow-[5px_2px_20px_0px_rgba(0,0,0,0.1)] p-4 mb-2 bg-bgPrimary m-auto"
    >
      <div className="flex justify-center items-center rounded-full">
        <Image
          src={card.image}
          width={120}
          height="auto"
          alt={card.name}
          priority
        />
      </div>
      <h3 className="text-xl font-bold text-blackColor lg:text-2xl">{card.name}</h3>
      <div className="text-start">
        <p className="text-base font-normal text-blackColor overflow-y-auto overflow-custom max-h-36 ">
          {card.text}
        </p>
      </div>
    </div>
  )
}

export { Card, CardFijo, TestimonialCard }
