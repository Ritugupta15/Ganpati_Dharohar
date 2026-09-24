import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, Database, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site/sections";
import { surveyResults } from "@/data/heritage";

export const Route = createFileRoute("/survey-results")({
  head: () => ({ meta: [
    { title: "Survey Results — Ganpati Dharohar" },
    { name: "description", content: "Community awareness survey findings for the Ganpati Dharohar heritage project." },
    { property: "og:title", content: "Survey Results — Ganpati Dharohar" },
    { property: "og:description", content: "Verified community survey findings will be presented here after responses are collected." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: SurveyResultsPage,
});

function SurveyResultsPage() {
  return <>
    <PageIntro eyebrow="Community findings" title="Survey Results" description="A data-ready space for verified responses, awareness patterns and preservation opinions." />
    <section className="py-16"><div className="archive-container">
      {surveyResults ? <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">{Object.entries(surveyResults).map(([key,value]) => <article key={key} className="archive-card p-6"><strong className="font-display text-4xl text-primary">{value}{key === "totalResponses" ? "" : "%"}</strong><p className="mt-3 text-xs font-bold uppercase tracking-[.1em] text-muted-foreground">{key.replace(/([A-Z])/g," $1")}</p></article>)}</div> : <div className="mx-auto max-w-3xl border border-dashed border-border bg-card px-6 py-16 text-center md:px-12"><span className="mx-auto flex size-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground"><BarChart3 className="size-7" /></span><h2 className="mt-6 font-display text-4xl text-primary">Survey results will appear here after responses are collected.</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">Total responses, awareness, preservation opinions, eco-friendly support and website interest are ready to accept verified values. No sample statistics are displayed.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button variant="outline" disabled><Database />Awaiting verified data</Button></div></div>}
    </div></section>
  </>;
}
