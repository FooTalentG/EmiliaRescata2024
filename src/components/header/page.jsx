'use client'
import Logo from '@/assets/headerFooterImg/LogoEmilia-new.webp'
import DropdownMenu from './DropdownMenu'
import ButtonPages from '../button/page'
import NavBar from '../nabvar/page'
import Social from '../social/page'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const buttonHeader = {
    style:
      'flex  text-sm bg-colorText text-TextWhite rounded-xl py-2 px-3 hover:scale-110 hover:-translate-y-1 duration-300 md:text-lg',
    ref: '/donaciones',
    title: 'Quiero donar'
  }

  const data = {
    stylesNav: 'flex ml-2 max-lg:hidden ',
    stylesUl: 'flex items-center gap-1 text-colorblack font-normal lg:gap-5 xl:gap-8'
  }

  const dataSocial = {
    styleDiv: 'flex gap-3 justify-self-start',
    styleLink: 'hover:scale-110  hover:-translate-y-1 duration-300 ',
    styleIcon: 'text-colorText size-7 ',
    styleP: 'hidden'
  }

  return (
    <header className="fixed top-0 w-full flex justify-between items-center h-[80px] bg-bgPrimary z-20 shadow-md shadow-gray-300 sm:h-[110px]">
      <DropdownMenu />
      <Link href="/">
        <Image
          src={Logo}
          alt="logo del refugio"
          width={80}
          height="auto"
          className="max-lg:hidden my-12 ml-14 md:ml-10 xl:ml-24"
          priority
        />
      </Link>
      <NavBar data={data} />
      <div className="flex gap-2 mr-8 items-center md:gap-8 md:mr-16 lg:mr-8 lg:gap-5 xl:mr-24">
        <Social data={dataSocial} />
        <ButtonPages data={buttonHeader} />
      </div>
    </header>
  )
}

export default Header
