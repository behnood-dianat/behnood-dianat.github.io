import React, { useEffect, useRef, useState } from 'react'

const rand = (min: number, max: number) => Math.random() * (max - min) + min
type P = { x: number; y: number; vx: number; vy: number }

export default function InteractiveNetworkBackground({
  theme = 'teal',
  gradientTilt = 18,
  density = 0.00012,
  speed = 0.45,
  linkDist = 140,
  nodeSize = 2.2,
  mouseInfluence = 130,
  className = '',
}: {
  theme?: 'teal' | 'bluePurple' | 'greenLime' | 'orangePink' | 'steel' | 'royal'
  gradientTilt?: number
  density?: number
  speed?: number
  linkDist?: number
  nodeSize?: number
  mouseInfluence?: number
  className?: string
}) {
  const THEMES: Record<string, { stops: string[] }> = {
    teal: { stops: ['#0e8f7b', '#51d1b6'] },
    bluePurple: { stops: ['#0f2027', '#2c5364'] },
    greenLime: { stops: ['#11998e', '#38ef7d'] },
    orangePink: { stops: ['#ff512f', '#dd2476'] },
    steel: { stops: ['#232526', '#414345'] },
    royal: { stops: ['#1a2a6c', '#00c6ff'] },
  }

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const particlesRef = useRef<P[]>([])
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false })
  const dprRef = useRef<number>(1)
  const [paused, setPaused] = useState(false)

  const resizeAndSeed = () => {
    const c = canvasRef.current
    if (!c) return
    const parent = c.parentElement ?? document.body
    const rect = parent.getBoundingClientRect()
    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2))
    dprRef.current = dpr

    c.width = Math.floor(rect.width * dpr)
    c.height = Math.floor(rect.height * dpr)
    c.style.width = rect.width + 'px'
    c.style.height = rect.height + 'px'

    const target = Math.floor(rect.width * rect.height * density)
    const arr = particlesRef.current
    if (arr.length < target) {
      for (let i = arr.length; i < target; i++) {
        arr.push({
          x: rand(0, c.width),
          y: rand(0, c.height),
          vx: rand(-1, 1) * speed * dpr,
          vy: rand(-1, 1) * speed * dpr,
        })
      }
    } else if (arr.length > target) {
      particlesRef.current = arr.slice(0, target)
    }
  }

  const tick = () => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    if (!ctx) return

    const dpr = dprRef.current
    const width = c.width
    const height = c.height

    // Background gradient
    ;(() => {
      const angle = (gradientTilt * Math.PI) / 180
      const x = Math.cos(angle),
        y = Math.sin(angle)
      const x1 = width * x + height * y,
        y1 = width * -y + height * x
      const g = ctx.createLinearGradient(0, 0, x1, y1)
      const stops: string[] = THEMES[theme]?.stops ?? THEMES.teal.stops
      const n = stops.length
      stops.forEach((color: string, i: number) => g.addColorStop(i / Math.max(1, n - 1), color))
      ctx.fillStyle = g
      ctx.fillRect(0, 0, width, height)
    })()

    const particles = particlesRef.current
    const mr = mouseRef.current

    // Integrate particles + mouse attraction
    for (let p of particles) {
      if (mr.active) {
        const dx = mr.x * dpr - p.x
        const dy = mr.y * dpr - p.y
        const r = mouseInfluence * dpr
        const d2 = dx * dx + dy * dy
        if (d2 < r * r && d2 > 1e-4) {
          const invd = 1 / Math.sqrt(d2)
          const f = 0.05 * invd
          p.vx += dx * f
          p.vy += dy * f
        }
      }
      p.x += p.vx
      p.y += p.vy

      if (p.x < -10) p.x = width + 10
      if (p.x > width + 10) p.x = -10
      if (p.y < -10) p.y = height + 10
      if (p.y > height + 10) p.y = -10

      const maxV = 0.8 * dpr * speed * 2.2
      const v = Math.hypot(p.vx, p.vy)
      if (v > maxV) {
        p.vx = (p.vx / v) * maxV
        p.vy = (p.vy / v) * maxV
      }
    }

    // Links
    const linkR = linkDist * dpr
    ctx.lineWidth = Math.max(0.6 * dpr, 0.6)
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i]
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j]
        const dx = a.x - b.x
        const dy = a.y - b.y
        const d2 = dx * dx + dy * dy
        if (d2 < linkR * linkR) {
          let t = 1 - Math.sqrt(d2) / linkR
          if (mr.active) {
            const r = mouseInfluence * dpr
            const nearA = (a.x - mr.x * dpr) ** 2 + (a.y - mr.y * dpr) ** 2 < r * r
            const nearB = (b.x - mr.x * dpr) ** 2 + (b.y - mr.y * dpr) ** 2 < r * r
            if (nearA || nearB) t = Math.min(1, t * 1.8 + 0.15)
          }
          ctx.strokeStyle = `rgba(255,255,255,${0.28 * t + 0.03})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
    }

    // Nodes
    const baseR = Math.max(nodeSize * dpr, 1.2 * dpr)
    for (let p of particles) {
      let r = baseR
      let glow = 0
      if (mouseRef.current.active) {
        const dx = p.x - mr.x * dpr
        const dy = p.y - mr.y * dpr
        const d = Math.hypot(dx, dy)
        if (d < mouseInfluence * dpr) {
          const k = 1 - d / (mouseInfluence * dpr)
          r = baseR * (1 + 1.2 * k)
          glow = 14 * k
        }
      }
      ctx.save()
      ctx.fillStyle = '#eafaf7'
      ctx.shadowColor = 'rgba(255,255,255,0.9)'
      ctx.shadowBlur = glow
      ctx.beginPath()
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    if (!paused) rafRef.current = window.requestAnimationFrame(tick)
  }

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const onResize = () => resizeAndSeed()
    resizeAndSeed()
    rafRef.current = window.requestAnimationFrame(tick)

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true }
    }
    const onLeave = () => {
      mouseRef.current.active = false
    }
    const onClick = (e: MouseEvent) => {
      const dpr = dprRef.current
      for (let i = 0; i < 6; i++) {
        particlesRef.current.push({
          x: e.clientX * dpr + rand(-40, 40),
          y: e.clientY * dpr + rand(-40, 40),
          vx: rand(-1, 1) * speed * dpr,
          vy: rand(-1, 1) * speed * dpr,
        })
      }
    }

    window.addEventListener('resize', onResize)
    c.addEventListener('mousemove', onMove)
    c.addEventListener('mouseleave', onLeave)
    c.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('resize', onResize)
      c.removeEventListener('mousemove', onMove)
      c.removeEventListener('mouseleave', onLeave)
      c.removeEventListener('click', onClick)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    if (!paused) rafRef.current = window.requestAnimationFrame(tick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, density, speed, linkDist, nodeSize, mouseInfluence, gradientTilt, theme])

  useEffect(() => {
    resizeAndSeed()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [density])

  return (
    <div className={`relative w-full h-[75vh] md:h-[85vh] overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 block" />
      <button className="sr-only" onClick={() => setPaused((p) => !p)}>
        Toggle
      </button>
    </div>
  )
}
