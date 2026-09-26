export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function formatDate(dateString) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
  }).format(date)
}

export function getInitials(name) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function truncate(text, length = 100) {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

export function generateId() {
  return Math.random().toString(36).substring(2, 11)
}

export function debounce(fn, delay) {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

export function throttle(fn, limit) {
  let inThrottle
  return (...args) => {
    if (!inThrottle) {
      fn(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}