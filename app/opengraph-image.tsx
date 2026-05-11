import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'KLEXAI - Şirketinize Özel Güvenli AI Asistanı'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #071b27 0%, #0a2535 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 900,
            color: '#00C4EF',
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}
        >
          KLEXAI
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 800,
          }}
        >
          Şirketinize Özel Güvenli AI Asistanı
        </div>
        <div
          style={{
            fontSize: 24,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 600,
            lineHeight: 1.5,
          }}
        >
          Kurumsal verilerinizle eğitilmiş • MCP ile sıfır veri sızıntısı • 5-10 günde devrede
        </div>
      </div>
    ),
    { ...size }
  )
}
