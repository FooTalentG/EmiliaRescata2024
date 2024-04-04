import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useState } from 'react'

const CopyableParagraph = ({ text, number }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(number)
    setCopied(true)

    // Reiniciar el estado de "copied" después de 3 segundos
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col mt-4 ">
      <div className="flex items-center justify-between">
        <span className="mb-1 text-xs font-semibold md:text-sm lg:text-lg">{text}</span>
        <p className="mb-1 text-xs font-semibold md:text-sm lg:text-lg">{number}</p>
        <span
          className="hover:cursor-pointer"
          onClick={handleCopy}
        >
          <ContentCopyIcon className="h-6 w-6 text-gray-500" />
        </span>
      </div>
      {copied && <span className="text-green-500">Copiado</span>}
    </div>
  )
}

export default CopyableParagraph
