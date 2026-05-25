import Navbar from '@/components/Navbar'
import { ExternalLink } from 'lucide-react'

const resources = [
  { category: 'Books', icon: '📚', items: [
    { title: 'Inventing Bitcoin',       author: 'Yan Pritzker',     desc: 'How Bitcoin works — no coding needed. The best technical intro for non-developers.', url: 'https://www.swanbitcoin.com/inventing-bitcoin/',  free: true  },
    { title: 'The Bitcoin Standard',    author: 'Saifedean Ammous', desc: 'Bitcoin economics through monetary history. Essential for understanding why Bitcoin matters.', url: 'https://saifedean.com/the-bitcoin-standard/', free: false },
    { title: 'Bitcoin Whitepaper',      author: 'Satoshi Nakamoto', desc: 'The original 9-page paper. Every researcher should read it at least once.',          url: 'https://bitcoin.org/bitcoin.pdf',                free: true  },
    { title: 'The Little Bitcoin Book', author: 'Multiple Authors', desc: 'A simple, accessible introduction to Bitcoin for complete beginners.',               url: 'https://www.bitcoinerbooks.com/books/the-little-bitcoin-book', free: true  },
  ]},
  { category: 'News & Analysis', icon: '📰', items: [
    { title: 'Bitcoin Magazine', author: 'bitcoinmagazine.com', desc: 'The oldest and most respected Bitcoin publication. News, analysis, and long-form pieces.', url: 'https://bitcoinmagazine.com', free: true  },
    { title: 'Bitcoin Optech',   author: 'bitcoinops.org',      desc: 'Weekly technical newsletter. Follow developments in Bitcoin and Lightning.',              url: 'https://bitcoinops.org',      free: true  },
    { title: 'The Block',        author: 'theblock.co',         desc: 'Broader crypto coverage with excellent Bitcoin reporting.',                               url: 'https://www.theblock.co',     free: false },
  ]},
  { category: 'On-Chain Data Tools', icon: '📊', items: [
    { title: 'Mempool.space',         author: 'Free & Open Source',     desc: 'The essential Bitcoin block explorer. Live transaction data, fees, mempool, and Lightning stats.', url: 'https://mempool.space',                     free: true  },
    { title: 'Clark Moody Dashboard', author: 'bitcoin.clarkmoody.com', desc: 'A clean, comprehensive dashboard of key Bitcoin metrics in one place.',                          url: 'https://bitcoin.clarkmoody.com/dashboard/', free: true  },
    { title: 'Glassnode',             author: 'glassnode.com',          desc: 'Advanced on-chain analytics. Free tier covers hash rate, active addresses, and more.',           url: 'https://glassnode.com',                     free: false },
  ]},
  { category: 'Podcasts', icon: '🎙️', items: [
    { title: 'What Bitcoin Did',       author: 'Peter McCormack', desc: 'Interviews covering economics, culture, and Bitcoin policy. Accessible for all levels.', url: 'https://www.whatbitcoindid.com', free: true },
    { title: 'Stephan Livera Podcast', author: 'Stephan Livera',  desc: 'Technical and economic depth. Best for researchers who want to go beyond the basics.', url: 'https://stephanlivera.com',      free: true },
    { title: 'Bitcoin Audible',        author: 'Guy Swann',       desc: 'Key Bitcoin articles read aloud with commentary. Perfect for commuting.',              url: 'https://bitcoinaudible.com',     free: true },
  ]},
  { category: 'Learning Hubs', icon: '🌐', items: [
    { title: 'Lopp.net Bitcoin Info', author: 'Jameson Lopp', desc: 'The most comprehensive curated Bitcoin learning list. Every resource, every level.', url: 'https://www.lopp.net/bitcoin-information.html', free: true },
    { title: 'bitcoin.org',           author: 'bitcoin.org',  desc: 'Official Bitcoin website. Beginner guides, wallet recommendations, and documentation.', url: 'https://bitcoin.org',                         free: true },
  ]},
  { category: 'Grants & Opportunities', icon: '💰', items: [
    { title: 'HRF Bitcoin Dev Fund', author: 'Human Rights Foundation', desc: 'Grants for Bitcoin developers and researchers working on human rights and financial freedom.', url: 'https://hrf.org/devfund',  free: true },
    { title: 'OpenSats',             author: 'opensats.org',            desc: 'Grants for open-source Bitcoin education, development, and research.',                        url: 'https://opensats.org',     free: true },
    { title: 'Btrust Builders',      author: 'btrust.tech',             desc: 'Bitcoin education and development funding for Africa and the Global South.',                  url: 'https://btrust.tech',      free: true },
  ]},
]

export default function ResourcesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 16px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 10 }}>
            Curated
          </p>
          <h1 style={{ fontSize: 'clamp(32px, 8vw, 60px)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--text)', lineHeight: 1.0, marginBottom: 10 }}>
            Resources
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-2)', maxWidth: 520, lineHeight: 1.6 }}>
            The best Bitcoin books, tools, podcasts, and opportunities — curated for researchers at every level.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
          {resources.map((section) => (
            <div key={section.category}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: 18 }}>{section.icon}</span>
                <h2 style={{ fontSize: 'clamp(15px, 3.5vw, 18px)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>
                  {section.category}
                </h2>
              </div>

              {/* Mobile: single column → desktop: 2-col grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 10 }}>
                {section.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="card" style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em', marginBottom: 2 }}>{item.title}</h3>
                          <p style={{ fontSize: 11, color: 'var(--text-3)' }}>{item.author}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
                          {item.free && (
                            <span style={{ fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 4, background: 'var(--green-bg)', color: 'var(--green)', border: '1px solid var(--green-border)' }}>
                              FREE
                            </span>
                          )}
                          <ExternalLink size={12} color="var(--text-3)" />
                        </div>
                      </div>
                      <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.55, flex: 1 }}>{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social */}
        <div style={{ marginTop: 48, padding: 'clamp(16px, 4vw, 24px)', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 6 }}>Twitter / X & Nostr</p>
          <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 6 }}>
            Follow: <strong style={{ color: 'var(--text)' }}>@lopp</strong>, <strong style={{ color: 'var(--text)' }}>@dergigi</strong>, <strong style={{ color: 'var(--text)' }}>@gladstein</strong>, <strong style={{ color: 'var(--text)' }}>@aantonop</strong>, <strong style={{ color: 'var(--text)' }}>@NVK</strong>
          </p>
          <p style={{ fontSize: 12, color: 'var(--text-3)' }}>#Bitcoin #LightningNetwork #BitcoinAfrica #BitcoinResearch</p>
        </div>
      </div>
    </div>
  )
}
