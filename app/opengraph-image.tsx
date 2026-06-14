import { ImageResponse } from 'next/og'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Cactus Clean Detailing & Clay Bar — Mobile Detailing in Chandler, AZ'
export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(135deg,#0C0D0A 0%,#14150F 60%,#1B1D14 100%)', color: '#ECEAE0', padding: 72, fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 64, height: 64, borderRadius: 14, background: '#E0913C', color: '#0C0D0A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44, fontWeight: 700 }}>C</div>
          <div style={{ fontSize: 28, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>Cactus Clean Detailing &amp; Clay Bar</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.03, letterSpacing: -1 }}>Glass-smooth paint,</div>
          <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.03, letterSpacing: -1, color: '#E0913C' }}>in your driveway.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#9C9986' }}>
          <span>Chandler & the East Valley</span>
          <span style={{ color: '#E0913C' }}>(480) 418-5533</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
