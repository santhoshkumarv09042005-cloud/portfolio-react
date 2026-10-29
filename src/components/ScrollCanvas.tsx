import { useEffect, useRef } from 'react'

const FRAME_COUNT = 64
const frameSrc = (i: number) => `${import.meta.env.BASE_URL}frames/frame_${String(i).padStart(3, '0')}.webp`

export default function ScrollCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    const frames: HTMLImageElement[] = []
    let current = 0
    let ticking = false

    const draw = () => {
      const f = frames[current]
      if (f?.complete && f.naturalWidth) ctx.drawImage(f, 0, 0, canvas.width, canvas.height)
    }
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image()
      img.src = frameSrc(i)
      if (i === 0) img.onload = () => { canvas.width = img.naturalWidth; canvas.height = img.naturalHeight; draw() }
      frames.push(img)
    }

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const frac = max > 0 ? document.documentElement.scrollTop / max : 0
      current = Math.min(FRAME_COUNT - 1, Math.floor(frac * FRAME_COUNT))
      if (!ticking) { ticking = true; requestAnimationFrame(() => { draw(); ticking = false }) }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (<><canvas ref={ref} className="scroll-canvas" /><div className="canvas-overlay" /></>)
}
