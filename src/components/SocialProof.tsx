const companies = [
  'Zoomlion',
  'John Deere',
  'CNH Industrial',
  'AGCO',
]

export default function SocialProof() {
  return (
    <section
      style={{
        padding: 'var(--space-12) 0',
        background: 'var(--graphite-900)',
        borderBottom: '1px solid var(--graphite-800)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-8)',
        }}
      >
        <p
          style={{
            fontSize: 'var(--text-xs)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'var(--graphite-400)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
          }}
        >
          Engineering Experience Across
        </p>
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-12)',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {companies.map((company) => (
            <div
              key={company}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '120px',
                height: '40px',
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-lg)',
                fontWeight: 600,
                color: 'var(--graphite-500)',
                border: '1px solid var(--graphite-700)',
                borderRadius: 'var(--radius-md)',
                padding: '0 var(--space-4)',
                transition: 'all var(--transition-normal)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--graphite-200)'
                e.currentTarget.style.borderColor = 'var(--steel-blue-dark)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--graphite-500)'
                e.currentTarget.style.borderColor = 'var(--graphite-700)'
              }}
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
