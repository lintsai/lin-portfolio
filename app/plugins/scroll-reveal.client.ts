export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window === 'undefined') return

  let observer: IntersectionObserver | null = null

  const initObserver = () => {
    if (observer) {
      observer.disconnect()
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
        }
      })
    }

    observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    })

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => observer?.observe(el))
  }

  // Initialize on client mount
  nuxtApp.hook('app:mounted', () => {
    initObserver()
  })

  // Re-observe when switching routes (e.g. '/' <-> '/services')
  nuxtApp.hook('page:finish', () => {
    setTimeout(() => {
      initObserver()
    }, 150)
  })
})
