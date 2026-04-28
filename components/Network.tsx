import SectionEyebrow from './SectionEyebrow'

const networks = [
  {
    name: 'Alive The Network',
    url: 'www.alivethenetwork.tv',
    href: 'https://www.alivethenetwork.tv/',
    desc: 'Faith-based streaming network delivering inspirational programming, family entertainment, and uplifting content to viewers across every connected device.',
  },
  {
    name: 'StingrTV',
    url: 'www.stingrtv.com',
    href: 'https://www.stingrtv.com/',
    desc: 'A streaming golf channel built around the sport and its culture — featuring some of the biggest golf influencers, original programming, instruction, and lifestyle content for fans of the game.',
  },
  {
    name: 'Hero Kids Network',
    url: 'www.herokidsnetwork.com',
    href: 'https://www.herokidsnetwork.com/',
    desc: 'Family-safe streaming destination for kids, featuring positive, age-appropriate programming designed for the whole family to enjoy together.',
  },
]

export default function Network() {
  return (
    <section
      id="network"
      className="py-20 sm:py-[120px] px-5 sm:px-8 lg:px-12 border-t border-b border-border"
      style={{ background: 'var(--deep)' }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12 sm:mb-16">
          <div>
            <SectionEyebrow label="Part of the Family" />
            <h2
              className="font-cormorant font-light text-white leading-[1.1]"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 4rem)' }}
            >
              A <em className="italic text-blue">Microgravity Networks</em> company
            </h2>
          </div>
          <p className="text-[0.95rem] text-cream-dim leading-[1.8]">
            Hill Country Media Group is part of the Microgravity Networks family — a portfolio of
            independent streaming and media brands sharing technology, distribution, and advertising
            infrastructure across faith, family, and free streaming television.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px border border-border"
          style={{ background: 'var(--border)' }}
        >
          {networks.map((n) => (
            <a
              key={n.name}
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card block p-7 sm:p-10 lg:p-12 transition-colors duration-300 hover:bg-surface group no-underline"
              style={{ background: 'var(--deep)' }}
            >
              <div className="text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-blue mb-3">
                Sister Network
              </div>
              <div className="font-cormorant text-[1.45rem] sm:text-[1.6rem] font-semibold text-white leading-[1.2] mb-2 group-hover:text-blue transition-colors">
                {n.name}
              </div>
              <div className="text-[0.7rem] text-cream-dim tracking-[0.06em] mb-4">{n.url}</div>
              <p className="text-[0.85rem] text-cream-dim leading-[1.75] mb-5">{n.desc}</p>
              <span className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-blue group-hover:tracking-[0.18em] transition-all">
                Visit Site →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
