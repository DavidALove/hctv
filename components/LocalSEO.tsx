import SectionEyebrow from './SectionEyebrow'

const benefits = [
  {
    title: 'Faster Rankings',
    desc: 'Our proven local SEO framework delivers measurable ranking improvements within 60–90 days, not months or years.',
    icon: (
      <svg className="w-9 h-9 text-blue flex-shrink-0 mt-0.5" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 12v6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Hyper-Local Targeting',
    desc: 'We optimize for city-level, neighborhood-level, and service-area searches — capturing customers exactly where they are.',
    icon: (
      <svg className="w-9 h-9 text-blue flex-shrink-0 mt-0.5" viewBox="0 0 36 36" fill="none">
        <path d="M18 4C11.4 4 6 9.4 6 16c0 8 12 18 12 18s12-10 12-18c0-6.6-5.4-12-12-12z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="16" r="4" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Transparent Reporting',
    desc: 'Monthly performance reports showing keyword rankings, traffic growth, call tracking, and lead attribution — no vanity metrics.',
    icon: (
      <svg className="w-9 h-9 text-blue flex-shrink-0 mt-0.5" viewBox="0 0 36 36" fill="none">
        <path d="M6 28l6-8 6 4 6-10 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const steps = [
  { num: '01', title: 'Local SEO Audit', desc: 'Comprehensive analysis of your current rankings, Google Business Profile health, citation consistency, and competitive landscape in your target markets.' },
  { num: '02', title: 'Strategy & Keyword Mapping', desc: 'We identify the highest-value local search terms and build a prioritized roadmap targeting the keywords that drive real business, not just traffic.' },
  { num: '03', title: 'On-Page & Profile Optimization', desc: 'Technical SEO fixes, content optimization, Google Business Profile enhancement, and structured data implementation across your web presence.' },
  { num: '04', title: 'Authority & Citation Building', desc: 'Systematic citation building across 80+ directories plus strategic link acquisition from locally relevant, authoritative Texas websites.' },
  { num: '05', title: 'Ongoing Monitoring & Growth', desc: 'Continuous rank tracking, algorithm adaptation, review management, and monthly reporting to sustain and grow your local dominance.' },
]

export default function LocalSEO() {
  return (
    <section id="localseo" className="py-[120px] px-12 bg-black">
      <div className="max-w-[1400px] mx-auto grid gap-24 items-start"
        style={{ gridTemplateColumns: '1fr 1.2fr' }}
      >

        {/* Left */}
        <div>
          <SectionEyebrow label="Operating Brand" />
          <h2
            className="font-cormorant font-light leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}
          >
            <em className="italic text-blue">Local-SEO.co</em>
          </h2>
          <div className="w-12 h-0.5 bg-blue mb-6" />
          <p className="text-[0.95rem] text-cream-dim leading-[1.85] mb-4">
            <strong className="text-cream font-medium">local-seo.co</strong> is our dedicated local
            search marketing brand — built specifically for businesses that live and die by their
            local Google rankings.
          </p>
          <p className="text-[0.95rem] text-cream-dim leading-[1.85] mb-8">
            93% of local business searches begin on Google. We make sure you&apos;re not just showing
            up — you&apos;re showing up first, with a profile that converts browsers into buyers.
          </p>

          {/* Benefits */}
          <div className="border border-border flex flex-col">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`flex items-start gap-5 p-6 transition-colors duration-200 hover:bg-surface cursor-default
                  ${i < benefits.length - 1 ? 'border-b border-border' : ''}`}
                style={{ background: 'var(--deep)' }}
              >
                {b.icon}
                <div>
                  <div className="font-cormorant text-[1.15rem] font-semibold text-white mb-1">{b.title}</div>
                  <div className="text-[0.82rem] text-cream-dim leading-[1.65]">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — process */}
        <div className="pt-4">
          <SectionEyebrow label="Our Process" />
          <h3
            className="font-cormorant font-light text-white mb-8"
            style={{ fontSize: '1.8rem' }}
          >
            From invisible to <em className="italic text-blue">unbeatable</em>
          </h3>

          <div className="border border-border flex flex-col">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`flex items-start gap-6 px-8 py-7
                  ${i < steps.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="font-bebas text-[1.5rem] text-blue flex-shrink-0 w-7">{step.num}</div>
                <div>
                  <div className="text-[0.88rem] font-semibold text-white mb-1 tracking-[0.03em]">{step.title}</div>
                  <div className="text-[0.8rem] text-cream-dim leading-[1.6]">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
