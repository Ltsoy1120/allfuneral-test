/**
 * Преобразует массив типов вроде ["funeral_home", "logistics_services"]
 * в форматированный текст: "Funeral home, Logistics services"
 */
export function formatCompanyTypes(types: string[]): string {
  return types
    .map(t => {
      const withSpaces = t.replace(/_/g, ' ')
      return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1)
    })
    .join(', ')
}
/**
 * Преобразует номер телефона "17025552345"
 * в форматированный: "+1 702 555 2345"
 */
export function formatPhone(phone: string): string {
  if (!phone) return ''

  const match = phone.match(/^(\d)(\d{3})(\d{3})(\d{4})$/)
  if (!match) return phone

  const [, country, area, prefix, line] = match
  return `+${country} ${area} ${prefix} ${line}`
}
/**
 * Преобразует дату "2024-03-12T00:00:00Z"
 * в форматированную "03.12.2024"
 */
export function formatDate(dateString: string): string {
  if (!dateString) return ''

  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Месяцы с 0
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}
