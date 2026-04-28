import Link from 'next/link'

export default function PageCta() {
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 border-t border-border" style={{ background: 'var(--deep)' }}>
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="text-[1rem] text-cream-dim mb-6">
          Ready to dominate your Texas market?
        </p>
        <Link
          href="/#contact"
          className="btn-primary inline-flex items-center gap-2 bg-blue text-black px-8 py-3.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase no-underline transition-all duration-200"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}
