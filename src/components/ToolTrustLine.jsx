import ReviewBadge from './ReviewBadge'

export default function ToolTrustLine() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        textAlign: 'center',
        padding: '18px 24px 0',
      }}
    >
      <ReviewBadge variant="mini" />
      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          fontSize: '.78rem',
          letterSpacing: '.04em',
          color: '#8A7F74',
          margin: 0,
        }}
      >
        Built by Andy Griffiths · UK PGA Advanced Professional, based in Mallorca
      </p>
    </div>
  )
}
