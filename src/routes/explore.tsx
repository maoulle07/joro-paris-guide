import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { UtensilsCrossed, ShoppingBag, Landmark, Theater, Sparkles } from "lucide-react";

export const Route = createFileRoute("/explore")({
  head: () => ({ meta: [{ title: "Explore Paris — Jöro Haussmann Halévy" }] }),
  component: ExplorePage,
});

const categories = [
  { id: "restaurants", icon: UtensilsCrossed, label: "Restaurants" },
  { id: "shopping", icon: ShoppingBag, label: "Shopping" },
  { id: "visits", icon: Landmark, label: "Visits" },
  { id: "culture", icon: Theater, label: "Culture" },
  { id: "wellness", icon: Sparkles, label: "Wellness" },
] as const;

const places: Record<string, { name: string; desc?: string }[]> = {
  restaurants: [
    { name: "Galeries Lafayette Gourmet", desc: "Rooftop & gourmet food hall" },
    { name: "El&N", desc: "Instagrammable café & brunch" },
    { name: "Créatures", desc: "Vegetarian with a view" },
    { name: "Tortuga", desc: "Mexican-Japanese fusion" },
    { name: "Perruche", desc: "Rooftop Mediterranean" },
    { name: "Froufrou", desc: "Chic French bistro" },
    { name: "Ao Izakaya", desc: "Japanese tapas" },
    { name: "Braun Notes", desc: "Specialty coffee & food" },
    { name: "Brasserie Lazare", desc: "Classic French brasserie" },
    { name: "Coco", desc: "Asian fusion" },
    { name: "Farmers", desc: "Healthy & organic" },
    { name: "Pépé Ronchon", desc: "Traditional French comfort food" },
    { name: "Poni", desc: "Italian pizzeria" },
    { name: "Mieux", desc: "Modern French cuisine" },
    { name: "Blue Bao", desc: "Trendy Asian" },
    { name: "Café de la Paix", desc: "Historic grand café" },
    { name: "Rue Sainte Anne", desc: "Japanese food street" },
    { name: "Balagan", desc: "Israeli cuisine" },
    { name: "Hanoï Cà Phé Opéra", desc: "Vietnamese" },
    { name: "Pink Mamma", desc: "Iconic Italian" },
    { name: "Papi Restaurant", desc: "Italian comfort food" },
    { name: "Zébulon", desc: "Neo-bistro" },
    { name: "Le Rouge à Lèvres", desc: "Wine bar & small plates" },
  ],
  shopping: [
    { name: "Printemps Haussmann", desc: "Iconic department store" },
    { name: "Galeries Lafayette", desc: "Luxury & fashion" },
    { name: "Citadium", desc: "Streetwear & sneakers" },
    { name: "Lindt Opéra", desc: "Chocolate paradise" },
    { name: "Cédric Grolet Opéra", desc: "World-famous pastry" },
    { name: "Place Vendôme", desc: "Luxury jewelry" },
    { name: "Rue de la Paix", desc: "High-end fashion" },
    { name: "Rue des Martyrs", desc: "Charming local shops & food" },
    { name: "RAP Italian Grocery", desc: "Italian products & deli" },
  ],
  visits: [
    { name: "Opéra Palais Garnier", desc: "Stunning opera house" },
    { name: "Musée du Parfum Fragonard", desc: "Free perfume museum" },
    { name: "Église Sainte Trinité", desc: "Beautiful church" },
    { name: "Square Édouard VII", desc: "Charming hidden square" },
    { name: "Place de la Madeleine", desc: "Gourmet food shops" },
    { name: "Passage Jouffroy", desc: "Historic covered passage" },
    { name: "Passage des Panoramas", desc: "Oldest covered passage in Paris" },
    { name: "Jardin des Tuileries", desc: "Classic Parisian garden" },
    { name: "Hop On Hop Off Bus", desc: "Sightseeing bus tour" },
  ],
  culture: [
    { name: "Théâtre du Mogador", desc: "Musicals & shows" },
    { name: "Théâtre Édouard VII", desc: "Classic theater" },
    { name: "L'Olympia", desc: "Legendary concert hall" },
    { name: "Pinacothèque", desc: "Art exhibitions" },
    { name: "Musée Grévin", desc: "Wax museum" },
  ],
  wellness: [
    { name: "Spa Nuxe Printemps", desc: "Luxurious spa in Printemps" },
    { name: "Seasonly", desc: "Natural skincare facial bar" },
    { name: "Spa Cinq Mondes Opéra", desc: "World-inspired spa rituals" },
  ],
};

function ExplorePage() {
  const [active, setActive] = useState<string>("restaurants");

  return (
    <div className="page-container space-y-6">
      <div>
        <h1 className="page-title">Explore Paris</h1>
        <p className="page-subtitle">Our favorite spots near the apartment</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
              active === cat.id
                ? "bg-accent text-accent-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            <cat.icon className="h-4 w-4" />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Places */}
      <div className="grid gap-3">
        {places[active]?.map((place) => (
          <div key={place.name} className="info-card flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground text-sm">{place.name}</p>
              {place.desc && <p className="text-muted-foreground text-xs mt-0.5">{place.desc}</p>}
            </div>
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(place.name + " Paris 9")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:underline whitespace-nowrap ml-3"
            >
              Map →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
