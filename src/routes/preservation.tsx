import { createFileRoute } from "@tanstack/react-router";
import { Camera, ScrollText, Leaf, Users } from "lucide-react";
import { PageIntro, ProcessLine, SectionHeading } from "@/components/site/sections";
import { preservationSteps } from "@/data/site";

export const Route = createFileRoute("/preservation")({
  head: () => ({
    meta: [
      { title: "Preserving Ganpati Heritage — Ganpati Dharohar" },
      {
        name: "description",
        content:
          "Learn how field documentation, digital archiving and public awareness preserve Mumbai's Ganpati heritage.",
      },
      { property: "og:title", content: "Preserving Ganpati Heritage" },
      {
        property: "og:description",
        content:
          "Physical Heritage → Field Documentation → Digital Archive → Public Awareness → Future Preservation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PreservationPage,
});

const themes = [
  {
    icon: Camera,
    title: "Digital Documentation",
    text: "Original field photographs, observations and verified mandal records create a structured archive that can be studied, shared and protected over time.",
  },
  {
    icon: ScrollText,
    title: "Traditional Knowledge",
    text: "Recording local traditions, Aarti practices and unique craftsmanship helps cultural knowledge remain accessible to students and future generations.",
  },
  {
    icon: Leaf,
    title: "Responsible Celebration",
    text: "Understanding community perspectives on Ganpati traditions and responsible celebration supports thoughtful cultural continuity.",
  },
  {
    icon: Users,
    title: "Community Awareness",
    text: "Students, local residents and visitors can engage with documented mandal histories and learn why careful digital preservation matters.",
  },
];

function PreservationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Why preservation matters"
        title="Preserving Ganpati Heritage"
        description="Heritage remains alive when communities carefully observe it, document it and pass it forward to future generations."
      />

      <section className="py-18">
        <div className="archive-container grid gap-6 md:grid-cols-2">
          {themes.map(({ icon: Icon, title, text }) => (
            <article key={title} className="archive-card p-7 md:p-10">
              <Icon className="size-8 text-terracotta" />
              <h2 className="mt-6 font-display text-3xl text-primary">{title}</h2>
              <p className="mt-4 max-w-xl leading-7 text-foreground/85">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/45 py-20">
        <div className="archive-container">
          <SectionHeading
            eyebrow="Preservation flow"
            title="From physical heritage to future preservation"
            description="The Ganpati Dharohar CEP project follows a structured conceptual flow connecting on-ground fieldwork to long-term digital preservation."
          />
          <ProcessLine steps={preservationSteps} />
        </div>
      </section>
    </>
  );
}
