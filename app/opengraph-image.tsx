import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Roast Me - AI Humor Generator';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom, #000000, #111827)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          color: 'white',
          position: 'relative',
        }}
      >
        <div style={{ fontSize: '84px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
          Roast Me
        </div>
        <div style={{ fontSize: '36px', opacity: 0.9, textAlign: 'center', maxWidth: '80%', marginBottom: '40px' }}>
          AI-Powered Humor Generator
        </div>
        <div style={{ 
          fontSize: '24px', 
          opacity: 0.8, 
          textAlign: 'center', 
          maxWidth: '90%',
          background: 'rgba(255,255,255,0.1)',
          padding: '20px',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          Create your own hilarious, customized AI roasts
          and share them with friends!
        </div>
        <div style={{ 
          position: 'absolute', 
          bottom: '30px', 
          fontSize: '22px', 
          opacity: 0.7,
          background: 'rgba(0,0,0,0.5)',
          padding: '10px 20px',
          borderRadius: '20px'
        }}>
          roast-me-app.com
        </div>
      </div>
    ),
    { ...size }
  );
} 