import { useState } from "react";
import { MessageCircle, X, Mail, Phone } from "lucide-react";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-contact">
      {open && (
        <div className="absolute bottom-16 right-0 bg-card text-card-foreground rounded-xl shadow-xl border p-4 w-56 space-y-3 animate-in fade-in slide-in-from-bottom-2">
          <p className="text-sm font-semibold">Contact Jöro</p>
          <a href="mailto:reservation@joro-space.fr" className="flex items-center gap-2 text-sm text-accent hover:underline">
            <Mail className="h-4 w-4" /> Email us
          </a>
          <a href="tel:+33637754570" className="flex items-center gap-2 text-sm text-accent hover:underline">
            <Phone className="h-4 w-4" /> +33 6 37 75 45 70
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="h-14 w-14 flex items-center justify-center rounded-full"
        aria-label="Contact Jöro"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
