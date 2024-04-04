const validateFullname = (fullname) => {
  if (!fullname.trim()) {
    return 'El nombre completo es requerido'
  }
  if (fullname.length < 5 || fullname.length > 100) {
    return 'El nombre completo debe tener entre 5 y 100 caracteres'
  }
  return null
}

const validateCity = (city) => {
  if (!city.trim()) {
    return null
  }
  if (city.length < 3 || city.length > 50) {
    return 'La ciudad debe tener entre 3 y 50 caracteres'
  }
  return null
}

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.trim() || !emailRegex.test(email)) {
    return 'Ingresa un correo electrónico válido'
  }
  return null
}

const validatePhone = (phone) => {
  const phoneRegex = /^\+?\d{5,15}$/
  if (!phone.trim()) {
    return null
  }
  if (!phoneRegex.test(phone)) {
    return 'Ingresa un número de teléfono válido'
  }
  return null
}

const validateTextarea = (textarea) => {
  if (!textarea.trim()) {
    return 'Este campo no puede estar vacío'
  }
  if (textarea.length <= 1) {
    return 'Este campo no puede estar vacío'
  }
  return null
}

export { validateFullname, validateEmail, validatePhone, validateTextarea, validateCity }
