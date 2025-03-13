import { Redirect } from './redirect-client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// eslint-disable-next-line @typescript-eslint/no-unused-vars  @typescript-eslint/no-explicit-any
export default function DirectSharePage({ params }: { params:  any }) {


  let decodedRoast = '';
  try {
    decodedRoast = decodeURIComponent(params.roastContent);
  } catch (e) {
    console.error("Error decoding roast for server rendering:", e);
  }

  return (
    <>
      {/* Client-side redirect component */}
      <Redirect roastContent={params.roastContent} />
      
      {/* Server-rendered content for social media crawlers */}
      <div className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Roast Me</h1>
            <p className="text-muted-foreground text-lg">
              AI-Powered Humor Generator
            </p>
          </header>

          <Card className="w-full mb-8">
            <CardHeader>
              <CardTitle>Shared Roast</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg italic mb-6">{decodedRoast}</p>
              <p className="text-md">
                This is a roast someone shared with you. Want to get your own AI-generated roast?
              </p>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Link href="/">
              <Button size="lg">Create Your Own Roast</Button>
            </Link>
          </div>
          
          <footer className="mt-12 text-center text-sm text-muted-foreground">
            <p>All roasts are generated for entertainment purposes only. <br />
              Keep it fun and don&apos;t take it personally! 😉</p>
          </footer>
        </div>
      </div>
    </>
  );
} 