import type { Metadata } from 'next'
import Ticker from '@/components/Ticker'
import LoneStarNetwork from '@/components/LoneStarNetwork'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: 'LoneStar Network — Hill Country Media Group',
  description:
    'Full-service digital advertising network for Texas advertisers. Programmatic display, social, and streaming at scale. thelonestarnetwork.com',
}

export default function LoneStarPage() {
  return (
    <>
      <Ticker />
      <LoneStarNetwork />
      <PageCta />
    </>
  )
}
