import Link from "next/link";
import { ReactNode } from "react";
import { LayoutDashboard, FolderKanban, CheckSquare, Users, Truck, Package, FileText, Euro, Settings, Search } from "lucide-react";

const nav = [
  { href: "/", label: "Command Center", icon: LayoutDashboard },
  { href: "/projects", label: "Projekte", icon: FolderKanban },
  { href: "/tasks", label: "Aufgaben", icon: CheckSquare },
  { href: "/people", label: "People", icon: Users },
  { href: "/fleet", label: "Fuhrpark", icon: Truck },
  { href: "/material", label: "Material", icon: Package },
  { href: "/documents", label: "Dokumente", icon: FileText },
  { href: "/finance", label: "Finanzen", icon: Euro },
  { href: "/settings", label: "Einstellungen", icon: Settings }
];

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandMark">TG</div>
          <div>
            <strong>TeamGrid</strong>
            <span>Company OS</span>
          </div>
        </div>

        <div className="sideLabel">Plattform</div>
        <nav className="nav">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <Link href={item.href} key={item.href}>
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="sideFooter">
          <span>Demo lokal</span>
          <small>Next.js ohne Datenbank</small>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <div className="crumb">TeamGrid / SaaS Demo</div>
            <h1>TeamGrid Command Center</h1>
            <p>Zentrale Plattform für Unternehmen, Projekte und operative Abläufe.</p>
          </div>
          <div className="searchBox">
            <Search size={18} />
            <input placeholder="Suche nach Projekt, Aufgabe, Person..." />
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
