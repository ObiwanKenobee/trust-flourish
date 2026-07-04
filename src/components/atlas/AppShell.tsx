import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const NAV = [
  { num: "01", label: "Mission Control", to: "/" },
  { num: "02", label: "Opportunity Hub", to: "/opportunities" },
  { num: "03", label: "Funding Center", to: "/funding" },
  { num: "04", label: "Knowledge Vault", to: "/knowledge" },
  { num: "05", label: "Identity & Trust", to: "/trust" },
] as const;

export function AppShell({
  children,
  coordinates = "01° 17' 32\" S / 36° 49' 19\" E",
}: {
  children: ReactNode;
  coordinates?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div aria-hidden className="paper-texture fixed inset-0 z-0" />

      <nav className="fixed inset-y-0 left-0 z-20 flex w-16 flex-col border-r border-ink/5 bg-paper lg:w-60">
        <Link to="/" className="flex items-center gap-3 border-b border-ink/5 p-6">
          <div className="grid size-8 place-items-center bg-ink">
            <div className="size-4 rotate-45 border border-paper" />
          </div>
          <span className="hidden font-serif text-lg font-semibold tracking-tight lg:block">
            Atlas Sanctum
          </span>
        </Link>

        <div className="flex-1 space-y-1 px-3 py-8">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  "group flex items-center gap-3 rounded-sm px-3 py-2 transition-colors",
                  active
                    ? "bg-ink/5 text-ink"
                    : "text-ink/60 hover:bg-ink/5 hover:text-ink",
                ].join(" ")}
              >
                <span className="w-4 shrink-0 font-mono text-[10px] text-ink/40">
                  {item.num}
                </span>
                <span className="hidden text-sm font-medium lg:block">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-auto hidden border-t border-ink/5 p-6 lg:block">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
            Core Flywheel
          </div>
          <div className="relative mx-auto mt-4 size-32">
            <div className="absolute inset-0 animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-ink/15" />
            <div className="absolute inset-4 rounded-full border border-ink/20" />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center font-mono text-[8px] tracking-wider text-ink/40">
              TRUST · CAPITAL · ACTION
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pl-16 lg:pl-60">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-ink/5 bg-paper/60 px-8 backdrop-blur-md">
          <span className="font-mono text-xs text-ink/40">{coordinates}</span>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 rounded-full bg-ivy/5 px-3 py-1 ring-1 ring-ivy/15">
              <div className="size-1.5 rounded-full bg-ivy" />
              <span className="text-xs font-medium text-ivy">Trust Score: 98.4</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <div className="text-xs font-semibold uppercase tracking-wider">
                  Julian Vane
                </div>
                <div className="font-mono text-[10px] text-ink/40">
                  Verified Architect
                </div>
              </div>
              <div className="grid size-8 place-items-center rounded-full bg-ink/10 ring-1 ring-ink/10 font-serif italic text-ink/70">
                JV
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl space-y-14 p-8 lg:p-12">{children}</div>
      </main>
    </div>
  );
}
