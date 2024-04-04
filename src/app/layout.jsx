import { NotificationProvider } from '@/context/NotificatioContext'
import ButtonFloat from '@/components/floatbutton/ButtonFloat'
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'
import { Nunito } from 'next/font/google'
import React from 'react'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})

export const metadata = {
  title: 'Emilia Rescata',
  description:
    'Bienvenido a Emilia Rescata, tu destino para adopciones de perros, donaciones para ayudar a los animales necesitados y recursos sobre castraciones y esterilizaciones. Descubre cómo puedes hacer la diferencia y mejorar la vida de los animales con nosotros.',
  creator: 'Foo Talent Group',
  publisher: 'Foo Talent Group',
  keywords: [
    'Adopciones',
    'Donaciones',
    'Esterilizaciones',
    'Perros',
    'Animales',
    'Rescate',
    'Cuidado animal'
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={nunito.className}>
        <NotificationProvider>
          <Header />
          {children}
          <ButtonFloat />
          <Footer />
        </NotificationProvider>
      </body>
    </html>
  )
}
