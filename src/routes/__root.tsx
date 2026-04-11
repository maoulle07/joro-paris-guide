import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { BottomTabBar } from "@/components/BottomTabBar";
import { DesktopSidebar } from "@/components/DesktopSidebar";
import { FloatingContact } from "@/components/FloatingContact";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jöro Haussmann — Halévy Welcome Booklet" },
      { name: "description", content: "Digital welcome booklet for Jöro Haussmann Halévy apartment in Paris." },
      { name: "author", content: "Jöro Space" },
      { property: "og:title", content: "Jöro Haussmann — Halévy Welcome Booklet" },
      { property: "og:description", content: "Digital welcome booklet for Jöro Haussmann Halévy apartment in Paris." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Jöro Haussmann — Halévy Welcome Booklet" },
      { name: "twitter:description", content: "Digital welcome booklet for Jöro Haussmann Halévy apartment in Paris." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/af776828-71c1-4fa6-bdcd-0faec2c6a8d2/id-preview-0816e297--2d5e94bf-1f41-497c-9e94-de054eabacb9.lovable.app-1775746802536.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/af776828-71c1-4fa6-bdcd-0faec2c6a8d2/id-preview-0816e297--2d5e94bf-1f41-497c-9e94-de054eabacb9.lovable.app-1775746802536.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen w-full">
      <DesktopSidebar />
      <main className="flex-1 min-h-screen">
        <Outlet />
      </main>
      <BottomTabBar />
      <FloatingContact />
    </div>
  );
}
