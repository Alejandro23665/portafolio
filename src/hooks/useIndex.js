import { useState, useEffect, useCallback } from 'react'

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [element, setElement] = useState(null)

  useEffect(() => {
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, { threshold: 0.1, rootMargin: '50px', ...options })
    observer.observe(element)
    return () => observer.disconnect()
  }, [element, options])

  return [setElement, isIntersecting]
}

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}

export function useActiveSection(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const observers = sectionIds.map(id => {
      const element = document.getElementById(id)
      if (!element) return null
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: `-${offset}px 0px -${window.innerHeight - offset - 100}px 0px` }
      )
    }).filter(Boolean)

    observers.forEach((observer, i) => {
      if (observer) observer.observe(document.getElementById(sectionIds[i]))
    })

    return () => observers.forEach(o => o?.disconnect())
  }, [sectionIds, offset])

  return activeId
}

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }, [key, storedValue])

  return [storedValue, setValue]
}

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}