"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';

// This page redirects to the share page with hash fragment
// It's for social media platforms that don't support hash fragments

type Props = {
  params: { roastContent: string }
}

export default function DirectSharePage({ params }: Props) {
  const router = useRouter();
  const { roastContent } = params;
  
  useEffect(() => {
    // Decode the roast content
    try {
      const decodedRoast = decodeURIComponent(roastContent);
      
      // Redirect to the share page with hash fragment
      router.push(`/share#${encodeURIComponent(decodedRoast)}`);
    } catch (e) {
      console.error("Error decoding roast for direct share:", e);
      router.push('/share');
    }
  }, [roastContent, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="p-8">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
        </div>
        <div className="text-center mt-4">Redirecting to your shared roast...</div>
      </Card>
    </div>
  );
} 