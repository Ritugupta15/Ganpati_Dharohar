import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Map, ClipboardCheck, Globe2, Camera, Megaphone } from "lucide-react";
import { PageIntro, ProcessLine, SectionHeading } from "@/components/site/sections";
import { archiveStats } from "@/data/heritage";
import { aboutProcessSteps } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Project — Ganpati Dharohar" },
      {
        name: "description",
        content:
          "About the purpose, objective, methodology and fieldwork behind the Ganpati Dharohar BSc CS CEP project.",
      },
      { property: "og:title", content: "About Ganpati Dharohar" },
      {
        property: "og:description",
        content:
          "A college Community Engagement Project focused on documenting and digitally preserving Mumbai's Ganpati heritage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const methodology = [
  { icon: BookOpen, label: "Research" },
  { icon: Map, label: "Field Visit" },
  { icon: Camera, label: "Documentation" },
  { icon: ClipboardCheck, label: "Community Survey" },
  { icon: Globe2, label: "Digital Archive" },
  { icon: Megaphone, label: "Awareness" },
];

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="College CEP · BSc CS"
        title="About Ganpati Dharohar"
        description="Ganpati Dharohar is a college Community Engagement Project (CEP) focused on documenting and digitally preserving Mumbai's Ganpati heritage through verified field visits, original photography and community awareness research."
      />

      <section className="py-18">
        <div className="archive-container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Project overview"
              title="A student-built digital record of living heritage"
            />
            <p className="mt-6 leading-8 text-foreground/85">
              Ganpati Dharohar is a college CEP project focused on documenting and digitally
              preserving Mumbai's Ganpati heritage. Temporary pandals, unique idol craftsmanship,
              local mandal histories and community rituals often disappear once the festival
              concludes each year.
            </p>
            <p className="mt-4 leading-8 text-foreground/85">
              By conducting on-site field visits across Mumbai neighbourhoods and gathering
              community perspectives through a structured survey, this archive preserves verified
              cultural records in an accessible digital format for students, young people and the
              wider community.
            </p>

            <dl className="mt-8 space-y-4 border-t border-border pt-6">
              <div>
                <dt className="eyebrow">Project Type</dt>
                <dd className="mt-1 font-medium text-foreground">
                  BSc Computer Science · Community Engagement Project (CEP)
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Core Mission</dt>
                <dd className="mt-1 font-medium text-primary">
                  DOCUMENT → DIGITIZE → SHARE → CREATE AWARENESS → PRESERVE
                </dd>
              </div>
            </dl>
          </div>

          <div className="archive-card p-7 md:p-8">
            <p className="eyebrow">Verified Fieldwork Summary</p>
            <h2 className="mt-2 font-display text-3xl text-primary">
              Project Documentation Totals
            </h2>
            <dl className="mt-6 grid grid-cols-3 gap-3">
              {[
                [String(archiveStats.mandals), "Mandals visited"],
                [String(archiveStats.photographs), "Field photographs"],
                [String(archiveStats.surveyResponses), "Survey responses"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-md border border-border/80 bg-muted/55 p-4 text-center"
                >
                  <dt className="font-display text-4xl font-bold text-primary md:text-5xl">
                    {value}
                  </dt>
                  <dd className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 rounded-md border border-gold/50 bg-secondary/45 p-4 text-sm leading-6 text-foreground/85">
              <strong>Fieldwork coverage:</strong> Field visits conducted between 17 September and
              24 September 2026 across Govandi, Chembur and Sewri, Mumbai, complemented by 30
              verified community survey responses.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/45 py-20">
        <div className="archive-container">
          <SectionHeading
            eyebrow="Archive mission"
            title="How Ganpati Dharohar Works"
            description="Ganpati Dharohar is focused on documenting and digitally preserving Mumbai's Ganpati heritage through five connected stages:"
          />
          <ProcessLine steps={aboutProcessSteps} />
        </div>
      </section>

      <section className="py-20">
        <div className="archive-container">
          <SectionHeading
            eyebrow="CEP Methodology"
            title="From field research to digital archive"
            description="Every entry in this archive is grounded in direct field observation, original photography and verified community survey data."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {methodology.map(({ icon: Icon, label }, i) => (
              <article key={label} className="archive-card p-6">
                <span className="text-xs font-bold text-terracotta">0{i + 1}</span>
                <Icon className="mt-6 size-7 text-primary" />
                <h3 className="mt-4 font-display text-2xl text-primary">{label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
