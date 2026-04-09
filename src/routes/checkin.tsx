import { createFileRoute } from "@tanstack/react-router";
import { MapPin, DoorOpen, Key, Train, Car, Clock, Mail, Phone } from "lucide-react";
import { InfoCard } from "@/components/InfoCard";

export const Route = createFileRoute("/checkin")({
  head: () => ({
    meta: [
      { title: "Getting There — Jöro Haussmann Halévy" },
      { name: "description", content: "Check-in instructions and directions for Jöro Haussmann Halévy." },
    ],
  }),
  component: CheckinPage,
});

function Step({ step, title, children }: { step: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">
        {step}
      </div>
      <div>
        <p className="font-medium text-foreground text-sm">{title}</p>
        <p className="text-muted-foreground text-sm mt-0.5">{children}</p>
      </div>
    </div>
  );
}

function CheckinPage() {
  return (
    <div className="page-container space-y-6">
      <div>
        <h1 className="page-title">Getting There & Check-in</h1>
        <p className="page-subtitle">Everything you need to access the apartment</p>
      </div>

      {/* Address + Map */}
      <InfoCard>
        <div className="flex items-start gap-3 mb-4">
          <MapPin className="h-5 w-5 text-accent mt-0.5" />
          <div>
            <p className="font-semibold text-foreground">43 boulevard Haussmann</p>
            <p className="text-sm text-muted-foreground">75009 Paris, France</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2!2d2.3326!3d48.8726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3e4e5b5c5d%3A0x0!2s43+Boulevard+Haussmann%2C+75009+Paris!5e0!3m2!1sfr!2sfr!4v1"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Apartment location"
          />
        </div>
      </InfoCard>

      {/* Access Steps */}
      <InfoCard>
        <div className="flex items-center gap-2 mb-4">
          <DoorOpen className="h-5 w-5 text-accent" />
          <h2 className="font-semibold text-foreground">Access Instructions</h2>
        </div>
        <div className="space-y-4">
          <Step step={1} title="Building entrance">Door code: <strong className="font-mono">A 3187</strong></Step>
          <Step step={2} title="Go to 3rd floor">Take the lift — door on the right when you exit</Step>
          <Step step={3} title="Get the key">Grey key box behind the front door → 3rd box → code <strong className="font-mono">4303</strong></Step>
        </div>
      </InfoCard>

      {/* Tapkey */}
      <InfoCard>
        <div className="flex items-center gap-2 mb-4">
          <Key className="h-5 w-5 text-accent" />
          <h2 className="font-semibold text-foreground">Tapkey App Setup</h2>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>1. Download <strong className="text-foreground">Tapkey</strong> from the App Store or Google Play</p>
          <p>2. Create an account with the email you used for booking</p>
          <p>3. Accept the invitation you received by email</p>
          <p>4. Enable Bluetooth on your phone</p>
          <p>5. Hold your phone near the door lock to unlock</p>
        </div>
      </InfoCard>

      {/* Transport */}
      <InfoCard>
        <div className="flex items-center gap-2 mb-4">
          <Train className="h-5 w-5 text-accent" />
          <h2 className="font-semibold text-foreground">Nearby Metro Stations</h2>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-foreground font-medium">Auber</span><span className="text-muted-foreground">RER A</span></div>
          <div className="flex justify-between"><span className="text-foreground font-medium">Havre-Caumartin</span><span className="text-muted-foreground">Metro E, 3, 9</span></div>
          <div className="flex justify-between"><span className="text-foreground font-medium">Chaussée d'Antin</span><span className="text-muted-foreground">Metro 7, 9</span></div>
        </div>
      </InfoCard>

      {/* Parking */}
      <InfoCard>
        <div className="flex items-center gap-2 mb-3">
          <Car className="h-5 w-5 text-accent" />
          <h2 className="font-semibold text-foreground">Parking</h2>
        </div>
        <p className="text-sm text-muted-foreground">Indigo Haussmann C & A — directly in front of the building</p>
      </InfoCard>

      {/* Check-in/out times */}
      <InfoCard>
        <div className="flex items-center gap-2 mb-3">
          <Clock className="h-5 w-5 text-accent" />
          <h2 className="font-semibold text-foreground">Check-in & Check-out</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Check-in</p>
            <p className="font-semibold text-foreground">From 3:00 PM</p>
          </div>
          <div>
            <p className="text-muted-foreground">Check-out</p>
            <p className="font-semibold text-foreground">Before 11:00 AM</p>
          </div>
        </div>
      </InfoCard>

      {/* Contact */}
      <InfoCard>
        <h2 className="font-semibold text-foreground mb-3">Contact</h2>
        <div className="space-y-2 text-sm">
          <a href="mailto:reservation@joro-space.fr" className="flex items-center gap-2 text-accent hover:underline">
            <Mail className="h-4 w-4" /> reservation@joro-space.fr
          </a>
          <a href="tel:+33637754570" className="flex items-center gap-2 text-accent hover:underline">
            <Phone className="h-4 w-4" /> +33 6 37 75 45 70
          </a>
        </div>
      </InfoCard>
    </div>
  );
}
