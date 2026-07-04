import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/atlas/SectionHeader";

export const Route = createFileRoute("/_layout/funding")({
  head: () => ({
    meta: [
      { title: "Funding Center · Atlas Sanctum" },
      {
        name: "description",
        content:
          "Transparent capital flows: grants, community pools, and verified impact allocation across the Atlas.",
      },
    ],
  }),
  component: FundingCenter,
});

const TREASURIES = [
  {
    ref: "KEN-772",
    title: "Kwale Mangrove Treasury",
    raised: 2_300_000,
    allocated: 1_900_000,
    pct: 82,
    verification: "Confirmed",
    outcome: "4,000 households · 1,400 ha",
  },
  {
    ref: "COL-118",
    title: "Bogotá Hydroponics Pool",
    raised: 640_000,
    allocated: 210_000,
    pct: 33,
    verification: "In Review",
    outcome: "12 sites operational",
  },
  {
    ref: "IND-224",
    title: "Bihar Groundwater Grant",
    raised: 180_000,
    allocated: 90_000,
    pct: 23,
    verification: "Confirmed",
    outcome: "42 stepwells restored",
  },
];

const LEDGER = [
  { t: "2m", event: "Disbursement · $48,200 to Kwale Community Nursery", ref: "KEN-772" },
  { t: "14m", event: "Consensus reached · Q3 Impact Report signed", ref: "KEN-772" },
  { t: "1h", event: "Anomaly scan · No discrepancies in allocation trail", ref: "COL-118" },
  { t: "3h", event: "Grant awarded · $180K Bihar Groundwater Program", ref: "IND-224" },
  { t: "1d", event: "Pool opened · $1.2M community investment round", ref: "COL-118" },
];

const fmt = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : `$${(n / 1_000).toFixed(0)}K`;

function FundingCenter() {
  const raised = TREASURIES.reduce((s, t) => s + t.raised, 0);
  const allocated = TREASURIES.reduce((s, t) => s + t.allocated, 0);

  return (
    <>
      <header className="space-y-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40">
          Section 03 · Funding Center
        </div>
        <h1 className="max-w-3xl text-balance font-serif text-4xl italic leading-tight text-ink lg:text-5xl">
          Regenerative capital, transparently allocated.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
          Every dollar traceable from donor to outcome. Grant matching, community
          pools, and verified disbursements — one ledger, one truth.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-px bg-ink/10 ring-1 ring-ink/10 md:grid-cols-4">
        <SummaryTile label="Total Raised" value={fmt(raised)} />
        <SummaryTile label="Allocated" value={fmt(allocated)} />
        <SummaryTile label="Active Treasuries" value={String(TREASURIES.length)} />
        <SummaryTile label="Flourishing / $" value="1.42×" tone="ivy" />
      </section>

      <div className="grid gap-10 lg:grid-cols-3">
        <section className="space-y-6 lg:col-span-2">
          <SectionHeader variant="mono" title="Project Treasuries" />

          <div className="space-y-3">
            {TREASURIES.map((t) => (
              <article
                key={t.ref}
                className="bg-paper p-6 ring-1 ring-ink/5 hover:shadow-lg hover:shadow-ink/5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                      Ref {t.ref}
                    </div>
                    <h3 className="mt-1 font-serif text-xl italic text-ink">
                      {t.title}
                    </h3>
                  </div>
                  <div
                    className={
                      t.verification === "Confirmed"
                        ? "border border-ivy/25 bg-ivy/5 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-ivy"
                        : "border border-seal/25 bg-seal/5 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-seal"
                    }
                  >
                    {t.verification}
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-ink/40">
                    <span>Allocation Progress</span>
                    <span>{t.pct}%</span>
                  </div>
                  <div className="relative h-1 overflow-hidden bg-ink/5">
                    <div
                      className="absolute inset-y-0 left-0 bg-ivy"
                      style={{ width: `${t.pct}%` }}
                    />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-6 border-t border-ink/5 pt-6">
                  <Cell label="Raised" value={fmt(t.raised)} />
                  <Cell label="Allocated" value={fmt(t.allocated)} />
                  <Cell label="Outcome" value={t.outcome} small />
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <SectionHeader variant="mono" title="Verification Ledger" />
          <div className="bg-paper p-6 ring-1 ring-ink/5">
            <ol className="space-y-6">
              {LEDGER.map((l, i) => (
                <li
                  key={i}
                  className="relative border-l border-ivy/25 pl-5"
                >
                  <div className="absolute -left-[5px] top-1 size-2 rounded-full bg-ivy" />
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                    {l.t} ago · {l.ref}
                  </div>
                  <p className="mt-1 text-sm leading-snug text-ink">{l.event}</p>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </>
  );
}

function SummaryTile({
  label,
  value,
  tone = "ink",
}: {
  label: string;
  value: string;
  tone?: "ink" | "ivy";
}) {
  return (
    <div className="bg-paper p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
        {label}
      </div>
      <div
        className={
          tone === "ivy"
            ? "mt-3 font-serif text-3xl italic text-ivy"
            : "mt-3 font-serif text-3xl italic text-ink"
        }
      >
        {value}
      </div>
    </div>
  );
}

function Cell({
  label,
  value,
  small = false,
}: {
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
        {label}
      </div>
      <div
        className={
          small
            ? "mt-1 font-sans text-sm text-ink"
            : "mt-1 font-serif text-lg italic text-ink"
        }
      >
        {value}
      </div>
    </div>
  );
}
