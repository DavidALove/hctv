import Link from 'next/link'

const stats = [
  { num: '500', suffix: '+', label: 'Texas Markets Covered' },
  { num: '3',   suffix: '×', label: 'Avg. ROAS for Clients' },
  { num: '2',   suffix: '',  label: 'Specialized Brand Properties' },
  { num: '100', suffix: '%', label: 'Texas-Based & Operated' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-[120px] pb-20 px-12 overflow-hidden"
    >
      {/* Grid background */}
      <div className="hero-grid-bg" />

      {/* Glow orbs */}
      <div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none top-[-100px] right-[-100px]"
        style={{ background: 'radial-gradient(circle, rgba(0,153,221,0.07) 0%, transparent 70%)' }}
      />
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none bottom-0 left-[200px]"
        style={{ background: 'radial-gradient(circle, rgba(0,80,220,0.05) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 animate-fade-up">
          <div className="w-10 h-px bg-blue flex-shrink-0" />
          <span className="text-xs font-medium tracking-widest2 uppercase text-blue">
            Hill Country Media Group LLC — Texas Digital Media
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-cormorant font-light leading-[0.95] tracking-[-0.02em] text-white mb-8 max-w-[900px] animate-fade-up-1"
          style={{ fontSize: 'clamp(3.5rem, 7vw, 7.5rem)' }}
        >
          Texas-rooted.<br />
          <em className="italic text-blue">Digitally dominant.</em>
        </h1>

        {/* Subheading */}
        <p className="text-[1.05rem] font-light text-cream-dim max-w-[560px] leading-[1.75] mb-12 animate-fade-up-2">
          A vertically integrated media and advertising company built to connect Texas businesses
          with their audiences across every channel — search, social, streaming, and programmatic display.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-6 animate-fade-up-3">
          <Link
            href="/services"
            className="btn-primary inline-flex items-center gap-2.5 bg-blue text-black px-8 py-3.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase no-underline transition-all duration-200"
          >
            Explore Our Platform
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 text-cream-dim hover:text-white text-[0.72rem] font-medium tracking-[0.14em] uppercase no-underline transition-colors duration-200"
          >
            Schedule a Consultation →
          </Link>
        </div>
      </div>

      {/* Stat row */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border grid grid-cols-4 animate-fade-up-4">
        {stats.map(({ num, suffix, label }, i) => (
          <div
            key={label}
            className={`px-12 py-8 ${i < stats.length - 1 ? 'border-r border-border' : ''}`}
          >
            <div className="font-cormorant text-[2.6rem] font-light text-white leading-none mb-1">
              {num}<span className="text-blue">{suffix}</span>
            </div>
            <div className="text-[0.62rem] font-medium tracking-[0.16em] uppercase text-cream-dim">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
