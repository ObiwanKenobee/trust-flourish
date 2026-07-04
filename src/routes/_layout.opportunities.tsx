import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/atlas/SectionHeader";

export const Route = createFileRoute("/_layout/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunity Hub · Atlas Sanctum" },
      {
        name: "description",
        content:
          "A marketplace for challenges, projects, and missions — where communities, capital, and expertise converge.",
      },
    ],
  }),
  component: OpportunityHub,
});

const MISSIONS = [
  {
    region: "East Africa",
    ref: "KEN-772",
    tags: ["Scientists", "NGOs", "Communities"],
    title: "Coastal Mangrove Restoration — Kwale, Kenya",
    body: "5,000 hectares of high-sequestering mangroves, coordinated with local fisheries and county government.",
    stage: "Funded · Execution",
    ask: "$400K remaining",
  },
  {
    region: "South America",
    ref: "COL-118",
    tags: ["Investors", "Communities", "Governments"],
    title: "Decentralized Hydroponics Hub — Bogotá D.4",
    body: "Food sovereignty network built from repurposed shipping architecture across three neighborhoods.",
    stage: "Open · Capital Round",
    ask: "$1.2M pool open",
  },
  {
    region: "Mediterranean",
    ref: "GRC-041",
    tags: ["Scientists", "NGOs", "Volunteers"],
    title: "Post-Wildfire Soil Regeneration, Peloponnese",
    body: "Mycological remediation across 1,200 acres of fire-damaged olive groves and adjacent watersheds.",
    stage: "Open · Formation",
    ask: "$450K funding gap",
  },
  {
    region: "Pacific",
    ref: "ECU-006",
    tags: ["Universities", "Governments"],
    title: "Marine Biodiversity Sensor Mesh — Galápagos",
    body: "Acoustic monitoring for illegal fishing and cetacean migration; open-data telemetry.",
    stage: "Funded · Phase 2",
    ask: "Partners sought",
  },
  {
    region: "South Asia",
    ref: "IND-224",
    tags: ["NGOs", "Philanthropists"],
    title: "Bihar Groundwater & Traditional Wells Program",
    body: "Restoring 340 stepwells and building community-led aquifer monitoring in six districts.",
    stage: "Open · Diligence",
    ask: "$780K target",
  },
  {
    region: "Arctic",
    ref: "NOR-013",
    tags: ["Universities", "Governments", "Communities"],
    title: "Sámi Reindeer Corridor Preservation",
    body: "Landscape-scale mapping and legal advocacy for migration corridors under industrial pressure.",
    stage: "Open · Capital Round",
    ask: "$620K target",
  },
] as const;

function OpportunityHub() {
  return (
    <>
      <header className="space-y-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40">
          Section 02 · Opportunity Hub
        </div>
        <h1 className="max-w-3xl text-balance font-serif text-4xl italic leading-tight text-ink lg:text-5xl">
          A marketplace for problems worth solving.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
          Post challenges. Discover missions. Form multi-stakeholder teams around
          verified opportunities that can absorb capital, expertise, and community
          effort.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button className="bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-ink/90">
            Post a Challenge
          </button>
          <button className="border border-ink/15 bg-transparent px-5 py-2.5 text-sm font-medium text-ink hover:bg-ink/5">
            Submit a Proposal
          </button>
        </div>
      </header>

      <section className="space-y-6">
        <SectionHeader
          variant="mono"
          title="Active Missions · 6 of 128"
          action={
            <div className="flex gap-2 font-mono text-[10px] uppercase tracking-widest text-ink/40">
              <button className="border border-ink/15 bg-paper px-2 py-1 text-ink">
                All
              </button>
              <button className="px-2 py-1 hover:text-ink">Open</button>
              <button className="px-2 py-1 hover:text-ink">Funded</button>
            </div>
          }
        />

        <div className="grid gap-px bg-ink/10 ring-1 ring-ink/10 md:grid-cols-2">
          {MISSIONS.map((m) => (
            <article
              key={m.ref}
              className="group space-y-4 bg-paper p-6 transition-colors hover:bg-canvas"
            >
              <div className="flex items-start justify-between">
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                  {m.region}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                  Ref {m.ref}
                </div>
              </div>
              <h3 className="font-serif text-xl leading-snug text-ink">{m.title}</h3>
              <p className="text-sm leading-relaxed text-ink/65">{m.body}</p>
              <div className="flex flex-wrap gap-2">
                {m.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-ink/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-ink/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-ink/5 pt-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                    {m.stage}
                  </div>
                  <div className="mt-1 font-mono text-xs text-ink">{m.ask}</div>
                </div>
                <button className="font-mono text-[10px] font-semibold uppercase tracking-widest text-ink/50 underline-offset-4 hover:text-ink hover:underline">
                  Enter Mission →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
