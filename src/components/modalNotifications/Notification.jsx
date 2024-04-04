'use client'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import NotificationContext from '@/context/NotificatioContext'
import imgModal1 from '@/assets/imgModals/img1.webp'
import imgModal2 from '@/assets/imgModals/img2.webp'
import { useContext } from 'react'
import Image from 'next/image'

const Notification = ({ status, title, message, onClose, retry, contact }) => {
  const color = status === 'error' ? 'red-500' : 'green-500'
  const { closeNotification } = useContext(NotificationContext)

  const handleClose = () => {
    if (onClose) onClose()
    else closeNotification()
  }

  const handleRetry = () => {
    if (retry) retry()
    else handleClose() // Cerrar la notificación si no hay función de reintentar
  }

  return (
    <>
      {contact ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[1000]">
          <div className="bg-white p-6 rounded-lg w-[350px] text-center">
            <div className="flex flex-col justify-center items-center ">
              <h2 className={`text-2xl font-bold mb-4 text-${color}`}>{title}</h2>
            </div>
            <p className="text-base text-black">{message}</p>
            <div className='flex justify-center items-center mx-auto w-[200px] h-[200px]'>
              {status === 'success' ? (
                <div>
                  <Image
                    src={imgModal2}
                    alt="Imagen de mensaje enviado"
                    width="auto"
                    height="auto"
                  />
                </div>
              ) : (
                <div>
                  <Image
                    src={imgModal1}
                    alt="Imagen de mensaje no enviado"
                    width="auto"
                    height="auto"
                  />
                </div>
              )}
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={handleClose}
                className="text-center mt-4 bg-[#306688] text-white font-bold py-2 px-4 rounded w-[170px]"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[1000]">
          <div className="bg-white p-6 rounded-lg w-[350px] h-[350px] text-center">
            <div className="flex flex-col justify-center items-center ">
              {status === 'success' ? (
                <CheckCircleOutlineIcon className={`text-${color} size-20`} />
              ) : (
                <HighlightOffIcon className={`text-${color} size-20`} />
              )}
              <h2 className={`text-2xl font-bold mb-4 text-${color}`}>{title}</h2>
            </div>
            <p className="text-base text-black">{message}</p>
            {status === 'success' ? (
              <div className="flex justify-center items-center">
                <button
                  onClick={handleClose}
                  className="mt-4 bg-transparent text-[#306688] font-bold py-2 px-4 rounded border border-[#306688]"
                >
                  Volver al incio
                </button>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-stretch w-full ">
                <button
                  onClick={handleRetry}
                  className="text-center mt-4 mx-auto bg-[#306688] text-white font-bold py-2 px-4 rounded w-[170px]"
                >
                  Intentar de nuevo
                </button>
                <button
                  onClick={handleClose}
                  className="mt-4 mx-auto bg-transparent text-[#306688] font-bold py-2 px-4 rounded border border-[#306688] w-[170px]"
                >
                  Volver al incio
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Notification
