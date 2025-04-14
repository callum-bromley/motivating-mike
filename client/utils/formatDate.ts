export default function formatDate(newDate: string) {
  const date = new Date(newDate)
  const format: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  if (isNaN(date.getTime())) {
    return "Invalid Date"
  }

  return date.toLocaleDateString('en-nz', format)
}
