import { ImageResponse } from 'next/og'
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'
export default function Icon() {
  return new ImageResponse(
    (<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E0913C', color: '#0C0D0A', fontSize: 44, fontWeight: 700, fontFamily: 'sans-serif', borderRadius: 12 }}>C</div>),
    { ...size }
  )
}
