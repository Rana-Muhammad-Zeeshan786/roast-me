import { Metadata } from 'next';

// Define static metadata for the share page
export const metadata: Metadata = {
  title: "Roast Me - Get Your Own AI Roast",
  description: "Generate hilarious, customized roasts based on your self-description. Perfect for sharing with friends on social media!",
  openGraph: {
    title: "Roast Me - AI-Powered Humor Generator",
    description: "Create your own hilarious AI-powered roasts and share them with friends.",
    images: ['/opengraph-image.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roast Me - AI-Powered Humor Generator",
    description: "Create your own hilarious AI-powered roasts and share them with friends.",
    images: ['/twitter-image.png'],
  },
}; 