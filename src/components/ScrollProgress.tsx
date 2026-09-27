import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${progress}%`,
        background: 'linear-gradient(90deg, var(--steel-blue), var(--steel-blue-bright))',
        zIndex: 200,
        transition: 'width 80ms linear',
        boxShadow: '0 0 8px rgba(74, 144, 217, 0.5)',
      }}
    />
  )
}
