'use client'

import { useState } from 'react'
import SectionEyebrow from './SectionEyebrow'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
    // TODO: wire to Supabase or email API (Resend, etc.)
  }

  return (
    <section
      id="contact"
      className="contact-section relative py-20 sm:py-[140px] px-5 sm:px-8 lg:px-12 bg-black text-center overflow-hidden"
    >
      <div className="relative max-w-[800px] mx-auto">
        <SectionEyebrow label="Get Started" center bothSides />

        <h2
          className="font-cormorant font-light text-white leading-[1.0] mb-6"
          style={{ fontSize: 'clamp(2.25rem, 7vw, 5.5rem)' }}
        >
          Ready to dominate<br />
          your <em className="italic text-blue">Texas market?</em>
        </h2>

        <p className="text-[0.95rem] sm:text-[1rem] text-cream-dim leading-[1.8] mb-10 sm:mb-12 max-w-[540px] mx-auto">
          Whether you&apos;re looking to rank #1 on Google, launch a streaming ad campaign, or build a
          full-funnel digital advertising strategy — we&apos;re ready to build it with you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8">
          <a
            href="mailto:hello@hillcountrymediagroup.com"
            className="btn-primary inline-flex items-center justify-center gap-2 bg-blue text-black px-6 sm:px-8 py-3.5 text-[0.72rem] sm:text-[0.75rem] font-semibold tracking-[0.14em] uppercase no-underline transition-all duration-200"
          >
            Schedule a Free Strategy Call
          </a>
          <a
            href="/services"
            className="text-cream-dim hover:text-white text-[0.72rem] font-medium tracking-[0.14em] uppercase no-underline transition-colors duration-200"
          >
            View All Services →
          </a>
        </div>

        {/* Email capture */}
        {submitted ? (
          <div className="max-w-[540px] mx-auto text-blue text-[0.85rem] font-medium tracking-[0.08em] py-4 border border-blue/30 bg-blue/5">
            ✓ Thanks! We&apos;ll be in touch shortly.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row max-w-[540px] mx-auto border border-border gap-px"
            style={{ background: 'var(--border)' }}
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your business email address"
              required
              className="flex-1 w-full px-5 py-3.5 text-[0.85rem] text-cream outline-none border-none"
              style={{
                background: 'var(--surface)',
                fontFamily: 'var(--font-dm-sans)',
              }}
            />
            <button
              type="submit"
              className="px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-black bg-blue hover:bg-blue-lt transition-colors duration-200 whitespace-nowrap border-none cursor-pointer"
            >
              Get Started
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
