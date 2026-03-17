import type { Metadata } from 'next'
import Ticker from '@/components/Ticker'
import Services from '@/components/Services'
import Advertising from '@/components/Advertising'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: 'Services — Hill Country Media Group',
  description:
    'Four channels, one integrated strategy. Programmatic display, local SEO, social media advertising, and OTT/CTV streaming — built for Texas businesses.',
}

export default function ServicesPage() {
  return (
    <>
      <Ticker />
      <Services />
      <Advertising />
      <PageCta />
    </>
  )
}
