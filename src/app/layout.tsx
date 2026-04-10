import type { Metadata } from "next";
import { Inter, Syncopate } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syncopate = Syncopate({
  subsets: ["latin"],
  variable: "--font-syncopate",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://new2utattoo.com"),
  title: {
    default: "Best Tattoo Studio in Belagavi | NEW 2 U Tattoo Studio",
    template: "%s | NEW 2 U Tattoo Studio",
  },
  description:
    "NEW 2 U Tattoo Studio is a premium tattoo and piercing studio in Belagavi, Karnataka, specializing in realism tattoos, portrait tattoos, custom tattoos, fine line tattoos, tribal tattoos, geometric tattoos, body art, and premium tattoo experiences.",
  keywords: [
    "tattoo studio in Belagavi",
    "new2u",
    "new2u tattoo",
    "tattoo in belagavi",
    "best tattoo studio in Belagavi",
    "best tattoo artist in Belagavi",
    "premium tattoo studio Belagavi",
    "custom tattoo Belagavi",
    "portrait tattoo Belagavi",
    "realism tattoo Belagavi",
    "fine line tattoo Belagavi",
    "tribal tattoo Belagavi",
    "geometric tattoo Belagavi",
    "piercing studio Belagavi",
    "tattoo shop Belagavi",
    "Belagavi tattoo artist",
    "NEW 2 U Tattoo Studio",
    "tattoo near me Belagavi",
  ],
  applicationName: "NEW 2 U Tattoo Studio",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://new2utattoo.com",
  },
  openGraph: {
    title: "Best Tattoo Studio in Belagavi | NEW 2 U Tattoo Studio",
    description:
      "Premium tattoo and piercing studio in Belagavi for realism, portraits, custom concepts, fine line tattoos, tribal tattoos, geometric tattoos, and luxury body art experiences.",
    url: "https://new2utattoo.com",
    siteName: "NEW 2 U Tattoo Studio",
    images: [
      {
        url: "https://new2utattoo.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NEW 2 U Tattoo Studio in Belagavi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Tattoo Studio in Belagavi | NEW 2 U Tattoo Studio",
    description:
      "Luxury tattoo and piercing experience in Belagavi. Realism, portraits, fine line, tribal, geometric, and custom tattoos.",
    images: ["https://new2utattoo.com/og-image.jpg"],
  },
  category: "Tattoo Studio",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: "NEW 2 U Tattoo Studio",
    image: "https://new2utattoo.com/og-image.jpg",
    url: "https://new2utattoo.com",
    telephone: "+91 99161 73301",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Belagavi",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: ["Belagavi", "Karnataka"],
    description:
      "Premium tattoo and piercing studio in Belagavi specializing in realism, portraits, tribal, geometric, minimal, and custom tattoos.",
    priceRange: "₹₹",
    sameAs: [
      "https://instagram.com/new_2_u_tattoomaker",
      "https://wa.me/919916173301",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NEW 2 U Tattoo Studio",
    url: "https://new2utattoo.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://new2utattoo.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">

      {/* ✅ META PIXEL ADDED HERE */}
      <Script strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '763946492195884');
          fbq('track', 'PageView');
        `}
      </Script>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KBXMRD9VBJ"
        strategy="afterInteractive"
      />

      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KBXMRD9VBJ');
        `}
      </Script>

      <body className={`${inter.variable} ${syncopate.variable} antialiased bg-black text-white`}>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <div id="cursor" suppressHydrationWarning></div>
        <div id="cursor-blur" suppressHydrationWarning></div>

        {children}
      </body>
    </html>
  );
}