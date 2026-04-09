import { createFileRoute } from "@tanstack/react-router";
import { Wifi, Copy, Check } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-apartment.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Welcome — Jöro Haussmann Halévy" },
      { name: "description", content: "Your digital welcome booklet for Jöro Haussmann – Halévy apartment in Paris." },
    ],
  }),
  component: WelcomePage,
});

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className="text-accent hover:text-accent/80 transition-colors" aria-label="Copy">
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

function WelcomePage() {
  return (
    <div className="page-container">
      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden mb-8 -mx-4 md:mx-0">
        <img src={heroImg} alt="Jöro Haussmann Halévy apartment" className="w-full h-56 md:h-72 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">Bienvenue!</h1>
            <p className="text-primary-foreground/80 text-sm mt-1">Jöro Haussmann — Halévy</p>
          </div>
        </div>
      </div>

      {/* Welcome message */}
      <div className="space-y-4 mb-8">
        <p className="text-foreground leading-relaxed">
          Welcome to <strong>Halévy</strong>, your Parisian home at <strong>43 boulevard Haussmann, 75009 Paris</strong>. 
          We're thrilled to host you and hope you'll enjoy every moment of your stay.
        </p>
        <p className="text-muted-foreground text-sm">
          This digital booklet has everything you need — from check-in instructions to local recommendations. 
          Don't hesitate to reach out if you need anything!
        </p>
      </div>

      {/* WiFi Card */}
      <div className="wifi-card">
        <div className="flex items-center gap-2 mb-4">
          <Wifi className="h-5 w-5 text-accent" />
          <h2 className="font-semibold text-foreground">WiFi</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Network</p>
              <p className="font-mono font-medium text-foreground">JORO_HALEVY</p>
            </div>
            <CopyButton text="JORO_HALEVY" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Password</p>
              <p className="font-mono font-medium text-foreground">Joro_Halevy09</p>
            </div>
            <CopyButton text="Joro_Halevy09" />
          </div>
        </div>
      </div>

      {/* Mobile QR link */}
      <div className="mt-6 md:hidden">
        <a href="/qr" className="text-sm text-accent hover:underline flex items-center gap-1">
          📱 Share this booklet via QR code
        </a>
      </div>
    </div>
  );
}
