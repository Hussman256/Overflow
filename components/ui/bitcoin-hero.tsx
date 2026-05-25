'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

/* ── Bitcoin SVG mark (white on orange) ── */
export const BitcoinMark = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="50" cy="50" r="50" fill="#F7931A" />
    <path
      fill="white"
      d="M67 42.5c.8-5.5-3.3-8.5-9-10.4l1.8-7.3-4.5-1.1-1.8 7.1c-1.2-.3-2.4-.6-3.6-.8l1.8-7.2-4.5-1.1-1.8 7.3c-1-.2-2-.4-3-.7l-6.6-1.7-1.3 4.8s3.3.8 3.3.7c1.8.5 2.1 1.7 2.1 2.7L34.4 66c-.3 1.2-1.3 2.4-3.4 1.9l.1.1-3.3-.8-2.2 5.2 6.2 1.5 3.4.9-1.9 7.4 4.5 1.1 1.9-7.4c1.3.4 2.5.7 3.7 1l-1.9 7.3 4.5 1.1 1.9-7.4c7.6 1.4 13.3.9 15.7-6 1.9-5.5-.1-8.7-4.1-10.7 2.9-1.1 5-3 5.5-7.7zm-9.8 13.8c-1.4 5.5-10.6 2.5-13.6 1.8l2.4-9.7c3 .7 12.7 2.1 11.2 7.9zm1.4-13.9c-1.2 5-9 2.5-11.5 1.9l2.2-8.7c2.5.6 10.6 1.8 9.3 6.8z"
    />
  </svg>
)

/* ── White bitcoin mark (for dark circle) ── */
const BitcoinMarkWhite = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <circle cx="50" cy="50" r="50" fill="white" />
    <path
      fill="#F7931A"
      d="M67 42.5c.8-5.5-3.3-8.5-9-10.4l1.8-7.3-4.5-1.1-1.8 7.1c-1.2-.3-2.4-.6-3.6-.8l1.8-7.2-4.5-1.1-1.8 7.3c-1-.2-2-.4-3-.7l-6.6-1.7-1.3 4.8s3.3.8 3.3.7c1.8.5 2.1 1.7 2.1 2.7L34.4 66c-.3 1.2-1.3 2.4-3.4 1.9l.1.1-3.3-.8-2.2 5.2 6.2 1.5 3.4.9-1.9 7.4 4.5 1.1 1.9-7.4c1.3.4 2.5.7 3.7 1l-1.9 7.3 4.5 1.1 1.9-7.4c7.6 1.4 13.3.9 15.7-6 1.9-5.5-.1-8.7-4.1-10.7 2.9-1.1 5-3 5.5-7.7zm-9.8 13.8c-1.4 5.5-10.6 2.5-13.6 1.8l2.4-9.7c3 .7 12.7 2.1 11.2 7.9zm1.4-13.9c-1.2 5-9 2.5-11.5 1.9l2.2-8.7c2.5.6 10.6 1.8 9.3 6.8z"
    />
  </svg>
)

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&h=400&q=80&crop=faces',
    alt: 'Students studying together',
    borderRadius: '60% 40% 55% 45% / 45% 60% 40% 55%',
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&h=400&q=80&crop=faces',
    alt: 'Student researching',
    borderRadius: '45% 55% 40% 60% / 60% 45% 55% 40%',
  },
  {
    src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=400&h=400&q=80&crop=faces',
    alt: 'Student with laptop',
    borderRadius: '55% 45% 60% 40% / 40% 55% 45% 60%',
  },
]

const BitcoinHero = () => {
  return (
    <>
      <style>{`
        .hero-layout {
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 36px 20px 44px;
        }
        .hero-photos-mobile {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        .hero-photos-desktop { display: none; }
        .hero-cta-row {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .hero-topbar-links { display: none; }

        @media (min-width: 640px) {
          .hero-topbar-links { display: flex; }
          .hero-cta-row { flex-direction: row; align-items: center; }
        }

        @media (min-width: 900px) {
          .hero-layout {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 56px 48px 64px;
            gap: 48px;
          }
          .hero-photos-mobile { display: none; }
          .hero-photos-desktop {
            display: block;
            position: relative;
            width: 340px;
            height: 340px;
            flex-shrink: 0;
          }
        }

        @media (min-width: 1200px) {
          .hero-layout { padding: 64px 72px 80px; }
          .hero-photos-desktop { width: 400px; height: 400px; }
        }
      `}</style>

      <section style={{ background: '#F7931A', minHeight: '100svh', display: 'flex', flexDirection: 'column' }}>

        {/* ── Top bar ── */}
        <div style={{ background: '#0A0A0A', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', border: '2px solid rgba(247,147,26,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
              <BitcoinMark size={30} />
            </div>
            <div style={{ lineHeight: 1.1 }}>
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 14 }}>Bitcoin Research</span>
              <span style={{ color: '#F7931A', fontWeight: 500, fontSize: 14 }}> Bootcamp</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hero-topbar-links" style={{ alignItems: 'center', gap: 28 }}>
            {['Curriculum', 'Resources'].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Circular badge */}
          <div style={{ width: 62, height: 62, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.55)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 6, gap: 2, flexShrink: 0 }}>
            <BitcoinMark size={16} />
            <span style={{ color: 'white', fontSize: 6.5, fontWeight: 700, lineHeight: 1.3, letterSpacing: '0.02em', textTransform: 'lowercase' }}>bitcoin research bootcamp</span>
          </div>
        </div>

        {/* ── Main orange content ── */}
        <div className="hero-layout" style={{ flex: 1 }}>

          {/* ── Left: text ── */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* "Learn" + "With" diamond */}
            <div style={{ position: 'relative', marginBottom: 8 }}>
              <motion.p
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 500, margin: 0, lineHeight: 1 }}
              >
                Learn
              </motion.p>

              {/* "With" rotated diamond */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: 35 }}
                animate={{ opacity: 1, scale: 1, rotate: 45 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  top: -8, right: 0,
                  width: 54, height: 54,
                  background: '#111111',
                  borderRadius: 6,
                  transform: 'rotate(45deg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                }}
              >
                <span style={{ color: 'white', fontSize: 12, fontWeight: 800, transform: 'rotate(-45deg)', letterSpacing: '-0.01em' }}>With</span>
              </motion.div>
            </div>

            {/* BITCOIN RESEARCH headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                color: 'white',
                fontSize: 'clamp(52px, 14vw, 108px)',
                fontWeight: 900,
                lineHeight: 0.87,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                margin: '0 0 28px',
              }}
            >
              BITCOIN<br />RESEARCH
            </motion.h1>

            {/* Mobile photos — between headline and CTA */}
            <div className="hero-photos-mobile" style={{ marginBottom: 28 }}>
              {photos.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.08 }}
                  style={{
                    width: 80, height: 80,
                    borderRadius: p.borderRadius,
                    border: '3px solid white',
                    overflow: 'hidden',
                    flexShrink: 0,
                    boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                  }}
                >
                  <img src={p.src} alt={p.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
              ))}
            </div>

            {/* Free Access + subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: 28 }}
            >
              <p style={{ color: 'white', fontSize: 'clamp(24px, 6vw, 36px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 8 }}>
                Free Access
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(13px, 3vw, 16px)', lineHeight: 1.55, margin: 0, maxWidth: 420 }}>
                Join <strong style={{ color: 'white' }}>BRA</strong> and start learning Bitcoin research today — no technical background required.
              </p>
            </motion.div>

            {/* CTA row */}
            <motion.div
              className="hero-cta-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/curriculum"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#111111', color: 'white',
                  padding: '14px 26px',
                  borderRadius: 99,
                  fontWeight: 800, fontSize: 15,
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                  width: 'fit-content',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.4)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.35)' }}
              >
                Start Learning Free <ArrowRight size={16} />
              </Link>

              <Link
                href="/curriculum"
                style={{ color: 'white', fontSize: 14, fontWeight: 600, textDecoration: 'none', opacity: 0.75, width: 'fit-content' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
              >
                View curriculum →
              </Link>
            </motion.div>
          </div>

          {/* ── Desktop photo cluster ── */}
          <div className="hero-photos-desktop">

            {/* Photo 1 — top left */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', top: 0, left: 0,
                width: 160, height: 160,
                borderRadius: photos[0].borderRadius,
                border: '4px solid white',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              }}
            >
              <img src={photos[0].src} alt={photos[0].alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Photo 2 — top right */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', top: 0, right: 0,
                width: 145, height: 145,
                borderRadius: photos[1].borderRadius,
                border: '4px solid white',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              }}
            >
              <img src={photos[1].src} alt={photos[1].alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Photo 3 — bottom center */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', bottom: 0, left: '50%',
                transform: 'translateX(-50%)',
                width: 155, height: 155,
                borderRadius: photos[2].borderRadius,
                border: '4px solid white',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              }}
            >
              <img src={photos[2].src} alt={photos[2].alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Bitcoin logo circle — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', bottom: 10, right: 0,
                width: 72, height: 72,
                borderRadius: '50%',
                background: '#111',
                border: '3px solid white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              }}
            >
              <BitcoinMarkWhite size={56} />
            </motion.div>

          </div>
        </div>

      </section>
    </>
  )
}

export { BitcoinHero }
