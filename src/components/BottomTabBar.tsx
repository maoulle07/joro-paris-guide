import { Link, useLocation } from "@tanstack/react-router";
import { Home, KeyRound, ClipboardList, Sofa, MapPin, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/", icon: Home, label: "Welcome" },
  { to: "/checkin", icon: KeyRound, label: "Check-in" },
  { to: "/rules", icon: ClipboardList, label: "Rules" },
  { to: "/facilities", icon: Sofa, label: "Facilities" },
  { to: "/explore", icon: MapPin, label: "Explore" },
  { to: "/info", icon: Info, label: "Info" },
] as const;

export function BottomTabBar() {
  const location = useLocation();

  return (
    <nav className="tab-bar">
      {tabs.map((tab) => {
        const active = location.pathname === tab.to;
        return (
          <Link key={tab.to} to={tab.to} className={cn("tab-item", active && "tab-item-active")}>
            <tab.icon className="h-5 w-5" />
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
