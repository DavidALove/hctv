import SectionEyebrow from './SectionEyebrow'

const services = [
  {
    num: '01',
    title: 'Display & Programmatic Advertising',
    desc: 'Real-time bidding across thousands of premium publisher sites and apps. We deploy audience data and behavioral targeting to place your brand in front of exactly the right people — at scale, and at the right moment.',
    features: [
      'Programmatic Display & Native Ads',
      'Audience Segmentation & Retargeting',
      'Geo-Fencing & Hyper-Local Targeting',
      'Brand Safety & Viewability Standards',
      'Real-Time Performance Dashboards',
    ],
    icon: (
      <svg className="w-11 h-11 text-blue mb-5" viewBox="0 0 44 44" fill="none">
        <rect x="4" y="8" width="36" height="26" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 34v4M30 34v4M10 38h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="10" y="14" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M24 14h10M24 18h8M24 22h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Local SEO & Search Marketing',
    desc: 'When local customers search for what you offer, you need to be first. Our Local SEO program builds lasting organic visibility through Google Business Profile optimization, citation management, and content authority.',
    features: [
      'Google Business Profile Management',
      'Local Pack & Map Ranking Optimization',
      'Citation Building & NAP Consistency',
      'On-Page & Technical SEO Audits',
      'Review Generation & Reputation Management',
    ],
    icon: (
      <svg className="w-11 h-11 text-blue mb-5" viewBox="0 0 44 44" fill="none">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M29 29l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 20h8M20 16v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Social Media Advertising',
    desc: "Precision-targeted campaigns on Meta, Instagram, TikTok, and LinkedIn — built around your audience's demographics, interests, and behaviors. From creative through conversion, we manage the full funnel.",
    features: [
      'Meta (Facebook & Instagram) Campaigns',
      'TikTok & YouTube Advertising',
      'LinkedIn B2B Lead Generation',
      'Creative Strategy & Ad Production',
      'Lookalike Audiences & Pixel Tracking',
    ],
    icon: (
      <svg className="w-11 h-11 text-blue mb-5" viewBox="0 0 44 44" fill="none">
        <rect x="6" y="8" width="32" height="26" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="16" r="4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M12 28c0-4 4.5-7 10-7s10 3 10 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M38 18l-4 3 4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Streaming, OTT & CTV Advertising',
    desc: 'Reach cord-cutters and streaming-first audiences with unskippable video ads on Hulu, Roku, Peacock, and hundreds of streaming apps. Television-quality reach with digital-precision targeting.',
    features: [
      'Connected TV (CTV) & OTT Placements',
      'Hulu, Roku, Peacock & Premium Inventory',
      'Addressable TV Targeting',
      'Pre-Roll & Mid-Roll Video Campaigns',
      'Household-Level Audience Matching',
    ],
    icon: (
      <svg className="w-11 h-11 text-blue mb-5" viewBox="0 0 44 44" fill="none">
        <rect x="4" y="10" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 16l8-4v16l-8-4v-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="20" r="4" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-[120px] px-12 bg-black">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="grid grid-cols-2 gap-16 items-end mb-16">
          <div>
            <SectionEyebrow label="What We Do" />
            <h2
              className="font-cormorant font-light text-white leading-[1.1]"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}
            >
              Four channels.<br />
              <em className="italic text-blue">One integrated strategy.</em>
            </h2>
          </div>
          <p className="text-[0.95rem] text-cream-dim leading-[1.8]">
            We combine the four most powerful channels in digital advertising into a single, unified
            strategy — ensuring your message reaches the right audience at every stage of their
            journey, whether they&apos;re searching Google, scrolling social media, or streaming their
            favorite show.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 gap-px border border-border"
          style={{ background: 'var(--border)' }}
        >
          {services.map((svc) => (
            <div
              key={svc.num}
              className="service-card bg-black hover:bg-deep transition-colors duration-300 p-12 cursor-default"
            >
              <div
                className="font-bebas text-[4rem] leading-none mb-6 transition-colors duration-300"
                style={{ color: 'var(--border)' }}
              >
                {svc.num}
              </div>
              {svc.icon}
              <h3 className="font-cormorant text-[1.7rem] font-semibold text-white leading-[1.2] mb-4">
                {svc.title}
              </h3>
              <p className="text-[0.88rem] text-cream-dim leading-[1.8] mb-6">{svc.desc}</p>
              <ul className="flex flex-col gap-1.5">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center text-[0.75rem] font-medium tracking-[0.06em] text-cream-dim">
                    <span className="inline-block w-4 h-px bg-blue mr-2 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
