import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Brush,
  Users,
  Leaf,
  ArrowRight,
  Landmark,
  Camera,
  ScrollText,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MandalCard, ProcessLine, SectionHeading } from "@/components/site/sections";
import { CommunitySurveyReport } from "@/components/site/survey-report";
import { mandals, archiveStats } from "@/data/heritage";
import { methodSteps, preservationSteps } from "@/data/site";
import heroImage from "@/assets/images/field/f-010-013.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ganpati Dharohar — Digital Heritage Archive" },
      {
        name: "description",
        content:
          "A student-led digital cultural heritage archive documenting Mumbai's Ganpati heritage, community traditions, field photographs and community survey findings.",
      },
      { property: "og:title", content: "Ganpati Dharohar — Digital Heritage Archive" },
      {
        property: "og:description",
        content: "Document, digitize and preserve Mumbai's Ganpati heritage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const preserve = [
  {
    icon: BookOpen,
    title: "Traditions",
    text: "Document traditional Ganpati customs, Aarti rituals and practices observed across local mandals.",
  },
  {
    icon: Brush,
    title: "Art & Idols",
    text: "Highlight idol craftsmanship, unique materials and pandal decorations documented during fieldwork.",
  },
  {
    icon: Users,
    title: "Community",
    text: "Record community participation, devotee gatherings and shared neighbourhood memories.",
  },
  {
    icon: Leaf,
    title: "Cultural Continuity",
    text: "Preserve local mandal histories and visual records in a structured digital archive for future generations.",
  },
];

function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[76vh] overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImage}
          alt="Ganpati idol at Shivdi Cha Raja Ganpati Mandal, Sewri"
          width={1600}
          height={1000}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/48" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-primary via-primary/88 to-transparent lg:w-3/4" />
        <div className="archive-container relative flex min-h-[76vh] items-center py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">
              Preserving Mumbai's Ganpati Heritage
            </p>
            <h1 className="mt-5 font-display text-6xl leading-[0.95] md:text-8xl">
              Ganpati
              <br />
              Dharohar
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-primary-foreground/88 md:text-lg">
              Discover the stories, traditions, art and community heritage behind Mumbai's Ganpati
              celebrations — documented through field visits, original photography and community
              research.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <Link to="/explore">
                  Explore Heritage <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/45 bg-primary/25 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground"
              >
                <Link to="/survey">Community Survey</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-primary-foreground/70">
              Field photograph · Shivdi Cha Raja Ganpati Mandal, Sewri · 18 September 2026
            </p>
          </div>
        </div>
      </section>

      {/* ── About Overview ── */}
      <section className="py-20">
        <div className="archive-container grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="About the project" title="About Ganpati Dharohar" />
          <p className="leading-8 text-foreground/85">
            Ganpati Dharohar is a college Community Engagement Project (CEP) that documents Mumbai's
            Ganpati mandals through field visits, photographs, observations and community survey
            research, presenting them as an accessible digital cultural heritage archive.{" "}
            <Link
              to="/about"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Read more →
            </Link>
          </p>
        </div>
      </section>

      {/* ── What We Preserve ── */}
      <section className="pattern-line py-20">
        <div className="archive-container">
          <SectionHeading
            eyebrow="Living heritage"
            title="What We Preserve"
            description="A cultural archive is more than a collection of images. It records the knowledge, creativity and shared community spirit behind the celebration."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {preserve.map(({ icon: Icon, title, text }) => (
              <article key={title} className="archive-card p-6">
                <Icon className="size-7 text-terracotta" />
                <h3 className="mt-8 font-display text-2xl text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-foreground/80">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore Heritage Entries ── */}
      <section className="border-y border-border bg-muted/45 py-20">
        <div className="archive-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Archive entries"
              title="Explore Mumbai's Ganpati Heritage"
              description="Five mandals documented through field visits across Govandi, Chembur and Sewri."
            />
            <Button asChild variant="outline" className="border-gold/60">
              <Link to="/explore">
                View all entries <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mandals.map((mandal) => (
              <MandalCard key={mandal.id} mandal={mandal} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Heritage Documentation ── */}
      <section className="py-20">
        <div className="archive-container">
          <SectionHeading
            eyebrow="Digital Archive"
            title="Our Heritage Documentation"
            description="This project documents Ganpati mandals through field visits, original photographs, observations and community participation, creating a structured digital record of Mumbai's living Ganpati heritage."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Landmark,
                title: "Mandals Documented",
                text: "Verified field documentation of Ganpati mandals visited across Govandi, Chembur and Sewri during the CEP fieldwork.",
                to: "/explore" as const,
              },
              {
                icon: Camera,
                title: "Field Photographs",
                text: "Original photographs collected during field visits, including Ganpati idols, pandals, decorations and community rituals.",
                to: "/gallery" as const,
              },
              {
                icon: ClipboardList,
                title: "Community Survey",
                text: "Aggregated insights from 30 respondents on participation, mandal visits and interests in preserving Ganpati heritage.",
                to: "/survey" as const,
              },
            ].map(({ icon: Icon, title, text, to }) => (
              <Link
                key={title}
                to={to}
                className="archive-card block p-6 transition-transform hover:-translate-y-1"
              >
                <Icon className="size-7 text-terracotta" />
                <h3 className="mt-8 font-display text-2xl text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-foreground/80">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Method ── */}
      <section className="border-t border-border bg-muted/35 py-20">
        <div className="archive-container">
          <SectionHeading
            eyebrow="Project method"
            title="From field research to public awareness"
          />
          <ProcessLine steps={methodSteps} />
        </div>
      </section>

      {/* ── Our Field Documentation Impact ── */}
      <section className="bg-surface-deep py-20 text-primary-foreground">
        <div className="archive-container">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">
              Project documentation
            </p>
            <h2 className="mt-3 font-display text-3xl text-primary-foreground md:text-5xl">
              Our Field Documentation
            </h2>
            <p className="mt-4 leading-7 text-primary-foreground/85">
              A verified record of the Ganpati mandals, field photographs and community survey
              responses documented through our CEP fieldwork.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px bg-primary-foreground/15 lg:grid-cols-4">
            {(
              [
                ["Mandals Documented", archiveStats.mandals],
                ["Field Photographs", archiveStats.photographs],
                ["Areas of Mumbai", archiveStats.areas],
                ["Survey Responses", archiveStats.surveyResponses],
              ] as const
            ).map(([label, value]) => (
              <div key={label} className="bg-surface-deep p-6 md:p-8">
                <strong className="font-display text-5xl text-gold-light">{value}</strong>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground/85">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Complete Community Survey Report Section ── */}
      <CommunitySurveyReport />

      {/* ── Preservation & About CTA ── */}
      <section className="border-t border-border bg-muted/45 py-20">
        <div className="archive-container grid gap-6 lg:grid-cols-2">
          <div className="archive-card p-7 md:p-10">
            <Leaf className="size-8 text-terracotta" />
            <h2 className="mt-6 font-display text-3xl text-primary md:text-4xl">
              Preservation & Awareness
            </h2>
            <p className="mt-4 leading-7 text-foreground/85">{preservationSteps.join(" → ")}</p>
            <Button asChild variant="outline" className="mt-6 border-gold/60">
              <Link to="/preservation">
                How we preserve heritage <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="archive-card p-7 md:p-10">
            <ScrollText className="size-8 text-terracotta" />
            <h2 className="mt-6 font-display text-3xl text-primary md:text-4xl">
              About the CEP Project
            </h2>
            <p className="mt-4 leading-7 text-foreground/85">
              Document → Digitize → Share → Create Awareness → Preserve
            </p>
            <Button asChild variant="outline" className="mt-6 border-gold/60">
              <Link to="/about">
                About Ganpati Dharohar <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
