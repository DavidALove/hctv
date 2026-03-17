const companyLinks = [
  { label: 'About Us',        href: '#about' },
  { label: 'Our Services',    href: '#services' },
  { label: 'LoneStar Network',href: '#lonestar' },
  { label: 'Local-SEO.co',    href: '#localseo' },
  { label: 'Contact',         href: '#contact' },
]

const serviceLinks = [
  { label: 'Programmatic Display', href: '#services' },
  { label: 'Local SEO',            href: '#services' },
  { label: 'Social Media Ads',     href: '#services' },
  { label: 'OTT & CTV Streaming',  href: '#services' },
  { label: 'Analytics & Reporting',href: '#services' },
]

const contactLinks = [
  { label: 'hello@hillcountrymediagroup.com', href: 'mailto:hello@hillcountrymediagroup.com' },
  { label: 'thelonestarnetwork.com',          href: 'https://thelonestarnetwork.com', external: true },
  { label: 'local-seo.co',                    href: 'https://local-seo.co', external: true },
]

function FooterCol({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
  return (
    <div>
      <div className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-blue mb-5">{title}</div>
      <ul className="flex flex-col gap-2.5 list-none">
        {links.map(({ label, href, external }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="text-[0.8rem] text-cream-dim hover:text-blue transition-colors duration-200 no-underline"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-border px-12 pt-16 pb-10" style={{ background: 'var(--deep)' }}>
      <div className="max-w-[1400px] mx-auto">

        {/* Main grid */}
        <div className="grid gap-16 pb-12 border-b border-border mb-8"
          style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr' }}
        >
          {/* Brand col */}
          <div>
            <div className="font-cormorant text-[1.25rem] font-semibold text-white tracking-[0.04em] mb-1">
              Hill Country Media Group LLC
            </div>
            <div className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-blue mb-4">
              Texas Digital Media &amp; Advertising
            </div>
            <p className="text-[0.8rem] text-cream-dim leading-[1.75] mb-6">
              A vertically integrated digital media holding company operating specialized advertising
              and marketing brands across the Texas market. Headquartered in the Texas Hill Country.
            </p>
            <div className="flex gap-3 flex-wrap">
              {['LoneStar Network', 'Local-SEO.co'].map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-2.5 py-1 text-[0.62rem] font-medium tracking-[0.12em] uppercase text-cream-dim"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <FooterCol title="Company"  links={companyLinks} />
          <FooterCol title="Services" links={serviceLinks} />
          <FooterCol title="Get In Touch" links={contactLinks} />
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center">
          <span className="text-[0.72rem] text-muted">
            © {new Date().getFullYear()} Hill Country Media Group LLC. All rights reserved.
            &nbsp;DBA LoneStar Network · DBA Local-SEO.co
          </span>
          <div className="flex gap-6">
            <a href="/privacy"  className="text-[0.72rem] text-muted hover:text-cream-dim transition-colors duration-200 no-underline">Privacy Policy</a>
            <a href="/terms"    className="text-[0.72rem] text-muted hover:text-cream-dim transition-colors duration-200 no-underline">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
