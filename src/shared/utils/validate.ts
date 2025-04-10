export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return 'Email is incorrect'
  }
  return ''
}

export const validatePhoneNumber = (phoneNumber: string) => {
  const normalizedNumber = `+${phoneNumber.replace(/\D/g, '')}`
  if (normalizedNumber.length !== 12) {
    return 'Phone is incorrect'
  }
  return ''
}
