import { createFileRoute } from "@tanstack/react-router";
import { CigaretteOff, PartyPopper, PawPrint, VolumeX, UserX, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/rules")({
  head: () => ({ meta: [{ title: "House Rules — Jöro Haussmann Halévy" }] }),
  component: RulesPage,
});

const rules = [
  { icon: CigaretteOff, title: "No Smoking", desc: "Smoking is strictly prohibited inside the apartment. Please use outdoor areas." },
  { icon: PartyPopper, title: "No Parties", desc: "Parties and large gatherings are not allowed in the apartment." },
  { icon: PawPrint, title: "No Pets", desc: "Pets are not permitted in the apartment." },
  { icon: VolumeX, title: "No Noise After 10 PM", desc: "Please respect neighbors and keep noise to a minimum, especially after 10 PM." },
  { icon: UserX, title: "No Unexpected Guests", desc: "Only registered guests are allowed to stay in the apartment." },
];

function RulesPage() {
  return (
    <div className="page-container space-y-6">
      <div>
        <h1 className="page-title">House Rules</h1>
        <p className="page-subtitle">Please respect these guidelines during your stay</p>
      </div>

      <div className="space-y-3">
        {rules.map((rule) => (
          <div key={rule.title} className="rule-card">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <rule.icon className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">{rule.title}</p>
              <p className="text-muted-foreground text-sm mt-0.5">{rule.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="info-card bg-destructive/5 border-destructive/20">
        <h2 className="font-semibold text-foreground mb-2">🆘 Emergency Contact</h2>
        <p className="text-sm text-muted-foreground mb-3">For any incident or urgent issue:</p>
        <div className="space-y-2 text-sm">
          <a href="mailto:reservation@joro-space.fr" className="flex items-center gap-2 text-accent hover:underline">
            <Mail className="h-4 w-4" /> reservation@joro-space.fr
          </a>
          <a href="tel:+33637754570" className="flex items-center gap-2 text-accent hover:underline">
            <Phone className="h-4 w-4" /> +33 6 37 75 45 70
          </a>
        </div>
      </div>
    </div>
  );
}
