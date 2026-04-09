import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tv, BedDouble, Bath, CookingPot } from "lucide-react";

export const Route = createFileRoute("/facilities")({
  head: () => ({ meta: [{ title: "Facilities — Jöro Haussmann Halévy" }] }),
  component: FacilitiesPage,
});

const rooms = [
  {
    id: "living",
    icon: Tv,
    title: "Living Room",
    items: [
      { name: "TV", detail: "Use the Molotov app for French TV channels" },
      { name: "Clickshare", detail: "Cast your screen wirelessly to the TV" },
      { name: "Sonos Speaker", detail: 'Speaker name: "Pièce à vivre" — connect via Sonos or AirPlay' },
      { name: "Printer", detail: "HP OfficeJet 6950 — WiFi printing available" },
      { name: "Scanner", detail: "Available on the HP OfficeJet" },
      { name: "iPad Wall Tablet", detail: "Control apartment settings from the wall-mounted iPad" },
      { name: "Heating / AC", detail: "Adjust via the thermostat on the wall" },
    ],
  },
  {
    id: "bedroom",
    icon: BedDouble,
    title: "Bedroom",
    items: [
      { name: "Safe Deposit Box", detail: "Set your own 4-digit code to lock/unlock" },
      { name: "Steam One Steamer", detail: "Available for garment care" },
    ],
  },
  {
    id: "bathroom",
    icon: Bath,
    title: "Bathroom",
    items: [
      { name: "Heater", detail: "Switch between Auto and Comfort mode" },
      { name: "Toiletries", detail: "Shower gel and shampoo provided" },
      { name: "Hair Dryer", detail: "Available under the sink" },
      { name: "Hair Straightener", detail: "Available in the drawer" },
    ],
  },
  {
    id: "kitchen",
    icon: CookingPot,
    title: "Kitchen",
    items: [
      { name: "Oven", detail: "Select mode → set temperature → press start" },
      { name: "Nespresso Machine", detail: "Capsules provided in the kitchen drawer" },
      { name: "SMEG Toaster", detail: "Classic design — adjust browning level on the side" },
      { name: "SMEG Kettle", detail: "Fill and press the lever to start" },
      { name: "Full Kitchenware", detail: "Pots, pans, plates, glasses, cutlery — everything you need" },
    ],
  },
];

function FacilitiesPage() {
  return (
    <div className="page-container space-y-6">
      <div>
        <h1 className="page-title">Facilities</h1>
        <p className="page-subtitle">Everything available in the apartment, organized by room</p>
      </div>

      <Accordion type="multiple" defaultValue={["living"]} className="space-y-3">
        {rooms.map((room) => (
          <AccordionItem key={room.id} value={room.id} className="info-card border rounded-xl px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <room.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="font-semibold text-foreground">{room.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-3 pt-2">
                {room.items.map((item) => (
                  <div key={item.name} className="pl-12">
                    <p className="text-sm font-medium text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
