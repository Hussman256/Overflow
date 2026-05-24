'use client'

import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import Link from "next/link"

/* ── Bitcoin circular mark ── */
export const BitcoinMark = ({ size = 24, glow = false }: { size?: number; glow?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="btc-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFA840" />
        <stop offset="55%" stopColor="#F7931A" />
        <stop offset="100%" stopColor="#D97010" />
      </linearGradient>
      {glow && (
        <filter id="btc-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      )}
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#btc-grad)" filter={glow ? "url(#btc-glow)" : undefined} />
    <path
      fill="white"
      d="M67 42.5c.8-5.5-3.3-8.5-9-10.4l1.8-7.3-4.5-1.1-1.8 7.1c-1.2-.3-2.4-.6-3.6-.8l1.8-7.2-4.5-1.1-1.8 7.3c-1-.2-2-.4-3-.7l-6.6-1.7-1.3 4.8s3.3.8 3.3.7c1.8.5 2.1 1.7 2.1 2.7L34.4 66c-.3 1.2-1.3 2.4-3.4 1.9l.1.1-3.3-.8-2.2 5.2 6.2 1.5 3.4.9-1.9 7.4 4.5 1.1 1.9-7.4c1.3.4 2.5.7 3.7 1l-1.9 7.3 4.5 1.1 1.9-7.4c7.6 1.4 13.3.9 15.7-6 1.9-5.5-.1-8.7-4.1-10.7 2.9-1.1 5-3 5.5-7.7zm-9.8 13.8c-1.4 5.5-10.6 2.5-13.6 1.8l2.4-9.7c3 .7 12.7 2.1 11.2 7.9zm1.4-13.9c-1.2 5-9 2.5-11.5 1.9l2.2-8.7c2.5.6 10.6 1.8 9.3 6.8z"
    />
  </svg>
)

/* ── WordsPullUp ── */
interface WordsPullUpProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export const WordsPullUp = ({ text, className = "", style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(" ")

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
          style={{ marginRight: i < words.length - 1 ? "0.25em" : 0 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

/* ── Nav items ── */
const navLinks = [
  { label: "Curriculum", href: "/curriculum" },
  { label: "Resources",  href: "/resources"  },
  { label: "About",      href: "#about"       },
]

/* ── Network stats (floating card) ── */
const networkStats = [
  { label: "Hard Cap",   value: "21,000,000" },
  { label: "Block Time", value: "~10 min"    },
  { label: "Uptime",     value: "99.98%"     },
  { label: "Genesis",    value: "Jan 3 2009" },
]

/* ── BitcoinHero ── */
const BitcoinHero = () => {
  return (
    <section style={{ height: '100svh', minHeight: 500, width: '100%' }}>
      <div style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden', borderRadius: 'clamp(12px, 2vw, 32px)' }}>

        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1920&q=80"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Overlays */}
        <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
        <div className="noise-overlay" style={{ pointerEvents: 'none', position: 'absolute', inset: 0, opacity: 0.5, mixBlendMode: 'overlay' }} />
        <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 40%, rgba(0,0,0,0.8) 100%)' }} />

        {/* Centered top nav */}
        <nav style={{ position: 'absolute', left: '50%', top: 0, zIndex: 20, transform: 'translateX(-50%)', width: 'max-content', maxWidth: 'calc(100vw - 32px)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 'clamp(16px, 3vw, 40px)',
            borderRadius: '0 0 20px 20px',
            background: 'rgba(10,10,10,0.88)',
            padding: 'clamp(8px,1.5vw,12px) clamp(14px,3vw,32px)',
            border: '1px solid rgba(255,255,255,0.08)', borderTop: 'none',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            flexWrap: 'nowrap',
          }}>
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
              <BitcoinMark size={26} />
              <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(225,224,204,0.65)', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>BRA</span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 2.5vw, 32px)' }}>
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ fontSize: 13, color: 'rgba(225,224,204,0.6)', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#E1E0CC')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(225,224,204,0.6)')}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/curriculum"
              style={{
                flexShrink: 0, borderRadius: 99,
                padding: '6px 16px',
                background: '#F7931A', color: '#000',
                fontSize: 12, fontWeight: 700,
                textDecoration: 'none', whiteSpace: 'nowrap',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Floating network stats — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute', top: '50%', right: 'clamp(24px, 4vw, 56px)',
            transform: 'translateY(-50%)',
            background: 'rgba(8,8,8,0.82)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 14,
            padding: '18px 22px',
            minWidth: 200,
            backdropFilter: 'blur(16px)',
            zIndex: 10,
            display: 'none',
          }}
          className="hero-stats-card"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 14 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }} />
            <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>Bitcoin Network</span>
          </div>
          {networkStats.map((s, i) => (
            <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: i < networkStats.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
              <span style={{ fontSize: 11, color: 'rgba(225,224,204,0.38)' }}>{s.label}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#E1E0CC', fontFamily: 'ui-monospace, monospace' }}>{s.value}</span>
            </div>
          ))}
        </motion.div>

        {/* Hero content — bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(16px, 4vw, 48px) clamp(16px, 4vw, 48px) clamp(12px, 2vw, 24px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, alignItems: 'end' }}>

            {/* Large title */}
            <h1
              style={{
                fontWeight: 900,
                lineHeight: 0.85,
                letterSpacing: '-0.05em',
                color: '#E1E0CC',
                fontSize: 'clamp(72px, 22vw, 260px)',
                margin: 0,
              }}
            >
              <WordsPullUp text="Bitcoin" />
            </h1>

            {/* Description row */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', paddingBottom: 4 }}>

              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ maxWidth: 380 }}
              >
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#F7931A', marginBottom: 8 }}>
                  Research Academy
                </p>
                <p style={{ fontSize: 'clamp(12px, 1.5vw, 15px)', lineHeight: 1.55, color: 'rgba(225,224,204,0.65)', margin: 0 }}>
                  A free, open curriculum for anyone who wants to find, evaluate, and publish Bitcoin research.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ flexShrink: 0 }}
              >
                <Link
                  href="/curriculum"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 0,
                    borderRadius: 99, overflow: 'hidden',
                    background: '#E1E0CC', textDecoration: 'none',
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#0C0C0C', padding: '0 16px 0 20px', lineHeight: '40px', whiteSpace: 'nowrap' }}>
                    Start Learning
                  </span>
                  <span style={{ width: 40, height: 40, borderRadius: '50%', background: '#0C0C0C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ArrowRight size={15} color="#E1E0CC" />
                  </span>
                </Link>
              </motion.div>

            </div>
          </div>
        </div>

      </div>

      {/* Show stats card only on large screens */}
      <style>{`
        @media (min-width: 1024px) { .hero-stats-card { display: block !important; } }
      `}</style>
    </section>
  )
}

export { BitcoinHero }
