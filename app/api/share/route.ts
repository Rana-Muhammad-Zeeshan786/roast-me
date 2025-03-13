import { NextRequest, NextResponse } from 'next/server';

// This API route handles requests for sharing roast content
export async function GET(request: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://roast-me-app.com';
  
  // Return metadata optimized for social sharing
  return NextResponse.json({
    title: 'Roast Me - AI-Powered Humor Generator',
    description: 'Create your own hilarious, customized roasts. Our AI-powered humor generator creates jokes perfect for sharing!',
    url: baseUrl,
    imageUrl: `${baseUrl}/opengraph-image.png`,
  });
} 