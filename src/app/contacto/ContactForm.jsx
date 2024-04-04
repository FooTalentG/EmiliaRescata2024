'use client'
import NotificationContext from '@/context/NotificatioContext'
import { useState, useRef, useContext } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from '@/hooks/useForm'
import MapGoogle from './MapGoogle'
import emailjs from 'emailjs-com'
import {
  validateCity,
  validateEmail,
  validateFullname,
  validatePhone,
  validateTextarea
} from '@/validations/formValidation'

const ContactForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null)
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)

  const { showNotification } = useContext(NotificationContext)
  const form = useRef()
  const initialForm = {
    user_fullname: '',
    user_email: '',
    user_telephone: '',
    user_city: '',
    user_message: ''
  }
  const { formState, onInputChange, resetForm } = useForm(initialForm)
  const { user_fullname, user_email, user_telephone, user_city, user_message } = formState
  const [errors, setErrors] = useState({})

  // Función para validar todo el formulario
  const validateForm = () => {
    // Llama a cada función de validación y almacena los mensajes de error en el estado de errores
    const newErrors = {
      fullname: validateFullname(formState.user_fullname),
      email: validateEmail(formState.user_email),
      telephone: validatePhone(formState.user_telephone),
      city: validateCity(formState.user_city),
      message: validateTextarea(formState.user_message)
    }
    setErrors(newErrors)
    // Devuelve true si no hay mensajes de error (formulario válido), de lo contrario, devuelve false
    return !Object.values(newErrors).some((error) => error !== null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm() && recaptchaValue) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAIL_KEY
        )
        .then(() => {
          resetForm()
          showNotification({
            open: true,
            contact: true,
            status: 'success',
            message: 'Atenderemos tu solicitud. Gracias por tu paciencia.',
            title: '¡Tu mensaje fue enviado!'
          })
        })
        .catch(() => {
          showNotification({
            open: true,
            contact: true,
            status: 'error',
            message: 'No pudimos procesar tu solicitud. Vuelve a intentar en unos minutos.',
            title: 'Mensaje no enviado'
          })
        })
    } else {
      console.error('Formulario con errores:', errors)
    }
  }

  return (
    <div className="flex flex-col mb-10 mx-2 md:flex-row-reverse md:justify-center md:gap-6 md:mx-16 lg:gap-6 lg:mx-28">
      <MapGoogle />
      <form
        onSubmit={handleSubmit}
        ref={form}
        className="flex flex-col gap-4 mt-10 md:w-2/3 md:mt-0 lg:gap-8"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 w-full ">
          <div className="flex flex-col w-full">
            <label
              htmlFor="user_fullname"
              className="font-bold mb-2"
            >
              Nombre y apellido <span className="text-red-600">*</span>:
            </label>
            <input
              className={`border-inputForm border-[1px] outline-none focus:border focus:border-blueLight rounded-md pl-3 py-2 md:py-1 lg:py-2 
              ${errors.fullname ? 'border-red-600' : ''}`}
              type="text"
              id="user_fullname"
              name="user_fullname"
              onChange={onInputChange}
              value={user_fullname}
              required
              placeholder="Escribe aqui tu nombre completo"
            />
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="user_city"
              className="font-bold mb-2"
            >
              Ciudad:
            </label>
            <input
              className={`border-inputForm border-[1px] outline-none focus:border focus:border-blueLight rounded-md pl-3 py-2 md:py-1 lg:py-2 
              ${errors.city ? 'border-red-600' : ''}`}
              type="text"
              name="user_city"
              id="user_city"
              onChange={onInputChange}
              value={user_city}
              placeholder="Escribe la ciudad donde vives"
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 w-full">
          <div className="flex flex-col w-full">
            <label
              htmlFor="user_email"
              className="font-bold mb-2"
            >
              Correo Electrónico <span className="text-red-600">*</span>:
            </label>
            <input
              className={`border-inputForm border-[1px] outline-none focus:border focus:border-blueLight rounded-md pl-3 py-2 md:py-1 lg:py-2 
              ${errors.email ? 'border-red-600' : ''}`}
              type="email"
              name="user_email"
              id="user_email"
              onChange={onInputChange}
              value={user_email}
              required
              placeholder="Ej: tucorreo@servicio.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="user_telephone"
              className="font-bold mb-2"
            >
              Teléfono:
            </label>
            <input
              className={`border-inputForm border-[1px] outline-none focus:border focus:border-blueLight rounded-md pl-3 py-2 md:py-1 lg:py-2 
              ${errors.telephone ? 'border-red-600' : ''}`}
              type="tel"
              name="user_telephone"
              id="user_telephone"
              onChange={onInputChange}
              value={user_telephone}
              placeholder="Ej.: +51 925 178 310"
            />
            {errors.telephone && <p className="text-red-500 text-sm">{errors.telephone}</p>}
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="user_message"
            className="font-bold mb-2"
          >
            Mensaje <span className="text-red-600">*</span>:
          </label>
          <textarea
            className={`border-inputForm border-[1px] outline-none focus:border focus:border-blueLight rounded-lg max-h-96 min-h-32 pl-3 py-2 
            ${errors.message ? 'border-red-600' : ''}`}
            name="user_message"
            id="user_message"
            onChange={onInputChange}
            value={user_message}
            required
            placeholder="Redacta aquí tu mensaje para nosotros"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
          onChange={(value) => {
            setRecaptchaValue(value)
            setIsCaptchaVerified(true)
          }}
        />
        <button
          disabled={!isCaptchaVerified}
          onClick={handleSubmit}
          type="submit"
          className={`bg-blueLight text-xl text-TextWhite justify-center py-2 rounded-md mb-10 hover:scale-105 hover:-translate-y-1 duration-300 
          ${!isCaptchaVerified ? 'bg-slate-400 cursor-not-allowed' : ''}`}
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default ContactForm
