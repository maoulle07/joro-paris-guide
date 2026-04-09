import { createFileRoute } from "@tanstack/react-router";
import { Phone, Siren, Building, Pill, ShoppingCart, Landmark, Shirt, Wrench, MailIcon } from "lucide-react";
import { InfoCard } from "@/components/InfoCard";

export const Route = createFileRoute("/info")({
  head: () => ({ meta: [{ title: "Useful Info — Jöro Haussmann Halévy" }] }),
  component: InfoPage,
});

const emergencyNumbers = [
  { label: "SAMU (Medical)", number: "15" },
  { label: "Police", number: "17" },
  { label: "Pompiers (Fire)", number: "18" },
];

const joroContacts = [
  "+33 1 45 00 00 09",
  "+33 6 37 75 45 70",
  "+33 6 49 25 90 93",
];

const nearbyServices = [
  { icon: Pill, name: "Pharmacie Opéra", address: "6 boulevard des Capucines, 75009" },
  { icon: ShoppingCart, name: "Monoprix Haussmann", address: "52 boulevard Haussmann, 75009" },
  { icon: Landmark, name: "BNP Paribas", address: "2 rue Auber, 75009" },
  { icon: Shirt, name: "Pressing Haussmann", address: "48 boulevard Haussmann, 75009" },
  { icon: Wrench, name: "Cordonnerie Minute", address: "Passage du Havre, 75009" },
  { icon: MailIcon, name: "La Poste Haussmann", address: "55 boulevard Haussmann, 75009" },
];

function InfoPage() {
  return (
    <div className="page-container space-y-6">
      <div>
        <h1 className="page-title">Useful Info</h1>
        <p className="page-subtitle">Emergency contacts and nearby services</p>
      </div>

      {/* Emergency */}
      <InfoCard className="bg-destructive/5 border-destructive/20">
        <div className="flex items-center gap-2 mb-4">
          <Siren className="h-5 w-5 text-destructive" />
          <h2 className="font-semibold text-foreground">Emergency Numbers</h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {emergencyNumbers.map((e) => (
            <a key={e.number} href={`tel:${e.number}`} className="text-center p-3 rounded-lg bg-card border hover:border-destructive/30 transition-colors">
              <p className="text-2xl font-bold text-destructive">{e.number}</p>
              <p className="text-xs text-muted-foreground mt-1">{e.label}</p>
            </a>
          ))}
        </div>
      </InfoCard>

      {/* Jöro contact */}
      <InfoCard>
        <div className="flex items-center gap-2 mb-4">
          <Phone className="h-5 w-5 text-accent" />
          <h2 className="font-semibold text-foreground">Urgent — Contact Jöro</h2>
        </div>
        <div className="space-y-2">
          {joroContacts.map((num) => (
            <a key={num} href={`tel:${num.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-accent hover:underline">
              <Phone className="h-3.5 w-3.5" /> {num}
            </a>
          ))}
        </div>
      </InfoCard>

      {/* Nearby Services */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Building className="h-5 w-5 text-accent" />
          <h2 className="font-semibold text-foreground">Nearby Services</h2>
        </div>
        <div className="space-y-3">
          {nearbyServices.map((s) => (
            <InfoCard key={s.name}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.address}</p>
                </div>
              </div>
            </InfoCard>
          ))}
        </div>
      </div>
    </div>
  );
}
