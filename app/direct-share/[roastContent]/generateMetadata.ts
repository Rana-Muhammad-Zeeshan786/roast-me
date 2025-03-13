import { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: { roastContent: string } }
): Promise<Metadata> {
  // Decode the roast content from the URL
  let decodedRoast = '';
  try {
    decodedRoast = decodeURIComponent(params.roastContent);
  } catch (e) {
    console.error("Error decoding roast for metadata:", e);
  }

  // Create a preview of the roast (first 100 characters)
  const roastPreview = decodedRoast ? 
    `"${decodedRoast.slice(0, 100)}${decodedRoast.length > 100 ? '...' : ''}"` : 
    "Check out this hilarious AI-generated roast!";

  // Create the base URL for our share page
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : 'https://roast-me.vercel.app'; // Replace with your actual domain

  return {
    title: "Roast Me - AI-Powered Humor Generator",
    description: roastPreview,
    openGraph: {
      title: "Roast Me - AI-Powered Humor Generator",
      description: roastPreview,
      url: `${baseUrl}/direct-share/${params.roastContent}`,
      siteName: "Roast Me",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Roast Me - AI-Powered Humor Generator",
      description: roastPreview,
    },
  };
} 