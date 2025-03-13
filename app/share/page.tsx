"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export default function SharePage() {
  const [roastContent, setRoastContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get the hash fragment (without the # symbol)
    const hash = window.location.hash.substring(1);
    
    if (hash) {
      try {
        // Decode the URL-encoded roast
        const decodedRoast = decodeURIComponent(hash);
        setRoastContent(decodedRoast);
      } catch (e) {
        console.error("Error decoding roast content:", e);
      }
    }
    
    setIsLoading(false);
  }, []);

  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Roast Me</h1>
          <p className="text-muted-foreground text-lg">
            AI-Powered Humor Generator
          </p>
        </header>

        {isLoading ? (
          <div className="flex justify-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : roastContent ? (
          <Card className="w-full mb-8">
            <CardHeader>
              <CardTitle>Shared Roast</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg italic mb-6">{roastContent}</p>
              <p className="text-md">
                This is a roast someone shared with you. Want to get your own AI-generated roast?
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="w-full mb-8">
            <CardHeader>
              <CardTitle>Get Your Own Hilarious Roast</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6">
                Create your own custom AI-powered roasts based on your self-description. Our humor generator creates 
                light-hearted jokes that are perfect for sharing with friends!
              </p>
              <p className="text-md mb-6">
                Someone shared a roast with you from our app, but the content is missing. Click below to create your own personalized roast!
              </p>
            </CardContent>
          </Card>
        )}

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
    </main>
  );
} 