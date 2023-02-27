export const fullName = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}` 
}

export const passwordConverter = (password: string) => {
  return '*'.repeat(password.length)
}