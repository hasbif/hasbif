'use client'

type ScrollDirection = 'up' | 'down' | 'stationary'

export const setupCustomScroll = (
  onScrollStateChange?: (direction: ScrollDirection) => void,
  snapDelay: number = 300
) => {
  if (typeof window === 'undefined') return () => {}

  const main = document.querySelector('main')
  if (!main) return () => {}

  // Enable native scroll snap properties
  main.style.scrollSnapType = 'y mandatory'
  main.style.overflowY = 'scroll'
  main.style.height = '100vh'
  
  const sections = document.querySelectorAll('section')
  sections.forEach(section => {
    section.style.scrollSnapAlign = 'start'
  })

  let lastScrollPosition = main.scrollTop
  let isScrolling = false
  let scrollDirection: ScrollDirection = 'stationary'
  let snapTimeout: NodeJS.Timeout
  let isScrollbarHeld = false

  const checkScrollDirection = (currentPosition: number) => {
    const newDirection: ScrollDirection = currentPosition > lastScrollPosition ? 'down' : 'up'
    
    if (newDirection !== scrollDirection) {
      scrollDirection = newDirection
      onScrollStateChange?.(scrollDirection)
    }
    
    lastScrollPosition = currentPosition
  }

  const handleScroll = () => {
    if (isScrolling) return
    
    // Clear any pending snap
    clearTimeout(snapTimeout)
    
    // Check scroll direction
    checkScrollDirection(main.scrollTop)
    
    // Set temporary scroll behavior to auto during manual scrolling
    main.style.scrollBehavior = 'auto'
    
    // Only consider stationary if scrollbar isn't held
    if (!isScrollbarHeld) {
      snapTimeout = setTimeout(() => {
        main.style.scrollBehavior = 'smooth'
        isScrolling = true
        
        setTimeout(() => {
          scrollDirection = 'stationary'
          onScrollStateChange?.(scrollDirection)
          isScrolling = false
        }, snapDelay)
      }, 100)
    }
  }

  // Track scrollbar state
  const handleScrollbarPress = () => {
    isScrollbarHeld = true
  }

  const handleScrollbarRelease = () => {
    isScrollbarHeld = false
    // Trigger snap check after release
    handleScroll()
  }

  // Set up event listeners
  main.addEventListener('scroll', handleScroll, { passive: true })
  
  // Track scrollbar interaction (works for most browsers)
  main.addEventListener('mousedown', (e) => {
    if (e.target === main || e.target === document.documentElement) {
      handleScrollbarPress()
    }
  })
  
  document.addEventListener('mouseup', handleScrollbarRelease)
  document.addEventListener('mouseleave', handleScrollbarRelease)
  main.addEventListener('touchstart', handleScrollbarPress, { passive: true })
  main.addEventListener('touchend', handleScrollbarRelease, { passive: true })

  return () => {
    clearTimeout(snapTimeout)
    main.removeEventListener('scroll', handleScroll)
    main.removeEventListener('mousedown', handleScrollbarPress)
    document.removeEventListener('mouseup', handleScrollbarRelease)
    document.removeEventListener('mouseleave', handleScrollbarRelease)
    main.removeEventListener('touchstart', handleScrollbarPress)
    main.removeEventListener('touchend', handleScrollbarRelease)
    
    // Reset styles
    main.style.scrollSnapType = ''
    main.style.overflowY = ''
    main.style.height = ''
    main.style.scrollBehavior = ''
    
    sections.forEach(section => {
      section.style.scrollSnapAlign = ''
    })
  }
}