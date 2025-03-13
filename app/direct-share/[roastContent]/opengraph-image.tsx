import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Roast Me - AI-Powered Humor Generator';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { roastContent: string } }) {
  try {
    const decodedRoast = decodeURIComponent(params.roastContent);
    
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 24,
            background: 'linear-gradient(to bottom, #1e293b, #0f172a)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 40,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <div style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 20 }}>
            Roast Me
          </div>
          <div style={{ 
            maxWidth: '80%', 
            padding: 32, 
            borderRadius: 12, 
            background: 'rgba(255,255,255,0.1)',
            marginBottom: 20
          }}>
            <p style={{ fontSize: 28, fontStyle: 'italic', lineHeight: 1.4 }}>
              {decodedRoast}
            </p>
          </div>
          <div style={{ fontSize: 20, opacity: 0.8 }}>
            AI-Powered Humor Generator
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch {
    // Return a fallback image if there's an error
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 24,
            background: 'linear-gradient(to bottom, #1e293b, #0f172a)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 40,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <div style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 20 }}>
            Roast Me
          </div>
          <div style={{ 
            maxWidth: '80%', 
            padding: 32, 
            borderRadius: 12, 
            background: 'rgba(255,255,255,0.1)',
            marginBottom: 20
          }}>
            <p style={{ fontSize: 28, fontStyle: 'italic', lineHeight: 1.4 }}>
              Create your own hilarious AI-powered roasts!
            </p>
          </div>
          <div style={{ fontSize: 20, opacity: 0.8 }}>
            AI-Powered Humor Generator
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  }
} 