import SectionEyebrow from './SectionEyebrow'

const cards = [
  {
    title: 'Programmatic Display',
    desc: 'Real-time bidding across the open web — desktop, mobile, and tablet — with audience-level precision. Reach your ideal customer on the sites they already visit, at the price the market sets.',
    icon: (
      <svg className="w-10 h-10 text-blue mb-5" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 30v4M28 30v4M8 34h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 18h16M12 22h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'OTT & CTV Video',
    desc: 'Unskippable pre-roll and mid-roll ads served on streaming platforms. CTV targets households by demographics, geography, and behavioral data — with measurable attribution back to your business.',
    icon: (
      <svg className="w-10 h-10 text-blue mb-5" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="10" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M28 14l8-3v14l-8-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="13" cy="19" r="4" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Social Media Advertising',
    desc: 'Paid social campaigns on Meta, Instagram, TikTok, and LinkedIn managed for performance. We handle creative, audience setup, optimization, and reporting from a single point of accountability.',
    icon: (
      <svg className="w-10 h-10 text-blue mb-5" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="8" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="16" r="4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 30c0-4 4.5-7 10-7s10 3 10 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Geo-Fencing & Proximity',
    desc: 'Draw a virtual fence around any physical location — your store, a competitor, an event venue — and serve ads to every mobile device that enters. Perfect for retail, events, and local conquest campaigns.',
    icon: (
      <svg className="w-10 h-10 text-blue mb-5" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 10v10l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Search & PPC Management',
    desc: 'Google Ads and Microsoft Ads campaigns built for efficiency — from keyword research and ad copy through bid strategy and ongoing optimization. We maximize every dollar of your search budget.',
    icon: (
      <svg className="w-10 h-10 text-blue mb-5" viewBox="0 0 40 40" fill="none">
        <path d="M6 20c0-8 6-14 14-14s14 6 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 20c0 8 6 14 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M28 28l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Analytics & Attribution',
    desc: 'Every campaign is tracked, measured, and reported with clarity. We connect ad spend to business outcomes — phone calls, store visits, form fills, and revenue — so you always know what\'s working.',
    icon: (
      <svg className="w-10 h-10 text-blue mb-5" viewBox="0 0 40 40" fill="none">
        <path d="M8 28l6-8 6 4 6-10 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="6" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function Advertising() {
  return (
    <section
      id="advertising"
      className="py-[120px] px-12 border-t border-b border-border"
      style={{ background: 'var(--deep)' }}
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionEyebrow label="Digital Advertising Capabilities" />
        <h2
          className="font-cormorant font-light text-white leading-[1.1] mb-12"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}
        >
          Every channel. <em className="italic text-blue">Every audience.</em>
        </h2>

        <div
          className="grid grid-cols-3 gap-px border border-border"
          style={{ background: 'var(--border)' }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-10 transition-colors duration-200 hover:bg-surface cursor-default"
              style={{ background: 'var(--deep)' }}
            >
              {card.icon}
              <div className="font-cormorant text-[1.3rem] font-semibold text-white leading-[1.2] mb-3">
                {card.title}
              </div>
              <div className="text-[0.82rem] text-cream-dim leading-[1.75]">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
