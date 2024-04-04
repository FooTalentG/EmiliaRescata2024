import NotificationContext from '@/context/NotificatioContext'
import { useState, useEffect, useContext } from 'react'

const PayPalSubscriptionButton = ({ membershipId }) => {
  const { showNotification } = useContext(NotificationContext)
  const [paypalScriptLoaded, setPayPalScriptLoaded] = useState(false)

  useEffect(() => {
    try {
      if (!paypalScriptLoaded) {
        // Cargar el script de PayPal si aún no se ha cargado
        const script = document.createElement('script')
        script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_CLIENT_ID}&vault=true&intent=subscription`
        script.async = true
        script.onload = () => setPayPalScriptLoaded(true)
        document.body.appendChild(script)
      } else {
        // El script de PayPal ya se ha cargado, inicializar los botones de PayPal
        window.paypal
          .Buttons({
            style: {
              shape: 'rect',
              color: 'gold',
              layout: 'vertical',
              label: 'subscribe'
            },
            createSubscription: function (data, actions) {
              return actions.subscription.create({
                plan_id: membershipId
              })
            },
            onApprove: function (data, actions) {
              showNotification({
                open: true,
                status: 'success',
                message: 'Agradecemos de corazón tu colaboración.',
                redirectTo: '/',
                title: '¡Tu donación se realizó con éxito!'
              })
            }
          })
          .render(`#paypal-button-container-${membershipId}`)
      }
    } catch (error) {
      showNotification({
        open: true,
        status: 'error',
        message:
          'Lamentablemente, no se pudo procesar tu donación en este momento. ' + error.message,
        redirectTo: '/donaciones',
        title: 'Tu donación no se realizó'
      })
    }
  }, [paypalScriptLoaded])

  return <div id={`paypal-button-container-${membershipId}`}></div>
}

export default PayPalSubscriptionButton
