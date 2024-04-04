"use client"
import React from 'react'
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import Link from 'next/link';


const Social = ({data}) => {
  
  return (
    <div className={data.styleDiv}>
      <Link
        href="https://www.facebook.com/Emiliarescata"
        target="_blank"
        className={data.styleLink}
      >
        <FaFacebook className={data.styleIcon} />
        <p className={data.styleP}>/Emiliarescata/</p>
      </Link>
      <Link
        href="https://www.instagram.com/emiliarescataanimaleshuancayo/"
        target="_blank"
        className={data.styleLink}
      >
        <PiInstagramLogoFill className='size-[30px] text-colorText' />
        <p className={data.styleP}>@emiliarescataanimaleshuancayo/</p>
      </Link>
      <Link
        href="https://www.tiktok.com/@emily.altamirano7?_t=8kasQYURQ1O&_r=1"
        target="_blank"
        className={data.styleLink}
      >
        <IoLogoTiktok className={data.styleIcon} />
        <p className={data.styleP}>@emiliarescata</p>
      </Link>
    </div>
  )
}

export default Social