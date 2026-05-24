'use client'

import { useState } from 'react'
import { Bot, X, Send } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const suggestions = [
  'What is Bitcoin in one sentence?',
  'Explain proof of work simply',
  'What is the Lightning Network?',
  'How do I evaluate a Bitcoin source?',
]

const staticReplies: Record<string, string> = {
  default:
    "Great question! I can help you think through Bitcoin concepts. For accurate, up-to-date facts, always verify with primary sources like bitcoin.org, mempool.space, or bitcoinops.org. What would you like to explore?",
  bitcoin:
    "Bitcoin is a decentralized digital currency — a fixed-supply, permissionless, censorship-resistant monetary network with no central authority. Created by Satoshi Nakamoto in 2009, it runs on a public blockchain secured by proof-of-work mining.",
  lightning:
    "The Lightning Network is a Layer 2 payment channel network built on top of Bitcoin. It enables near-instant, near-free transactions by handling them off-chain — only settling the final balance on the Bitcoin blockchain.",
  proof:
    "Proof of Work (PoW) is Bitcoin's consensus mechanism. Miners compete to solve a cryptographic puzzle — finding a nonce that makes the block's hash meet a target. The winner adds the next block and earns the block reward.",
  source:
    "To evaluate a Bitcoin source: Apply SIFT — Stop (don't react immediately), Investigate the source (who wrote it?), Find better coverage (is this corroborated?), Trace claims (find the original primary source). Red flags: no author, no date, no sources.",
}

function getReply(msg: string): string {
  const lower = msg.toLowerCase()
  if (lower.includes('lightning')) return staticReplies.lightning
  if (lower.includes('proof') || lower.includes('pow') || lower.includes('mining')) return staticReplies.proof
  if (lower.includes('source') || lower.includes('evaluat')) return staticReplies.source
  if (lower.includes('bitcoin') && msg.length < 40) return staticReplies.bitcoin
  return staticReplies.default
}

export default function AITutor() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm your Bitcoin research tutor. Ask me anything about the course material — concepts, terms, or how to approach your research. Always verify important facts with primary sources!",
    },
  ])
  const [input, setInput] = useState('')

  function send(text?: string) {
    const msg = text ?? input
    if (!msg.trim()) return
    const userMsg: Message = { role: 'user', content: msg }
    const reply: Message = { role: 'assistant', content: getReply(msg) }
    setMessages((m) => [...m, userMsg, reply])
    setInput('')
  }

  return (
    <>
      {/* Floating button — bottom left */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: 'fixed',
          bottom: 24,
          left: 24,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 18px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-md)',
          borderRadius: 99,
          fontSize: 13,
          fontWeight: 700,
          color: 'var(--text)',
          cursor: 'pointer',
          transition: 'border-color 0.15s, background 0.15s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-elevated)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-card)' }}
      >
        <Bot size={15} color="var(--orange)" />
        AI Tutor
      </button>

      {/* Chat panel — bottom left */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 80,
            left: 24,
            zIndex: 100,
            width: 'min(360px, calc(100vw - 48px))',
            maxHeight: 500,
            background: 'var(--bg-card)',
            border: '1px solid var(--border-md)',
            borderRadius: 16,
            boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--orange-bg)', border: '1px solid rgba(247,147,26,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={14} color="var(--orange)" />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>AI Tutor</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 6, padding: 5, cursor: 'pointer', display: 'flex', color: 'var(--text-3)' }}
            >
              <X size={13} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '9px 13px',
                    borderRadius: 10,
                    background: m.role === 'user' ? 'var(--orange)' : 'var(--bg-elevated)',
                    border: m.role === 'user' ? 'none' : '1px solid var(--border)',
                    color: m.role === 'user' ? '#000' : 'var(--text-2)',
                    fontSize: 13,
                    lineHeight: 1.5,
                    fontWeight: m.role === 'user' ? 600 : 400,
                  }}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div style={{ padding: '0 12px 10px', display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  style={{ padding: '4px 10px', border: '1px solid var(--border)', borderRadius: 99, background: 'var(--bg-elevated)', color: 'var(--text-3)', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding: '10px 12px', borderTop: '1px solid var(--border)', display: 'flex', gap: 8 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask a question..."
              style={{ flex: 1, fontSize: 13, background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', color: 'var(--text)', outline: 'none' }}
            />
            <button
              onClick={() => send()}
              style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--orange)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
            >
              <Send size={13} color="#000" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
