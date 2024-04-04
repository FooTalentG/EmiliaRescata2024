import { WhatsApp as WhatsAppIcon } from '@mui/icons-material'
import Link from 'next/link'

const ButtonFloat = () => {
  return (
    <Link
      href="https://wa.me/+51955646940"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed flex justify-center bg-wsp rounded-xl p-3 bottom-20 right-16 shadow-md shadow-orange-950 z-[1000] hover:scale-110 hover:-translate-y-1 duration-300 max-[640px]:p-2 max-[640px]:right-8 "
    >
      <button className="bg-transparent ">
        <WhatsAppIcon
          sx={{ color: '#FFFFFF' }}
          className="size-10 max-[640px]:size-10"
        />
      </button>
    </Link>
  )
}

export default ButtonFloat
