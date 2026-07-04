import { createFileRoute } from "@tanstack/react-router";
import kenyaPlate from "@/assets/kenya-plate.jpg";
import { SectionHeader } from "@/components/atlas/SectionHeader";

export const Route = createFileRoute("/_layout/")({
  head: () => ({
    meta: [
      { title: "Mission Control · Atlas Sanctum" },
      {
        name: "description",
        content:
          "Your verified mission control: flagship missions, recommended opportunities, and the collective knowledge vault.",
      },
    ],
  }),
  component: Dashboard,
});

const OPPORTUNITIES = [
  {
    tags: ["Scientists", "NGOs"],
    title: "Post-Wildfire Soil Regeneration in the Peloponnese",
    body: "Deploying mycological remediation across 1,200 acres of fire-damaged olive groves.",
    meta: "$450K Funding Gap",
  },
  {
    tags: ["Investors", "Communities"],
    title: "Decentralized Hydroponics Hub: Bogotá District 4",
    body: "A hyper-local food sovereignty network built from repurposed shipping architecture.",
    meta: "$1.2M Pool Open",
  },
  {
    tags: ["Universities", "Governments"],
    title: "Marine Biodiversity Sensor Mesh — Galápagos",
    body: "Real-time acoustic monitoring for illegal fishing and cetacean migration tracking.",
    meta: "Phase 2 Active",
  },
] as const;

const VAULT = [
  {
    tag: "PLAYBOOK #014",
    title: "Community Land Trusts in Urban Environments",
    body: "A legal and structural guide to securing long-term affordability through collective ownership.",
  },
  {
    tag: "RESEARCH #289",
    title: "Agroforestry Yield Analysis: Sub-Saharan Case",
    body: "Meta-analysis of 14 projects comparing polyculture and monoculture economic outcomes.",
  },
  {
    tag: "PROTOCOL #002",
    title: "Trust Verification for Remote Impact Work",
    body: "Standards for geolocated photo evidence and AI-assisted satellite verification workflows.",
  },
  {
    tag: "WISDOM #091",
    title: "Traditional Water Management: Peru Highlands",
    body: "Archiving pre-Inca Amunas technology for modern drought mitigation strategies.",
  },
] as const;

function Dashboard() {
  return (
    <>
      {/* Flagship mission */}
      <section className="relative">
        <div className="pointer-events-none absolute -left-6 top-8 rotate-180 font-mono text-[10px] tracking-[0.3em] text-ink/25 [writing-mode:vertical-rl]">
          PLATE 07-A · KWALE
        </div>

        <div className="flex flex-col overflow-hidden rounded-sm bg-paper ring-1 ring-ink/5 lg:flex-row">
          <div className="space-y-6 p-8 lg:w-2/3 lg:p-12">
            <div className="inline-flex items-center gap-2 border border-seal/25 bg-seal/5 px-2 py-1 font-mono text-[10px] tracking-widest text-seal">
              <span className="size-1 rounded-full bg-seal" />
              VERIFIED ACTIVE MISSION
            </div>

            <h1 className="text-balance font-serif text-4xl italic leading-[1.05] text-ink lg:text-5xl">
              Restoration of 5,000 hectares of high-sequestering mangroves in Kwale,
              Kenya.
            </h1>

            <p className="max-w-[54ch] text-pretty text-lg leading-relaxed text-ink/70">
              A multi-stakeholder initiative coordinating local community knowledge
              with institutional climate capital to secure the coastline and
              regenerate biodiversity.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-ink/5 pt-8 md:grid-cols-4">
              <Metric label="Raised" value="$2.3M" />
              <Metric label="Allocated" value="$1.9M" />
              <Metric label="Impact" value="4,000 HH" />
              <Metric label="Verification" value="Confirmed" tone="ivy" />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button className="bg-ink px-6 py-2.5 text-sm font-medium text-paper ring-1 ring-ink/20 transition-colors hover:bg-ink/90">
                View Full Ledger
              </button>
              <button className="border border-ink/15 bg-transparent px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink/5">
                Join Mission
              </button>
            </div>
          </div>

          <div className="relative min-h-[320px] border-t border-ink/5 lg:min-h-0 lg:w-1/3 lg:border-l lg:border-t-0">
            <img
              src={kenyaPlate}
              alt="Cartographic plate of the Kenyan coastline from Kwale to Lamu"
              width={800}
              height={1216}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper/40" />
            <div className="absolute right-4 top-4 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/60">
              Plate XXVII
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="grid size-16 place-items-center rounded-full border border-seal/50 bg-paper/80 text-center backdrop-blur-sm">
                <div className="font-serif text-[9px] uppercase leading-tight text-seal">
                  Atlas
                  <br />
                  Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="space-y-6">
        <SectionHeader
          title="Recommended Opportunities"
          action={
            <a
              href="/opportunities"
              className="font-mono text-xs uppercase tracking-widest text-ink/40 transition-colors hover:text-ink"
            >
              Browse All →
            </a>
          }
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {OPPORTUNITIES.map((o) => (
            <article
              key={o.title}
              className="group space-y-4 bg-paper p-6 ring-1 ring-ink/5 transition-shadow hover:shadow-xl hover:shadow-ink/5"
            >
              <div className="flex flex-wrap gap-2">
                {o.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-ink/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-ink/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-serif text-xl leading-snug text-ink">{o.title}</h3>
              <p className="text-sm leading-relaxed text-ink/60">{o.body}</p>
              <div className="flex items-center justify-between pt-4">
                <span className="font-mono text-xs text-ink">{o.meta}</span>
                <button className="font-mono text-[10px] font-semibold uppercase tracking-widest text-ink/40 underline-offset-4 hover:text-ink hover:underline">
                  Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Knowledge Vault */}
      <section className="space-y-6 pb-16">
        <SectionHeader variant="mono" title="Knowledge Vault" />

        <div className="scrollbar-hide flex gap-6 overflow-x-auto pb-4">
          {VAULT.map((v) => (
            <article
              key={v.title}
              className="min-w-[280px] max-w-[280px] space-y-3 border border-ink/10 bg-paper p-5"
            >
              <div className="font-mono text-[10px] tracking-widest text-ivy">
                {v.tag}
              </div>
              <h4 className="font-serif text-lg font-medium leading-snug text-ink">
                {v.title}
              </h4>
              <p className="text-xs leading-relaxed text-ink/55">{v.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Metric({
  label,
  value,
  tone = "ink",
}: {
  label: string;
  value: string;
  tone?: "ink" | "ivy";
}) {
  return (
    <div>
      <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-ink/40">
        {label}
      </div>
      <div
        className={
          tone === "ivy"
            ? "font-serif text-xl italic text-ivy"
            : "font-serif text-xl italic text-ink"
        }
      >
        {value}
      </div>
    </div>
  );
}
