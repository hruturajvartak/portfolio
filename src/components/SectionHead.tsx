import type { ReactNode } from 'react'

interface SectionHeadProps {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
}

export default function SectionHead({ eyebrow, title, lead }: SectionHeadProps) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  )
}
