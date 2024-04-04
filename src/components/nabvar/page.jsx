'use client'
import { usePathname } from 'next/navigation'
import links from '@/data/links'
import Link from 'next/link'
import React from 'react'

const NavBar = ({data}) => {
  
  const pathname = usePathname()

  return (
    <nav className={data.stylesNav}>
      <ul className={data.stylesUl} >
        {links.map(({ link, id, name }) => (
          <React.Fragment key={id}>
            <Link
              href={`${link}`}
              className={`flex items-center hover:scale-95 transition-all ${pathname === `${link}` ? 'font-semibold' : ''
                }`}
            >
              {name}
            </Link>
            {id !== links[links.length - 1].id && (
              <div
                key={id}
                className="border-l-[3px] border-colorText h-[15px] my-0 mx-1"
              ></div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  )
}



export default NavBar