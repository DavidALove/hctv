import Link from 'next/link'
import SectionEyebrow from './SectionEyebrow'

const dbas = [
  {
    tag: 'Operating Brand · Advertising Network',
    name: 'LoneStar Network',
    url: 'thelonestarnetwork.com',
    href: '/lonestar',
    desc: 'Full-service digital advertising network specializing in programmatic display, OTT/CTV streaming, and social media advertising campaigns for regional and statewide brands.',
  },
  {
    tag: 'Operating Brand · Search Marketing',
    name: 'Local-SEO.co',
    url: 'local-seo.co',
    href: '/local-seo',
    desc: 'Dedicated local search optimization platform helping Texas businesses dominate Google rankings, Google Business Profiles, and local map pack placements in their target markets.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-[120px] px-5 sm:px-8 lg:px-12 border-t border-b border-border"
      style={{ background: 'var(--deep)' }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        {/* Left — copy */}
        <div>
          <SectionEyebrow label="About the Company" />
          <h2
            className="font-cormorant font-light text-white leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}
          >
            A Texas media company built for <em className="italic text-blue">results</em>
          </h2>
          <div className="w-12 h-0.5 bg-blue mb-6" />
          <div className="space-y-5">
            <p className="text-[1rem] text-cream-dim leading-[1.85]">
              <strong className="text-cream font-medium">Hill Country Media Group LLC</strong> is a
              Texas-based digital media holding company operating a portfolio of specialized
              advertising and marketing brands serving businesses across the Lone Star State and beyond.
            </p>
            <p className="text-[1rem] text-cream-dim leading-[1.85]">
              We built this company on a simple belief: local businesses deserve enterprise-grade
              advertising technology and strategy — not watered-down, one-size-fits-all solutions.
              Our integrated platform gives every client access to the same tools that Fortune 500
              brands use, delivered with the personal accountability that only a Texas-owned
              operation can provide.
            </p>
            <p className="text-[1rem] text-cream-dim leading-[1.85]">
              Through our two operating brands —{' '}
              <strong className="text-cream font-medium">LoneStar Network</strong> and{' '}
              <strong className="text-cream font-medium">Local-SEO.co</strong> — we serve businesses
              at every stage of their growth, from hyper-local search visibility to full-funnel
              digital advertising across display, social, and streaming channels.
            </p>
          </div>
        </div>

        {/* Right — cards */}
        <div className="pt-4">
          <blockquote className="border-l-2 border-blue pl-6 font-cormorant text-[1.35rem] italic text-cream leading-[1.5] mb-8">
            "Built in the Hill Country. Reaching every corner of Texas — and beyond."
          </blockquote>

          <div className="border border-border flex flex-col mb-8">
            {dbas.map((dba, i) => (
              <Link
                key={dba.name}
                href={dba.href}
                className={`block bg-surface px-5 py-6 sm:px-8 sm:py-7 transition-colors duration-200 hover:bg-[#181D2A]
                  ${i < dbas.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-blue mb-1.5">
                  {dba.tag}
                </div>
                <div className="font-cormorant text-[1.5rem] font-semibold text-white tracking-[0.02em] mb-1.5">
                  {dba.name}
                </div>
                <div className="text-[0.7rem] text-cream-dim tracking-[0.06em]">{dba.url}</div>
                <div className="text-[0.88rem] text-cream-dim mt-2.5 leading-[1.65]">{dba.desc}</div>
              </Link>
            ))}
          </div>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 text-[0.65rem] font-medium tracking-[0.16em] uppercase text-blue"
            style={{
              background: 'rgba(0,153,221,0.08)',
              border: '1px solid rgba(0,153,221,0.2)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
              <polygon
                points="16,2 19.5,12 30,12 21.5,18.5 24.5,29 16,22.5 7.5,29 10.5,18.5 2,12 12.5,12"
                stroke="#0099DD"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            Headquartered in the Texas Hill Country
          </div>
        </div>

      </div>
    </section>
  )
}
