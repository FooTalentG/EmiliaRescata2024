'use client'
import Notification from '@/components/modalNotifications/Notification'
import { createContext, useState } from 'react'
import { useRouter } from 'next/navigation'

const defaultState = {
  open: false,
  contact: false,
  status: null,
  title: null,
  message: null,
  redirectTo: null
}

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(defaultState)
  const router = useRouter()

  const showNotification = (props) => {
    setNotification({ ...defaultState, ...props, open: true })
  }

  const closeNotification = () => {
    if (notification.redirectTo) {
      setTimeout(() => {
        router.push(notification.redirectTo)
      }, 500)
    }
    setNotification(defaultState)
  }
  const retry = () => {
    setNotification(defaultState)
    router.push(notification.redirectTo)
  }

  return (
    <NotificationContext.Provider
      value={{ ...notification, showNotification, closeNotification, retry }}
    >
      {children}
      {notification.open && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
          redirectTo={notification.redirectTo}
          contact={notification.contact}
          onClose={closeNotification}
          retry={retry}
        />
      )}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
