import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

// Bebas Neue isn't in next/font/google directly, load via CSS @import fallback
// If you have the font file locally, place it in /public/fonts/ and use localFont
// For now we'll use a Google Fonts CSS import in globals.css as a @layer base workaround
// by adding it as a link in metadata

export const metadata: Metadata = {
  title: 'Hill Country Media Group LLC — Texas Digital Media & Advertising',
  description:
    'A vertically integrated Texas digital media and advertising company. Operating LoneStar Network and Local-SEO.co. Programmatic display, local SEO, social media advertising, and OTT/CTV streaming.',
  keywords: [
    'Texas digital advertising',
    'programmatic advertising Texas',
    'local SEO Texas',
    'OTT CTV advertising Texas',
    'Hill Country Media Group',
    'LoneStar Network',
  ],
  openGraph: {
    title: 'Hill Country Media Group LLC',
    description: 'Texas-rooted. Digitally dominant.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5BBN7V8L');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Bebas Neue — not in next/font/google weight list, load via Google Fonts link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root { --font-bebas: 'Bebas Neue'; }
        `}</style>
      </head>
      <body className="font-sans font-light leading-relaxed" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5BBN7V8L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
