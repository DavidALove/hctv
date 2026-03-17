import Link from 'next/link'
import SectionEyebrow from './SectionEyebrow'

const pages = [
  {
    title: 'Services',
    desc: 'Four channels — programmatic, SEO, social, streaming — unified into one strategy.',
    href: '/services',
    icon: (
      <svg className="w-10 h-10 text-blue mb-4" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 30v4M28 30v4M8 34h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'LoneStar Network',
    desc: 'Full-service digital advertising network for Texas advertisers at scale.',
    href: '/lonestar',
    icon: (
      <svg className="w-10 h-10 text-blue mb-4" viewBox="0 0 40 40" fill="none">
        <polygon
          points="20,4 24,22 38,22 27,32 31,38 20,30 9,38 13,32 2,22 16,22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Local-SEO.co',
    desc: 'Dominate local Google rankings and map pack placements in your market.',
    href: '/local-seo',
    icon: (
      <svg className="w-10 h-10 text-blue mb-4" viewBox="0 0 40 40" fill="none">
        <circle cx="18" cy="18" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M28 28l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Explore() {
  return (
    <section id="explore" className="py-[120px] px-12 bg-black">
      <div className="max-w-[1400px] mx-auto">
        <SectionEyebrow label="Explore" />
        <h2
          className="font-cormorant font-light text-white leading-[1.1] mb-12"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}
        >
          Our platform. <em className="italic text-blue">Your advantage.</em>
        </h2>

        <div className="grid grid-cols-3 gap-px border border-border" style={{ background: 'var(--border)' }}>
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="service-card block bg-black hover:bg-deep transition-colors duration-300 p-12 group"
            >
              {page.icon}
              <h3 className="font-cormorant text-[1.5rem] font-semibold text-white leading-[1.2] mb-3 group-hover:text-blue transition-colors">
                {page.title}
              </h3>
              <p className="text-[0.88rem] text-cream-dim leading-[1.75] mb-4">{page.desc}</p>
              <span className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-blue group-hover:tracking-[0.18em] transition-all">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
