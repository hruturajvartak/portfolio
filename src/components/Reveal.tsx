import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface RevealProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'li'
}

export default function Reveal({ children, className = '', as: Tag = 'div' }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(0.1)
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
