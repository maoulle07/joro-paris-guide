import { Link, useLocation } from "@tanstack/react-router";
import { Home, KeyRound, ClipboardList, Sofa, MapPin, Info, QrCode } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Welcome" },
  { to: "/checkin", icon: KeyRound, label: "Getting There" },
  { to: "/rules", icon: ClipboardList, label: "House Rules" },
  { to: "/facilities", icon: Sofa, label: "Facilities" },
  { to: "/explore", icon: MapPin, label: "Explore Paris" },
  { to: "/info", icon: Info, label: "Useful Info" },
  { to: "/qr", icon: QrCode, label: "QR Code" },
] as const;

export function DesktopSidebar() {
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-primary text-primary-foreground border-r border-sidebar-border">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-lg font-bold tracking-tight">Jöro Haussmann</h1>
        <p className="text-sm opacity-70 mt-0.5">Halévy</p>
      </div>
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-sidebar-accent/50"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-sidebar-border text-xs opacity-50">
        © Jöro Space
      </div>
    </aside>
  );
}
