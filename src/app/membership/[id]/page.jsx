'use client'
import PayPalSubscriptionButton from '@/components/paypalButton/PayPalSubscriptionButton'
import { planMembresia, planFijo } from '@/data/dataCards'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Loader from '@/components/loader/Loader'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import ReCAPTCHA from 'react-google-recaptcha'

const MembershipDetailsPage = ({ params }) => {
  const [recaptchaValue, setRecaptchaValue] = useState(null)
  const [membershipDetails, setMembershipDetails] = useState(null)
  const router = useRouter()
  const id = params.id

  useEffect(() => {
    // Buscar la membresía correspondiente según el ID
    const foundMembership = planMembresia.find((membersia) => membersia.membershipId === id)
    if (foundMembership) {
      setMembershipDetails(foundMembership)
    }
    const foundMember = planFijo.find((membersia) => membersia.membershipId === id)
    if (foundMember) {
      setMembershipDetails(foundMember)
    }
  }, [id])

  const handleGoBack = () => {
    router.push('/donaciones')
  }

  return (
    <div className="mt-[110px] max-[640px]:mt-[80px] py-10">
      <h1 className="text-2xl font-bold text-center mt-4 lg:text-3xl ">Detalles de la membresia</h1>
      <button
        className="p-5"
        onClick={handleGoBack}
      >
        <ArrowBackIcon className="size-10 hover:scale-105 transition-all" />
      </button>
      {membershipDetails ? (
        <section className="flex flex-col justify-center items-center p-2 md:flex-row md:gap-6 min-h-fit">
          <div className="mb-5 rounded-md">
            <Image
              src={membershipDetails.image}
              alt={membershipDetails.title}
              width="auto"
              height="auto"
              className="w-[200px] md:w-[350px]"
              priority
            />
          </div>
          <div>
            <div className="mb-5 flex flex-col gap-2">
              <h2 className="text-center font-bold text-2xl">{membershipDetails.title}</h2>
              <p className="font-medium text-lg">{membershipDetails.description}</p>
              <p className="font-semibold text-xl">Total: {membershipDetails.btnText}</p>
            </div>
            {recaptchaValue === null ? (
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
                onChange={(value) => {
                  setRecaptchaValue(value)
                }}
              />
            ) : (
              <PayPalSubscriptionButton membershipId={membershipDetails.membershipId} />
            )}
          </div>
        </section>
      ) : (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      )}
    </div>
  )
}

export default MembershipDetailsPage
