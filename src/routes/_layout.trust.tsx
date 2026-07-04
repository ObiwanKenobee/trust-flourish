import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/atlas/SectionHeader";

export const Route = createFileRoute("/_layout/trust")({
  head: () => ({
    meta: [
      { title: "Identity & Trust · Atlas Sanctum" },
      {
        name: "description",
        content:
          "Verified identity, credentials, and public impact portfolio — the foundational layer for coordination.",
      },
    ],
  }),
  component: ProfileTrust,
});

const CREDENTIALS = [
  { code: "01", label: "Government ID Verified", by: "Kenya IPRS", on: "2024-11-02" },
  { code: "02", label: "Organization Attestation", by: "WWF East Africa", on: "2025-01-14" },
  { code: "03", label: "Peer Endorsement · Coastal Ecology", by: "Dr. A. Mwangi", on: "2025-03-08" },
  { code: "04", label: "Delivery Track Record · 3 Missions", by: "Atlas Ledger", on: "2025-06-21" },
  { code: "05", label: "Financial Custodianship Review", by: "GAAP Auditor #442", on: "2025-08-12" },
];

const CONTRIB = [
  { ref: "KEN-772", role: "Field Lead", outcome: "1,400 ha restored · 4,000 HH" },
  { ref: "KEN-501", role: "Community Steward", outcome: "12 nurseries operational" },
  { ref: "TZ-088", role: "Advisor", outcome: "Policy adoption · Tanga District" },
];

function ProfileTrust() {
  return (
    <>
      <header className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40">
            Section 05 · Identity & Trust
          </div>
          <h1 className="text-balance font-serif text-4xl italic leading-tight text-ink lg:text-5xl">
            Julian Vane
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink/70">
            Verified Architect · Coastal Regeneration · Based in Mombasa, Kenya.
            Coordinating multi-stakeholder missions across the East African seaboard
            since 2019.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Coastal Ecology", "Community Governance", "Grant Custody", "Field Ops"].map(
              (s) => (
                <span
                  key={s}
                  className="border border-ink/10 bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-ink/60"
                >
                  {s}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="bg-paper p-8 ring-1 ring-ink/5">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                Trust Score
              </div>
              <div className="mt-2 font-serif text-6xl italic text-ink">98.4</div>
            </div>
            <div className="grid size-16 place-items-center rounded-full border border-seal/40 text-center">
              <div className="font-serif text-[9px] uppercase leading-tight text-seal">
                Atlas
                <br />
                Verified
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <ScoreBar label="Identity" value={100} />
            <ScoreBar label="Delivery" value={96} />
            <ScoreBar label="Custody" value={99} />
            <ScoreBar label="Endorsements" value={94} />
          </div>
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-2">
        <section className="space-y-6">
          <SectionHeader variant="mono" title="Verified Credentials" />
          <ol className="space-y-3">
            {CREDENTIALS.map((c) => (
              <li
                key={c.code}
                className="flex gap-4 bg-paper p-5 ring-1 ring-ink/5"
              >
                <div className="grid size-10 shrink-0 place-items-center border border-ink/10 font-mono text-xs text-ink/60">
                  {c.code}
                </div>
                <div className="flex-1">
                  <div className="font-serif text-base text-ink">{c.label}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink/40">
                    by {c.by} · {c.on}
                  </div>
                </div>
                <div className="self-center border border-ivy/25 bg-ivy/5 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-ivy">
                  Verified
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-6 pb-16">
          <SectionHeader variant="mono" title="Public Impact Portfolio" />
          <div className="space-y-3">
            {CONTRIB.map((c) => (
              <article
                key={c.ref}
                className="bg-paper p-5 ring-1 ring-ink/5"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                  Ref {c.ref} · {c.role}
                </div>
                <div className="mt-2 font-serif text-lg italic text-ink">
                  {c.outcome}
                </div>
              </article>
            ))}
          </div>

          <div className="border border-dashed border-ink/15 bg-canvas p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
              User Types
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Communities",
                "NGOs",
                "Investors",
                "Governments",
                "Universities",
                "Artists",
                "Philanthropists",
                "Volunteers",
              ].map((t) => (
                <span
                  key={t}
                  className="border border-ink/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-ink/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-ink/40">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="mt-1 h-0.5 overflow-hidden bg-ink/5">
        <div className="h-full bg-ink" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
