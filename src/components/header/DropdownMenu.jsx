'use client'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { usePathname } from 'next/navigation'
import links from '@/data/links'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DropdownMenu = () => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="flex ml-8 md:ml-16"
      >
        {isOpen ? (
          <CloseIcon className="text-blackColor size-10" />
        ) : (
          <MenuIcon className="text-blackColor size-10" />
        )}
      </button>
      {isOpen && (
        <div
          className={`top-full h-screen absolute bg-bgPrimary rounded-ee-3xl shadow-gray-500 shadow-lg ${
            isOpen ? 'animate-slide-in-right' : ''
          }`}
        >
          <ul className="items-center pb-8 text-colorblack font-normal">
            {links.map(({ link, id, name, image }) => (
              <React.Fragment key={id}>
                <Link
                  href={`${link}`}
                  className={`flex items-center py-1  my-6 text-2xl pr-10  shadow-gray-300 shadow-sm ${
                    pathname === `${link}` ? 'font-bold bg-footer  ' : ''
                  }`}
                  onClick={toggleMenu}
                >
                  <Image
                    src={image}
                    alt="icono que hace referencia a la seecion que estamos"
                    width="auto"
                    height="auto"
                    priority
                    className="w-14 h-auto items-center px-4 bg-transparent"
                  />
                  {name}
                </Link>
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
