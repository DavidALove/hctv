import type { Metadata } from 'next'
import Ticker from '@/components/Ticker'
import LocalSEO from '@/components/LocalSEO'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: 'Local-SEO.co — Hill Country Media Group',
  description:
    'Dedicated local search marketing for Texas businesses. Dominate Google rankings, Google Business Profile, and local map pack. local-seo.co',
}

export default function LocalSEOPage() {
  return (
    <>
      <Ticker />
      <LocalSEO />
      <PageCta />
    </>
  )
}
