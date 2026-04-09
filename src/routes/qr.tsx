import { createFileRoute } from "@tanstack/react-router";
import { QrCode, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/qr")({
  head: () => ({ meta: [{ title: "QR Code — Jöro Haussmann Halévy" }] }),
  component: QrPage,
});

function QrPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appUrl = typeof window !== "undefined" ? window.location.origin : "";

  useEffect(() => {
    if (!canvasRef.current || !appUrl) return;
    // Simple QR code via external API rendered as image
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(appUrl)}&color=1E2D2F`;
    img.onload = () => {
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx && canvasRef.current) {
        canvasRef.current.width = 300;
        canvasRef.current.height = 300;
        ctx.drawImage(img, 0, 0);
      }
    };
  }, [appUrl]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.download = "joro-halevy-qr.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="page-container space-y-6">
      <div>
        <h1 className="page-title">QR Code</h1>
        <p className="page-subtitle">Share this welcome booklet with your guests</p>
      </div>

      <div className="info-card flex flex-col items-center py-8 space-y-6">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
          <QrCode className="h-5 w-5 text-accent" />
        </div>
        <canvas ref={canvasRef} className="rounded-lg border" />
        <p className="text-xs text-muted-foreground text-center max-w-xs">
          Print this QR code and place it in the apartment. Guests can scan it to access this booklet.
        </p>
        <p className="text-xs font-mono text-muted-foreground break-all text-center">{appUrl}</p>
        <Button onClick={handleDownload} className="gap-2">
          <Download className="h-4 w-4" />
          Download QR Code
        </Button>
      </div>
    </div>
  );
}
