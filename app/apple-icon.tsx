import { ImageResponse } from 'next/og'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'
export default function AppleIcon() {
  return new ImageResponse(
    (<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0C0D0A', color: '#E0913C', fontSize: 120, fontWeight: 700, fontFamily: 'sans-serif' }}>C</div>),
    { ...size }
  )
}
