import { Paper } from '@mui/material'
import Image from 'next/image'

const Imagesdogs = ({ item }) => {
  return (
    <Paper className="min-w-full overflow-hidden flex justify-center items-center relative imagesDogs">
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(max-width: 768px) , (max-height: 768px) 100vw"
      />
    </Paper>
  )
}

export default Imagesdogs
