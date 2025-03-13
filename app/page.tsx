"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { RoastForm } from "@/components/roast-form";
import { RoastDisplay } from "@/components/roast-display";
import { Toaster } from "@/components/ui/sonner";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [roast, setRoast] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modelProvider, setModelProvider] = useState<string>("deepseek");

  const handleRoastGenerated = (roast: string) => {
    setRoast(roast);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="max-w-3xl w-full">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Roast Me</h1>
          <p className="text-muted-foreground text-lg">
            Get a hilarious, AI-powered roast based on your self-description. 
            Perfect for laughs with friends!
          </p>
        </header>

        <section aria-labelledby="roast-form-heading" className="grid grid-cols-1 gap-8">
          <h2 id="roast-form-heading" className="sr-only">Create Your Personalized Roast</h2>
          <Card>
            <CardContent className="pt-6">
              <RoastForm 
                onRoastGenerated={handleRoastGenerated} 
                setIsLoading={setIsLoading}
                setModelProvider={setModelProvider}
              />
            </CardContent>
          </Card>

          {isLoading && (
            <div className="flex justify-center items-center py-8" aria-live="polite" aria-busy="true">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}

          {roast && !isLoading && (
            <section aria-labelledby="roast-result-heading">
              <h2 id="roast-result-heading" className="sr-only">Your Generated Roast</h2>
              <RoastDisplay roast={roast} modelProvider={modelProvider} />
            </section>
          )}
        </section>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>All roasts are generated for entertainment purposes only. <br />
             Keep it fun and don't take it personally! 😉</p>
        </footer>
      </div>
      
      <Toaster />
    </main>
  );
}
