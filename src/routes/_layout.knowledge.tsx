import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/atlas/SectionHeader";

export const Route = createFileRoute("/_layout/knowledge")({
  head: () => ({
    meta: [
      { title: "Knowledge Vault · Atlas Sanctum" },
      {
        name: "description",
        content:
          "Playbooks, protocols, research, and local wisdom — a public good so humanity never solves the same problem twice.",
      },
    ],
  }),
  component: KnowledgeVault,
});

const CATEGORIES = [
  { code: "PB", label: "Playbooks", count: 214 },
  { code: "RS", label: "Research", count: 1_882 },
  { code: "PR", label: "Protocols", count: 47 },
  { code: "WS", label: "Local Wisdom", count: 638 },
] as const;

const ENTRIES = [
  {
    tag: "PLAYBOOK #014",
    title: "Community Land Trusts in Urban Environments",
    body: "Legal and structural blueprint for securing long-term affordability through collective ownership models.",
    origin: "Applied · India Cooperative #12",
  },
  {
    tag: "RESEARCH #289",
    title: "Agroforestry Yield Analysis: Sub-Saharan Case",
    body: "Meta-analysis of 14 projects comparing polyculture and monoculture economic outcomes over 8 years.",
    origin: "Peer-reviewed · Univ. of Nairobi",
  },
  {
    tag: "PROTOCOL #002",
    title: "Trust Verification for Remote Impact Work",
    body: "Standards for geolocated photo evidence, community endorsements, and AI-assisted satellite verification.",
    origin: "Atlas Foundation · v2.1",
  },
  {
    tag: "WISDOM #091",
    title: "Traditional Water Management: Peru Highlands",
    body: "Archiving pre-Inca Amunas infiltration technology for modern drought mitigation strategies.",
    origin: "Oral history · Huamantanga",
  },
  {
    tag: "PLAYBOOK #037",
    title: "Saline-Resistant Mangrove Seeding",
    body: "Field-tested seeding density, nursery timing, and community stewardship handoffs across coastal biomes.",
    origin: "Kwale Community Nursery",
  },
  {
    tag: "RESEARCH #402",
    title: "Mycelial Soil Remediation of Industrial Runoff",
    body: "Open-source protocols for fungal decontamination of agricultural zones adjacent to mining basins.",
    origin: "Open Science · Cerrado Lab",
  },
] as const;

function KnowledgeVault() {
  return (
    <>
      <header className="space-y-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40">
          Section 04 · Knowledge Vault
        </div>
        <h1 className="max-w-3xl text-balance font-serif text-4xl italic leading-tight text-ink lg:text-5xl">
          So humanity never solves the same problem twice.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
          A public archive of playbooks, protocols, research, and local wisdom. A
          county in Kenya should learn instantly from a village in Peru.
        </p>
        <div className="flex gap-2 pt-2">
          <div className="flex flex-1 items-center gap-3 border border-ink/10 bg-paper px-4 py-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
              Ask
            </span>
            <input
              placeholder="How do I restore mangrove coastline with a $500K budget?"
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
            />
            <button className="bg-ink px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-paper hover:bg-ink/90">
              Query
            </button>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-2 gap-px bg-ink/10 ring-1 ring-ink/10 md:grid-cols-4">
        {CATEGORIES.map((c) => (
          <div key={c.code} className="bg-paper p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
              {c.code}
            </div>
            <div className="mt-3 font-serif text-3xl italic text-ink">
              {c.count.toLocaleString()}
            </div>
            <div className="mt-1 text-sm text-ink/65">{c.label}</div>
          </div>
        ))}
      </section>

      <section className="space-y-6 pb-16">
        <SectionHeader variant="mono" title="Recently Added" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ENTRIES.map((e) => (
            <article
              key={e.title}
              className="group space-y-3 border border-ink/10 bg-paper p-5 transition-colors hover:border-ivy/40"
            >
              <div className="flex items-start justify-between">
                <div className="font-mono text-[10px] tracking-widest text-ivy">
                  {e.tag}
                </div>
                <div className="size-4 rounded-full border border-ink/20 transition-colors group-hover:border-ivy group-hover:bg-ivy" />
              </div>
              <h4 className="font-serif text-lg font-medium leading-snug text-ink">
                {e.title}
              </h4>
              <p className="text-xs leading-relaxed text-ink/60">{e.body}</p>
              <div className="border-t border-ink/5 pt-3 font-mono text-[10px] uppercase tracking-widest text-ink/40">
                {e.origin}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
