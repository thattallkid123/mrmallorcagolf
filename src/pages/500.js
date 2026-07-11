export default function Custom500() {
  return (
    <main style={{ padding: '64px 24px', fontFamily: 'Jost, Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '48px', fontWeight: 500 }}>
        Server error
      </h1>
      <p style={{ margin: 0, color: '#4f4a44', fontSize: '18px', lineHeight: 1.6 }}>
        Something went wrong on our side. Please try again in a moment.
      </p>
    </main>
  )
}
