import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roast Me - AI-Powered Humor Generator",
  description: "Generate hilarious, customized roasts based on your self-description. Our AI-powered humor generator creates light-hearted jokes perfect for sharing with friends and on social media.",
  keywords: [
    "AI roast generator", 
    "funny AI roasts", 
    "humor generator", 
    "AI comedy", 
    "joke generator", 
    "personalized roasts", 
    "roast me", 
    "comedy AI", 
    "funny content generator", 
    "share jokes", 
    "roasting app"
  ],
  authors: [{ name: "Roast Me Team" }],
  publisher: "Roast Me",
  creator: "Roast Me Team",
  category: "Entertainment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Roast Me - AI-Powered Humor Generator",
    description: "Generate hilarious, customized roasts based on your self-description. Perfect for laughs with friends and sharing on social media!",
    url: "https://roast-me-app.com",
    siteName: "Roast Me",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Roast Me - AI Humor Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roast Me - AI-Powered Humor Generator",
    description: "Generate hilarious, customized roasts based on your self-description. Perfect for laughs with friends and sharing on social media!",
    images: ["/twitter-image.png"],
    creator: "@roastmeapp",
    site: "@roastmeapp",
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  alternates: {
    canonical: "https://roast-me-app.com",
    languages: {
      'en': 'https://roast-me-app.com',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  applicationName: "Roast Me",
  colorScheme: "dark light",
  formatDetection: {
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  appleWebApp: {
    title: "Roast Me",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Roast Me",
              "description": "Generate hilarious, customized roasts based on your self-description. Our AI-powered generator creates light-hearted jokes perfect for sharing with friends.",
              "applicationCategory": "Entertainment",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "creator": {
                "@type": "Organization",
                "name": "Roast Me Team"
              },
              "url": "https://roast-me-app.com",
              "sameAs": [
                "https://twitter.com/roastmeapp"
              ],
              "inLanguage": "en",
              "potentialAction": [
                {
                  "@type": "UseAction",
                  "target": "https://roast-me-app.com"
                },
                {
                  "@type": "ShareAction",
                  "object": {
                    "@type": "CreativeWork",
                    "name": "AI-generated Roast",
                    "description": "Personalized humorous roast generated by AI"
                  }
                }
              ],
              "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/ShareAction",
                "userInteractionCount": "1000+"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
