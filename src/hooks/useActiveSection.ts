import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const topMost = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr,
          )
          setActiveId(topMost.target.id)
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    )

    // Clear the highlight when scrolled back above the first section
    const first = document.getElementById(sectionIds[0])
    const onScroll = () => {
      if (first && first.getBoundingClientRect().top > window.innerHeight * 0.3) setActiveId('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [sectionIds])

  return activeId
}
