/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Definir nuevos colores personalizados
        footer: 'var(--bg-secondary)', // Color de fondo del footer
        colorText: 'var(--color-primary)', // Color de texto del footer
        TextWhite: 'var(--color-text-white)',
        bgPrimary: 'var(--bg-primary)',
        blackColor: 'var(--color-black)',
        wsp: 'var(--bg-color-wsp)',
        blueLight: 'var(--color-blue-light)',
        blueDark: 'var(--color-blue-dark)',
        donationsButton: 'var(--donations-button)',
        borderCardMembresia: 'var(--border-card-membresia)',
        colorButtonPFijo: 'var(--botton-plan-fijo)',
        colorTextBanner: 'var(--color-text-banner)',
        inputForm: 'var(--color-input-form)'
      },
      backgroundImage: {
        image1: 'var(--image-bg-1)',
        vector: 'var(--image-vector)',
        vector2: 'var(--image-vector2)',
        vector3: 'var(--image-vector3)'
      },
      animation: {
        // Definir una nueva animación llamada 'spin-y'
        'spin-y': 'spin-y 2s linear', // Rotación en el eje Y durante 2 segundos de forma lineal
        'slide-in-right': 'slide-in-right .5s ease-in-out'
      },
      keyframes: {
        // Definir la secuencia de animación para 'spin-y'
        'spin-y': {
          '0%': {
            // Estado inicial de la animación
            transform: 'rotateY(0deg)' // Rotación inicial de 0 grados en el eje Y
          },
          '100%': {
            // Estado final de la animación
            transform: 'rotateY(360deg)' // Rotación final de 360 grados en el eje Y
          }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      }
    },
    variants: {
      extend: {
        // Habilitar la animación al hacer hover
        animation: ['hover']
      }
    }
  },

  plugins: []
}
